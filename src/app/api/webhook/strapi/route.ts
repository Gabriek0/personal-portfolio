import { revalidateTag } from "next/cache";
import { NextResponse } from 'next/server';
import crypto from "node:crypto";

export async function POST(request: Request) {
  let receivedToken = "";

  const authorization = request.headers.get("Authorization")

  if (authorization) { receivedToken = authorization.replace("Bearer ", "").trim() };

  const expectedToken = process.env.STRAPI_WEBHOOK_TOKEN;

  if (!expectedToken || expectedToken.length === 0) return new Response("Webhook not configured", { status: 500 });

  const isSameTokenLength = receivedToken.length === expectedToken.length;

  if (!isSameTokenLength) return new Response("Invalid token", { status: 401 });

  const isTokenEqual = crypto.timingSafeEqual(Buffer.from(receivedToken, 'utf8'), Buffer.from(expectedToken, 'utf8'));

  const isValid = isSameTokenLength && isTokenEqual;

  if (!isValid) return new Response("Invalid token", { status: 401 });

  revalidateTag("portfolio");

  return NextResponse.json({ message: "Cache data revalidated" }, { status: 200 });
}

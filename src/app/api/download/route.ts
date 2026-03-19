import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { nextUrl } = request;

  const searchParams = nextUrl.searchParams;

  const lang = searchParams.get('lang') as string;
  const mediaUrl = searchParams.get('url') as string;

  if (!mediaUrl) {
    return NextResponse.json(
      { message: 'The url parameter is missing' },
      { status: 400 },
    );
  }

  try {
    const { hostname } = new URL(mediaUrl);

    const allowedHostname = process.env.STRAPI_API_MEDIA_HOSTNAME;

    if (hostname !== allowedHostname) {
      return NextResponse.json(
        { message: 'The hostname is not allowed' },
        { status: 400 },
      );
    }

    const response = await fetch(mediaUrl);
    const blob = await response.blob();

    return new NextResponse(blob, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename="resume-${lang}.pdf"`,
        'content-type':
          response.headers.get('content-type') || 'application/pdf',
      },
    });
  } catch (error) {
    console.error('[LOG] Error in download route: ', error);

    return NextResponse.json(
      {
        message: 'An unexpected error has occurred',
      },
      { status: 500 },
    );
  }
}

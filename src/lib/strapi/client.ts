import { strapi } from '@strapi/client';

export const client = strapi({
  baseURL: process.env.STRAPI_API_URL,
  auth: process.env.STRAPI_API_TOKEN,
});

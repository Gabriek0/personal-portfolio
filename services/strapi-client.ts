import { strapi } from '@strapi/client';

const client = strapi({
  baseURL: process.env.STRAPI_API_URL,
  auth: process.env.STRAPI_API_TOKEN,
});

export { client };

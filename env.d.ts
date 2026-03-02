declare namespace NodeJS {
  interface ProcessEnv {
    STRAPI_API_URL: string;
    STRAPI_API_TOKEN: string;
    STRAPI_WEBHOOK_TOKEN: string;
    NEXT_PUBLIC_STRAPI_URL: string;
    STRAPI_API_MEDIA_HOSTNAME: string;
  }
}

const getMediaUrl = (path: string) =>
  `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`;

export { getMediaUrl };

export const getDownloadUrl = (url: string | null, lang: string): string => {
  if (!url) return '';

  let baseUrl = '';

  if (!url.includes(process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL)) {
    baseUrl = process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL + `${url}`;
  }

  const encodedURI = encodeURIComponent(
    'https://outgoing-ball-59aa87c479.media.strapiapp.com' + url,
  );

  return `/api/download?url=${encodedURI}&lang=${lang.toLowerCase()}`;
};

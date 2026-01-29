const getMediaUrl = (path: string | null | undefined) => {
  if (!path) return '';


  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || '';

  return `${baseUrl}${path}`;
};

export { getMediaUrl };

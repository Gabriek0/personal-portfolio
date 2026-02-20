import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMediaUrl(path: string | null | undefined) {
  if (!path) return '';

  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || '';

  return `${baseUrl}${path}`;
}

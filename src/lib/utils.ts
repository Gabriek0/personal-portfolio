import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface FetchWithRetryProps {
  input: string | URL | Request;
  init?: RequestInit;

  delay?: number;
  maxAttempts?: number;
}

export const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

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

export async function fetchWithRetry({
  input,
  init,
  delay = 300,
  maxAttempts = 3,
}: FetchWithRetryProps): Promise<Response> {
  if (maxAttempts < 1) throw new Error('The maxAttempts value is invalid!');

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(input, {
        ...init,
        signal: AbortSignal.timeout(attempt * 100 * 100), // attempt * 10s
      });

      if (response.ok) return response;

      if (![502, 503, 504].includes(response.status)) return response;

      if (attempt === maxAttempts) return response;

      await sleep(delay);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw error;
      }

      if (attempt === maxAttempts) {
        console.error('Maximum number of attempts exceeded');
        throw error;
      }

      await sleep(delay);
    }
  }

  throw new Error('Maximum number of attempts exceeded');
}

import { sleep } from "../utils";

type FetchWithRetryOptions = {
  input: string | URL | Request;
  init?: RequestInit;
  maxAttempts?: number;
  delayMs?: number;
  timeoutMs?: number;
};

const RETRYABLE_STATUS = [502, 503, 504];


export async function fetchStrapiWithRetry({
  input,
  init,
  maxAttempts = 5,
  delayMs = 4000, // 4s
  timeoutMs = 90000, // 90s
}: FetchWithRetryOptions): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(input, { ...init, signal: init?.signal ?? AbortSignal.timeout(timeoutMs) });

      if (response.ok) return response;

      const shouldRetry = RETRYABLE_STATUS.includes(response.status) && attempt < maxAttempts;

      if (!shouldRetry) return response;

      await sleep(delayMs);
    } catch (error) {
      lastError = error;
      if (attempt === maxAttempts) throw error;
      await sleep(delayMs);
    }
  }

  throw lastError instanceof Error ? lastError : new Error('The fetchStrapiWithRetry method failed');
}

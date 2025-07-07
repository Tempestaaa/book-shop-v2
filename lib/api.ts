// Custom fetch options
interface FetchOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

// Custom response
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  error?: string;
  status: number;
}

// Custom error
class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: Response
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// Helper function
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Custom fetch
export async function customFetch<T = any>(
  url: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const {
    timeout = 10000,
    retries = 3,
    retryDelay = 1000,
    headers = {},
    ...fetchOptions
  } = options;

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  let lastError: Error = new Error("Request failed");

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers: defaultHeaders,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new ApiError(
          `HTTP ${response.status}: ${errorText || response.statusText}`,
          response.status,
          response
        );
      }

      const data = await response.json();

      return {
        data,
        success: true,
        status: response.status,
      };
    } catch (error: any) {
      lastError = error as Error;

      if (
        error instanceof ApiError &&
        error.status >= 400 &&
        error.status < 500
      ) {
        break;
      }

      if (error.name === "AbortError") {
        break;
      }

      if (attempt < retries) {
        await wait(retryDelay * Math.pow(2, attempt));
      }
    }
  }

  clearTimeout(timeoutId);

  return {
    data: null as T,
    success: false,
    error: lastError.message,
    status: lastError instanceof ApiError ? lastError.status : 0,
  };
}

// Methods for quick use
export const api = {
  // GET
  get: <T = any>(url: string, options?: FetchOptions) =>
    customFetch<T>(url, { ...options, method: "GET" }),

  // POST
  post: <T = any>(url: string, data?: any, options?: FetchOptions) =>
    customFetch<T>(url, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    }),

  // PUT
  put: <T = any>(url: string, data?: any, options?: FetchOptions) =>
    customFetch<T>(url, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    }),

  // PATCH
  patch: <T = any>(url: string, data?: any, options?: FetchOptions) =>
    customFetch<T>(url, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    }),

  // DELETE
  delete: <T = any>(url: string, options?: FetchOptions) =>
    customFetch<T>(url, { ...options, method: "DELETE" }),
};

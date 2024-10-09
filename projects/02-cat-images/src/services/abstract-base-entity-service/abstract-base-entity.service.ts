export const getAll = async<T>(url: string, endpoint?: string): Promise<BaseEntityResponse<T>> => {
  try {
    const fullUrl = getUrlSegments(url, endpoint);
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    if (!json['data']) {
      return { data: json, error: false };
    }

    return json as BaseEntityResponse<T>;

  } catch (error) {
    console.error(error);

    return {
      data: null as unknown as T,
      error: true,
      errorType: (error as Error).message || "Unknown error",
      sysDateTimeUTC: Date.now(),
    };
  }
}

const getUrlSegments = (url: string, endpoint?: string): string => {
  const segments = [url];
  if (endpoint) {
    segments.push(endpoint);
  }
  return segments.join('/');
}

interface BaseEntityResponse<T> {
  data: T;
  error?: boolean;
  errorType?: string;
  sysDateTimeUTC?: number;
}
export class AbstractBaseEntityService {
  constructor(private url: string) {}

  protected async getAll<T>(): Promise<BaseEntityResponse<T>> {
    try {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
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
}

export interface BaseEntityResponse<T> {
  data: T;
  error: boolean;
  errorType: string;
  sysDateTimeUTC: number;
}

export const isErrorResponse = (data: any): data is { code: number; message: string; data: null } =>
    'code' in data
  
  export const getApiBaseUrl = () =>
    import.meta.env.DEV ? import.meta.env.VITE_API_PROXY_TARGET : import.meta.env.VITE_API_BASE_URL
  
import { ApiResponse } from "apisauce";
import { useState } from "react";

export function useApi(
  apiFunction: (...args: any[]) => Promise<ApiResponse<any, any>>
): {
  data: any;
  error: boolean;
  loading: boolean;
  request: (...args: any[]) => Promise<ApiResponse<any, any>>;
} {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (...args: []): Promise<ApiResponse<any, any>> => {
    setLoading(true);
    const response: ApiResponse<any> = await apiFunction(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return {
    data,
    error,
    loading,
    request,
  };
}

import { ApiResponse } from "apisauce";
import apiClient from "./client";

export interface IParams {
  limit: number;
  page: number;
  order: "ASC" | "DESC";
}

export function getPetListings(params: IParams): Promise<ApiResponse<any>> {
  return apiClient.get("/search", params);
}

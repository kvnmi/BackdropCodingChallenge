import { ApiResponse } from "apisauce";
import apiClient from "./client";

export interface IGetListings {
  limit: number;
  page: number;
  order: "ASC" | "DESC";
}

// Gets a list of dog items from the api
export function getPetListings(
  params: IGetListings
): Promise<ApiResponse<any>> {
  return apiClient.get("/images/search", params);
}

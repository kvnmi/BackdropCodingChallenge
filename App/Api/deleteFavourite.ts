import { ApiResponse } from "apisauce";
import apiClient from "./client";

// Deletes a dog item from favourites
export async function deleteFavourite(
  params: string
): Promise<ApiResponse<any, any>> {
  return apiClient.delete(`/favourites/` + params);
}

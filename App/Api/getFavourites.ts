import { ApiResponse } from "apisauce";
import apiClient from "./client";

export interface IGetFavourite {
  limit: number;
  page: number;
}

export async function getFavourites(
  param: IGetFavourite
): Promise<ApiResponse<any>> {
  return apiClient.get("favourites", param);
}

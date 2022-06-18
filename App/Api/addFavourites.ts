import { ApiResponse } from "apisauce";
import apiClient from "./client";

export interface IFavParam {
  image_id: string;
  sub_id: string;
}

// Adds a new favourite dod item
export function addFavourite(param: IFavParam): Promise<ApiResponse<any>> {
  return apiClient.post("/favourites", param);
}

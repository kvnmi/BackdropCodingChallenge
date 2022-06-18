import { create } from "apisauce";
import { apiKey } from "../../Key/key";

const apiClient = create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    "x-api-key": apiKey, // Add your apiKey
  },
});

export default apiClient;

import { FoodPackType } from "./foodpack";

export type RestaurantType = {
  id: string;
  name: string;
  phone: string;
  location: string;
  createdAt: string;
  updateAt: string;
  foodPacks: FoodPackType[];
};

import { FoodPackWithMealType } from "./meal";

export type FoodPackType = {
  id: string;
  title: string;
  description: string | null;
  restaurantId: string;
  createdAt: string;
  updateAt: string;
  foodPackWithMeal: FoodPackWithMealType[];
};

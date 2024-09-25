export type FoodPackWithMealType = {
  meal: MealType[];
};

export type MealType = {
  id: string;
  title: string;
  price: number;
  restaurantId: string;
};

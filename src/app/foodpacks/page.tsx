import { FoodPackType } from "@/types/foodpack"

export const revalidate = 120
export default async  function FoodPacks() {
  const data = await fetch('http://localhost:3001/foodpacks',)
  const foodpacks = await data.json()
  console.log(foodpacks)
  return (
    <ul>
      {foodpacks?.map((restaurant: FoodPackType) => (
        <li key={restaurant.id}>{restaurant.title}</li>
      ))}
    </ul>
  );
}

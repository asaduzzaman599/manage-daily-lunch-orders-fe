import { RestaurantType } from "@/types/restaurant"

export const revalidate = 120
export default async  function Restaurants() {
  const data = await fetch('http://localhost:3001/restaurant',)
  const restaurants = await data.json()
  console.log(restaurants)
  return (
    <ul>
      {restaurants?.map((restaurant: RestaurantType) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}

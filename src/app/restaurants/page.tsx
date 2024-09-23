import CommonCard from "@/components/card/CommonCard"
import { RestaurantType } from "@/types/restaurant"

export const revalidate = 10
export default async  function Restaurants() {
  const res = await fetch('http://localhost:3001/restaurant',)
  const data = await res.json()
  
  const restaurants = data?.map(i=>({
    name: i.name,
    subtext: i.phone,
    options: i.location,
    imageSrc: 'https://img.freepik.com/premium-vector/food-logo-design-concept-restaurant-logo-design_9850-5111.jpg',
  }))
  return (
    <div className="w-10/12 mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {restaurants?.map((restaurant: RestaurantType) => (
        <CommonCard item={restaurant} key={restaurant.id}></CommonCard>
      ))}</div>
  );
}

import CommonCard from "@/components/card/CommonCard"
import { FoodPackType } from "@/types/foodpack"

export const revalidate = 120
export default async  function FoodPacks() {
  const res = await fetch('http://localhost:3001/foodpacks',)
  const data = await res.json()
  console.log(data)
  
  const foodpacks = data?.map(i=>({
    name: i.title,
    subtext: i.phone,
    description: i.description,
    option: i.foodPackWithMeal?.length,
    imageSrc: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg'
  }))
  return (
    <div className="w-10/12 mx-auto  mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {foodpacks?.map((foodpack: FoodPackType) => (
        <CommonCard item={foodpack} key={foodpack.id}></CommonCard>
      ))}</div>
  );
}

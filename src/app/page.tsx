import Image from "next/image"

export default async function Home() {
  const res = await fetch('http://localhost:3001/foodpacks/top-voted')
  const data = await res.json()
  if(!data?.foodPack) return<div className="w-full h-screen flex justify-center items-center">No Top Voted Item Found</div>
  const {foodPack} = data
  return (<div className="flex justify-center items-center flex-col">
    <p className="text-xl font-bold my-16">Top Voted Food packed for Today</p>
<div className="grid grid-cols-3 justify-center items-center mt-4"><div
    className="col-start-2 group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white "
  >
    <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96 mx-auto">
      <Image
        alt={data.imageAlt}
        src='https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg'
        width={500}
        height={500}
        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
      />
    </div>
    <div className="flex flex-1 flex-col space-y-2 p-4">
      <h3 className="text-sm font-medium text-gray-900">
        <a href={data.href}>
          <span aria-hidden="true" className="absolute inset-0" />
          {foodPack.title}
        </a>
      </h3>
      {data.description && <p className="text-sm text-gray-500">{foodPack.description}</p>}
      <div className="flex flex-1 flex-col justify-end">
        <p className="text-sm italic text-gray-500 font-bold">Restaurant</p>
        <p className="text-sm italic text-gray-500">{foodPack.restaurant?.name}</p>
        <p className="text-sm italic text-gray-500 font-bold">Vote Count</p>
        <p className="text-base font-medium text-gray-900">{data.voteCount}</p>
      </div>
    </div>
  </div></div>
  </div>  );
}

'use client'
import CommonCard from "@/components/card/CommonCard"
import { FoodPackType } from "@/types/foodpack"
import { getUserInfo } from "@/utils/local-storage"
import { useEffect, useState } from "react"

export default function Votes() {
  const [data,setData] = useState([])
  const [votes,setVotes] = useState([])
  useEffect( ()=>{
    fetch('http://localhost:3001/foodpacks',).then(res=>res.json()).then(val=>{
      setData(val)
      fetchVotes()})
  }, [])
  console.log(data)
  
  const foodpacks = data?.map((i:FoodPackType)=>({
    id: i.id,
    name: i.title,
    subtext: i.price,
    description: i.description,
    option: i.foodPackWithMeal?.length,
    imageSrc: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg'
  }))

  const currentUser = getUserInfo()
  async function fetchVotes (){
    fetch(`http://localhost:3001/votes?employeeId=${currentUser.id}`,).then(res=>res.json()).then(val=>setVotes(val))
  }

  async function createVote (input: {foodPackId: string; employeeId: string; type: boolean}){
    console.log(input)
    if(input.type){
   const res =  await fetch('http://localhost:3001/votes',{
        method: "POST",
        body: JSON.stringify({
          employeeId: input.employeeId,
          foodPackId: input.foodPackId
        }),
        headers: {
          "Content-Type": "application/json",
        }
        
      })
      const data = await res.json()
    
      console.log({data})
    }
      else{
        const vote = votes.find((i: {foodPackId: string; employeeId: string})=>i.employeeId === input.employeeId && i.foodPackId === input.foodPackId)
        const res = await fetch(`http://localhost:3001/votes/${vote.id}`,{
        method: "DELETE",        
      })
      const data = res.json()
      console.log({data})
      }
      
      fetchVotes()
  }
  return (
    <div className="w-10/12 mx-auto  mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {foodpacks?.map((foodpack: FoodPackType) => (
       <div  key={foodpack.id} className="relative">
        
         <CommonCard item={foodpack} ></CommonCard>
         <div className="absolute h-full w-full bg-black opacity-30 top-0 left-0"></div>
         <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      onChange={(e)=>{
                        createVote({
                          type: e.target.checked,
                          employeeId: currentUser.id,
                          foodPackId: foodpack.id,
                        })
                      }}
                      className=" rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 absolute top-0 left-0 h-10 w-10"
                    />
       </div>
      ))}</div>
  );
}

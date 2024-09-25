'use client'
import CommonCard from "@/components/card/CommonCard"
import { FoodPackType } from "@/types/foodpack"
import { getUserInfo } from "@/utils/local-storage"
import { useEffect, useState } from "react"

export default function Votes() {
  const [data,setData] = useState([])
  const [votes,setVotes] = useState([])
  const [checked,setChecked] = useState<boolean[]>([])
  useEffect( ()=>{
    fetch('http://localhost:3001/foodpacks',).then(res=>res.json()).then((val)=>{
      setData(val)
    })
  }, [])
  useEffect( ()=>{
    fetchVotes()
  }, [data])
  
  function updateChecked(val: {foodPackId: string}[]){
    const arr: boolean[] = []
    
    data.forEach((i:FoodPackType, idx)=>{
      const vote = val.find((v: {foodPackId: string})=>v.foodPackId === i.id)
      if(vote){
        arr.push(true)
      }else{
        arr.push(false)
      }
      console.log(arr)
      setChecked(arr)
    })
  }
  
  const foodpacks = data?.map((i:FoodPackType)=>({
    id: i.id,
    name: i.title,
    subtext:  i.foodPackWithMeal.map(i=>i.price).reduce((a,b)=>a+b,0),
    description: i.description,
    option: i.foodPackWithMeal?.length,
    imageSrc: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg'
  }))

  const currentUser = getUserInfo()
   function fetchVotes (){
    fetch(`http://localhost:3001/votes?employeeId=${currentUser.id}`,).then(res=>res.json()).then(async(val)=>{
      await setVotes(val)
      updateChecked(val)
    })
    
  }

  async function createVote (input: {foodPackId: string; employeeId: string; type: boolean}){
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
      {foodpacks?.map((foodpack: FoodPackType, idx: number) => (
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
                      checked={checked[idx]}
                      className=" rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 absolute top-0 left-0 h-10 w-10"
                    />
       </div>
      ))}</div>
  );
}

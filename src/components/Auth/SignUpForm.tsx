'use client'

import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import 'react-toastify/dist/ReactToastify.css'

export default function SignUpForm() {

  const [state, setState] = useState({
    name: '',
    phone: '',
    designation: '',
    password: ''
  })

  function updateInputData(key: string, value: string){
    setState({...state, [key]: value})
  }

  const router = useRouter()
  async function onSubmit(e){
    e.preventDefault()
    try{
      const res = await fetch('http://localhost:3001/employees',{
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        }
        
      })
     const data = await res.json()
      if(data) router.push('/login')
    }catch(err){
      console.log(err)}
  }

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form action="#" onSubmit={onSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="Name"
                      name="name"
                      required
                      onChange={(e) => updateInputData(e.target.name,e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone No
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      required
                      onChange={(e) => updateInputData(e.target.name,e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                  Designation
                  </label>
                  <div className="mt-2">
                    <input
                      id="designation"
                      name="designation"
                      required
                      onChange={(e) => updateInputData(e.target.name,e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      onChange={(e) => updateInputData(e.target.name,e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    

                  </div>
  
                  <div className="text-sm leading-6">
                    <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </Link>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
  
        
          </div>
        </div>
      </>
    )
  }
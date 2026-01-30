import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData();
  
//  const [data,setData] = useState({})
//  useEffect(()=>{
//   fetch('https://api.github.com/users/dhanwin007')
//   .then((res)=>res.json())
//   .then((res)=>{
//                 console.log(res)
//                 setData(res)
//             })
//   .catch((err)=>{console.log("error occured while fetching",err)})
//  },[])
//  if (!data) return <div className="text-center p-4">Loading...</div>
  return (
    
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github:{data.login}</div>
  )
}

export default Github
 export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/dhanwin007');
  return response.json()
 }
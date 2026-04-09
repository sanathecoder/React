import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //     fetch('https://api.github.com/users/sanathecoder')
  //     .then(response=> response.json())
  //     .then(data=>{
  //         console.log(data)
  //         setData(data)
  //     })
  // },[])
  return (
    <div className='flex justify-center items-center'>
      <div>      <img className='w-[200px] mr-14' src={data.avatar_url} alt=" Git Picture" />
      </div >
      <div className='text-center font-bold '> GitHub Followers : {data.followers}</div>


    </div>
  )
}

export default Github


export const GitHubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/sanathecoder')
  return response.json()
}

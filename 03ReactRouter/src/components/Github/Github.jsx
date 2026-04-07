import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/sanathecoder')
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='text-center'>
      GitHub Followers : {data.followers}
      <img src={data.avatar_url} alt=" Git Picture" />
    </div>
  )
}

export default Github

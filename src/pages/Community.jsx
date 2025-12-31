import React, { useEffect, useState } from 'react'
import {useUser} from '@clerk/clerk-react'
import {dummyPublishedCreationData} from '../assets/assets'
import { Heart } from 'lucide-react'

const Community = () => {
  const[creations ,setCreations] =useState([])
  const {user}=useUser()
  const fetchCreations =async()=>{
    setCreations(dummyPublishedCreationData)
  }
  useEffect(()=>{
    if(user){
      fetchCreations()
    }
  },[user])
  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
  <h1 className="font-semibold">Creations</h1>

  <div className="bg-white h-full rounded-xl overflow-y-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {creations.map((creation, index) => (
        <div key={index} className="relative group">
          <img
            src={creation.content}
            alt="creation"
            className="w-full h-120 object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex items-end justify-end
            group-hover:justify-between p-3
            bg-linear-to-b from-transparent to-black/80
            text-white rounded-lg opacity-0 group-hover:opacity-100 transition"
          >
            <p className="text-sm">{creation.prompt}</p>

            <div className="flex gap-1 items-center">
              <p>{creation.likes.length}</p>
              <Heart
                className={`w-5 h-5 cursor-pointer ${
                  creation.likes.includes(user.id)
                    ? 'fill-red-500 text-red-600'
                    : 'text-white'
                }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Community
import { useUser } from '@clerk/clerk-react';
import assets, {dummyTestimonialData } from '../assets/assets.js'

import React from 'react'
const Testimonial=()=> {
  const user = useUser()
  return (
   <div className="px-4 sm:px-20 xl:px-32 py-24">
    <div className='text-center'>
      <h2 className='text-slate-700 text-[42px] font-semibold'>
          Loved by Creators
      </h2>
      <p className='text-gray-500 max-w-lg mx-auto'>
        Don't just take our word for it.Here's what our users are saying.
      </p>
      </div>
      <div className='flex flex-wrap mt-10 justify-center'>
            {dummyTestimonialData.map((tool,index)=>(
      <div key={index} className='p-8 m-4 max-w-xs 
        rounded-lg bg-[#8c8cf375] shadow-lg border border-gray-200 
        hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
        {/* <div className="flex items-center gap-1">
          {Array(5).fill(0).map((_,index)=>(<img key={index} 
          src={index<dummyTestimonialData.rating ? assets.star_icon : assets.star_dull_icon
          
          }
         />))}
        </div> */}
        <div className="flex flex-col items-center px-5 py-4 relative">
          <img className="h-24 w-24 absolute -top-14 rounded-full" src={tool.image} alt="userImage1" />
            <div className="pt-8 text-center">
                 <h1 className="text-lg font-medium text-black">{tool.name}</h1>
                 <p className="text-red-900">{tool.title}</p>
            </div>
          </div>
          <p className="text-blue-800 px-6 text-center">{tool.content}</p>
          <div className="flex justify-center pt-4">
          <div className="flex gap-0.5">
            {Array(5).fill(0).map((_,index)=>(<img key={index} src={index<tool.rating?assets.star_icon:assets.star_dull_icon}
            alt="rating star"
    className="w-5 h-5"/>))}

          </div>
              </div>
          </div>
          ))}
      </div>
      </div>
  );
};

export default Testimonial
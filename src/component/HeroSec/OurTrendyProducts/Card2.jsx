import React from 'react'
import img from '../../../assets/images/for-small-desk-ai- plant-2.png'
import { IoBagHandleOutline } from "react-icons/io5";

const Card2 = () => {
  return (
    <div className='bg-white/5 backdrop-blur-md px-6 pb-5  rounded-[100px] shadow-lg border border-white/10 w-6xl mx-auto my-10 '>
      <figure className='grid grid-cols-2'>

        
        <figcaption className='text-white flex flex-col justify-center text-left gap-2 ps-20'>
            <h1 className='text-[22px] font-medium'>For Small Decs Ai Plant</h1>
            <p className='text-[14px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <span className='text-[18px] font-medium'>Rs. 599/-</span>
            
            <div className='flex flex-row items-center justify-start gap-2'>
              <button className='border rounded-[4px] px-7 font-light text-[14px] py-1 cursor-pointer'>Explore</button>
              <button className='border px-2 py-[0.40rem] rounded-[4px]'><IoBagHandleOutline /></button>
            </div>
            
            </figcaption>
            <div className='-mt-10 ps-30'><img src={img} alt="" className='w-60'/></div>
          
      </figure>
    </div>
  )
}

export default Card2

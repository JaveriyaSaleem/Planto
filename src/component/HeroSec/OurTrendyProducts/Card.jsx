import React from 'react'
import img from '../../../assets/images/for-small-desk-ai- plant.png'
import { IoBagHandleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className='bg-white/5 backdrop-blur-md px-6 pb-5  rounded-[100px] shadow-lg border border-white/10 w-6xl mx-auto my-10 '>
      <figure className='grid grid-cols-2'>

        <div className='-mt-10'><img src={img} alt="" className='w-80'/></div>
        <figcaption className='text-white flex flex-col justify-center text-left gap-2'>
            <h1 className='text-[22px] font-medium'>For Small Decs Ai Plant</h1>
            <p className='text-[14px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <span className='text-[18px] font-medium'>Rs. 599/-</span>
            
            <div className='flex flex-row items-center justify-start gap-2'>
              <button className='border rounded-[4px] px-7 font-light text-[14px] py-1'>Explore</button>
              <button className='border px-2 py-[0.40rem] rounded-[4px]'><IoBagHandleOutline /></button>
            </div>
            
            </figcaption>
          
      </figure>
    </div>
  )
}

export default Card

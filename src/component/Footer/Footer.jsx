import React from 'react'
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <div className='bg-[#222c1d] py-10 flex flex-col lg:flex-row justify-between px-10' >
        {/* row #1  */}
        {/* logo  */}
              <div className='flex flex-col items-start gap-5 ps-8'>
                  <figure className="flex flex-row items-end justify-center gap-2">
                    <img
                      src={logo}
                      alt="Aesthetic plant in white pot"
                      className="rounded-xl"
                    />
                    <figcaption className="text-3xl font-extrabold text-[#c5c7c5]">
                      Planto.
                    </figcaption>
                  </figure>
                  {/* description  */}
                  <p className='text-white w-90 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>

              {/* row #2  */}
              <div className='text-white flex flex-col gap-3'>
                <h2 className='font-bold text-start'>Quick Link's</h2>
                <ul className='text-[14px] text-sm/7'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Type's of Plant's</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Privacy</li>
                </ul>
              </div>
              {/* row #3  */}
              <div className='text-white'>
                <h2 className='font-bold mb-5'>For Every Update.</h2>
                <div className='border flex flex-row justify-between text-[14px] rounded-md w-80'>
                    <input type="email" placeholder='Enter Email' className='px-2 outline-0'/>
                    <button className='border py-2 px-3 rounded-md bg-white text-black font-bold text-[12px] cursor-pointer'>SUBSCRIBE</button>
                </div>
              </div>
    </div>
  )
}

export default Footer

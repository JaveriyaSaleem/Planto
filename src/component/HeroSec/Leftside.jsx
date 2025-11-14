import React from 'react'
import demoButton from "../../assets/images/demo-hero.png";
import alenaPatelGroup from '../../assets/images/aleena-patel-group.png'
import "./herosec.css"

const Leftside = () => {
  return (
 <main className="lg:col-span-3 flex flex-col items-start gap-32 py-8  px-2">
            <div>
                <h1 className="text-[30px] sm:text-[50px] lg:text-[100px]">Breath Natural</h1>
               
                <div className='w-full ' >
                  <p className="text-[12px] sm:text-[14px] w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </p>
                </div>
                <div className="flex flex-row  gap-6 py-3">
                  <button className="border sm:px-10 rounded-[8px] cursor-pointer px-4 text-[12px]">Explore</button>
                  <figure className="flex items-center gap-2">
                    <div className='play-btn cursor-pointer'>
                    <img src={demoButton} alt="demoButton" className="w-10 " />
                    </div>
                    {/* <a class="play-btn" href="#"></a> */}
                    <figcaption className="text-[14px]">Live Demo..</figcaption>
                  </figure>
                </div>
            </div>
            {/* review card*/}
            
            <div className="hidden lg:block bg-white/5 backdrop-blur-md px-6 pb-5  rounded-[30px] shadow-lg border border-white/10 w-72">
              <figure className="py-4 flex flex-col gap-3">
                <img src={alenaPatelGroup} alt="" className="w-32"/>
                <figcaption className="text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                </figcaption>
              </figure>
            </div>
            
          </main>
  )
}

export default Leftside

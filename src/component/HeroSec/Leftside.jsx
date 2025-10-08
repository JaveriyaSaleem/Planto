import React from 'react'
import demoButton from "../../assets/images/demo-hero.png";
import alenaPatelGroup from '../../assets/images/aleena-patel-group.png'

const Leftside = () => {
  return (
 <main className="col-span-3 flex flex-col gap-32">
            <div>
                <h1 className="text-[100px]">Breath Natural</h1>
                <p className="text-[14px] w-[70%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="flex gap-6 py-3">
                  <button className="border px-10 rounded-[8px]">Explore</button>
                  <figure className="flex items-center gap-2">
                    <img src={demoButton} alt="demoButton" className="w-10" />
                    <figcaption className="text-[14px]">Live Demo..</figcaption>
                  </figure>
                </div>
            </div>
            {/* review card*/}
            
            <div className=" bg-white/5 backdrop-blur-md px-6 pb-5  rounded-[30px] shadow-lg border border-white/10 w-72">
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

import React from 'react'
import calathea from '../../assets/images/calathea-plant.png'

const RightSide = () => {
  return (
   <main>
  <div className="bg-white/5 backdrop-blur-md px-6 pb-5  rounded-[50px] shadow-lg border border-white/10 hidden lg:block">
            
              <figure className="relative">
                <img src={calathea} alt="calathea" className="mx-auto -mt-10"/>
                <figcaption className="py-3 px-3">
                  <p className="text-[14px]">Trendy House Plant</p>
                  <h3 className="text-[24px]">Calathea Plant</h3>
                  <button className="border text-[14px] px-5 py-1 rounded-lg cursor-pointer">Buy Now</button>
                </figcaption>
              </figure>
            </div>

   </main>
  )
}

export default RightSide

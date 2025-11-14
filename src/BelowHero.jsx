import React from 'react'
import LCorneredBorder from './component/HeroSec/LCorneredBorder'
import product1 from './assets/images/top-selling-calathea-1.png'
import product2 from './assets/images/top-selling-calathea-2.png'
import product3 from './assets/images/top-selling-calathea-3.png'
import product4 from './assets/images/top-selling-calathea-4.png'
import product5 from './assets/images/top-selling-calathea-5.png'
import product6 from './assets/images/top-selling-calathea-6.png'

const BelowHero = () => {
  return (
    <main >
      <div className='text-center sm:py-12'>
          <LCorneredBorder title={"Our Top Selling"}/>
          </div>
          <div className='sm:grid grid-cols-3 sm:px-10'>
            <div ><img src={product1} alt="" className='cursor-pointer'/></div>
            <div ><img src={product2} alt="" className='cursor-pointer'/></div>
            <div ><img src={product3} alt="" className='cursor-pointer'/></div>
            <div ><img src={product4} alt="" className='cursor-pointer'/></div>
            <div ><img src={product5} alt="" className='cursor-pointer'/></div>
            <div ><img src={product6} alt="" className='cursor-pointer'/></div>
      </div>
    </main>
  )
}

export default BelowHero

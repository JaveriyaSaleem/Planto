import React from 'react'
import Navbar from './component/Navbar'
import HeroSec from './component/HeroSec/HeroSec'
import BelowHero from './BelowHero'
import CustomerReview from './CustomerReview'


const App = () => {
  return (
    <div className='w-full'>
      <div className=''>

      <Navbar/>
      <HeroSec/>

      <div className='bg-[#12160e]'>
        <BelowHero/>
        <CustomerReview/>
      </div>
      </div>
    </div>
  )
}

export default App

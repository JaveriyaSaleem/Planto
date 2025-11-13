import React from 'react'
import Navbar from './component/Navbar'
import HeroSec from './component/HeroSec/HeroSec'
import BelowHero from './BelowHero'
import CustomerReview from './CustomerReview'
import OurBest2 from './component/OurBest/OurBest2.jsx'
import Footer from './component/Footer/Footer.jsx'

const App = () => {
  return (
    <div className='w-full'>
      <div className=''>

      <Navbar/>
      <HeroSec/>

      <div className='bg-[#12160e] pb-20'>
        <BelowHero/>
        <CustomerReview/>
        <OurBest2/>
      </div>
<Footer/>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './component/Navbar'
import HeroSec from './component/HeroSec/HeroSec'
import BelowHero from './BelowHero'


const App = () => {
  return (
    <div className='w-full'>
      <div className=''>

      <Navbar/>
      <HeroSec/>
      <BelowHero/>
      </div>
    </div>
  )
}

export default App

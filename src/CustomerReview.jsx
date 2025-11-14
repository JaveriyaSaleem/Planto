import React from 'react'
import LCorneredBorder from './component/HeroSec/LCorneredBorder'
import customer1 from './assets/images/customer-1.png'
import customer2 from './assets/images/customer-2.png'
import customer3 from './assets/images/customer-3.png'

const CustomerReview = () => {
  return (
    <main>
      <div className="text-center sm:py-12">
         <LCorneredBorder title={"Customer Review"}/>

      </div>
         <div className='grid grid-cols-2 sm:grid-cols-3 sm:p-10'>
             <div><img src={customer1} alt="" /></div>
             <div><img src={customer2} alt="" /></div>
             <div className='col-span-2 sm:col-span-1 mx-auto'><img src={customer3} alt="" className='w-42 sm:w-full'/></div>
         </div>
    </main>
  )
}

export default CustomerReview

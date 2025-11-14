import React from 'react'

const LCorneredBorder = (props) => {
  return (
<div className="relative inline-block text-[25px] sm:text-[42px] font-medium text-white mt-20">
  {/* Corner borders */}
  {/* bottom-left */}
  <span className="absolute bottom-1 -left-2 w-4 h-4 sm:w-8 sm:h-8 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-green-600/60 rounded-bl-lg"></span>

  {/* top-right */}
  <span className="absolute top-1 -right-2  w-4 h-4 sm:w-8 sm:h-8 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-green-600/60 rounded-tr-lg"></span>

  {props.title}
</div>
  )
}

export default LCorneredBorder

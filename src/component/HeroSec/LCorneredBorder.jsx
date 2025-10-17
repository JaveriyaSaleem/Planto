import React from 'react'

const LCorneredBorder = (props) => {
  return (
       <div className="relative inline-block text-[42px] font-medium text-white mt-20
        ">
      {/* Corner borders */}
      <span className="absolute top-0 -left-2 w-8 h-8 border-t-4 border-l-4 border-green-600/60 rounded-tl-lg " ></span>
      <span className="absolute bottom-0 -right-2 w-8 h-8 border-b-4 border-r-4 border-green-600/60 rounded-br-lg "></span>

      {props.title}
    </div>
  )
}

export default LCorneredBorder

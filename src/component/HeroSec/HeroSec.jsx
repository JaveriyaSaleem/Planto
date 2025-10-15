import React from "react";
import RightSide from "./RightSide.jsx";
import Leftside from "./Leftside.jsx";
import LCorneredBorder from "./LCorneredBorder.jsx";


const HeroSec = () => {
  return (

    <main className="hero">
        <div className="grid grid-cols-4 text-[#c6c8c5] px-15 pt-20">
          {/* left side  */}
         <Leftside/>
          {/* right side  */}
          <RightSide/>
        </div>
        <div className="text-center">
          <LCorneredBorder title={"Our Trendy Plants"}/>
        </div>

    </main>
  );
};

export default HeroSec;

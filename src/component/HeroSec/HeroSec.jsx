import React from "react";
import RightSide from "./RightSide.jsx";
import Leftside from "./Leftside.jsx";
import LCorneredBorder from "./LCorneredBorder.jsx";
import OurTrendyProduct from "./OurTrendyProducts/OurTrendyProduct.jsx";


const HeroSec = () => {
  return (

    <main className="hero h-[430vh] sm:h-[290vh]">
        <div className="grid lg:grid-cols-4 text-[#c6c8c5] lg:px-15 lg:pt-20">
          {/* left side  */}
         <Leftside/>
          {/* right side  */}
          <RightSide />
        </div>
        <div className="text-center px-2">
          <LCorneredBorder title={"Our Trendy Plants"}/>
          <OurTrendyProduct/>
        </div>

    </main>
  );
};

export default HeroSec;

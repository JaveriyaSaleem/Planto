import React from "react";
import img from "../../assets/images/our-best-2.png";
import flower2 from "../../assets/images/our-best-1.png";
import flower3 from "../../assets/images/desk-plant-top-selling-cropped.png";
import flower4 from "../../assets/images/Calat-O2-plant-cropped.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CardForBest = (props) => {
  return (
    <div className="bg-white/5 backdrop-blur-md mt-30 rounded-[100px] shadow-lg border border-white/10 lg:w-6xl py-2 mx-auto my-10 ">
      <figure className="grid grid-cols-2">
        <div className="-mt-40">
          <img src={props.img} alt="" className="w-full" />
        </div>
        <figcaption className="text-white flex flex-col text-left gap-4 pt-20 pe-30 ">
          <h1 className="text-[22px] font-medium">
            We Have Small And Best O2 Plants Collection’s
          </h1>
          <p className="text-[14px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className="text-[14px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          {/* <span className="text-[18px] font-medium">Rs. 599/-</span> */}

          <div className="flex flex-row items-center justify-between gap-2">
            <button className="border rounded-lg px-10 font-light text-[14px] py-1 cursor-pointer">
              Explore
            </button>
            <div className="flex flex-row items-end">

            <IoIosArrowBack className="text-[20px]"/>

            <p className="flex flex-row items-end"><span className="text-[14px]">0{props.number}/</span><span className="text-[11px]">04</span></p>
            <IoIosArrowForward className="text-[20px]"/>
            
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CardForBest;

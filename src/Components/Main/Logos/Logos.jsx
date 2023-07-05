import React from "react";
import fedex2 from "../../../asset/fedex2.png";
import google from "../../../asset/google.png";
import ola from "../../../asset/ola.png";
import microsoft from "../../../asset/microsoft.png";
import amazon from "../../../asset/amazon.png";
import fedex from "../../../asset/fedex.png";
import walmart from "../../../asset/walmart.png";

const Logos = () => {
  return (
    <div className=" grid grid-rows-2 mt-20 gap-10 px-60">
      <div className=" grid grid-cols-4 gap-8">
        <div className=" flex justify-center items-center bg-white w-50 h-16 shadow-xl border-b-2">
          <img src={fedex2} alt="" width="65%" />
        </div>
        <div className=" flex justify-center items-center bg-white w-50 h-16 shadow-xl border-b-2">
          <img src={google} alt="" width="65%" />
        </div>
        <div className=" flex justify-center items-center bg-white w-50 h-16 shadow-xl border-b-2">
          <img src={ola} alt="" width="65%" />
        </div>
        <div className=" flex justify-center items-center bg-white w-50 h-16 shadow-xl border-b-2">
          <img src={microsoft} alt="" width="65%" />
        </div>
      </div>

      <div className=" grid grid-cols-3 px-34">
        <div className=" flex justify-center items-center bg-white w-50 h-16 shadow-xl border-b-2">
          <img src={amazon} alt="" width="50%" />
        </div>
        <div className=" flex justify-center items-center bg-white w-50 h-16 shadow-xl border-b-2">
          <img src={fedex} alt="" width="35%" />
        </div>
        <div className=" flex justify-center items-center bg-white w-50 h-16 shadow-xl border-b-2">
          <img src={walmart} alt="" width="55%" />
        </div>
      </div>
    </div>
  );
};

export default Logos;

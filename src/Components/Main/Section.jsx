import React from "react";
import thinkingguy from "../../asset/thinkingguy.png";
import arrow from "../../asset/arrow.png";
import Button from "../Button";

const Section = () => {
  return (
    <div className=" mt-2 flex flex-row pt-10 items-center px-20">
      <div className=" bg-lime-500">
        <img src={thinkingguy} alt="" />
      </div>

      <div className=" px-20 py-4 flex flex-col gap-2 pt-10">
        <p className=" text-[#FF8f56] font-bold text-xs">Lorem ipsum dolor sit amet.</p>
        <h1 className=" text-2xl font-bold">
          Simple Solutions for Complex Connections
        </h1>
        <h1 className=" text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi a
          corporis excepturi vitae reiciendis laboriosam error suscipit!
          Perferendis autem ipsa cupiditate temporibus.
        </h1>
        <div className=" flex items-center gap-5">
          <div className=" flex items-center">
            <img src={arrow} alt="" width="14%" />
            <p className=" font-bold text-sm">High Analysis</p>
          </div>
          <div className=" flex items-center">
            <img src={arrow} alt="" width="12%" />
            <p className=" font-bold text-sm">Certified Institute</p>
          </div>
        </div>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default Section;

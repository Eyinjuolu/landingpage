import React from "react";
import Button from "../../Button";
import tablet from "../../../asset/tablet.png";

const HeaderMain = () => {
  return (
    <div>
      <div className=" flex flex-wrap w-screen pl-60 bg-blue-600 pb-8">
        <div className=" w-[36%]">
          <div className=" mt-[4rem] text-white w-[75%]">
            <h5 className=" font-semibold tracking-widest text-lg">
              INSPIRATION TECHNOLOGY.
            </h5>
            <h2 className=" font-semibold text-5xl">Runs faster.</h2>
            <p className=" font-semibold text-4xl border-b-2 pb-6">
              costs less and never breaks.
            </p>
          </div>

          <div>
            <p className=" text-white pt-6 w-[85%] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              enim est commodi dolores iste officiis explicabo veritatis nihil,
              exercitationem eos.
            </p>
            <div className=" mt-5 flex gap-10">
              <Button>Get Started</Button>
              <button className=" border px-5 h-10 border-grey-200 rounded-md text-white font-light">
                Free Trial
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[64%] pt-[2rem]">
          <img src={tablet} alt="" width="75%" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;

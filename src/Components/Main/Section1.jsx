import React from 'react'
import groups from '../../asset/groups.png'
import groups1 from '../../asset/groups1.png'

const Section1 = () => {
  return (
    <div className=" flex flex-col gap-14 justify-center items-center mt-14">
      <div className=" flex justify-center items-center">
        <img src={groups} alt="" width="70%" />
      </div>
      <div className=" bg-[#FFF9F5] flex justify-center items-center" >
        <img src={groups1} alt="" width="70%" />
      </div>
    </div>
  );
}

export default Section1
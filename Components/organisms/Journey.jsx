import React from 'react'
import Heading from "../atoms/Heading";

function Journey() {
  return (
    <div>
      <div className="my-[30px] text-center flex flex-col gap-3 items-center justify-center" data-aos="fade-down">
        <Heading
          children="Start your"
          className="text-4xl font-bold text-[#F87171] justify-center items-center flex"
        />
        <Heading
          children="Learning Journey Today! "
          className="text-3xl font-bold text-[#FFFFFF] justify-center items-center flex"
        />
      </div>

    </div>
  )
}

export default Journey

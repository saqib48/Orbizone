import React from 'react'
import Counter3 from '../moleculus/Counter3';
import { FaPersonBurst } from "react-icons/fa6";
import { FaWineGlass } from "react-icons/fa";
import { IoAlarm } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import Container from '../atoms/Container';
import Heading from "../atoms/Heading";


function Counter() {
  return (
    <Container>
      <div className="my-[30px] text-center flex flex-col gap-3 items-center justify-center" data-aos="fade-down">
        <Heading
          children="Edify College Of IT"
          className="text-4xl font-bold text-[#818CF8] justify-center items-center flex"
        />
        <Heading
          children="Legacy to be Remembered "
          className="text-3xl font-bold text-[#FFFFFF] justify-center items-center flex"
        />
      </div>

      <div className='flex justify-between mx-[20px] my-[60px]'>
        <div className="text-white ">
          <Counter3 targetCount={2140} startCount={1} icon={<FaPersonBurst className='text-[30px]' />} contant={"IT Courses"} />
        </div>
        <div className="text-white ">
          <Counter3 targetCount={4080} startCount={1} icon={<FaWineGlass className='text-[30px]' />} contant={"Success Stories"} />
        </div>
        <div className="text-white ">
          <Counter3 targetCount={2150} startCount={1} icon={<IoAlarm className='text-[30px]' />} contant={"Students"} />
        </div>
        <div className="text-white ">
          <Counter3 targetCount={2170} startCount={1} icon={<BiSolidLike className='text-[30px]' />} contant={"Alumni"} />
        </div>
      </div>
    </Container>
  )
}

export default Counter
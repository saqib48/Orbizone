import React from 'react'
import Counter3 from '../moleculus/Counter3';
import { FaPersonBurst } from "react-icons/fa6";
import { FaWineGlass } from "react-icons/fa";
import { IoAlarm } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import Container from '../atoms/Container';

function Counter() {
  return (
    <Container>
      <div className='flex justify-between mx-[20px] my-[60px]'>
        <div className="text-white ">
          <Counter3 targetCount={2140} startCount={154} icon={<FaPersonBurst className='text-[30px]' />} contant={"Happy customer"} />
        </div>
        <div className="text-white ">
          <Counter3 targetCount={4080} startCount={154} icon={<FaWineGlass className='text-[30px]' />} contant={"AWARDS WON"} />
        </div>
        <div className="text-white ">
          <Counter3 targetCount={2150} startCount={154} icon={<IoAlarm className='text-[30px]' />} contant={"HOURS WORKED"} />
        </div>
        <div className="text-white ">
          <Counter3 targetCount={2170} startCount={154} icon={<BiSolidLike className='text-[30px]' />} contant={"COMPLETE PROJECTS"} />
        </div>
      </div>
    </Container>
  )
}

export default Counter
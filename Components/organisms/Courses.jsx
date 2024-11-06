import React from "react";
import CourseCard from "../moleculus/CourseCard";
import { BsJoystick } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import Heading from "../atoms/Heading";

function Courses() {
  return (
    <div className="flex flex-col gap-[40px] mt-[50px]  " >
      <div className="text-center flex flex-col gap-3 items-center justify-center" data-aos="fade-down">
        <Heading
          children="Featured Courses"
          className="text-4xl font-bold text-[#4ADE80] justify-center items-center flex"
        />
        <Heading
          children="Popular Courses"
          className="text-3xl font-bold text-[#FFFFFF] justify-center items-center flex"
        />
      </div>
      <div className="container justify-between items-center flex text-center gap-[50px] " >

        <div data-aos="fade-right">
          <CourseCard
            image="assits\images\course-1.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="Web Design & Development Course for Beginners"
            author="John Doe"
            duration="1.49"
            students={30}
            icon1={<BsJoystick />}
            icon2={<FaClock />}
            icon3={<IoPersonSharp />}
          />
        </div>

        <div data-aos="fade-up">

          <CourseCard
            image="assits\images\course-2.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="Web Design & Development Course for Beginners"
            author="John Doe"
            duration="1.49"
            students={30}
            icon1={<BsJoystick />}
            icon2={<FaClock />}
            icon3={<IoPersonSharp />}
          />
        </div>
        <div data-aos="fade-left">

          <CourseCard
            image="assits\images\course-3.jpg"
            title="20K"
            rating="★★★★★"
            reviews={123}
            description="Web Design & Development Course for Beginners"
            author="John Doe"
            duration="1.49"
            students={30}
            icon1={<BsJoystick />}
            icon2={<FaClock />}
            icon3={<IoPersonSharp />}
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
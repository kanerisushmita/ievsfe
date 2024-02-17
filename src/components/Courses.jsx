/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { courseData } from "../constants/dummyData";
import Course from "./Course";
const Courses = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          {/* <div className="mini-title">Upcoming Events</div> */}
          <div className="column-title ">
          Upcoming {' '}<span className="shape-bg">Events</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {courseData.map((course, index) => (
            <Course course={course} key={index} index={index} />
          ))}
        </div>
        {/* <div className="text-center lg:pt-16 pt-10">
          <a href="#" className=" btn btn-primary">
            View All Courses
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Courses;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { e1, e2, e3, e4, e5, e6, e7, e8, e9 } from "../constants/images";
import { eventsData } from "../constants/dummyData";
import { useSelector } from "react-redux";

const EventsList = () => {
  const navigate = useNavigate();
  const { data: userDetails } = useSelector((state) => state.user);
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        {userDetails && userDetails?.role == 'ADMIN' && (
          <div className="my-4 mb-8 w-full flex items-center justify-end">
            <button onClick={() => navigate('/add-event')} className="btn btn-primary btn-sm text-md"> Add Event</button>
          </div>
        )}
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {eventsData.map((evenT, index) => (
            <div
              className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              <div className="course-thumb h-[297px] rounded-t-[8px]  relative">
                <img
                  src={evenT.img}
                  alt=""
                  className=" w-full h-full object-cover rounded-t-[8px]"
                />
              </div>
              <div className="course-content p-8">
                <h4 className=" text-xl mb-5 font-bold">
                  <Link
                    to={`/event-single?title=${evenT.title}&img=${evenT.img}&heading=${evenT.heading}&paragraph=${evenT.paragraph}&subheading1=${evenT.subheading1 ? evenT.subheading1 : ""}&subheading1_content=${evenT.subheading1_content ? evenT.subheading1_content : ""}&subheading2=${evenT.subheading2 ? evenT.subheading2 : ""}&subheading2_content=${evenT.subheading2_content ? evenT.subheading2_content : ""}&subheading3=${evenT.subheading3 ? evenT.subheading3 : ""}&subheading3_content=${evenT.subheading3_content ? evenT.subheading3_content : ""}&guest_name=${evenT.guest_name}&guest_designation=${evenT.guest_designation}&guest_img=${evenT.guest_img}&date=${evenT.date}&location=${evenT.location}`}
                    className=" hover:text-primary transition duration-150"
                  >
                    {evenT.title}
                  </Link>
                </h4>
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                    </span>
                    <span>{evenT.date}</span>
                  </li>
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                    </span>
                    <span>{evenT.location}</span>
                  </li>
                </ul>
                <Link
                  to={`/event-single?title=${evenT.title}&img=${evenT.img}&heading=${evenT.heading}&paragraph=${evenT.paragraph}&subheading1=${evenT.subheading1 ? evenT.subheading1 : ""}&subheading1_content=${evenT.subheading1_content ? evenT.subheading1_content : ""}&subheading2=${evenT.subheading2 ? evenT.subheading2 : ""}&subheading2_content=${evenT.subheading2_content ? evenT.subheading2_content : ""}&subheading3=${evenT.subheading3 ? evenT.subheading3 : ""}&subheading3_content=${evenT.subheading3_content ? evenT.subheading3_content : ""}&guest_name=${evenT.guest_name}&guest_designation=${evenT.guest_designation}&guest_img=${evenT.guest_img}&date=${evenT.date}&location=${evenT.location}`}
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >
                  Subscribe to Event
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;

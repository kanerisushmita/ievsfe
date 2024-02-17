/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import {
  ck,
  singleCourseThumb,
  learnCourses
} from "../../constants/images";

const LearnCourseDetails = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]" style={{alignItems:"center"}}>
          <div className="lg:col-span-8 col-span-12">
            <div className="single-course-details">
                      <div>
                        <h3 className=" text-2xl">
                          Our Extracellular Vesicle Research Courses
                        </h3>
                        <p className="mt-4">
                          Our Extracellular Vesicle Research Courses are
                          designed to provide a comprehensive and cutting-edge
                          education in the rapidly evolving field of
                          extracellular vesicles (EVs). Whether you are a
                          graduate student, researcher, clinician, or industry
                          professional, our courses offer valuable insights and
                          knowledge to help you understand the biology,
                          functions, and applications of EVs in various
                          biological processes and disease contexts.
                        </p>
                        <div className="bg-[#F8F8F8] space-y-6 p-8 rounded-md my-8">
                          <h4 className=" text-2xl">Features:</h4>
                          <ul className=" grid sm:grid-cols-2 grid-cols-1 gap-6">
                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">Expert Faculty</div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Comprehensive Curriculum
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">Updated Research</div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">Interactive Learning</div>
                            </li>
                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">Hands-on Workshops</div>
                            </li>
                          </ul>
                        </div>
                        <p className="mt-4">
                          Join us on this transformative educational journey as
                          we uncover the remarkable world of EVs and their
                          potential to reshape our understanding of cell biology
                          and medical interventions. Be a part of the forefront
                          of EV research and make a difference in the scientific
                          community and beyond!
                        </p>
                      </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="sidebarWrapper space-y-[30px]">
              <div className="xl:h-[470px] h-[350px] mb-10 course-main-thumb">
                  <img
                    src={learnCourses}
                    alt=""
                    className=" rounded-md object-fut w-full h-full block"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCourseDetails;

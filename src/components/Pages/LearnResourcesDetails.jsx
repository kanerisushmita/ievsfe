/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import {
  ck,
  singleCourseThumb,
} from "../../constants/images";

const LearnResourcesDetails = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        {/* <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="single-course-details"> */}
                      <div>
                          <div className="column-title ">
                            Career <span className="shape-bg">Opportunities</span>
                          </div>
                        {/* <h3 className=" text-2xl">
                          Our Extracellular Vesicle Research Courses
                        </h3> */}
                        {/* <p className="mt-4">
                          Explore career opportunities in the field of extracellular vesicles (EVs).
                        </p> */}
                        <div className="bg-[#F8F8F8] space-y-6 p-8 rounded-md my-8">
                          <h4 className=" text-2xl">Explore career opportunities in the field of extracellular vesicles (EVs).</h4>
                          <ul className=" grid sm:grid-cols-2 grid-cols-1 gap-6">
                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                <a href="https://docs.google.com/document/d/1A93waCuRoFeet_E0EqB-t2fh5yIYdrnh/edit" target="_blank"> <span className="mini-title">Project Associate</span> – Development of non-invasive diagnostics for oral cancers</a>
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                <a href="https://docs.google.com/document/d/1ToOaP_YvVAPQeVInFYUxyldEBkzc6XIa/edit" target="_blank"><span className="mini-title">Research Associate</span> – Extracellular Vesicle (EV) therapeutics</a>
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                <a href="https://docs.google.com/document/d/1-8FqaaKdHGH48m1IE8JvBBsFpZpaadh6/edit" target="_blank"><span className="mini-title">Research Associate</span> – Extracellular Vesicles/Exosome Biology for Skin Care Solutions</a>
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                <a href="https://drive.google.com/file/d/1XFjU2GeKNubK022P5gML5TMjyUhyjRRB/view" target="_blank"><span className="mini-title">Recruitment Notice</span> – ICMR Research Assistant 03012024</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <p className="mt-2">
                          Kindly share your resume for above job positions at 
                          <a className="mini-title" href="mailto:info@ievs.in" target="_blank"> info@ievs.in</a>
                        </p>
                      </div>
                      <div>
                        <h3 className=" text-2xl mt-6">
                          Matchmaking
                        </h3>
                        <p className="mt-4">
                          Connect with potential research partners and collaborators in the EV field.
                        </p>
                      </div>
                      <div>
                        <h3 className=" text-2xl mt-6">
                          Links to Guidelines
                        </h3>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.example.com/guidelines" target="_blank">Guidelines for EV Research</a>
                        </p>
                      </div>
                      <div>
                        <h3 className=" text-2xl mt-6">
                          Links to Guidelines
                        </h3>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.austriasocietyforextracellularvesicles.com/" target="_blank">Austria Society for Extracellular Vesicles</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.anzsocietyofexosomalvesicles.org/" target="_blank">Australia and New Zealand Society of Extracellular Vesicles</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.canadianexosomevesiclesociety.ca/" target="_blank">Canadian Society for Extracellular Vesicles</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.taiwansocietyforextracellularvesicles.tw/" target="_blank">Taiwan Society for Extracellular Vesicles</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.sloveniannetworkforextracellularvesicles.si/" target="_blank">Slovenian Network for Extracellular Vesicles</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.portuguesenetworkonevs.pt/" target="_blank">Portuguese Network on EVs</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.germanexosomevesiclesociety.de/" target="_blank">German Society for Extracellular Vesicles</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.frenchsocietyofexosomalvesicles.fr/" target="_blank">Grupo Español de Investigación en Vesículas Extracelulares</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.frenchsocietyofexosomalvesicles.fr/" target="_blank">French Society of Extracellular Vesicles</a>
                        </p>
                        <p className="mt-4">
                          <a className="mini-title" href="https://www.italiansocietyofexosomalvesicles.it/" target="_blank">Italian Society of Extracellular Vesicles</a>
                        </p>
                      </div>
            {/* </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="sidebarWrapper space-y-[30px]">
              <div className="xl:h-[470px] h-[350px] mb-10 course-main-thumb">
                  <img
                    src={singleCourseThumb}
                    alt=""
                    className=" rounded-md object-fut w-full h-full block"
                  />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LearnResourcesDetails;

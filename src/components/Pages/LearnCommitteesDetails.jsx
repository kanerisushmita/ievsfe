/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import {
  ck,
  singleCourseThumb,
} from "../../constants/images";

const LearnCommitteesDetails = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
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
          <div className="lg:col-span-8 col-span-12">
            <div className="single-course-details">
              <div>
                <h3 className=" text-2xl">
                  Welcome to the Indian Extracellular Vesicles Society (IEVS)
                </h3>
                <p className="mt-4">
                  The Indian Extracellular Vesicles Society (IEVS) is
                  steadfastly committed to nurturing and advancing the
                  multidisciplinary field of extracellular vesicle (EV)
                  research. We have instituted specialized committees focusing
                  on various EV science dimensions to achieve our mission. These
                  committees serve as collaborative platforms, uniting experts
                  and enthusiasts from diverse sectors to address complex
                  challenges and unlock new opportunities within the realm of
                  extracellular vesicles.
                </p>
                <h3 className=" text-2xl mt-6">
                  How to Join a Committee in the Field of EV Research?
                </h3>
                <p className="mt-4">
                  We warmly invite all interested members to engage in our
                  committee initiatives actively. To join a committee, please
                  navigate to the "Committees" section on our official website
                  at{" "}
                  <a href="www.ievs.in" target="_blank">
                    www.ievs.in
                  </a>
                  . Here, you can indicate your interest in specific committees
                  by selecting your preferences and contacting us via email at{" "}
                  <a href="mailto:info@ievs.in" target="_blank">
                    info@ievs.in
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h3 className=" text-2xl">
            Committee Areas: Specialized Focus Groups in Extracellular Vesicle
            (EV) Research
          </h3>
          <ul className="list  course-accrodain space-y-6 mt-6">
            <Disclosure as="li">
              {({ open }) => (
                <li className={open ? "open" : ""}>
                  <Disclosure.Button as="button" className="accrodain-button">
                    <span className="icon-pm fle x-none"></span>
                    <span className=" flex-1">
                      Biomarker Discovery Committee
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="content">
                      {/* <div className=" text-xl font-semibold text-black mb-2">
                                      Intermediate Level
                                    </div> */}
                      <p>
                        This committee specializes in exploring and identifying
                        novel EV-based biomarkers for various diseases and
                        conditions. Leveraging the diagnostic potential of
                        extracellular vesicles, we aim to revolutionize early
                        disease detection through non-invasive and sensitive
                        biomarker assays.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </li>
              )}
            </Disclosure>
            <Disclosure as="li">
              {({ open }) => (
                <li className={open ? "open" : ""}>
                  <Disclosure.Button as="button" className="accrodain-button">
                    <span className="icon-pm fle x-none"></span>
                    <span className=" flex-1">
                      Translational Research Committee
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="content">
                      <p>
                        Focused on bridging the divide between fundamental EV
                        research and clinical applications, this committee
                        fosters interdisciplinary collaborations among
                        researchers, clinicians, and industry experts. Our goal
                        is to accelerate the clinical translation of
                        ground-breaking extracellular vesicle research.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </li>
              )}
            </Disclosure>
            <Disclosure as="li">
              {({ open }) => (
                <li className={open ? "open" : ""}>
                  <Disclosure.Button as="button" className="accrodain-button">
                    <span className="icon-pm fle x-none"></span>
                    <span className=" flex-1">
                      Therapeutics Development Committee
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="content">
                      <p>
                        Engaging in the cutting-edge realm of EV-based
                        therapeutics, this committee explores the potential of
                        extracellular vesicles as drug delivery systems,
                        regenerative therapies, and targeted treatments for many
                        diseases.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </li>
              )}
            </Disclosure>
            <Disclosure as="li">
              {({ open }) => (
                <li className={open ? "open" : ""}>
                  <Disclosure.Button as="button" className="accrodain-button">
                    <span className="icon-pm fle x-none"></span>
                    <span className=" flex-1">
                      Regulatory Affairs Committee
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="content">
                      <p>
                        With an emphasis on regulatory compliance and safety,
                        this committee addresses the challenges and
                        considerations associated with EV-based diagnostics and
                        therapeutics. We are committed to developing
                        comprehensive guidelines and standards for the effective
                        and safe application of extracellular vesicle
                        technologies.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </li>
              )}
            </Disclosure>
            <Disclosure as="li">
              {({ open }) => (
                <li className={open ? "open" : ""}>
                  <Disclosure.Button as="button" className="accrodain-button">
                    <span className="icon-pm fle x-none"></span>
                    <span className=" flex-1">
                      EV Analysis Devices and Techniques Committee
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="content">
                      <p>
                        This committee is dedicated to advancing the
                        methodologies and technologies for extracellular vesicle
                        analysis. We investigate state-of-the-art devices,
                        tools, and techniques for EV isolation,
                        characterization, and quantification to enable precise
                        and reproducible research.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </li>
              )}
            </Disclosure>
            <Disclosure as="li">
              {({ open }) => (
                <li className={open ? "open" : ""}>
                  <Disclosure.Button as="button" className="accrodain-button">
                    <span className="icon-pm fle x-none"></span>
                    <span className=" flex-1">
                      Committee for EVs from Different Biological Fluids
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="content">
                      <p>
                        Recognizing that EVs can be sourced from various
                        biological fluids—such as blood, urine, saliva,
                        cerebrospinal fluid, and others—this committee delves
                        into the unique properties and potential applications of
                        extracellular vesicles from these different origins.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </li>
              )}
            </Disclosure>
          </ul>
        </div>
      </div>
      <div className="container">
        <div>
          <h3 className=" text-2xl mt-6">
            Join the Committees and Impact the Future of EV Research
          </h3>
          <p className="mt-4">
            Be an active part of the IEVS specialized committees and
            significantly contribute to the evolution of EV research. Together,
            we aim to unlock the transformative potential of EVs in healthcare
            and biotechnology. Join us to be at the cutting edge of scientific
            discovery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnCommitteesDetails;

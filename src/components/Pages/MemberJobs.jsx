/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { getAllJobs } from "../../apis/memberJob";
import { topicsData } from "../../constants/dummyData";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const MemberJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let allJobs = getAllJobs()
      .then((res) => {
        setJobs(...jobs, res.data.data);
      })
      .catch((e) => console.log("Error: ", e));
    // setJobs(allJobs);
    console.log("getAllJobs : ", allJobs);
    console.log("All Jobs: ", jobs);
  }, []);

  return (
    <>
    <Header/>
    <PageBanner title={"Jobs"} pageTitle="Jobs" />
    {/* <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="column-title ">
            All <span className="shape-bg">Jobs</span> by Member
          </div>
        </div>

        {jobs.length ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
            {jobs.map((item, index) => (
              <a
                className=" rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#FFE8E8]  text-center px-6
            py-[65px] hover:-translate-y-2"
                href={item.google_form}
                target="_blank"
                key={index}
              >
                <div className="course-content">
                  <h4 className=" text-2xl  mb-2 font-bold">
                    {item.job_title}
                  </h4>
                  <p style={{ textAlign: "justify" }}>{item.job_description}</p>
                  <p>
                    {" "}
                    <strong>PostedBy:</strong> {item.posted_by?.fullName}
                  </p>
                </div>
                <div className="pt-5 lg:block">
                  <button className="btn btn-primary btn-md py-[15px] px-8">
                    Apply Now
                  </button>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="mini-title text-center">No Jobs Yet</div>
        )}
      </div>
    </div> */}

    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
      {jobs.length ? (
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {jobs.map((item, index) => (
            <div
              className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              <div className="course-content p-8">
                <h4 className=" text-xl mb-5 font-bold">
                  <a
                    // to={`/event-single?title=${evenT.title}&img=${evenT.img}&heading=${evenT.heading}&paragraph=${evenT.paragraph}&subheading1=${evenT.subheading1?evenT.subheading1:""}&subheading1_content=${evenT.subheading1_content?evenT.subheading1_content:""}&subheading2=${evenT.subheading2?evenT.subheading2:""}&subheading2_content=${evenT.subheading2_content?evenT.subheading2_content:""}&subheading3=${evenT.subheading3?evenT.subheading3:""}&subheading3_content=${evenT.subheading3_content?evenT.subheading3_content:""}&guest_name=${evenT.guest_name}&guest_designation=${evenT.guest_designation}&guest_img=${evenT.guest_img}&date=${evenT.date}&location=${evenT.location}`}
                    href={item.google_form}
                    target="_blank"
                    className=" hover:text-primary transition duration-150"
                  >
                    {item.job_title}
                  </a>
                </h4>
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:document-text-solid"></iconify-icon>
                    </span>
                    <span>{item.job_description}</span>
                  </li>
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:arrow-up-tray-16-solid"></iconify-icon>
                    </span>
                    <span> <strong>Posted By: </strong> {item.posted_by?.fullName}</span>
                  </li>
                </ul>
                <a
                  // to={`/event-single?title=${evenT.title}&img=${evenT.img}&heading=${evenT.heading}&paragraph=${evenT.paragraph}&subheading1=${evenT.subheading1?evenT.subheading1:""}&subheading1_content=${evenT.subheading1_content?evenT.subheading1_content:""}&subheading2=${evenT.subheading2?evenT.subheading2:""}&subheading2_content=${evenT.subheading2_content?evenT.subheading2_content:""}&subheading3=${evenT.subheading3?evenT.subheading3:""}&subheading3_content=${evenT.subheading3_content?evenT.subheading3_content:""}&guest_name=${evenT.guest_name}&guest_designation=${evenT.guest_designation}&guest_img=${evenT.guest_img}&date=${evenT.date}&location=${evenT.location}`}
                  href={item.google_form}
                  target="_blank"
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mini-title text-center">No Jobs Yet</div>
      )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MemberJobs;

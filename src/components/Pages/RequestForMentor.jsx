/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { getAllReq } from "../../apis/reqMentor";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import { Link } from "react-router-dom";

const RequestForMentor = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    let allRequests = getAllReq()
      .then((res) => {
        setRequests(...requests, res.data.data);
      })
      .catch((e) => console.log("Error: ", e));
    console.log("getAllReq : ", allRequests);
    console.log("All Reqs: ", requests);
  }, []);

  return (
    <>
    <Header/>
    <PageBanner title={"Request for Mentor"} pageTitle="Request for Mentor" />

    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
      {requests.length ? (
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {requests.map((item, index) => (
            <div
              className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              <div className="course-content p-8">
                <h4 className=" text-xl mb-5 font-bold">
                  {/* <a
                    href={item.google_form}
                    target="_blank"
                    className=" hover:text-primary transition duration-150"
                  > */}
                    {item?.requested_by?.fullName}
                  {/* </a> */}
                </h4>
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:document-text-solid"></iconify-icon>
                    </span>
                    <span>{item.area_of_research?.area_of_research}</span>
                  </li>
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:arrow-up-tray-16-solid"></iconify-icon>
                    </span>
                    <span> {item?.requested_by?.affiliation} </span>
                  </li>
                </ul>
                {/* <a
                  href={`/view_matches?id=${item?.area_of_research}`}
                  target="_blank"
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >
                  View Matches
                </a> */}
                <Link
                  to={`/view_matches?id=${item?.area_of_research._id}&reqBy=${item?.requested_by._id}&matched=${item?.matched}&reqId=${item?._id}&area=${item.area_of_research?.area_of_research}`}
                  target="_blank"
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >
                  View Matches
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mini-title text-center">No Request Yet</div>
      )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default RequestForMentor;

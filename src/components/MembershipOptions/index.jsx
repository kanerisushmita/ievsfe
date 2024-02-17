import React from "react";
import { check } from "../../constants/images";

function MembershipOptions() {
  return (
    <div className="section-padding bg-[url('../images/all-img/section-bg-9.png')]  bg-no-repeat bg-center bg-cover ">
      <div className="container-fluid">
        <div className="text-center">
          <div className="column-title ">
            Membership Options at <span className="shape-bg">IEVS</span>
          </div>
          <div className="">
            Become a member today and unlock many benefits that catalyse your
            professional and academic growth.
          </div>
        </div>
        <div className="mt-10 space-y-8 max-w-[1170px] mx-auto border-t border-b border-black border-opacity-[0.1] ">
          <div
            className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:justify-between lg:space-x-8 items-center py-10 px-10
                rounded-md"
          >
            <div>
              <span className=" text-2xl text-black font-bold">ExoRising</span>
            </div>
            <div>
              <span className="text-base">
                Legible to undergraduates, Postgraduates or within 2 years of
                obtaining a Ph.D.
              </span>
            </div>
            <div>
              <span className="text-base">
                Access to Journal club meetings and member exclusive discounts
              </span>
            </div>
            <div className="whitespace-nowrap text-center">
              <span className="block font-bold text-black text-3xl">
                ₹ 1,000 
              </span>
            </div>
            <div>
              <a
                href="/membership?type=ER"
                className="btn-md whitespace-nowrap btn btn-black"
              >
                Join
              </a>
            </div>
          </div>

          <div
            className="flex lg:flex-row flex-col lg:justify-between space-y-6 lg:space-y-0 lg:space-x-8 items-center bg-white py-10 px-10
            rounded-md"
          >
            <div>
              <span className=" text-2xl text-primary font-bold">
                ExoMentor
              </span>
            </div>
            <div>
              <span className="text-base">
                Legible to Lab heads (PIs),Post Docs, &gt;2 Years Post-Ph.D.
              </span>
            </div>
            <div>
              <span className="text-base">Voting Rights; Invited Speakers in Events</span>
            </div>
            <div className="whitespace-nowrap text-center">
              <span className="block font-bold text-black text-3xl">
                ₹ 2,500
              </span>
            </div>
            <div>
              <a
                href="/membership?type=EM"
                className="btn-md whitespace-nowrap btn btn-black"
              >
                Join
              </a>
            </div>
          </div>
          <div
            className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:justify-between lg:space-x-8 items-center py-10 px-10
                rounded-md"
          >
            <div>
              <span className=" text-2xl text-black font-bold whitespace-nowrap">
                ExoIndustrial
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="text-base">Institute Membership (ExoEmpire) </span>
            </div>
            <div>
              <span className="text-base">
                2 Complimentary memberships and 20% off on further member
                enrollments
              </span>
            </div>
            <div className="whitespace-nowrap text-center">
              <span className="block font-bold text-black text-3xl">
                ₹ 15,000
              </span>
            </div>
            <div>
              <a
                href="/membership?type=EI"
                className="btn-md whitespace-nowrap btn btn-black"
              >
                Join
              </a>
            </div>
          </div>
          <div
            className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:justify-between lg:space-x-8 items-center py-10 px-10
                rounded-md"
          >
            <div>
              <span className=" text-2xl text-black font-bold whitespace-nowrap">
                ExoAcademic
              </span>
            </div>
            <div className="whitespace-nowrap">
              <span className="text-base">Institute Membership (ExoEmpire) </span>
            </div>
            <div>
              <span className="text-base">
                2 Complimentary memberships and 20% off on further member
                enrollments
              </span>
            </div>
            <div className="whitespace-nowrap text-center">
              <span className="block font-bold text-black text-3xl">
                ₹ 10,000
              </span>
            </div>
            <div>
              <a
                href="/membership?type=EA"
                className="btn-md whitespace-nowrap btn btn-black"
              >
                Join
              </a>
            </div>
          </div>
          <div
            className="flex lg:flex-row flex-col lg:justify-between space-y-6 lg:space-y-0 lg:space-x-8 items-center bg-white py-10 px-10
            rounded-md"
          >
            <div>
              <span className=" text-2xl text-primary font-bold">
                ExoGlobal
              </span>
            </div>
            <div>
              <span className="text-base">
                Legible to International EV, Enthusiasts, Researchers,
                Professionals
              </span>
            </div>
            <div>
              <span className="text-base">
                Access to Journal club meetings and member exclusive discounts;
                Invited Speakers
              </span>
            </div>
            <div className="whitespace-nowrap text-center">
              <span className="block font-bold text-black text-3xl">
                $ 60
              </span>
            </div>
            <div>
              <a
                href="/membership?type=EG"
                className="btn-md whitespace-nowrap btn btn-black"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipOptions;

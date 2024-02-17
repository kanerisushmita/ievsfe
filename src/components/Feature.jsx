import React, { useEffect } from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          {/* <div className="mini-title">Core Features</div> */}
          <div className="column-title ">
            Social <span className="shape-bg">Media</span> Posts
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <div className="bg-white shadow-box rounded-[8px] p-3 group hover:bg-primary  transition duration-150 hover:-translate-y-1" style={{padding:"0.40rem"}}>
            {/* <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="codicon:globe"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Learn More Anywhere
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              Learn from anywhere in world on desktop, mobile or tablet with an
              Internet connection.{"}"}
            </div> */}
              <iframe className="custom-scrollbar-iframe" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7147245249298374658" height="100%" style={{minHeight:"60vh"}} width="100%" frameBorder="0" allowFullScreen="" title="Embedded post" ></iframe>
          </div>
          
          <div className="bg-white shadow-box rounded-[8px] p-3 group hover:bg-primary  transition duration-150 hover:-translate-y-1" style={{padding:"0.40rem"}}>
            {/* <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="healthicons:i-training-class-outline"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Expert Instructor
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              Learn from anywhere in world on desktop, mobile or tablet with an
              Internet connection.{"}"}
            </div> */}
             <iframe className="custom-scrollbar-iframe" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7139106622211059712" height="100%" style={{minHeight:"60vh"}} width="100%" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe> 
          </div>

          <div className="bg-white shadow-box rounded-[8px] p-3 group hover:bg-primary  transition duration-150 hover:-translate-y-1" style={{padding:"0.40rem"}}>
            {/* <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="fluent:handshake-32-regular"></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              24/7 Strong Support
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              Learn from anywhere in world on desktop, mobile or tablet with an
              Internet connection.{"}"}
            </div> */}
            <iframe className="custom-scrollbar-iframe" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7142790325630140416" height="100%" style={{minHeight:"60vh"}} width="100%" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

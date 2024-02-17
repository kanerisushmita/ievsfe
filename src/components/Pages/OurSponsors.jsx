import React from "react";
import { AchievementCounter } from "../../constants/dummyData";
import brand1 from "../../assets/images/sponsor/AHERD.png";
const OurSponsors = () => {
  return (
    <div className=" section-padding" style={{paddingTop:"0"}}>
      <div className="container">
        <div className="text-center">
          {/* <div className="mini-title">Some Fun Fact</div> */}
          <div className="column-title ">
            Our <span className="shape-bg">Sponsors</span>
          </div>
        </div>
        {/* <div className="grid  xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10"> */}
            <div
              className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4"
              style={{maxWidth:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"3rem"}}
            >
              <a href="https://aherf.co.in/" target="_blank">
                <img
                  src={brand1}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                  style={{top:"-4.5rem"}}
                />
              </a>
              {/* <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                <span className="counter">span </span> +
              </h4>
              <p>p tag</p> */}
            </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default OurSponsors;

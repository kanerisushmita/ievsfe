import React from "react";
import mailIcon from "../assets/images/icon/mail.svg";
import ManOne from "../assets/images/banner/man1.png";
import ManFour from "../assets/images/banner/man4.png";
import ManFive from "../assets/images/banner/man5.png";
import scientist_with_microscope from "../assets/images/banner/scientist_with_microscope.png";
import scientist_with_microscope_1 from "../assets/images/banner/scientist_with_microscope_1.png";

const Banner = () => {
  return (
    <section
      className={`xl:min-h-screen bg-[url('../images/banner/1.png')] bg-cover bg-no-repeat bg-center overflow-hidden`}
    >
      <div className="container relative">
        <div className="max-w-[570px] xl:pt-[297px] md:pt-20 md:pb-20 pt-28 pb-14 xl:pb-40 space-y-8">
          <h1>
            Innovative,{" "}
            <span className=" text-secondary inline-block bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom">
              Collaborate,
            </span>{" "}
            Translate
          </h1>
          <div className=" plain-text text-gray leading-[30px]">
            Your Hub for EV Research in India
          </div>
          {/* <div className="bg-white md:flex  rounded-md shadow-e1 items-center py-[10px] relative lg:pr-[10px] lg:pl-[38px] pl-4 pr-4">
            <div className="flex-1 flex items-center lg:mb-0 mb-2">
              <div className="flex-none">
                <span className=" ">
                  <img src={mailIcon} alt="mainIcon" />
                </span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your mail"
                  className="border-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex-none">
              <button className="btn btn-primary w-full lg:w-auto">
                Login Now
              </button>
            </div>
          </div> */}
            <div className=" hidden lg:block">
                    <a href="/membership" className="btn btn-primary btn-md py-[15px] px-8">
                      Join Now
                    </a>
            </div>
        </div>
        <div className="imge-box absolute xl:right-[-36px] xl:bottom-[11.4rem]  hidden xl:block   bottom-0  " style={{marginLeft:"45rem",marginBottom:"11.4rem"}}>
          <img src={ManFive} alt="manOne" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

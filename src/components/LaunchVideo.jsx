import React, { useState } from "react";
import { society_launch_1 } from "../constants/images";
import Brands from "./Brands";
import 'magnific-popup';

const LaunchVideo = () => {
  const [isPlaying,setIsPlaying]=useState(false);

  const handlePlay=()=>{
    setIsPlaying(!isPlaying);
  }

  return (
    <div className=" relative video-area section-padding-bottom z-[1]">
      <div
        className="bg-[url('../images/all-img/section-bg-7.png')] bg-cover bg-no-repeat bg-center absolute left-0 bottom-0 h-[60%]
        w-full z-[-1]"
      ></div>
      <div className="column-title text-center pt-5">
        Launch <span className="shape-bg">Video</span>
      </div>
      <div className="container ">
        <div className="video-wrapper xl:mb-[205px] lg:mb-[150px] mb-20">
          <div className="xl:h-[652px] lg:h-[500px] h-[400px] max-w-[1112px]  mx-auto p-6 bg-white shadow-box8 rounded-lg relative " style={{height:"48.5rem"}}>
            {!isPlaying &&
            <>
              <img
                src={society_launch_1}
                alt=""
                className=" object-cover w-full h-full  block"
              />
              <div onClick={handlePlay} style={{cursor:"pointer"}}
                className="h-[80px] w-[80px] mx-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center
                          items-center"
              >
                <div  className="animate-ping absolute inline-flex h-full w-full rounded-full ring-white ring-2"></div>
                <a
                  href="#" 
                  className="bg-white w-20 h-20 flex flex-col justify-center items-center rounded-full text-3xl text-primary "
                >
                  <iconify-icon  icon="bi:play-fill"></iconify-icon>
                </a>
              </div>
            </>
            }
            {/* <ReactPlayer url='https://youtu.be/HXcf0JaeOHg' width="100%" height="100vh"/> */}
            {isPlaying && 
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nfEtD3agjlg?autoplay=1;si=tZbxZiBYXKC_xsoE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            }
          </div>
        </div>
      </div>
      <Brands />
    </div>
    // <div className="container">
    //   <div className="ratio ratio-16x9">
    //     <iframe src="https://www.youtube.com/embed/tqHENdlpLLw?si=IZso8HLcKC2X_8O-" title="YouTube video" allowFullScreen></iframe>
    //   </div>
    // </div>
  );
};

export default LaunchVideo;

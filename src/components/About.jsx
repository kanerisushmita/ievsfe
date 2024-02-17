/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import lightImg from "../assets/images/svg/light.svg";
import aboutOne from "../assets/images/all-img/about1.png";
import targetImg from "../assets/images/svg/target.svg";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-10">
          {/* <div>
            <img src={aboutOne} alt="aboutOne" className=" mx-auto" />
          </div> */}
          <div>
            {/* <div className="mini-title">Welcome to IEVS</div> */}
            <h4 className="column-title ">
              Welcome to
             {' '} <span className="shape-bg">IEVS</span>
            </h4>
            <div style={{textAlign:"justify"}}>
            The Indian Extracellular Vesicles Society (IEVS) is a leading platform that studies extracellular vesicles (EVs), small membrane-bound particles secreted by cells. These vesicles are pivotal for intercellular communication and are implicated in various physiological and pathological processes, including cancer, neurodegenerative diseases, and immune responses. Our society unites passionate researchers, educators, and professionals committed to unravelling the mysteries of EVs and translating these discoveries into innovative therapies and diagnostic tools. Login in advancing the understanding and applications of EVs in medicine.
            </div>
            {/* <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Mission</h4>
                  <div>
                    There are many variations of passages of the Lorem Ipsum
                    available.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={targetImg}
                      alt=""
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Vision</h4>
                  <div>
                    There are many variations of passages of the Lorem Ipsum
                    available.
                  </div>
                </div>
              </li>
            </ul>
            <div className="pt-8">
              <a href="#" className=" btn btn-primary">
                Read More Us
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

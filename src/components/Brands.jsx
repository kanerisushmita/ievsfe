/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import brand1 from "../assets/images/sponsor/AHERD.png";
// import brand2 from "../assets/images/all-img/brands/2.svg";
// import brand3 from "../assets/images/all-img/brands/3.svg";
// import brand4 from "../assets/images/all-img/brands/4.svg";
// import brand5 from "../assets/images/all-img/brands/5.svg";
const Brands = ({ section_padding_bottom, section_padding_top }) => {
  return (
    <div
      className={`brands-area ${section_padding_bottom} ${section_padding_top}`}
    >
      <div className="container">
        {/* <div className="text-center text-black text-2xl font-medium ">
          Our {' '}<span className=" shape-bg mini">Sponsors</span>
        </div> */}
        <div className="column-title text-center pt-5">
          Our <span className="shape-bg">Sponsors</span>
        </div>

        <ul className="flex flex-wrap items-center justify-center  ">
          {[brand1, ].map((item, index) => (
            <li
              className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150 grayscale-[80] hover:grayscale-0 "
              key={index}
            >
              <a href="https://aherf.co.in/" target="_blank" className=" block">
                <img src={item} alt="brandImg" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Brands;

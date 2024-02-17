import React from "react";
import about3 from "../../assets/images/all-img/about3.png";
import about_us from "../../assets/images/about-us/about-us.png";
const About = () => {
  return (
    <div className="about-area section-padding" style={{paddingBottom:"0"}}>
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <img src={about_us} alt="" className=" block w-full rounded" />
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            {/* <div className="mini-title">About IEVS</div> */}
            <h4 className="column-title ">
              About{" "}
              <span className="shape-bg">IEVS</span>
            </h4>
            <div className=" mb-8" style={{textAlign:"justify"}}>
            Established in 2023, the Indian Extracellular Vesicles Society (IEVS) is a premier professional body, committed to advancing extracellular vesicle (EV) research and applications across India. This esteemed consortium offers a comprehensive, interdisciplinary platform for academicians, clinicians, and industry experts to advance EV science through scholarly exchanges, annual symposiums, and workshops. IEVS is dedicated to fostering professional excellence and inclusive growth, providing access to pioneering EV research, networking opportunities, and avenues for collaborative innovation to its members. With a firm commitment to shaping healthcare policies and elevating standards in EV biology and nanotechnology, IEVS extends a cordial invitation to all professionals engaged in this vibrant field to join its quest for scientific breakthroughs and to contribute to India's esteemed position in the international EV research community.
            </div>
            {/* <div className="space-y-8">
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="85%">
                  <span className="block text-black font-semibold mb-2">
                    Business Studies
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    86%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px] bg-primary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "86%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="67%">
                  <span className="block text-black font-semibold mb-2">
                    Marketing
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    67%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="95%">
                  <span className="block text-black font-semibold mb-2">
                    Design & Development
                  </span>
                  <span className=" block mb-2 text-black font-semibold">
                    95%
                  </span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani  h-[6px]  bg-tertiary block absolute left-0 top-1/2 -translate-y-1/2 "
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import lightImg from "../assets/images/svg/light.svg";
import about_us from "../assets/images/about-us/about-us.png";
import targetImg from "../assets/images/svg/target.svg";
const About_us = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-10">
          {/* <div>
            <img src={about_us} alt="aboutOne" className=" mx-auto" style={{maxWidth:"30%", borderRadius:"15px"}} />
          </div> */}
          <div style={{textAlign:"justify"}}>
            {/* <div className="mini-title">Welcome to IEVS</div>
            <h4 className="column-title ">
              About
             {' '} <span className="shape-bg">IEVS</span>
            </h4>
            <div style={{textAlign:"justify"}}>
            Established in 2023, the Indian Extracellular Vesicles Society (IEVS) is a premier professional body, committed to advancing extracellular vesicle (EV) research and applications across India. This esteemed consortium offers a comprehensive, interdisciplinary platform for academicians, clinicians, and industry experts to advance EV science through scholarly exchanges, annual symposiums, and workshops. IEVS is dedicated to fostering professional excellence and inclusive growth, providing access to pioneering EV research, networking opportunities, and avenues for collaborative innovation to its members. With a firm commitment to shaping healthcare policies and elevating standards in EV biology and nanotechnology, IEVS extends a cordial invitation to all professionals engaged in this vibrant field to join its quest for scientific breakthroughs and to contribute to India's esteemed position in the international EV research community.
            </div> */}
            <ul className=" list-item space-y-6 pt-8">
              <div className="mini-title text-center">Aim & Scope</div>
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
                  <h4 className=" text-xl mb-1">Aim</h4>
                  <div>
                  The Indian Extracellular Vesicles Society (IEVS) is steadfast in its mission to elevate awareness surrounding the transformative potential of extracellular vesicle (EV) research within the realms of diagnostics and therapeutics in India. We serve as active advocates, urging the adoption of EV-focused technologies in both scientific research, clinical and Industrial settings, and highlighting their pivotal role in disease detection, prognosis, and targeted treatment modalities. Our society takes pride in spearheading a range of initiatives designed to foster a cooperative and nurturing environment for professionals engaged in EV research. By creating a unified platform that brings together experts from diverse scientific disciplines, IEVS aspires to fast-track the translation of cutting-edge EV research into actionable healthcare applications and scientific innovations.
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
                  <h4 className=" text-xl mb-1">Scope</h4>
                  <div>
                    At the core of the Indian Extracellular Vesicles Society (IEVS) lies a committed mission to invigorate research, foster collaboration, and disseminate knowledge in the multifaceted domain of extracellular vesicle (EV) biology. As a preeminent society in India, we organize various scientific events such as conferences, symposia, workshops, and webinars. These platforms serve as a vibrant nexus for EV researchers to present their pioneering studies, engage in discourse, and establish interdisciplinary partnerships. Notably, these events feature distinguished speakers from EV research's national and international arenas.
                  </div>
                  <div>
                    Beyond the scientific community, IEVS is dedicated to developing and mentoring early-career researchers and students in EV biology. To this end, we offer an extensive portfolio of resources, including comprehensive training programs and mentorship initiatives. These aim to empower the next generation of scientists to delve into and make meaningful contributions to the rapidly evolving landscape of EV research. To bolster a thriving ecosystem for EV research within India, IEVS actively collaborates with academic institutions, research organisations, and industrial partners. Such partnerships stimulate innovative breakthroughs and facilitate sustained progress in this burgeoning scientific discipline.                  </div>
                </div>
              </li>
            </ul>
            <ul className=" list-item space-y-6 pt-8">
            <div className="mini-title text-center">Mission & Vision</div>
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
                  <h4 className=" text-xl mb-1">Mission</h4>
                  <div>
                    The Indian Extracellular Vesicles Society (IEVS) is committed to creating a conducive environment for EV research and applications across India, focusing on three core pillars:
                  <ul>
                    <li><strong>Advancement:</strong> Propel EV research, technologies, and applications, positioning India as a leader in the global EV science landscape.</li>
                    <li><strong>Collaboration:</strong> Build a robust platform to foster interactions among scientists, clinicians, researchers, and industry professionals, promoting a culture of multidisciplinary dialogue and innovation to address scientific and clinical challenges.</li>
                    <li><strong>Education and Mentorship:</strong> Invest in early-career researchers and students through comprehensive training programs, mentorship initiatives, and networking opportunities, nurturing the next generation of EV scientists for a legacy of knowledge, ingenuity, and application.</li>
                  </ul>
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
                  <h4 className=" text-xl mb-1">Vision</h4>
                  <div>
                    Aiming to establish the Indian Extracellular Vesicles Society (IEVS) as a hub of excellence in extracellular vesicle (EV) research and applications, we envision a future where India significantly contributes to global EV advancements. Through fostering interdisciplinary collaborations and innovations, we strive to unlock the transformative potential of EV sciences in diagnostics, therapeutics, and industrial applications, creating a thriving ecosystem for seamless knowledge transition across scientific, clinical, and industrial domains, thus revolutionizing healthcare and scientific exploration in India and worldwide.
                  </div>
                </div>
              </li>
            </ul>
            {/* <div className="pt-8">
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

export default About_us;

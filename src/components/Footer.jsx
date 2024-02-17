/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerLogo from "../assets/images/logo/footer-logo.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { eventsData } from "../constants/dummyData";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <Link
                  to={"/"}
                  className="brand-logo flex-none lg:mr-10 md:w-auto"
                >
                  <img style={{ height: "100px" }} src={logo} alt="logo" />
              </Link>
              <h4 className="mb-8 text-2xl font-bold text-white">Contact Us</h4>
              <p>
                Indian Extracellular Vesicles Society (IEVS)
              </p>
              <p>
                AHERF, AIMSR Building, 1st Floor,
                Health Street, Apollo Hospitals,
                Jubilee Hills, Hyderabad-33,
                Telangana, India.
              </p>
              <br />
              <p>
                Email: <a href="mailto:info@ievs.in" target="_blank">info@ievs.in</a>
              </p>
              <p>
                Call us : <a href="tel:+914029551071" target="_blank">+91-4029551071</a>
              </p>
              <ul className="flex space-x-4 pt-8">
                {/* <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:facebook"></iconify-icon>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://twitter.com/IEVSIndia"
                    target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:twitter"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/indian-extracellular-vesicles-society-ievs-654091296/"
                    target="_blank"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:instagram"></iconify-icon>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="single-footer">
            <div className="flex space-x-[80px]">
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Quick Links</h4>
                <ul className="list-item space-y-5">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/join_us_membership">Membership</a>
                  </li>
                  <li>
                    <a href="/join_us_sponsorship">Sponsorship</a>
                  </li>
                  <li>
                    <a href="/policy">Policy</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Events</h4>
                <ul className="list-item space-y-5">
                {eventsData.map((evenT,index)=>{                    
                    return (
                            <li key={index}>
                              <Link
                                to={`/event-single?title=${evenT.title}&img=${evenT.img}&heading=${evenT.heading}&paragraph=${evenT.paragraph}&subheading1=${evenT.subheading1?evenT.subheading1:""}&subheading1_content=${evenT.subheading1_content?evenT.subheading1_content:""}&subheading2=${evenT.subheading2?evenT.subheading2:""}&subheading2_content=${evenT.subheading2_content?evenT.subheading2_content:""}&subheading3=${evenT.subheading3?evenT.subheading3:""}&subheading3_content=${evenT.subheading3_content?evenT.subheading3_content:""}&guest_name=${evenT.guest_name}&guest_designation=${evenT.guest_designation}&guest_img=${evenT.guest_img}&date=${evenT.date}&location=${evenT.location}`}
                                // className=" hover:text-primary transition duration-150"
                              >
                                {evenT.title}
                              </Link>
                            </li>
                    )
                  })}
                  {/* <li>
                    <a href="#">Journal Club</a>
                  </li>
                  <li>
                    <a href="#">Training / Workshop</a>
                  </li>
                  <li>
                    <a href="#">Webinars</a>
                  </li>
                  <li>
                    <a href="#">Meetings</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="single-footer">
            <h4 className="mb-8 text-2xl font-bold text-white">Newsletter</h4>
            {/* <div className="mb-8">
              Join over <span className="text-primary underline">68,000</span>{" "}
              people getting our emails Lorem ipsum dolor sit amet consectet
            </div> */}
            <div className="mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 shadow-e1">
              <div className="flex-none">
                <span className=" ">
                  <img src="assets/images/icon/mail.svg" alt="" />
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
            <button className="btn btn-primary block w-full text-center">
              Subscribe Now
            </button>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.9332233107834!2d78.41246!3d17.414992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cedf4c3327%3A0x41edbf89d86ce2c8!2sApollo%20Institute%20of%20Medical%20Sciences%20and%20Research!5e0!3m2!1sen!2sin!4v1706950698910!5m2!1sen!2sin" class="w-100 mt-5" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="container border-t border-white border-opacity-[0.1] text-center text-base" style={{paddingTop:"1rem"}}>
        &copy; Registered under the Telangana Societies Registration Act.,2001(Reg No : 303 of 2023)
      </div>
      <div className="container py-2 text-center text-base" style={{paddingBottom:"1.75rem"}}>
        &copy; 2023 © All rights reserved to Indian Extracellular Vesicles Society (IEVS) & Made with ❤️ <a href="https://www.techpose.in/" target="_blank">Techpose</a>
      </div>
    </footer>
  );
};

export default Footer;

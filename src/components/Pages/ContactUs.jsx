import React from "react";
import { call, mail, map } from "../../constants/images";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Contact Us"} pageName="Contact" />
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
        
          <div className=" grid grid-cols-12 gap-[30px]">
            <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
              <div className="mini-title">Contact Us</div>
              <h4 className="column-title ">
                Get In Touch <span className="shape-bg">Today</span>
              </h4>
              <div>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </div>
              <ul className=" list-item space-y-6 pt-8">
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={mail} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" lg:text-xl text-lg mb-1">Email-Us :</h4>
                    <div>Contactyourmail@gmail.com</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={call} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" lg:text-xl text-lg mb-1">Call Us:</h4>
                    <div>+88012 2910 1781, +88019 6128 1689</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={map} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="lg:text-xl text-lg mb-1">Office :</h4>
                    <div>Mountain Green Road 2389, NY, USA</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="xl:col-span-7 lg:col-span-6 col-span-12">
              <div className="bg-white shadow-box7 p-8 rounded-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

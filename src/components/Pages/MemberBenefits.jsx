import { Disclosure } from "@headlessui/react";
import React from "react";
import { MembershipBenefits } from "../../constants/images";

const MemberBenefits = () => {
  return (
    <div className="section-padding  bg-white bg-[url('../images/all-img/section-bg-15.png')] bg-bottom  bg-cover bg-no-repeat">
      <div className="container">
            <div className="column-title text-center">
               <span className="shape-bg">Members</span>
            </div>
            <div className="mini-title text-center" style={{color:"#7B7B8A"}}>Be Part of a Transformative Community in Extracellular Vesicle Research</div>
            <div className="mini-title text-center">Join IEVS Society Now and avail Membership for 3 years.</div>
            <div className="text-center">
              <a href="/membership" className="btn btn-primary btn-md py-[15px] px-8 text-center">
                Join Now
              </a>
            </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]" style={{alignItems:"center",paddingTop:"3rem"}}>
          <div>
            <div className="column-title ">
              Member <span className="shape-bg">Benefits</span>
            </div>
            <ul className="list accrodains space-y-[30px] lg:max-w-[470px]">
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Peer Interaction</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                       Engage closely with peers, focusing on clinically-oriented nanomedicine in extracellular vesicles.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Networking Opportunities</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                       Build invaluable contacts between innovators and physicians focusing on clinical applications of extracellular vesicles.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure  >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Journal Subscription</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                       Receive a subscription to the print or online version of "The Indian Journal of EV" (Future Program).
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Updates and News</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                       Stay informed with periodic updates on project developments, funding opportunities, and national and international resources.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Discounted Admission</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                       Members are eligible for reduced admission fees for all events organised by the Society.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Certification</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                       Gain eligibility to request the official IEVS certificates, recognising your expertise and contributions in the field.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Awards and Scholarships</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                      Members can apply for various Society awards, fellowships, and scholarships designed to further research and innovation in extracellular vesicle science.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>


            </ul>
          </div>
          <div>
            <img src={MembershipBenefits} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberBenefits;

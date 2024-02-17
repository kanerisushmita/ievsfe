/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import MobileMenu from "./MobileMenu";
import { useSelector } from "react-redux";
import { generateIDCard } from "../apis/member";
import Toast from "../utils/Toast";

const Header = () => {
  const { data: userDetails } = useSelector((state) => state.user);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);

  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  const handleDownloadCard = () => {
    const { email, designation, profilePicture, fullName, organization, memberID } = userDetails;
    generateIDCard({ email, designation, profilePicture, fullName, organization, memberID })
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);
          Toast("Your ID Card is ready, check your email", "success");
        }
      })
      .catch((error) => {
        Toast(error.response.data.message, "error");
      });
  }

  return (
    <>
      <header
        className={`site-header  home-one-header top-0 w-full z-[999]`}
        ref={scrollNav}
      >
        <div className="main-header py-0">
          <div className="container">
            <div className=" flex items-center justify-between">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto"
              >
                <img style={{ height: "100px" }} src={logo} alt="logo" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative " style={{ marginRight: "3rem" }}>
                  <ul className="menu-active-classNamees">
                    <li>
                      <Link to={"/"}> Home </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">About</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/about"}>About Us</Link>
                        </li>
                        <li>
                          <Link to={`/about`}>Founding Members</Link>
                        </li>
                        <li>
                          <Link to={`/about`}>Honorary Members</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">JoinUs</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/join_us_membership"}>Membership</Link>
                        </li>
                        <li>
                          <Link to={"/join_us_sponsorship"}>Sponsorship</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Events</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/event"}>Events</Link>
                        </li>
                        <li>
                          <Link to={"/subscribed_events"}>Subscribed Events</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Learn</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/learn_courses"}>Courses</Link>
                        </li>
                        <li>
                          <Link to={"/learn_committees"}>Committees</Link>
                        </li>
                        <li>
                          <Link to={"/learn_resources"}>Resources</Link>
                        </li>
                        <li>
                          <Link to={"/learn_journal"}>Journal</Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/about"}>About 1</Link>
                        </li>
                        <li>
                          <Link to={"/about-two"}>About 2</Link>
                        </li>
                        <li>
                          <Link to={"/instructor"}>Instructor</Link>
                        </li>
                        <li>
                          <Link to={"/instructor-two"}>Instructor 2</Link>
                        </li>
                        <li>
                          <Link to={"/instructor-details"}>
                            Instructor Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/event"}>Event</Link>
                        </li>
                        <li>
                          <Link to={"/event-single"}>Event Single</Link>
                        </li>
                        <li>
                          <Link to={"/error"}>404</Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <a href="#">Courses</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/courses"}>Courses</Link>
                        </li>
                        <li>
                          <Link to={"/courses-sidebar"}>Courses Sidebar</Link>
                        </li>
                        <li>
                          <Link to={"/single-course"}>Single Course</Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu"> */}
                    <li>
                      <Link to={"/blog-standard"}>Blogs</Link>
                    </li>
                    {/* <li>
                          <Link to={"/single-blog"}>Blog Single</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to={"/contacts"}>Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]" >
                  {userDetails?.fullName ? (
                    <div className="main-menu hidden lg:block">
                      <ul className="menu-active-classNamees">
                        <li className={`menu-item-has-children `}>
                          <a href="#">
                            Welcome, {userDetails?.fullName.split(" ")[0]}
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <Link to={"/profile"}> Profile</Link>
                            </li>
                            <li>
                              <Link onClick={handleDownloadCard}> Download ID Card</Link>
                            </li>
                            <li>
                              <Link to={"/change-password"}>
                                Change Password
                              </Link>
                            </li>
                            <li>
                              <Link to={"/logout"}>Log Out</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className=" hidden lg:block">
                      <a
                        href="/login"
                        className="btn btn-primary btn-md py-[15px] px-8"
                      >
                        Member Login
                      </a>
                    </div>
                  )}

                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;

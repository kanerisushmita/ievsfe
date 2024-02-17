import React,{useEffect} from 'react'
import PageBanner from '../PageBanner';
import Header from '../Header';
import Footer from '../Footer';
import { useSelector } from "react-redux";
import LearnCourseDetails from './LearnCourseDetails';

const LearnCourses = () => {
    const userDetails = useSelector((state) => state.user);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, []);
  return (
    <>
        <Header/>
        <PageBanner title={"Courses"} pageTitle='Courses'/>
        <LearnCourseDetails/>
        <div className=" section-padding">
            <div className="container">
                <div className="text-center">
                    <div className="column-title ">
                        Coming <span className="shape-bg">Soon</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default LearnCourses;
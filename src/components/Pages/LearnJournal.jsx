import React,{useEffect} from 'react'
import PageBanner from '../PageBanner';
import Header from '../Header';
import Footer from '../Footer';
import { useSelector } from "react-redux";

const LearnJournal = () => {
    const userDetails = useSelector((state) => state.user);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, []);
  return (
    <>
        <Header/>
        <PageBanner title={"Journal"} pageTitle='Journal'/>
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

export default LearnJournal;
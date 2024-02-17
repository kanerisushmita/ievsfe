import React,{useEffect} from 'react'
import PageBanner from '../PageBanner';
import Header from '../Header';
import Footer from '../Footer';
import { useSelector } from "react-redux";
import LearnResourcesDetails from './LearnResourcesDetails';

const LearnResources = () => {
    const userDetails = useSelector((state) => state.user);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, []);
  return (
    <>
        <Header/>
        <PageBanner title={"Resources"} pageTitle='Resources'/>
        <LearnResourcesDetails/>
        <Footer/>
    </>
  )
}

export default LearnResources;
import React,{useEffect} from 'react'
import PageBanner from '../PageBanner';
import Header from '../Header';
import Footer from '../Footer';
import { useSelector } from "react-redux";
import PolicyDetails from './PolicyDetails';

const Policy = () => {
    const userDetails = useSelector((state) => state.user);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, []);
  return (
    <>
        <Header/>
        <PageBanner title={"Policy"} pageTitle='Policy'/>
        <PolicyDetails/>
        <Footer/>
    </>
  )
}

export default Policy;
import React, { useEffect,useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import { getAllMembers } from "../../apis/member";
import Matches from "./Matches";
import { useLocation } from 'react-router-dom';


const ViewMatches = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const reqBy=searchParams.get('reqBy');
    const reqId=searchParams.get('reqId');
    const area=searchParams.get('area');
    const matched=searchParams.get('matched').split(",");

    const [data,setData]=useState([]);
    const [showAllMembers, setShowAllMembers]=useState(false);
    // console.log("Show All Members: ",showAllMembers);
    const [members, setMembers] = useState(data);
    
    const handleMember=()=>{
        // console.log("data in handleMember : ",data);
        if(!showAllMembers){
            const filteredMembers = data.filter(member => member.memberType === "EM" && member.area_of_research?._id === id);
            // console.log("filteredMembers in show all mem true : ",filteredMembers);
            setMembers(filteredMembers);
        }else{
            const filteredMembers = data.filter(member => member.area_of_research?._id === id);
            // console.log("filteredMembers in show all mem false : ",filteredMembers);
            setMembers(filteredMembers);
        }
    };
    
    // console.log("Members : ",members);

    useEffect(()=>{
        getAllMembers().then((res)=>{
            setData(res.data.data);
            // console.log("Data in useEffect : ",data);
            // console.log("All Members: ",res.data.data);
        }).catch((e)=>console.log("Error : ",e));

        handleMember();

    },[data.length,showAllMembers]);

    return(
        <>
            <Header/>
            <PageBanner title={"View Matches"} pageTitle="View Matches" />
            <div className="nav-tab-wrapper tabs section-padding flex items-center justify-center flex-col w-full">
                <div className="mini-title">Welcome!</div>
                <h4 className="column-title">View Matches</h4>
                {!showAllMembers &&(
                    <button onClick={()=>{setShowAllMembers(true)}} className=" btn px-8 py-[11px] mb-2 bg-black text-white hover:bg-primary">
                        Show All Members
                    </button>
                )}
                {showAllMembers &&(
                    <button onClick={()=>{setShowAllMembers(false)}} className=" btn px-8 py-[11px] mb-2 bg-black text-white hover:bg-primary">
                        Show EM Members
                    </button>
                )}
                <Matches data={members} allMembers={showAllMembers} matched={matched} reqBy={reqBy} reqId={reqId} area={area}/>
            </div>
            <Footer />
        </>
    );
};

export default ViewMatches;
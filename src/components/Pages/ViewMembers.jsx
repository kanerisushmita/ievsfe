import React, { useEffect,useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import { getAllMembers } from "../../apis/member";
import Members from "./Members";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const ViewMembers = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        getAllMembers().then((res)=>{
            setData(res.data.data);
        }).catch((e)=>console.log("Error : ",e));

    },[data.length]);

    const handleDownloadClick = () => {
        const MemberData = data.map(member => ({
          MemberType: member.memberType,
          Email: member.email,
          PhoneNumber: member.phoneNumber,
          FullName: member.fullName,
          Designation: member.designation,
          Affiliation: member.affiliation,
          MemberID: member.memberID,
          Status: member.status,
          Role: member.role,
          EducationQualifications: JSON.stringify(member.educationQualifications),
          ProfessionalExperience: JSON.stringify(member.professionalExperience),
          Address: member.address,
          AvailableForMentoring: member.availableForMentoring,
          DOB: member.dob,
          Fax: member.fax,
          Gender: member.gender,
          LabLink: member.labLink,
          MakeProfilePublic: member.makeProfilePublic,
          Organization: member.organization,
          Title: member.title,
          AreaOfResearch: member.area_of_research?.area_of_research, 
        }));

        const worksheet = XLSX.utils.json_to_sheet(MemberData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members Data');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const excelBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(excelBlob, 'members_data.xlsx');
    };

    return(
        <>
            <Header/>
            <PageBanner title={"View Registered Members"} pageTitle="View Members" />
            <div className="nav-tab-wrapper tabs section-padding flex items-center justify-center flex-col w-full">
                <div className="mini-title">Welcome!</div>
                <h4 className="column-title">Registered Members</h4>
                <button onClick={handleDownloadClick} className=" btn px-8 py-[11px] mb-2 bg-black text-white hover:bg-primary">
                    Download Members Data
                </button>
                <Members data={data} />
            </div>
            <Footer />
        </>
    );
};

export default ViewMembers;
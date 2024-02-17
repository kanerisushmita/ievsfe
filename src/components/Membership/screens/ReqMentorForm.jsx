import React, { useEffect, useRef, useState } from "react";
import Toast from "../../../utils/Toast";
import { getLocalStorageValue } from "../../../utils/helper";
import { reqMentor } from "../../../apis/reqMentor";
import { addAreaOfResearch, getAllAreaOfResearches, getAreaOfResearchById, getAreaOfResearchByName } from "../../../apis/areaOfResearch";
import { useNavigate, useSearchParams } from "react-router-dom";
import {useSelector} from "react-redux";

function ReqMentorForm() {
  const navigate = useNavigate();
  const reqMentorBtn = useRef(null);

  const currentUser=useSelector((state)=> state.user);
  console.log("CurrentUser: ",currentUser);

  // const [areaOfResearch, setAreaOfResearch] = useState("");
  // const [searchParams]=useSearchParams();
  // let type = searchParams.get("type");
  const [otherInputVisible, setOtherInputVisible] = useState(false);

  const handleDropdownChange = (event) => {
    setResearchType(event.target.value);
    console.log("Research Type: ",researchType);

    if (event.target.value === 'other') {
      setOtherInputVisible(true);
    } else {
      setOtherInputVisible(false);
    }
  };

  const [researchType, setResearchType] = useState("");
  const [newAreaOfResearch, setNewAreaOfResearch]=useState("");
  const [researchTypes, setResearchTypes]=useState([]);

  useEffect(()=>{
    // let areaByID = getAreaOfResearchById(id).then((res)=>{
    //   console.log("AreaById: ",res.data._id);
    // }).catch((e)=>console.log("Error in areaByID: ",e));
    // console.log("AreaID: ",areaByID);

    // let areaByName = getAreaOfResearchByName(nm).then((res)=>{
    //   console.log("AreaByName: ",res);
    // }).catch((e)=>console.log("Error in AreaByName :",e));
    // console.log("AreaByName :",areaByName);
    
    let allArea=  getAllAreaOfResearches().then((res) => {
        console.log("response :",res.data.data);
        setResearchTypes(...researchTypes, res.data.data);
        }).catch((e) => console.log("Error: ", e));
        console.log("AllArea : ",allArea);
        console.log("ResearchTypes : ",researchTypes);
    },[]);

    const findArea=(input)=>{
      let res="";
      researchTypes.map((item)=>{
        if(input === item?.area_of_research){
          return res+=item._id;
        }
      });
      return res;
    }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("CurrentUser_id: ",currentUser?.data?._id);

    let newArea={area_of_research: newAreaOfResearch.toLocaleUpperCase()};
    reqMentorBtn.current.disabled = true;

    try {
      if(currentUser?.data?._id){
        if(otherInputVisible){
          let addNewArea = await addAreaOfResearch(newArea);
          console.log("Add New Area ID : ",addNewArea.data.message._id);

          if(addNewArea.success){
            let res = await reqMentor({
              requested_by: currentUser?.data?._id,
              area_of_research: addNewArea.data.message._id
            });

            if (res.success) {
              Toast(res.data.message, "success");
              return navigate("/req_mentor");
            }else {
              Toast("Error Posting Job", "error");
              reqMentorBtn.current.disabled = false;
              return;
            }
          }else{
            Toast("Error Adding New Research Area", "error");
              reqMentorBtn.current.disabled = false;
              return;
          }
        }else{
          let research= await findArea(researchType);
          console.log("research: ",research);
          let res = await reqMentor({
            requested_by: currentUser?.data?._id,
            area_of_research: research
          });

            if (res.success) {
              Toast(res.data.message, "success");
              return navigate("/req_mentor");
            }else {
              Toast("Error Posting Job", "error");
              reqMentorBtn.current.disabled = false;
              return;
            }
        }
      }else{
        Toast("Member Not Logged In", "error");
        reqMentorBtn.current.disabled = false;
        return;
      }
    } catch (e) {
      Toast(e.response.data.message, "error");
      reqMentorBtn.current.disabled = false;
      console.log("Error: ", e);
    }
  }

  return (
    <div className="bg-white custom-shadow-lg p-8 rounded-md lg:w-1/2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-4">
        {/* <div className="flex justify-between gap-5"> */}

          <div className="w-full">
            {otherInputVisible && (
                <input
                  className=" from-control"
                  type="text"
                  onChange={(e)=> {
                    setResearchType(e.target.value)
                    setNewAreaOfResearch(e.target.value)
                  }}
                  placeholder="Enter area of research"
                />
            )}

            {!otherInputVisible && (
              <select
                className="from-control"
                required
                onChange={handleDropdownChange}
                value={researchType}
              >
                <option value="" disabled selected={!researchType}>
                  Select Area of Research*
                </option>
                {researchTypes.length ?(
                  <>
                    {researchTypes?.map((item, index) => (
                      <option
                        selected={researchType === item?.area_of_research}
                        value={item?.area_of_research}
                        key={index}
                      >
                        {item?.area_of_research}
                      </option>
                    ))} 
                  </>
                ):(
                  <option value="" disabled selected={!researchType}>
                    No Area of Researches Yet*
                  </option>
                )}
                <option value="other">Choose Manually</option>
              </select>
            )}
          </div>

        <div className="flex justify-center gap-5">
          {/* <button className="lg:w-1/2" disabled></button> */}
          <button
            type="submit"
            ref={reqMentorBtn}
            className="lg:w-1/2 btn btn-primary btn-md mt-[10px]"
          >
            Request Mentor
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReqMentorForm;
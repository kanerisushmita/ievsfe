import React, { useRef, useState } from "react";
import Toast from "../../../utils/Toast";
import { getLocalStorageValue } from "../../../utils/helper";
import { postJob } from "../../../apis/memberJob";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

function MemberJobPostForm() {
  const navigate = useNavigate();
  const postJobBtn = useRef(null);

  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [googleForm, setGoogleForm] = useState("");

  const currentUser=useSelector((state)=> state.user);
  console.log("CurrentUser: ",currentUser);
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("CurrentUser_id: ",currentUser?.data?._id);
    let data = {posted_by: currentUser?.data?._id, job_title: jobTitle, job_description: jobDescription, google_form: googleForm };
    postJobBtn.current.disabled = true;
    try {
      if(currentUser?.data?._id){
        let res = await postJob(data);
        if (res.success) {
          Toast(res.data.message, "success");
          return navigate("/member_jobs");
        }else {
          Toast("Error Posting Job", "error");
          postJobBtn.current.disabled = false;
          return;
        }
      }else{
        Toast("Member Not Logged In", "error");
        postJobBtn.current.disabled = false;
        return;
      }
    } catch (e) {
      Toast("Invalid Request", "error");
      postJobBtn.current.disabled = false;
      console.log("Error: ", e);
    }
  }

  return (
    <div className="bg-white custom-shadow-lg p-8 rounded-md lg:w-1/2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-4">
        {/* <div className="flex justify-between gap-5"> */}
          <div className="w-full">
            <input
              type="text"
              className=" from-control"
              placeholder="Job Title *"
              value={jobTitle}
              required
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              className=" from-control"
              placeholder="Job Description *"
              value={jobDescription}
              required
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
        {/* </div> */}
          <div className="w-full">
            <input
              type="url"
              className=" from-control"
              placeholder="Form Link *"
              value={googleForm}
              required
              onChange={(e) => setGoogleForm(e.target.value)}
            />
          </div>
        <div className="flex justify-center gap-5">
          {/* <button className="lg:w-1/2" disabled></button> */}
          <button
            type="submit"
            ref={postJobBtn}
            className="lg:w-1/2 btn btn-primary btn-md mt-[10px]"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default MemberJobPostForm;
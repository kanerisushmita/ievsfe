import React, { useEffect, useState } from "react";
import member_types from "../Membership/member_types";
import { getMemberByMemberID, getMemberById } from "../../apis/member";
import { useSearchParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Toast from "../../utils/Toast";
import { getReqById, updateReq } from "../../apis/reqMentor";

const MatchesProfileView = () => {
  const navigate=useNavigate();
  const [searchParams] = useSearchParams();
  let member = searchParams.get("member");
  let reqFor = searchParams.get("reqFor");
  let reqBy = searchParams.get("reqBy");
  let reqId = searchParams.get("reqId");
  let area = searchParams.get("area");
  let matched = searchParams.get("matched")?.split(",");
  console.log("Matched : ",matched);
  const { data: userDetails } = useSelector((state) => state.user);

  const [profile, setProfile] = useState(null);
  console.log("Profile: ",profile);
  const [admin, setAdmin] = useState(null);
  console.log("Admin: ",admin);
  const [mentor, setMentor] = useState(null);
  console.log("Mentor: ",mentor);
  const [mentee, setMentee] = useState(null);
  console.log("Mentee: ",mentee);
  const [req, setReq] = useState(null);
  console.log("Req: ",req);
  const [emailBody, setEmailBody] = useState('');


  const handleMakeMatch=(e)=>{
    e.preventDefault();
      for(let i=0;i<=matched.length-1;i++){
        if(matched[i] === reqFor){
          Toast("Already Matched");
          return;
        }
      }
      matched.push(reqFor);
      if(matched[0] === ""){
        matched.shift();
      }

    const data={
      matched,
    };
    const mailOptions={
      to:`${admin.email},${mentor.email},${mentee.email}`,
      subject:`Matched Mentor for Area of Research- ${area}`,
      text:`${emailBody}\n\n Mentor Contact Information \n Phone Number: ${mentor.phoneNumber}\n Email: ${mentor.email}\n\n Mentee Contact Information \n Phone Number: ${mentee.phoneNumber}\n Email: ${mentee.email}`
    };
    updateReq(reqId,data,mailOptions)
    .then((res) => {
      // finishBtn.current.disabled = false;
      if (res.data.success) {
        Toast("Matchmaking and Email Sent Successfully!", "success");
        navigate("/req_mentor");
      }
    })
    .catch((error) => {
      Toast(error.response.data.message, "error");
      // finishBtn.current.disabled = false;
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    getMemberByMemberID(member)
      .then((res) => {
        console.log("Res : ",res);
        setProfile(res.data?.data);
      })
      .catch((error) => {
        Toast(error.response.data.message, "error");
      });
      getMemberById(userDetails._id)
      .then((res) => {
        console.log("Res : ",res);
        setAdmin(res.data?.data);
      })
      .catch((error) => {
        Toast(error.response.data.message, "error");
      });
      getMemberById(reqFor)
      .then((res) => {
        console.log("Res : ",res);
        setMentor(res.data?.data);
      })
      .catch((error) => {
        Toast(error.response.data.message, "error");
      });
      getMemberById(reqBy)
      .then((res) => {
        console.log("Res : ",res);
        setMentee(res.data?.data);
      })
      .catch((error) => {
        Toast(error.response.data.message, "error");
      });
      getReqById(reqId)
      .then((res) => {
        console.log("Res : ",res);
        setReq(res.data);
      })
      .catch((error) => {
        Toast(error.response.data.message, "error");
      });

  }, []);

  // console.log("Profile: ",profile);
  // console.log("Admin: ",admin);
  // console.log("Mentor: ",mentor);
  // console.log("Mentee: ",mentee);

  const handleDate=(d)=>{
    const date = new Date(d);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="nav-tab-wrapper tabs  section-padding">
    <div className="container">
      <div className="text-center mt-10">
        <div className="column-title ">
          <span className="shape-bg">IEVS</span> Matched Member Profile
        </div>
        <div
          className="mb-3 text-center">
          <div className="w-[270px] rounded-t-md relative mx-auto overflow-hidden">
            <img
              src={profile?.profilePicture}
              alt="profile"
              style={{ width: "270px", height: "270px", objectFit: "cover" }}
              className="border-2 border-[#ECECEC] w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="xl:col-span-7 lg:col-span-6 col-span-12">
        <div className="bg-white shadow-box7 p-8 rounded-md">
          <form
            className="profile-form md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6"
          >
            <div className="md:col-span-2 col-span-1 text-black font-bold">
              <span>Personal Information</span>
            </div>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="from-control"
                value={profile?.fullName}
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="memberType">Member Type</label>
              <input
                type="text"
                className="from-control"
                value={profile?.memberType}
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className="from-control"
                value={profile?.phoneNumber}
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                className="from-control"
                value={profile?.designation}
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="affiliation">Affiliation</label>
              <input
                type="text"
                className="from-control"
                value={profile?.affiliation}
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="from-control"
                value={profile?.title}
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                className="from-control"
                value={profile?.organization}
                disabled
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="from-control"
                value={profile?.address}
                disabled
              />
            </div>
            <div>
              <label htmlFor="fax">Fax</label>
              <input
                type="text"
                className="from-control"
                value={profile?.fax}
                disabled
              />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                className="from-control"
                value={handleDate(profile?.dob)}
                disabled
              />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                className="from-control"
                value={profile?.gender}
                required
                disabled
              />
            </div>
            <div>
              <label htmlFor="labLink">Lab Link</label>
              <input
                type="text"
                className="from-control"
                value={profile?.labLink}
                disabled
              />
            </div>
            {profile?.educationQualifications.length > 0 && (
              <div className="md:col-span-2 col-span-1 text-black font-bold">
                <span>Educational Qualifications</span>
              </div>
            )}
            {profile?.educationQualifications.map((item, idx) => (
              <table
                key={idx}
                className="table table-bordered md:col-span-2 col-span-1"
              >
                <thead>
                  <tr>
                    <th>Degree</th>
                    <th>Year</th>
                    <th>College</th>
                    <th>Subjects</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ng-pristine ng-invalid ng-star-inserted ng-touched">
                    <td>
                      <input
                        type="text"
                        name="degree"
                        className="profile-form-control from-control"
                        value={item?.degree || ""}
                        disabled
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="year"
                        className="profile-form-control from-control"
                        value={item?.year || 0}
                        disabled
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="college"
                        className="profile-form-control from-control"
                        value={item?.college || ""}
                        disabled
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="subjects"
                        className="profile-form-control from-control"
                        value={item?.subjects || ""}
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
            {profile?.professionalExperience.length > 0 && (
              <div className="md:col-span-2 col-span-1 text-black font-bold">
                <span>Professional Experience</span>
              </div>
            )}
            {profile?.professionalExperience.map((item, idx) => (
              <table className="table table-bordered md:col-span-2 col-span-1">
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Organization</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ng-pristine ng-invalid ng-star-inserted ng-touched">
                    <td>
                      <input
                        type="date"
                        name="From"
                        className="profile-form-control from-control"
                        value={handleDate(item?.from) || ""}
                        disabled
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="To"
                        className="profile-form-control from-control"
                        value={handleDate(item?.to) || ""}
                        disabled
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="organizationName"
                        className="profile-form-control from-control"
                        value={item?.organizationName || ""}
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
            <div className="md:col-span-2 col-span-1"></div>

            <div>
              <p>Available for Mentoring: &nbsp; <b>{profile?.availableForMentoring ? 'YES' : 'NO'}</b></p>
            </div>

            <div>
              <p>Area of Research: &nbsp; <b>{profile?.area_of_research?.area_of_research}</b></p>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-10">
        <div className="column-title ">
          Make a match for <span className="shape-bg"> {area}</span>
        </div>
      </div>

      <div className="xl:col-span-7 lg:col-span-6 col-span-12">
        <div className="bg-white shadow-box7 p-8 rounded-md">
          <form
            onSubmit={(e)=>handleMakeMatch(e)}
            className="profile-form md:grid-cols-1 grid grid-cols-1 gap-[30px] mt-6"
          >
            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              className="profile-form-control from-control"
              placeholder="Compose your email body here..."
              required
              rows={10}
              cols={50}
            />
            <div className="mini-title">Note: Mail would be sent to mentor and mentee</div>
            <button type="submit" className="btn px-8 py-[11px] bg-black text-white hover:bg-primary text-center" style={{maxWidth:"12rem"}}>
              Make a Match
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MatchesProfileView;

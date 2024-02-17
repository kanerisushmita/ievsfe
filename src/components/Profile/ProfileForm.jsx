import React, { useEffect, useRef, useState } from "react";
import useRazorpay from "react-razorpay";
import crypto from "crypto";
import { useNavigate } from "react-router-dom";
import { updateMember } from "../../apis/member";
import Toast from "../../utils/Toast";
import member_types from "../Membership/member_types";
import { updateUser } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addAreaOfResearch, getAllAreaOfResearches, getAreaOfResearchById, getAreaOfResearchByName } from "../../apis/areaOfResearch";
import { reqMentor } from "../../apis/reqMentor";

const ProfileForm = ({ userDetails }) => {
  const finishBtn = useRef(null);
  const payBtn = useRef(null);

  const [Razorpay] = useRazorpay();

  const [fullName, setFullName] = useState("");
  const [memberType, setMemberType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [fax, setFax] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");

  const [educationQualifications, setEducationQualifications] = useState("");
  const [qualificationCount, setQualificationCount] = useState("");

  const [experienceCount, setExperienceCount] = useState("");
  const [professionalExperience, setProfessionalExperience] = useState("");
  const [labLink, setLabLink] = useState("");
  const [availableForMentoring, setAvailableForMentoring] = useState("");
  const [makeProfilePublic, setMakeProfilePublic] = useState("");

  // Area of Research Starts

  // const reqMentorBtn = useRef(null);
  const currentUser = useSelector((state) => state.user);
  console.log("CurrentUser: ", currentUser);

  const [otherInputVisible, setOtherInputVisible] = useState(false);
  const [userAreaOfResearch, setUserAreaOfResearch] = useState({});

  const handleDropdownChange = (event) => {
    setResearchType(event.target.value);
    console.log("Research Type: ", researchType);

    if (event.target.value === 'other') {
      setOtherInputVisible(true);
    } else {
      setOtherInputVisible(false);
    }
  };

  const [researchType, setResearchType] = useState("");
  const [newAreaOfResearch, setNewAreaOfResearch] = useState("");
  const [researchTypes, setResearchTypes] = useState([]);

  useEffect(() => {
    let allArea = getAllAreaOfResearches().then((res) => {
      console.log("response :", res.data.data);
      setResearchTypes(...researchTypes, res.data.data);
    }).catch((e) => console.log("Error: ", e));
    console.log("AllArea : ", allArea);
    console.log("ResearchTypes : ", researchTypes);
  }, []);

  const findArea = (input) => {
    let res = "";
    researchTypes.map((item) => {
      if (input === item?.area_of_research) {
        return res += item._id;
      }
    });
    return res;
  }

  // Area of Research Ends

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [charges, setCharges] = useState({ fee: "", currency: "" });

  useEffect(() => {

    // Update charges
    let type = member_types?.filter(
      (type) => type.short_name === userDetails?.memberType
    )[0];
    setCharges({ fee: type?.fee, currency: type?.currency });

    setPhoneNumber(userDetails?.phoneNumber || "");
    setMemberType(userDetails?.memberType || "");
    setFullName(userDetails.fullName || "");
    setDesignation(userDetails.designation || "");
    setAffiliation(userDetails.affiliation || "");
    setTitle(userDetails.title || "");
    setOrganization(userDetails.organization || "");
    setAddress(userDetails.address || "");
    setFax(userDetails.fax || "");
    setDob(userDetails.dob || "");
    setGender(userDetails.gender || "male");
    // setUserAreaOfResearch(userDetails.area_of_research || "");
    console.log("AOR: ", userDetails);
    getAreaOfResearchById(userDetails.area_of_research).then((response) => {
      console.log("console in res.getAreaByID ", response.data.area_of_research);

      setUserAreaOfResearch(response.data);
    }).catch((e) => {
      console.log("Error", e);
    });

    const initialEducationQualifications =
      userDetails?.educationQualifications || [
        {
          degree: "",
          year: "",
          college: "",
          subjects: "",
        },
      ];
    setEducationQualifications(initialEducationQualifications);

    const initialEducationQualificationsCount =
      userDetails?.educationQualifications?.length || 1;
    setQualificationCount(initialEducationQualificationsCount);

    const initialExperienceCount =
      userDetails?.professionalExperience?.length || 1;
    const initialProfessionalExperience =
      userDetails?.professionalExperience || [
        {
          from: "",
          to: "",
          organizationName: "",
        },
      ];
    setExperienceCount(initialExperienceCount);
    setProfessionalExperience(initialProfessionalExperience);

    setLabLink(userDetails.labLink || "");
    setAvailableForMentoring(userDetails.availableForMentoring || false);
    setMakeProfilePublic(userDetails.makeProfilePublic || false);
  }, [userDetails]);

  useEffect(() => {
    console.log("UseEffect AOR: ", userAreaOfResearch);
  }, [userAreaOfResearch])

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newArea = { area_of_research: newAreaOfResearch.toLocaleUpperCase() };
    finishBtn.current.disabled = true;
    try {

      if (otherInputVisible) {
        let addNewArea = await addAreaOfResearch(newArea);
        console.log("Add New Area ID : ", addNewArea.data.message._id);

        if (addNewArea.success) {

          var res = addNewArea.data.message._id;
          console.log("If Block res: ", res);
          // setUserAreaOfResearch(addNewArea.data.message._id);
          // console.log("Else Block UserResearch: ",userAreaOfResearch);

        } else {
          Toast("Error Adding New Research Area", "error");
          finishBtn.current.disabled = false;
          return;
        }
      } else {
        let research = await findArea(researchType);
        console.log("research: ", research);

        var res = research;
        console.log("Else Block res: ", res);

        // setUserAreaOfResearch(research);
        // console.log("Else Block UserResearch: ",userAreaOfResearch);
      }

      // console.log("varRes: ",res);
      console.log("UserAreaOfResearch: ", userAreaOfResearch.area_of_research);
      console.log("UserAreaOfResearch: ", userAreaOfResearch._id);

      const data = {
        memberType,
        // email,
        phoneNumber,
        fullName,
        designation,
        affiliation,
        title,
        organization,
        address,
        labLink,
        makeProfilePublic,
        availableForMentoring,
        fax,
        dob,
        gender,
        educationQualifications,
        professionalExperience,
        area_of_research: res ? res : userAreaOfResearch._id,
      };
      updateMember(userDetails?._id, data)
        .then((res) => {
          finishBtn.current.disabled = false;
          if (res.data.success) {
            Toast("Member updated successfully", "success");
          }
        })
        .catch((error) => {
          Toast(error.response.data.message, "error");
          finishBtn.current.disabled = false;
        });

    } catch (e) {
      Toast(e.response.data.message, "error");
      finishBtn.current.disabled = false;
      console.log("Error: ", e);
    }

  };

  const generateSignature = (paymentId) => {
    const signatureData = paymentId;
    const hmac = crypto.createHmac(
      "sha256",
      import.meta.env.VITE_APP_RAZORPAY_WEBHOOK_SECRET
    );
    hmac.update(signatureData);
    return hmac.digest("hex");
  };

  const handlePayment = async () => {
    const options = {
      key: import.meta.env.VITE_APP_RAZORPAY_KEY_ID,
      amount: Number(charges?.fee + "00"),
      currency: charges?.currency,
      name: "IEVS",
      description: "Test Transaction - Membership fee",
      image: "https://exosome-rna.com/wp-content/uploads/2023/12/ievs.jpg",
      // order_id: Math.floor(Date.now() / 1000),
      handler: function (response) {
        let paymentId = response?.razorpay_payment_id;
        let signature = generateSignature(paymentId);
        const data = {
          paymentId,
          signature,
        };
        updateMember(userDetails?._id, data)
          .then((res) => {
            payBtn.current.disabled = false;
            if (res.data.success) {
              dispatch(updateUser({ status: 'ACTIVE' }))
              Toast("Membership fee received!", "success");
            }
          })
          .catch((error) => {
            Toast(error.response.data.message, "error");
            payBtn.current.disabled = false;
          });
      },
      prefill: {
        name: "John Doe",
        email: "igaimerca@gmail.com",
        contact: "250793082404",
      },
      notes: {
        address: "India",
      },
      theme: {
        color: "rgb(255, 126, 132)",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      Toast(response.error.code.description);
      console.log(response.error);
    });

    rzp1.open();
  };
  const handlePayMembershipFee = async (e) => {
    e.preventDefault();

    let confirmation = confirm(
      "You're going to pay " + charges?.fee + " " + charges?.currency
    );
    if (confirmation) {
      handlePayment();
    } else {
      alert("Payment cancelled!");
    }
  };

  const handleDate=(d)=>{
    const date = new Date(d);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return userDetails ? (
    <form
      onSubmit={handleSubmit}
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
          placeholder="Full Name"
          value={fullName}
          required
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="memberType">Member Type</label>
        <select
          className="from-control"
          required
          onChange={(e) => setMemberType(e.target.value)}
          value={memberType}
        >
          <option value="" disabled selected={!memberType}>
            Select Member Type*
          </option>
          {member_types?.map((type, index) => (
            <option
              selected={memberType === type?.short_name}
              value={type?.short_name}
              key={index}
            >
              {type?.name} {type?.currency}
              {type?.fee} ({type?.year_range})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          className="from-control"
          placeholder="Phone Number"
          value={phoneNumber}
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="designation">Designation</label>
        <input
          type="text"
          className="from-control"
          placeholder="Designation"
          value={designation}
          required
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="affiliation">Affiliation</label>
        <input
          type="text"
          className="from-control"
          placeholder="Affiliation"
          value={affiliation}
          required
          onChange={(e) => setAffiliation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <select
          className="from-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option value="" disabled selected>
            Select Your Title
          </option>
          <option value="Prof.">Prof.</option>
          <option value="Dr.">Dr.</option>
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
        </select>
      </div>
      <div>
        <label htmlFor="organization">Organization</label>
        <input
          type="text"
          className="from-control"
          placeholder="Organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="from-control"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fax">Fax</label>
        <input
          type="text"
          className="from-control"
          placeholder="Fax"
          value={fax}
          onChange={(e) => setFax(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          className="from-control"
          placeholder="Date of Birth"
          value={handleDate(dob)}
          onChange={(e) => setDob(e.target.value)}
        />
        <small>
          <i>Date of Birth</i>
        </small>
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select
          className="from-control"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="labLink">Lab Link</label>
        <input
          type="text"
          className="from-control"
          placeholder="Lab Link"
          value={labLink}
          onChange={(e) => setLabLink(e.target.value)}
        />
      </div>
      <div className="md:col-span-2 col-span-1 text-black font-bold">
        <span>Educational Qualifications</span>
      </div>
      {Array.from({ length: qualificationCount }, (i, idx) => (
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
                  placeholder="Enter Degree"
                  name="degree"
                  className="profile-form-control from-control"
                  value={educationQualifications[idx]?.degree || ""}
                  onChange={(e) =>
                    setEducationQualifications((prev) => {
                      let updatedQualifications = [...prev];
                      updatedQualifications[idx] =
                        updatedQualifications[idx] || {};
                      updatedQualifications[idx].degree = e.target.value;
                      return updatedQualifications;
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Enter Year"
                  name="year"
                  className="profile-form-control from-control"
                  value={educationQualifications[idx]?.year || 0}
                  onChange={(e) =>
                    setEducationQualifications((prev) => {
                      let updatedQualifications = [...prev];
                      updatedQualifications[idx] =
                        updatedQualifications[idx] || {};
                      updatedQualifications[idx].year = parseInt(
                        e.target.value,
                        10
                      );
                      return updatedQualifications;
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter College"
                  name="college"
                  className="profile-form-control from-control"
                  value={educationQualifications[idx]?.college || ""}
                  onChange={(e) =>
                    setEducationQualifications((prev) => {
                      let updatedQualifications = [...prev];
                      updatedQualifications[idx] =
                        updatedQualifications[idx] || {};
                      updatedQualifications[idx].college = e.target.value;
                      return updatedQualifications;
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Subjects"
                  name="subjects"
                  className="profile-form-control from-control"
                  value={educationQualifications[idx]?.subjects || ""}
                  onChange={(e) =>
                    setEducationQualifications((prev) => {
                      let updatedQualifications = [...prev];
                      updatedQualifications[idx] =
                        updatedQualifications[idx] || {};
                      updatedQualifications[idx].subjects = e.target.value;
                      return updatedQualifications;
                    })
                  }
                />
              </td>
              <td>
                <p
                  onClick={() => setQualificationCount(qualificationCount - 1)}
                  className="cursor-pointer btn btn-sm btn-primary ml-2"
                  disabled={idx === 0}
                >
                  Remove
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
      <p
        onClick={() => {
          setQualificationCount(qualificationCount + 1);
        }}
        className="cursor-pointer whitespace-nowrap btn-sm btn btn-black lg:w-1/2"
      >
        Add Qualification
      </p>
      <div className="md:col-span-2 col-span-1 text-black font-bold">
        <span>Professional Experience</span>
      </div>
      {Array.from({ length: experienceCount }, (i, idx) => (
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
                  value={handleDate(professionalExperience[idx]?.from) || ""}
                  onChange={(e) =>
                    setProfessionalExperience((prev) => {
                      let updatedExperience = [...prev];
                      updatedExperience[idx] = updatedExperience[idx] || {};
                      updatedExperience[idx].from = e.target.value;
                      return updatedExperience;
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="date"
                  name="To"
                  className="profile-form-control from-control"
                  value={handleDate(professionalExperience[idx]?.to) || ""}
                  onChange={(e) =>
                    setProfessionalExperience((prev) => {
                      let updatedExperience = [...prev];
                      updatedExperience[idx] = updatedExperience[idx] || {};
                      updatedExperience[idx].to = e.target.value;
                      return updatedExperience;
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Organization Name"
                  name="organizationName"
                  className="profile-form-control from-control"
                  value={professionalExperience[idx]?.organizationName || ""}
                  onChange={(e) =>
                    setProfessionalExperience((prev) => {
                      let updatedExperience = [...prev];
                      updatedExperience[idx] = updatedExperience[idx] || {};
                      updatedExperience[idx].organizationName = e.target.value;
                      return updatedExperience;
                    })
                  }
                />
              </td>
              <td>
                <p
                  onClick={() => setExperienceCount(experienceCount - 1)}
                  className="cursor-pointer btn btn-sm btn-primary ml-2"
                  disabled={idx === 0}
                >
                  Remove
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
      <p
        onClick={() => setExperienceCount(experienceCount + 1)}
        className="cursor-pointer whitespace-nowrap btn-sm btn btn-black lg:w-1/2"
      >
        Add Professional Experience
      </p>
      <div className="md:col-span-2 col-span-1"></div>


      {/* area of research start */}
      {/* <form onSubmit={handleAreaOfResearch} className="flex flex-col gap-5 py-4"> */}
      <div className="w-full">
        <small>
          Area of Research
        </small>
        {otherInputVisible && (
          <input
            className=" from-control"
            type="text"
            onChange={(e) => {
              setResearchType(e.target.value)
              setNewAreaOfResearch(e.target.value)
            }}
            placeholder="Enter area of research"
          />
        )}

        {!otherInputVisible && (
          <select
            className="from-control"
            onChange={handleDropdownChange}
            value={researchType}
          >
            <option value="" disabled selected={!researchType}>
              Select Area of Research*
            </option>
            {researchTypes.length ? (
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
            ) : (
              <option value="" disabled selected={!researchType}>
                No Area of Researches Yet*
              </option>
            )}
            <option value="other">Choose Manually</option>
          </select>
        )}
      </div>
      {userAreaOfResearch && (
        <span style={{ marginTop: "2.4rem" }}>
          <strong>
            {userAreaOfResearch.area_of_research}
          </strong>
        </span>
      )}

      {/* <div className="flex justify-center gap-5">
            <button
              type="submit"
              ref={reqMentorBtn}
              className="lg:w-1/2 btn btn-primary btn-md mt-[10px]"
            >
              Choose Area of Research
            </button>
          </div>
        </form> */}

      {/* area of research ends */}

      <div className="md:col-span-2 col-span-1"></div>
      <div>
        <input
          id="available-for-mentoring"
          type="checkbox"
          checked={availableForMentoring}
          onChange={() => setAvailableForMentoring(!availableForMentoring)}
        />
        &nbsp;
        <label htmlFor="available-for-mentoring">Available for Mentoring</label>
      </div>
      <div>
        <input
          id="make-profile-public"
          type="checkbox"
          checked={makeProfilePublic}
          onChange={() => setMakeProfilePublic(!makeProfilePublic)}
        />
        &nbsp;
        <label htmlFor="make-profile-public">Make Profile Public</label>
      </div>
      <div></div>
      <div className="whitespace-nowrap flex gap-5">
        {userDetails?.status === "ACTIVE" ? (
          <button
            onClick={() => navigate(`/member/${userDetails?.memberID}`)}
            className="btn-black lg:w-1/2 btn"
          >
            View Mode
          </button>
        ) : (
          <button
            ref={payBtn}
            onClick={handlePayMembershipFee}
            className="lg:w-1/2 btn btn-black"
          >
            Pay {charges.currency} {charges.fee} fee
          </button>
        )}
        <button
          ref={finishBtn}
          name="submit"
          role="submit"
          className="lg:w-1/2 btn btn-primary"
        >
          Save Changes
        </button>
      </div>
    </form>
  ) : (
    <></>
  );
};

export default ProfileForm;

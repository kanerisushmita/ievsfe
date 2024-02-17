import React, { useEffect, useState } from "react";
import { getMemberByMemberID } from "../../apis/member";
import Toast from "../../utils/Toast";
import Footer from "../Footer";
import Header from "../Header";
import { useParams } from "react-router-dom";

const ProfileView = () => {
  const { memberID } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    getMemberByMemberID(memberID)
      .then((res) => {
        setProfile(res.data?.data);
      })
      .catch((error) => {
        Toast(error.response.data.message, "error");
      });
  }, [memberID]);

  const handleDate=(d)=>{
    const date = new Date(d);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <Header stickActive={true} />
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
          <div className="text-center mt-10">
            <div className="column-title ">
              <span className="shape-bg">IEVS</span> Member Profile
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileView;

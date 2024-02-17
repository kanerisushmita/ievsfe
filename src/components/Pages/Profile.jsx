import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import ProfileForm from "../Profile/ProfileForm";
import { useSearchParams } from "react-router-dom";
import ProfileView from "../Profile/ProfileView";
import { useDispatch, useSelector } from "react-redux";
import { upload } from "../../utils/fileUploadUtil";
import Toast from "../../utils/Toast";
import { updateMember } from "../../apis/member";
import { updateUser } from "../../redux/userSlice";

const Profile = () => {
  const DEFAULT_PROFILE = "https://ievs.s3.ap-south-1.amazonaws.com/profile/default-profile.png";
  const { data: userDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(userDetails?.profilePicture ? userDetails?.profilePicture : DEFAULT_PROFILE);

  const profileInput = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageURL(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      return;
    }
    const stamp = Math.floor(Date.now() / 1000);
    const dirName = `profile`;
    const fileType = image.type.split('/')[1];
    const fileName = `${stamp}_${userDetails?.memberID}.${fileType}`;

    try {
      const imageUrl = await upload(dirName, image, fileName);
      const data = await updateMember(userDetails?._id, { profilePicture: imageUrl });
      if (data.success) {
        dispatch(updateUser({ profilePicture: imageUrl }))
        Toast("Profile Updated Successfully", "success");
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      Toast(error.response.data.message, "error");
    }
  };


  useEffect(() => {
    if (imageURL !== DEFAULT_PROFILE) {
      handleUpload();
    }
  }, [image, imageURL])
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
                  onClick={() => profileInput.current.click()}
                  src={imageURL}
                  alt="profile"
                  style={{ width: "270px", height: "270px", objectFit: "cover" }}
                  className="border-2 border-[#ECECEC] cursor-pointer w-full h-full object-cover rounded-full"
                />
                <div className="absolute right-0 bottom-0 flex flex-col justify-end items-end">
                  <label htmlFor="imageInput" onClick={() => profileInput.current.click()}>
                    <button
                      type="button"
                      className="h-12 w-12 bg-secondary text-white rounded-tl-md flex flex-col items-center justify-center"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.01"
                          width="18"
                          height="18"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 2.25C9.62132 2.25 10.125 2.75368 10.125 3.375V7.875H14.625C15.2463 7.875 15.75 8.37868 15.75 9C15.75 9.62132
                                    15.2463 10.125 14.625 10.125H10.125V14.625C10.125 15.2463 9.62132 15.75 9 15.75C8.37868 15.75 7.875 15.2463 7.875
                                    14.625V10.125H3.375C2.75368 10.125 2.25 9.62132 2.25 9C2.25 8.37868 2.75368 7.875 3.375 7.875H7.875V3.375C7.875 2.75368
                                    8.37868 2.25 9 2.25Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </label>
                  <input
                    ref={profileInput}
                    type="file"
                    id="imageInput"
                    accept="image/png, image/jpeg, image/webp"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <div className="bg-white shadow-box7 p-8 rounded-md">
              <ProfileForm profilePicture={imageURL} userDetails={userDetails} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

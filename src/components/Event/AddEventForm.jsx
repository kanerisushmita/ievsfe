import React, { useRef, useState } from 'react';
import Header from '../Header';
import PageBanner from '../PageBanner';
import { useNavigate, useParams } from 'react-router-dom';
import { upload } from '../../utils/fileUploadUtil';
import Toast from '../../utils/Toast';
import { createEvent } from '../../apis/event';

const AddEventForm = () => {
  const [venue, setVenue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [speakerName, setSpeakerName] = useState('');
  const [speakerOccupation, setSpeakerOccupation] = useState('');
  const [speakerBio, setSpeakerBio] = useState('');
  const [topic, setTopic] = useState('');
  const [joiningLink, setJoiningLink] = useState('');
  const [eventImage, setEventImage] = useState('');
  const [category, setCategory] = useState('');

  const submitBtn = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent({ venue, startDate, endDate, startTime, endTime, eventType, speaker: { name: speakerName, occupation: speakerOccupation, bio: speakerBio }, topic, joiningLink, eventImage, category })
      .then((res) => {
        submitBtn.current.disabled = false;
        if (res.data.success) {
          Toast("Event registered successfully", "success");
          navigate("/event")
        }
      })
      .catch((error) => {
        console.log(error)
        Toast(error.response.data.message, "error");
        submitBtn.current.disabled = false;
      });
  };

  const handleEventImageChange = async (e) => {
    const image = e.target.files[0];
    if (image) {
      const stamp = Math.floor(Date.now() / 1000);
      const dirName = `event`;
      const fileType = image.type.split('/')[1];
      const fileName = `${stamp}.${fileType}`;

      try {
        const imageUrl = await upload(dirName, image, fileName);
        setEventImage(imageUrl);
        console.log("Event Image Uploaded Successfully");
      } catch (error) {
        console.error('Error uploading image:', error);
        Toast(error.response.data.message, "error");
      }
    }
  }

  return (
    <>
      <Header stickActive={true} />
      <PageBanner title={"Add Event"} pageTitle={"Add Event"} />
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
          <form onSubmit={handleSubmit} className="profile-form md:grid-cols-2 grid grid-cols-1 gap-[30px]">
            <div className="md:col-span-2 col-span-1 text-black font-bold">
              <span>Event Information</span>
            </div>
            <div>
              <label htmlFor="venue">Venue</label>
              <input
                type="text"
                className="from-control"
                value={venue}
                required
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="topic">Topic</label>
              <input
                type="text"
                className="from-control"
                value={topic}
                required
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Start Date</label>
              <input
                type="date"
                className="from-control"
                value={startDate ? new Date(startDate).toISOString().split('T')[0] : ''}
                required
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">End Date</label>
              <input
                type="date"
                className="from-control"
                value={endDate ? new Date(endDate).toISOString().split('T')[0] : ''}
                required
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="startTime">Start Time</label>
              <input
                type="text"
                className="from-control"
                value={startTime}
                placeholder="e.g: 08:00"
                required
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="endTime">End Time</label>
              <input
                type="text"
                className="from-control"
                placeholder="e.g: 10:00"
                value={endTime}
                required
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="speakerName">Event Type</label>

              <select
                className="from-control"
                required
                defaultValue={""}
                onChange={(e) => setEventType(e.target.value)}
                value={eventType}
              >
                <option value="" disabled selected={!eventType}>
                  Select Event Type*
                </option>
                {["Journal Club", "Training / Workshop", 'Webinars', 'Meetings']?.map((type, index) => (
                  <option
                    selected={eventType === type}
                    value={type}
                    key={index}
                  >
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="speakerName">Speaker Name</label>
              <input
                type="text"
                className="from-control"
                value={speakerName}
                onChange={(e) => setSpeakerName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="speakerOccupation">Speaker Occupation</label>
              <input
                type="text"
                className="from-control"
                value={speakerOccupation}
                onChange={(e) => setSpeakerOccupation(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="speakerBio">Speaker Bio</label>
              <input
                type="text"
                className="from-control"
                value={speakerBio}
                onChange={(e) => setSpeakerBio(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="joiningLink">Joining Link</label>
              <input
                type="text"
                className="from-control"
                value={joiningLink}
                onChange={(e) => setJoiningLink(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="from-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div></div>
            <div>
              <label htmlFor="eventImage">Event Image</label>
              <input
                type="file"
                className="from-control"
                placeholder="Event Image"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleEventImageChange}
              />
            </div>
            <div className="md:col-span-2 col-span-1"></div>
            <button
              onClick={() => navigate("/event")}
              className="btn btn-black"
            >
              Cancel
            </button>
            <button
              ref={submitBtn}
              name="submit"
              role="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>

  );
};

export default AddEventForm;

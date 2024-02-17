import React, { useEffect, useState } from "react";
import { getEventsByEventType, subscribeEvent } from "../apis/event";
import Toast from "../utils/Toast";
import { useNavigate } from "react-router-dom";
import "./EventDetails.css";
import moment from 'moment';
import { useSelector } from "react-redux";
import { AddToCalendarButton } from 'add-to-calendar-button-react';


const EventDetails = (props) => {
  const navigate = useNavigate();
  const { data: userDetails } = useSelector((state) => state.user);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    if (props?.event && props.event?.title) {
      getEventsByEventType(props.event.title)
        .then((res) => {
          setEvents(res.data?.data);
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }, [props.event.title]);

  const handleEventSubscribe = (event_id) => {
    let data = { event: event_id, member: userDetails?._id };
    subscribeEvent(data)
      .then((res) => {
        if (res.data && !res.data.message) {
          Toast("Event Subscribed!", "success");
          window.location.reload();
        }
        if (res.data?.message && res.data?.status != 200) {
          Toast(res.data.message, "error")
        }
      })
      .catch((error) => {
        console.log(error)
        Toast(error.response.data.message, "error");
        submitBtn.current.disabled = false;
      });
  }
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <img src={props.event.img} alt="" className=" lg:mb-10 mb-6 block w-full" />
        <div className="grid grid-cols-8 gap-[30px]">
          <div className="lg:col-span-8 col-span-12 text-center">
            <h3>{props.event.heading}</h3>
            <div className="lg:my-6 px-8">
              {props.event.paragraph}
            </div>
            {props.event.subheading1 &&
              <div className=" py-6">
                <div className="mini-title ">{props.event.subheading1}</div>
                {props.event.subheading1_content}
              </div>
            }
            {props.event.subheading2 &&
              <div className=" py-6">
                <div className="mini-title ">{props.event.subheading2}</div>
                {props.event.subheading2_content}
              </div>
            }
            {props.event.subheading3 &&
              <div className=" py-6">
                <div className="mini-title ">{props.event.subheading3}</div>
                {props.event.subheading3_content}
              </div>
            }
            {events && events?.length > 0 ? events.map((event, index) => (
              <div key={index} className="flex justify-between border-y border-[#ECECEC] py-4 md:mt-12 mt-10">
                <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
                  <div className="wdiget custom-text space-y-4">
                    <h5 className="widget-title mb-0">{event?.topic}</h5>
                    <div class="banner-img">
                      <img className="rounded-md" src={event?.eventImage ? event.eventImage : "http://via.placeholder.com/640x360"} alt="Image 1" style={{ maxHeight: '15rem', width: '100%', objectFit: "cover" }} />
                    </div>
                    <ul className="list space-y-4">
                      <li className=" flex space-x-3 ">
                        <div className="flex-1 space-x-3 flex">
                          <span className="text-lg  text-secondary">
                            <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                          </span>
                          <div>Start: {event?.startDate} {event?.startTime}</div>
                        </div>
                      </li>
                      <li className=" flex space-x-3 ">
                        <div className="flex-1 space-x-3 flex">
                          <span className="text-lg  text-secondary">
                            <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                          </span>
                          <div>End: {event?.endDate} {event?.endTime}</div>
                        </div>
                      </li>
                      <li className=" flex space-x-3 ">
                        <div className="flex-1 space-x-3 flex">
                          <span className="text-lg  text-secondary">
                            <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                          </span>
                          <div>{event?.venue}</div>
                        </div>
                      </li>
                      <li className=" flex space-x-3 ">
                        <div className="flex-1 space-x-3 flex">
                          <span className="text-lg  text-secondary">
                            <iconify-icon icon="heroicons:microphone"></iconify-icon>
                          </span>
                          {event?.speaker && (
                            <div>{event?.speaker.name}, {event?.speaker.occupation}</div>
                          )}
                        </div>
                      </li>
                      <li className=" flex space-x-3 ">
                        <div className="flex-1 space-x-3 flex">
                          <span className="text-lg  text-secondary">
                            <iconify-icon icon="heroicons:bell-alert"></iconify-icon>
                          </span>
                          <div>
                            {event?.subscribed ? 'Subscribed' : 'Not yet Subscribed'}
                          </div>
                        </div>
                      </li>
                      <li className=" flex space-x-3 ">
                        <div className="flex-1 space-x-3 flex">
                          <span className="text-lg  text-secondary">
                            <iconify-icon icon="heroicons:link"></iconify-icon>
                          </span>
                          {event?.joiningLink && (
                            <div><a className="text-secondary" target="_blank" href={event?.joiningLink}>Joining link</a></div>
                          )}
                        </div>
                      </li>
                    </ul>
                    {event?.subscribed ? (
                      <div className="w-full flex justify-center items-center">
                        <AddToCalendarButton
                          name={event?.topic}
                          options={['Apple', 'Google', 'Outlook.com', 'Yahoo']}
                          location={event?.venue}
                          startDate={event?.startDate}
                          endDate={event?.endDate}
                          startTime={event?.startTime}
                          endTime={event?.endTime}
                          timeZone="America/Los_Angeles"
                        ></AddToCalendarButton>
                      </div>
                    ) : (
                      <button onClick={() => handleEventSubscribe(event?._id)} className="w-full btn btn-primary btn-sm text-md">
                        Subscribe Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )) : (
              <div>No events yet</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

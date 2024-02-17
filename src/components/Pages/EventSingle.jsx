import React from "react";
import EventDetails from "../EventDetails";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const EventSingle = (props) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const eventsProps = {
    title: urlSearchParams.get("title"),
    img: urlSearchParams.get("img"),
    heading: urlSearchParams.get("heading"),
    paragraph: urlSearchParams.get("paragraph"),
    subheading1: urlSearchParams.get("subheading1"),
    subheading1_content: urlSearchParams.get("subheading1_content"),
    subheading2: urlSearchParams.get("subheading2"),
    subheading2_content: urlSearchParams.get("subheading2_content"),
    subheading3: urlSearchParams.get("subheading3"),
    subheading3_content: urlSearchParams.get("subheading3_content"),
    guest_name: urlSearchParams.get("guest_name"),
    guest_designation: urlSearchParams.get("guest_designation"),
    guest_img: urlSearchParams.get("guest_img"),
    date: urlSearchParams.get("date"),
    location: urlSearchParams.get("location"),
  };
  return (
    <>
      <Header />
      <PageBanner title={eventsProps.title} pageTitle={"Events"} />
      <EventDetails event={eventsProps} />
      <Footer />
    </>
  );
};

export default EventSingle;

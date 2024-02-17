import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import './EventCalendar.css';

const events = [
  {
    title: 'Society Launch',
    start: new Date(2023, 11, 2),
    end: new Date(2023, 11, 2),
    topic: 'Topic 1',
    speaker: 'Speaker 1',
  },
  // Add more events as needed
];

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(()=>{
    calculateAlternateThursdays(new Date('2023-12-18'),new Date('2024-12-31'));
    remDuplicates(events);
  },[]);


const  remDuplicates=(events)=>{
      // Create a lookup object to keep track of unique start values
    const lookupObject = {};

    // Iterate over the array to remove duplicates in place
    for (let i = events.length - 1; i >= 0; i--) {
      const obj = events[i];
      const startValue = obj.start;

      // If the start value is already in the lookup object, remove the object
      if (lookupObject[startValue]) {
        events.splice(i, 1);
      } else {
        // If the start value is not in the lookup object, add it
        lookupObject[startValue] = true;
      }
    }
  }

  const alternateThursdays=[];

  const calculateAlternateThursdays=(startDate,endDate)=>{
    let currentDate=new Date(startDate);
    while(currentDate <= endDate){
      while(currentDate.getDay() !== 4){
        currentDate.setDate(currentDate.getDate()+1);
      }

      alternateThursdays.push(new Date(currentDate));
        events.push({
          start:new Date(currentDate),
          end:new Date(currentDate),
          title:"TinyTalk Series 9am-10am",
          topic:chooseTopic(currentDate),
          speaker:chooseSpeaker(currentDate),
        });

      currentDate.setDate(currentDate.getDate()+14);
    }
  }

  const chooseTopic= (currentDate)=>{
    let formattedDate = currentDate.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'Asia/Kolkata' // Adjust to your timezone
    });
    // console.log("Date: ",formattedDate);

    if(formattedDate === "01/04/2024"){
      return "Diagnostic/Screening potential of sEVs in Neurodegenerative Disseases";
    }else if(formattedDate === "01/18/2024"){
      return "Efficient Isolation of small EVs";
    }else if(formattedDate === "02/01/2024"){
      return "Implications of sEVs in Pancreatic Neuroendocrine tumors";
    }else if(formattedDate === "02/15/2024"){
      return "Variations in sEV Lipid in different disease conditions";
    }else if(formattedDate === "02/29/2024"){
      return "Differential expression of Sox2, Olig2, and Zeb1 in serum-derived extracellular vesicles: Implications for Mithramycin sensitivity and Targeted Therapy in High-Grade";
    }else if(formattedDate === "03/28/2024"){
      return "Plant-Based Extracellular Vesicles for Calcitriol Drug Delivery in Nutraceutical Applications: An In Vitro Approach";
    }else if(formattedDate === "04/11/2024"){
      return "Diagnostic Potential of Blood-Derived Neurofilament Light from Neuronal Extracellular Vesicles as a Biomarker in Multiple Sclerosis";
    }else if(formattedDate === "04/25/2024"){
      return "Role of Urinary Extracellular Vesicles in the Diagnosis of Allograft Dysfunction and Monitoring of Renal Transplant Patients";
    }else if(formattedDate === "05/09/2024"){
      return "Role of sEV miRNA in PD";
    }else{
      return "";
    }
  }
  const chooseSpeaker= (currentDate)=>{
    let formattedDate = currentDate.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'Asia/Kolkata' // Adjust to your timezone
    });
    // console.log("Date: ",formattedDate);

    if(formattedDate === "01/04/2024"){
      return "Sanskriti";
    }else if(formattedDate === "01/18/2024"){
      return "Prahlad";
    }else if(formattedDate === "02/01/2024"){
      return "Priya";
    }else if(formattedDate === "02/15/2024"){
      return "Sadaqa";
    }else if(formattedDate === "02/29/2024"){
      return "Sreekanth";
    }else if(formattedDate === "03/28/2024"){
      return "Kartik";
    }else if(formattedDate === "04/11/2024"){
      return "Parveena";
    }else if(formattedDate === "04/25/2024"){
      return "Anula";
    }else if(formattedDate === "05/09/2024"){
      return "Sanskriti";
    }else{
      return "";
    }
  }

  const handleEventClick = event => {
    setSelectedEvent(event);
  };

  const handleModalClose = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="responsive-calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        onSelectEvent={handleEventClick}
        style={{ height: '90%' }}
      />

      <Modal
        isOpen={!!selectedEvent}
        onRequestClose={handleModalClose}
        contentLabel="Event Details"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedEvent && (
          <div>
            <h2 style={{color:"rgb(48 190 173 / var(--tw-text-opacity))",fontSize:"2rem"}}>{selectedEvent.title}</h2>
            <p>
              <strong>Topic:</strong> {selectedEvent.topic}
            </p>
            <p>
              <strong>Speaker:</strong> {selectedEvent.speaker}
            </p>
            <button onClick={handleModalClose} style={{color:"red"}}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EventCalendar;

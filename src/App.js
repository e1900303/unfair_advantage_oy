import React, { useState } from "react";
import "./App.css";
import { daysOfWeek, timesInDay } from "./days_and_times";
import TimeTable from "./components/TimeTable";
import EventForm from "./components/EventForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCellIndex, setSelectedCellIndex] = useState(-1);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [newHours, setNewHours] = useState("");

  const handleCellClick = (day, time) => {
    const index =
      daysOfWeek.indexOf(day) * timesInDay.length + timesInDay.indexOf(time);
    setSelectedCellIndex(index);
    setShowForm(true);
  };

  function handleCloseForm() {
    setSelectedCellIndex(-1);
    setShowForm(false);
    setNewEvent("");
    setNewHours("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvents = [...events];
    newEvents[selectedCellIndex] = { event: newEvent, hours: newHours };
    setEvents(newEvents);
    setSelectedCellIndex(-1);
    setShowForm(false);
    setNewEvent("");
    setNewHours("");
  };

  const handleDelete = (event, index) => {
    event.stopPropagation();
    const newEvents = [...events];
    newEvents[index] = null;
    setEvents(newEvents);
  };

  return (
    <div className="table-container">
      <TimeTable
        events={events}
        handleCellClick={handleCellClick}
        handleDelete={handleDelete}
      />

      {showForm && (
        <EventForm
          handleCloseForm={handleCloseForm}
          handleSubmit={handleSubmit}
          newEvent={newEvent}
          newHours={newHours}
          setNewEvent={setNewEvent}
          setNewHours={setNewHours}
        />
      )}
    </div>
  );
}

export default App;
import React from "react";

const EventForm = ({
  handleCloseForm,
  handleSubmit,
  newEvent,
  newHours,
  setNewEvent,
  setNewHours,
}) => {
  return (
    <div className="overlay">
      <div className="form-container">
        <button className="close-button" onClick={handleCloseForm}>
          x
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            Event:
            <input
              type="text"
              value={newEvent}
              onChange={(event) => setNewEvent(event.target.value)}
              required
            />
          </label>
          <label>
            Hours:
            <input
              type="number"
              value={newHours}
              onChange={(event) => setNewHours(event.target.value)}
              required
            />
          </label>
          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;

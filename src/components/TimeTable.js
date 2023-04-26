import React from "react";
import { daysOfWeek, timesInDay } from "../days_and_times";

const TimeTable = ({ events, handleCellClick, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timesInDay.map((time) => (
          <tr key={time}>
            <td>{time}</td>
            {daysOfWeek.map((day) => {
              const index =
                daysOfWeek.indexOf(day) * timesInDay.length +
                timesInDay.indexOf(time);
              const event = events[index];
              return (
                <td
                  key={`${day}-${time}`}
                  className={event ? "event-marked-cell" : ""}
                  onClick={() => handleCellClick(day, time)}
                >
                  {event ? (
                    <div>
                      {event.event}
                      <button
                        className="delete-button"
                        onClick={(event) => handleDelete(event, index)}
                      >
                        X
                      </button>
                    </div>
                  ) : null}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TimeTable;

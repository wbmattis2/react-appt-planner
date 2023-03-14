import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>Appointment Title:
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>Date of Appointment:
        <input 
          type="date" 
          value={date} 
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>Time of Appointment:
        <input 
          type="time" 
          value={time}
          onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>Choose a Contact for this Appointment:
        <ContactPicker 
          contacts={contacts}
          onChange={(e) => setContact(e.target.value)} />
      </label>
      <label>Add This Appointment:
        <input type="submit"/>
      </label>
    </form>
  );
};

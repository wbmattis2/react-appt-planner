import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 
 const handleNewContact = (name, phone, email) => {
  const newContact = {
    name: name,
    phone: phone,
    email: email
  };
  setContacts((prev) => [...prev, newContact]);
 };


 const [appointments, setAppointments] = useState([]);

 const handleNewAppointment = (title, contact, date, time) => {
  const newAppointment = {
    title: title,
    contact: contact,
    date: date,
    time: time
  };
  setAppointments((prev) => [...prev, newAppointment]);
 };

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} handleNewContact={handleNewContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
            appointments={appointments} 
            contacts={contacts}
            handleNewAppointment={handleNewAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

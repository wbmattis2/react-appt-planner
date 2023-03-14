import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option value="" key="none" selected="selected">---Please choose an option---</option>
        {contacts.map(contact => <option key={contact.name} value={contact.name}>{contact.name}</option>)}
    </select>
  );
};

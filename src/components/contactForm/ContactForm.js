import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  duplicate
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Contact Name:
        <input 
          type='text' 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        <p className={duplicate ? "redWarning" : ""}>This name is{!duplicate? ' not ' : ' '}already in your contacts.</p>
      </label>
      <label>Contact Phone Number:
        <input 
          type='tel' 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="1-?[1-9]{3}-?[1-9]{3}-?[1-9]{4}" />
      </label>
      <label>Contact Email Address:
        <input 
          type='email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>Add This Contact:
        <input type='submit' />
      </label>
    </form>
  );
};

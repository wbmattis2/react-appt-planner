import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';


export const ContactsPage = ({contacts, handleNewContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicate) {
    handleNewContact(name, phone, email);
    setName(prev => '');
    setEmail(prev => '');
    setPhone(prev => '');
   } else {
    alert("Contact Name: Please enter a name that is not already in your contacts.");
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  if (contacts.some(contact => contact.name === name)) {
    setDuplicate(prev => true);
  }
  else {
    setDuplicate(prev => false);
  }
 });

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          email={email}
          phone={phone}
          duplicate={duplicate}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          setDuplicate={setDuplicate}
          handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          data={contacts}/>
      </section>
    </div>
  );
};

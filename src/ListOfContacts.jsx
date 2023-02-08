import React, { useState, useEffect } from 'react';
import './App.css'

const ListOfContacts = ( ) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
    
  }, []);

  return (
    <div className='app-container'> 
      <div className="input-section">   
      {contacts.map((item, index) => (
        <div 
          key={index}
        >
          <div className="contacts-container">
              <div className="contact-card">
              <div className="contact-name">{item.firstName}</div>
              <div className="contact-name">{item.lastName}</div>
            </div>   
          </div>     
        </div>
      ))}
      </div>  
    </div>
  );
};

export default ListOfContacts;
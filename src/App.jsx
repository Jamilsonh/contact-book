import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleSave = () => {
    const newContact = { name, email };
    setContacts([...contacts, newContact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
    setName('');
    setEmail('');
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  return (
    <div className="app-container">
      <div className="input-section">
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
      <div className="contacts-section">
        <div className="contacts-container">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card">
              <div className="contact-name">{contact.name}</div>
              <div className="contact-email">{contact.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;










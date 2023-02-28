import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './ListOfContacts.css';

const ListOfContacts = ( ) => {
  const [contacts, setContacts] = useState([]);

  function limparStorage() {
    localStorage.removeItem('contacts') 
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  return (
    <div className="container-main"> 
    <div>CONTACT BOOK</div>
      <div className="sub-container">  
        <div className='buttons'>
          <button
            className="save-button"    
          >
            <Link
              className='link' 
              to={'/addcontact'}
            >
              Add Contact
            </Link>            
          </button>
          <button 
            className="save-button" 
            onClick={limparStorage}
          >
            Clear Contacts
          </button>
        </div>

        <div className='contacts-list'>
          <div className='contacts-title'>
            Contacts
          </div>
          {contacts.map((item, index) => (
              <div key={index} className="contacts-card">
                <div className="contact-name">
                  <div className="first-name">{item.firstName}</div>
                  <div className="last-name">{item.lastName}</div>
                </div>
                <div className="contact-button">
                  <button
                    className="details-button"
                  >
                    <Link 
                      className='link'
                      to={`/details/${item.firstName}`
                    }>
                      Details
                    </Link>
                  </button>   
                </div>
              </div>                    
          ))}
        </div>
      </div>  
    </div>
  );
};

export default ListOfContacts;
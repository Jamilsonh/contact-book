import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './ListOfContacts.css';

const ListOfContacts = () => {
  const [contacts, setContacts] = useState([]);

  function limparStorage() {
    localStorage.removeItem('contacts');
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  function removerContato(ctRemover) {
    const tmp = contacts.filter((ct) => ct.firstName !== ctRemover.firstName);
    //setContacts([...contacts, newContact]);
    setContacts(tmp);
    localStorage.setItem('contacts', JSON.stringify(tmp));
  }

  console.log(contacts);

  return (
    <div className='container-main'>
      <div>CONTACT BOOK</div>
      <div className='sub-container'>
        <div className='buttons'>
          <Link className='button-link' to={'/addcontact'}>
            <button className='button-inlink'>Add Contact</button>
          </Link>

          <button className='save-button' onClick={limparStorage}>
            Clear Contacts
          </button>
        </div>

        <div className='contacts-list'>
          <div className='contacts-title'>CONTACTS</div>
          <div className='listcontacts-container'>
            {contacts.map((item, index) => (
              <div key={index} className='contacts-card'>
                <div className='contact-name'>
                  <div className='first-name'>{item.firstName}</div>
                  <div className='last-name'>{item.lastName}</div>
                </div>
                <div className='contact-button'>
                  <Link
                    className='detailsbutton-link'
                    to={`/details/${item.firstName}`}
                  >
                    <button className='details-button'>Details</button>
                  </Link>
                  <button
                    className='details-button'
                    onClick={() => {
                      removerContato({
                        firstName: item.firstName,
                      });
                    }}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfContacts;

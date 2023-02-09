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
    <div className='app-container'> 
      <div className="input-section">   
        {contacts.map((item, index) => (
          <div 
            key={index}
          >
            <div className="contacts-container">
              <div className="contact-card">
                <div className="contact-name">
                  <div className="first-name">{item.firstName}</div>
                  <div className="last-name">{item.lastName}</div>
                </div>
                <div>
                  <button>
                    <Link to={`/details/${item.firstName}`}>
                      Detalhes
                    </Link>
                  </button>   
                </div>
              </div>   
            </div>   
              
          </div>
      ))}
        <button>
          <Link to={'/addcontact'}>
            Adicionar Contato
          </Link>            
        </button>
        <button className="save-button" onClick={limparStorage}>
          Limpar
        </button>

      </div>  
    </div>
  );
};

export default ListOfContacts;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Details from './Details';
import ListOfContacts from './ListOfContacts';

const Contacts = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [workSituation, setWorkSituation] = useState('');
  const [genre, setGenre] = useState('');
  
  const [contacts, setContacts] = useState([]);

  const handleSave = () => {
    const newContact = { firstName, lastName, email, maritalStatus, workSituation, genre };
    setContacts([...contacts, newContact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
    setFirstName('');
    setLastName('');
    setEmail('');
    setMaritalStatus('');
    setWorkSituation('');
    setGenre('');
  };

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
    <div className="app-container">
      <div className="input-section">
        <input
          className="input-field"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

          <select
            className="select-field"
            name="status"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value=''> - Martial Status...</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>



          <select
            className="select-field"
            name="status"
            value={workSituation}
            onChange={(e) => setWorkSituation(e.target.value)}
          >
            <option value=''> - Work Situation... </option>
            <option value='Buscando Trabalho'>Buscando Trabalho</option>
            <option value='Contratado CLT'>Contratado CLT</option>
            <option value='Contratado PJ'>Contratado PJ</option>
            <option value='Freelancer'>Freelancer</option>
          </select>


        <div className='form-group'>
          <div className='radios-container'>
            <span>
              <input 
              type='radio' 
              name='genre' 
              value="masculino"
              onChange={(e) => setGenre(e.target.value)}     
              checked={genre === 'masculino'}         
            /> 
              Masculino
            </span>
            <span>
              <input 
              type='radio' 
              name='genre' 
              value="feminino" 
              onChange={(e) => setGenre(e.target.value)}
              checked={genre === 'feminino'}
            /> 
              Feminino
            </span>
          </div>
        </div>

        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="save-button" onClick={limparStorage}>
          Limpar
        </button>
      </div>
      <div className="contacts-section">
        <div className="contacts-container">
          {contacts.map((contact, index) => (
            <div>
              <button>
                  <Link to={'/listofcontacts'}>
                    Detalhes
                  </Link>            
                </button>


            {/*
              <div key={index} className="contact-card">
              <div className="contact-name">{contact.firstName}</div>
              <div className="contact-email">{contact.lastName}</div>
              <div className="contact-email">{contact.email}</div>
              <div className="contact-email">{contact.maritalStatus}</div>
              <div className="contact-email">{contact.workSituation}</div>
              <div className="contact-email">{contact.genre}</div>
              <div>
                <button>
                  <Link to={`/details/${contact.firstName}`}>
                    Detalhes
                  </Link>            
                </button>
              </div>
            </div>         
          */}
            </div>
            
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;






  
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import './App.css'
import './AddContacts.css'
import { IconContext } from 'react-icons';

const Contacts = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [workSituation, setWorkSituation] = useState('');
  const [genre, setGenre] = useState('');
  
  const [contacts, setContacts] = useState([]);

  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 16.67;

    if (firstName) {
      value += amountToAdd;
    }
    if (lastName) {
      value += amountToAdd;
    }
    if (email) {
      let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(pattern.test(email)) {
        value += amountToAdd;
      }
    }
    if (maritalStatus) {
      value += amountToAdd;
    }
    if (workSituation) {
      value += amountToAdd;
    }
    if (genre) {
      value += amountToAdd;
    }
    return value;
  };

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

  calculateProgress();

  return (
    <div className="app-container">
      <div className="input-section">
        <div className='bar-container'>
          <div
            className='bar'
            style={{ width: `${calculateProgress()}%` }}
          >
          </div>
        </div>
        <div className='seta'>
          <IconContext.Provider 
            value={{ className:'react-icons' , size: '1.5em'}}
          >
            <a href="/">
              <VscArrowLeft/>
            </a>
          </IconContext.Provider> 
        </div> 
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

        <button 
          className="save-button" 
          onClick={handleSave} 
          disabled={calculateProgress() !== 100.02000000000001}
        >
          <Link to='/' >
            Salvar 
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Contacts;






  
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
import './App.css';
import './AddContacts.css';
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
      let pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (pattern.test(email)) {
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
    const newContact = {
      firstName,
      lastName,
      email,
      maritalStatus,
      workSituation,
      genre,
    };
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
    localStorage.removeItem('contacts');
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  calculateProgress();

  return (
    <div className='app-container'>
      <div>CONTACT BOOK</div>
      <div className='addcontacts-container'>
        <div className='progressbar-container'>
          <div className='progress-bar'>
            <div
              className='progress'
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
        <div className='container-icon'>
          <div className='arrow-icon'>
            <IconContext.Provider
              value={{ className: 'react-icons', size: '1.5em' }}
            >
              <Link to='/'>
                <VscArrowLeft />
              </Link>
            </IconContext.Provider>
          </div>
        </div>

        <div className='label-container'>
          <label className='title-labels'>FIRST NAME</label>
          <input
            className='login--input'
            type='text'
            placeholder=''
            value={firstName}
            onChange={(e) => setFirstName(e.target.value.trim())}
          />
        </div>

        <div className='label-container'>
          <div className='title-labels'>LAST NAME</div>
          <input
            className='login--input'
            type='text'
            placeholder=''
            value={lastName}
            onChange={(e) => setLastName(e.target.value.trim())}
          />
        </div>

        <div className='label-container'>
          <div className='title-labels'>EMAIL</div>
          <input
            className='login--input'
            type='email'
            placeholder=''
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>

        <div className='label-container'>
          <div className='title-labels'>MARITAL STATUS</div>
          <select
            className='select-field'
            name='status'
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value=''> - Select...</option>
            <option value='Solteiro'>Solteiro</option>
            <option value='Casado'>Casado</option>
            <option value='Divorciado'>Divorciado</option>
          </select>
        </div>

        <div className='label-container'>
          <div className='title-labels'>WORK SITUATION</div>
          <select
            className='select-field'
            name='status'
            value={workSituation}
            onChange={(e) => setWorkSituation(e.target.value)}
          >
            <option value=''> - Select...</option>
            <option value='Buscando Trabalho'>Buscando Trabalho</option>
            <option value='Contratado CLT'>Contratado CLT</option>
            <option value='Contratado PJ'>Contratado PJ</option>
            <option value='Freelancer'>Freelancer</option>
          </select>
        </div>

        <div className='form-group'>
          <div className='title-labels'>GENRE</div>
          <div className='radios-container'>
            <span>
              <input
                type='radio'
                name='genre'
                value='Masculino'
                onChange={(e) => setGenre(e.target.value)}
                checked={genre === 'Masculino'}
              />
              Male
            </span>
            <span>
              <input
                type='radio'
                name='genre'
                value='Feminino'
                onChange={(e) => setGenre(e.target.value)}
                checked={genre === 'Feminino'}
              />
              Female
            </span>
          </div>
        </div>

        <div className='container-button'>
          <Link className='btnformulario-link' to={'/'}>
            <button
              className='button-formulario'
              onClick={handleSave}
              disabled={calculateProgress() !== 100.02000000000001}
            >
              SAVE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

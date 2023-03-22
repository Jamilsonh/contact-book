import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
    console.log(savedContacts);
  }, []);

  var selectContacts = contacts.filter((item) => {
    console.log(item.firstName.toLowerCase(), id);
    return item.firstName.toLowerCase() === id.toLocaleLowerCase();
  });

  console.log(selectContacts);

  var filter = selectContacts?.length ? selectContacts[0] : {};

  return (
    <div className='details-main'>
      <div>CONTACT BOOK</div>
      <div className='details-container'>
        <div className='container-voltar'>
          <button>
            <Link to='/'>Voltar</Link>
          </button>
        </div>
        <div className='details-subcontainer'>
          {contacts && (
            <div className='details-card'>
              <div className='id-dados'>
                <div>Nome: </div>
                <div>E-mail: </div>
                <div>Marital Status: </div>
                <div>Work Situation: </div>
                <div>Genre: </div>
              </div>

              <div className='dados'>
                <div>
                  {filter.firstName} {filter.lastName}
                </div>
                <div>{filter.email} </div>
                <div>{filter.maritalStatus}</div>
                <div>{filter.workSituation} </div>
                <div>{filter.genre} </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;

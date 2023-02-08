import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
  const { id } = useParams();
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
    console.log(savedContacts)   
  }, []);

  var selectContacts = contacts.filter((item) => {
  console.log(item.firstName.toLowerCase(),id)
  return item.firstName.toLowerCase() === id.toLocaleLowerCase()})

  console.log(selectContacts)

  var filter = selectContacts?.length?  selectContacts[0] : {}

  return (
    <div className='details-container'>
      <div className='details-section'>
        <div className='details-subcontainer'>
          {contacts && (
            <div className='details-card'>  
              <div>
                {filter.firstName}
              </div>
              <div> 
                {filter.email}
              </div>   
            </div>
          )}
          <button>
            <Link to='/'>
              Voltar
            </Link>            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
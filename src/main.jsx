import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddContact from './AddContact'
import App from './App'
import Contacts from './Contacts'
import Details from './Details'
import './index.css'
import ListOfContacts from './ListOfContacts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Contacts />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/listofcontacts" element={<ListOfContacts />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>,
)

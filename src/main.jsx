import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Contacts from './AddContacts'
import Details from './Details'
import './index.css'
import ListOfContacts from './ListOfContacts'
import Rascunho from './Rascunho'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<ListOfContacts />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/addcontact" element={<Contacts />} />
          <Route path="/test" element={<Rascunho />} />
        </Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>,
)

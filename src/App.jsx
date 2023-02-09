import React, { useState, useEffect } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import Contacts from './AddContacts';

const App = () => {
  return ( 
    <div>
      <Outlet />
    </div>
  );
};

export default App;













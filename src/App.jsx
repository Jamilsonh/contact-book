import React, { useState, useEffect } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AddContact from './AddContact';
import './App.css'
import Contacts from './Contacts';

const App = () => {
  return ( 
    <div>
      <Outlet />
    </div>
  );
};

export default App;













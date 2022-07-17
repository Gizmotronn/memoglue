import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import NotesList from './components/NotesList';

// Magic imports
import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { magic } from './lib/magic';
import { UserContext } from './lib/UserContext.js';

function App() {
  return (
    <div className="App">
      <NotesList />
    </div>
  );
}

export default App;
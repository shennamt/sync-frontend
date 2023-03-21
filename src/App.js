import React, { useState } from 'react';
import NewForm from './NewForm';
import './App.scss'
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className="App">
        {/* <h1 className="SyncH1">S Y N C</h1> */}
        < Dashboard />
        {/* <NewForm /> */}
    </div>
  )
}

export default App;

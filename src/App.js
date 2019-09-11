import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import EventList from './components/EventList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EventList />
    </div>
  );
}

export default App;

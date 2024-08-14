import React, { useState } from 'react';
import './App.css';
import Car from './components/car';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <>
      <Car model={carinfo.model} />
      <Events />
      <Phone />
      <Color />
    </>
  );
}

export default App;

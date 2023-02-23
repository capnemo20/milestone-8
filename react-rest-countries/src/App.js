import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Country/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Countries></Countries>
     <Person></Person>
     
     </div>
  );
};





export default App;

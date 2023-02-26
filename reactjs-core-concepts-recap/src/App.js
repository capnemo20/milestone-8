import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <District name="noakhali" special="vibag"></District>
     <District name = "brahmanbaria" special="jodha akbar"></District>
     <District name = "sumilla" special ="moynamoti"></District>
    </div>
  );
}

const districtStyle = {
backgroundColor:"aquamarine",
margin:"10px",
border:"10px solid blue",
borderRadius:"20px",
padding:"10px"
}

function District(props){
  const [power, setPower] = useState(1);
  const boostPower  = ()=>{
    const newPower = (power*2);
    setPower(newPower);
  }
  return(
    <div style = {districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;

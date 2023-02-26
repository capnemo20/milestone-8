import logo from './logo.svg';
import './App.css';

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
borderRadius:"10px"
}

function District(props){
  return(
    <div style = {districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
    </div>
  )
}

export default App;

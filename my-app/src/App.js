import logo from './logo.svg';
import './App.css';

const number = 666;
const singer = {name: "dr mahfuz", job:"singer"};
const singer2 = {name: "eva rahman", job:"singer2"};
const singerStyle = {
  color: "purple",
  backgroundColor: "white",
}

function App() {
  return (
   <div className = "App">
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>

   </div>
  );
}

function Person(){
  return (
   <div className="person">
     <h1>Shakib Al Hasan</h1>
     <p>Profession: cricketer</p>
   </div>
  )
}

function Friend(){
  return (
    <div className = "container">
      <h3>Name: Ajay Devgun</h3>
      <h5>Job: maramari</h5>
    </div>
  )
}

export default App;

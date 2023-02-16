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
    <Person name="rubel" nayika ="mousumi" ></Person>
    <Person name = "bapparaj" naika ="cheka"></Person>
    <Person name = "kuber" naika = "kopila"></Person>
    
    <Friend movie ="shingam" phone ="01293"></Friend>
    <Friend phone ="01532"></Friend>

   </div>
  );
}

function Person(props){
  console.log(props);
  return (
   <div className="person">
     <h1>nayok: {props.name}</h1>
     <p>naika: {props.naika}</p>
   </div>
  )
}

function Friend(props){
  return (
    <div className = "container">
      <h3>Name: {props.movie}</h3>
      <h5>Number: {props.phone}</h5>
    </div>
  )
}

export default App;

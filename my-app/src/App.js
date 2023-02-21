import logo from './logo.svg';
import './App.css';

const number = 666;
const singers = [
  {name: "dr mahfuz", job:"singer"},
  {name: "eva rahman", job:"singer2"},
  {name: "agun", job:"shopno"},
  {name: "shuvro", job:"pathor"}];
const singerStyle = {
  color: "purple",
  backgroundColor: "white",
}

function App() {
  const nayoks = ["rubel ", "bapparaj ","kuber ", "jashim ", "salman shah", "riyaz", "anwar"];
  return (
   <div className = "App">
    {
      nayoks.map(nayok=><li>Name: {nayok}</li>)
    }
    {/* {
      nayoks.map(nayok=><Person name={nayok}></Person>)
    } */}

    {
      singers.map(singer=><Person name={singer.name}></Person>)
    }

    {/* <Person name={nayoks[0]} nayika ="mousumi" ></Person>
    <Person name = {nayoks[1]} naika ="cheka"></Person>
    <Person name = {nayoks[2]} naika = "kopila"></Person> */}
    
    <Friend movie ="shingam" phone ="01293"></Friend>
    <Friend phone ="01532"></Friend>

   </div>
  );
}

function Person(props){
  console.log(props);
  return (
   <div className="person">
     <h1>{props.name}</h1>
     <p> {props.naika}</p>
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

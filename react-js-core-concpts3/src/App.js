import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments(){
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res=>res.json())
    .then(data=>setComments(data))
  },[])
  return (
    <div >
      <h3>comments: {comments.length}</h3>
      {
        comments.map(comment=><Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props){
  return(
    <div style={{border:"2px solid salmon", margin:"5px", backgroundColor:"pink", borderRadius:"10px"}}>
      <h4>email: {props.email}</h4>
      <h4>body: {props.body}</h4>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = ()=>setCount(count+1);
  const handleDecrease = ()=>setCount(count-1);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;

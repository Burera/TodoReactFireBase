import React , {useState,useEffect} from 'react';
import Todo from './Todo';
import db from './firebase';
import './App.css';



function App() {
 
  const firebase = require('firebase/app');
  require('firebase');
  const [todos , setTodos] = useState(['hhhhhh']);
  const [input , setInput] = useState('');

  useEffect(() => {
   db.collection('todos').orderBy('timestamp' , 'desc').onSnapshot(snapshot =>
    {
      console.log(snapshot.docs.map(doc=> doc.data()))
     setTodos(snapshot.docs.map(doc => ({id : doc.id ,
      todo : doc.data().todo})))
    })
    
  }, [])
  //when the app loads , we need to listen to the databases and fetch new todos as they get data added  removed:
   // console.log(input)
  
  const addTodo = (event) =>
  {
    //console.log('i am working')
    event.preventDefault();
    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      

      <h1 className="headd">Todo App</h1>
      <input className="main" value={input}  onChange={event => setInput(event.target.value)}/>
      <button disabled={!input} className="mainbtn" onClick={addTodo}>Add</button>
     
     <ul className="listoo">
       {todos.map((todo ,index) => (
             <Todo key ={index} todo = {todo}/>
       ))}
      </ul>
    </div>
  );
}

export default App;

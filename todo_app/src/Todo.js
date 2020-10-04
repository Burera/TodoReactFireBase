import React, { useState } from 'react';
import db from './firebase';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      left: 20,
      width: 400,
      top: 250,
      backgroundColor: theme.palette.background.paper,
       //borderRadius : 30, 
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Todo(props) {
      const classes = useStyles();
      const [input , setInput] = useState();
      
    const [open,setOpen] = useState(false);
    // const handleOpen=()=>{
    //     setOpen(true)
    // }
    // const handleClose=()=>{
    //     setOpen(false)
    // }
    const updateTodo =() =>
    {
        db.collection('todos').doc(props.todo.id).set({
           todo : input
        } , {merge : true} )
        setOpen(false);
    }
    return (
        <div>
        <Modal className="moooo"
  open={open}
  onClose={e => setOpen(false)}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
  
        >
  <div className={classes.paper}>
      <h1 className="headd">Edit Todo</h1>
      <input  className="main" value={input}  onChange={event => setInput(event.target.value)}/>
      <button onClick={e => updateTodo(false)} className="mainbtn">Update Todo</button>
  </div>
  
</Modal>
         
            <li  className="addeditem">{props.todo.todo}  <span><button className="mainbtn" onClick={event => {db.collection('todos').doc(props.todo.id).delete()}}>Delete </button> 
            <button className="mainbtn" onClick={e => {
              setOpen(true)
              setInput(props.todo.todo)
            }}>Edit</button></span> </li>
        </div>
    )
}

export default Todo

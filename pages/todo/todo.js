import { ToolFilled } from "@ant-design/icons";
import React,{useEffect, useState} from "react";
import {useDispatch} from 'react-redux'
import { todoActions } from '../../redux/reducers/todoReducer.ts'

export default function AppTasks() {
const [todo, setTodo] = useState({userid: '', task:'', completed:''})
const dispatch = useDispatch()
const handleChange = e =>{
  e.preventDefault()
  const{name, value} = e.target;
  setTodo({...todo, [name]: value})
}
  return (
     <div className="todoapp stack-large">
      <h1>오늘 할일</h1>

      <form onSubmit={ e=> {
        e.preventDefault()
        alert(' 진행 1: 할일 등록');
        dispatch(todoActions.taskRequest(todo))
        setTodo({userid: '', task: '', completed: ''})
      }}>

      <label><b> ID </b></label> 
      <input 
        type="text"
        className="input input_lg"
        name= "userid"
        autoComplete="off"
        onChange={handleChange}
      /><br />
      <label htmlFor=""><b> 할 일 </b></label>
      <input
        type="text" name = "task" onChange={handleChange} /><br/>
      <label htmlFor=""><b>한 일 체크</b></label>
      <input
        type="text" name = "completed" onChange={handleChange} />

        <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  );
}
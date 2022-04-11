import React, {useState} from "react";

export default function Login(){
    const[inputs, setInputs] = useState({})
    const{id, pw} = inputs
    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} =e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick =(e)=>{
        e.preventDefault()
        const loginRequest = {id,pw}
        alert(`Login: ${JSON.stringify(loginRequest)}`)
    }
    return<form>
            <h1>Login</h1>
            <div>
                <label><b>ID</b></label>
                <input type ="text" name ="id" onChange={handleChange}/><br/>
                <label><b>PW</b></label>
                <input type= "text" name ="pw" onChange={handleChange}/><br/>
                <button onClick={handleClick}>Login</button>
            </div>
        </form>
}
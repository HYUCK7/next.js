import axios from "axios"
import React, { useState } from "react"
export default function SignUp(){
    const[inputs, setInputs] = useState({})

    const onChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ... inputs, [name]:value})
    }

    const onSubmit = e => {
        e.preventDefault()
            axios.post('http://localhost:5000/api/user/signup', inputs)
            .then(res => {
                alert(JSON.stringify(res.data))
                })
                .catch(err => alert(err))
            
    }
    return (<div>
    <form action="" onSubmit={onSubmit}>
  
    <div>
    <label><b>사용자 ID</b></label>
    <input type="text" name='id' onChange={onChange}/><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" name='password' onChange={onChange}/><br />

    <label><b>이름</b></label>
    <input type="text" name='name' onChange={onChange}/><br />

    <label><b>전화번호</b></label>
    <input type="text" name='tel' onChange={onChange}/><br />

    <input type="submit" value = "Sign-UP"/><br />
    </div>
    </form>
    <div> 결과 : <span id = "result-span"></span></div>
    </div>)
}
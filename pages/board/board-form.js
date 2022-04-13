import React, { useState } from 'react';
import style from "./styles/boardForm.module.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addTitle} from '../../redux/reducers/board.reducer'
import { add } from 'lodash';

export default function BoardhtmlForm(){
    const [value, setValue] = useState({})
    const dispatch = useDispatch()
    

    /**const onSubmit = (e) => {
        e.preventDefault()
        if(value) dispatch(addTitle({title: value}))
        alert(`등록할 팀 정보 : ${JSON.stringify(inputs)}`)
            axios.post('http://localhost:5000/api/board/write', inputs) 
            .then(res=> {
                alert(JSON.stringify( res.data ))
            })
            .catch(err => alert(err))
    }*/

    return (<>
        
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <form onSubmit={e=> {
                e.preventDefault()
                alert('title' + value)
                if(title) dispatch(addTitle({title: value}))
                }}>

            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="title">글제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="title" name="title" onChange={e => { e.preventDefault()
                    setValue(e.target.value)}}/>
                </div>
            </div>
            {/** 
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">Name</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={onChange}/>
                </div>
            </div>

            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">Team</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={onChange}>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>

            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">Subject</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" onChange={onChange} style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            */}
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                value="Submit"/>
            </div>
            
            </form>
            </div>
            
    </>)}
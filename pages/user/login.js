import { useState } from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/styles/table.module.css'
import { loginActions } from '../../redux/reducers/loginReducer'
export default function Login(){
    const [user, setUser] = useState({
        userid: '', password: ''
    })
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        e.preventDefault
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            alert('진행 1: 로그인 진행 ' + JSON.stringify(user))
            dispatch(loginActions.loginRequest(user))
            setUser({
                userid: '', password: ''
            })
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>로그인</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><input type="text" name='userid' onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td><b>비밀번호</b></td>
                    <td><input type="text" name='password' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit">로그인</button><br /></td>
                </tr>
            </tbody>
        </table>
    </form>
}
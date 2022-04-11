import axios from "axios";
import { useEffect, useState } from "react";
import tablestyles from "../common/styles/userList.module.css"


const Table = ({columns, colspan, data}) => {
    return(
        <table className = {tablestyles.table}>
          <thead>
            <tr className={tablestyles.tr}>
              {columns.map((column) => (
                <th key = {column._id} className = {tablestyles.td}>{column}</th>
              ))}
              </tr>
          </thead>
          <tbody>
              { data.length == 0 ? <tr className={tablestyles.tr}> <td colSpan={colspan} className={tablestyles.td}>데이터가없습니다.</td>
              </tr>
              : data.map((user) => (
                <tr className = {tablestyles.tr} key = {user._id}>
                  <td className={tablestyles.td}>{user.passengerId}</td>
                  <td className={tablestyles.td}>{user.name}</td>
                  <td className={tablestyles.td}>{user.teamId}</td>
                  <td className={tablestyles.td}>{user.subject}</td>
                </tr>
              ))}
          </tbody>
        </table>
      );
      }

export default function boardlist(){
    const columns = ["passengerId", "name", "teamId", "subject"]
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/board/boardlist').then(res=>{
            setData(res.data.boards)
        }).catch(err=>{})
    }, [])
    return (<>
        <h1>리스트</h1>
        {count!=0 && <h3>입력수:{count}명</h3>}
        <div className={tablestyles.td}>
        <Table columns={columns} colspan = {4} data = {data}/>
        </div>
    </>)
}

import axios from "axios";
import { useEffect, useState } from "react";
import tableStyles from "../common/styles/userList.module.css"

const Table = ({columns, colspan, data}) => {
  
  return(
    <table className={tableStyles.table}>
      <thead>
        <tr className={tableStyles.tr}>
          {columns.map((column) => (
            <th key = {column} className = {tableStyles.td}>{column}</th>
          ))}
          </tr>
      </thead>
      <tbody>
          { data.length == 0 ? <tr className={tableStyles.tr}> <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다.</td>
          </tr>
          : data.map((user) => (
            <tr className = {tableStyles.tr} key = {user.id}>
              <td className={tableStyles.td}>{user.id}</td>
              <td className={tableStyles.td}>{user.password}</td>
              <td className={tableStyles.td}>{user.name}</td>
              <td className={tableStyles.td}>{user.tel}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
  }

export default function userList(){
  const columns = ["id", "password", "name", "tel"];
  const [data, setData] = useState([])
  const count = data.length
  useEffect(()=>{
    axios.get('http://localhost:5000/api/user/userlist').then(res=>{
      setData(res.data.users)
    }).catch(err=>{})
  }, [])
  return (<>
      <h1>사용자 목록</h1>
      {count!=0 && <h3>회원수 : {count} 명 </h3>}
      <div className={tableStyles.td}>
      <Table columns={columns} colspan = {4} data = {data}/>
      </div>
      </>
)}
   
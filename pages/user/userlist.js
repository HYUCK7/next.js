import axios from "axios";
import { useEffect, useState } from "react";
import tableStyles from "../common/styles/userList.module.css"
import Link from 'next/link'

const Table = ({columns, colspan, data}) => {
  
  return(
    <table className={tableStyles.table}>
      <thead>
        <tr className={tableStyles.tr}>
        {columns.map((column, index) => 
          <th className={tableStyles.td} key={index}>{column}</th>
        )}
        </tr>
      </thead>
      <tbody>
          { data.length == 0 ? <tr className={tableStyles.tr}> <td colSpan={colspan} className={tableStyles.td}>데이터가없습니다.</td>
          </tr>
          : data.map((user) => (
            <tr className = {tableStyles.tr} key = {user._id}>
              <td className={tableStyles.td}>
                <Link href={{pathname:`/user/[id]`,
                  query:{selectedUser: 'test'}}} as = {`/user/${user.id}`}>
                  <a>{user.id}</a>
                </Link>
              </td>
              <td className={tableStyles.td}>{user.password}</td>
              <td className={tableStyles.td}>{user.name}</td>
              <td className={tableStyles.td}>{user.tel}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
  }

export default function UserList(){
  const columns = ["id", "password", "name", "tel"];
  const [data, setData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:5000/api/user/userlist').then(res=>{
      setData(res.data.users)
    }).catch(err=>{})
  }, [])

  return (<>
      <h1>사용자목록</h1>
      <div className={tableStyles.td}>
      <Table columns={columns} colspan = {4} data = {data}/>
      </div>
      </>
)}
   
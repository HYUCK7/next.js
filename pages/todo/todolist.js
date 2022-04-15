import axios from "axios";
import Link from "next/link";
import {useEffect, useState} from "react"
import tableStyles from "../common/styles/userList.module.css"

/**const Table = ({columns, colspan, data}) => (<>
    <table className={tableStyles.table}>
        <thead>
            <tr className={tableStyles.tr}>
                <th>일정</th>
            </tr>
        </thead>
        <tbody>
            { data.length == 0 ? <tr className={tableStyles.tr}> <td className={tableStyles.td}>일정이없습니다.</td>
            </tr>
            :<td className={tableStyles.td}>일정이있습니다</td>}
        </tbody>
    </table>
</>)
*/
const Table = ({columns, colspan, data}) => {
    return(
        <table className={tableStyles.table}>
            <thead>
                <tr className={tableStyles.tr}></tr>
                {columns.map((column, index) =>
                    <th className={tableStyles.td} key={index}>{column}</th>
                )}
            </thead>
            <tbody>
                { data.length == 0? <tr className={tableStyles.tr}> <td colSpan={colspan} className={tableStyles.td}>No Data</td></tr>
                : data.map((todo) =>(
                    <tr className={tableStyles.tr} key = {todo._id}>
                        <td className={tableStyles.td}>{todo.userid}</td>
                        <td className={tableStyles.td}>{todo.task}</td>
                        <td className={tableStyles.td}>{todo.completed}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default function TodoList(){
  const columns = ["userid", "task", "completd"]
  const [data, setData] = useState([])

  useEffect(()=>{
      axios.get('http://localhost:5000/api/todo/todolist').then(res=>{
          setData(res.data.todos)
      }).catch(err=>{}) }, [])

    return(<>
        <h1>할 일 목록</h1> 
        <div className={tableStyles.td}>
        <Table columns={columns} colspan = {3} data = {data}/>
        </div>
    </>
  )}
    


import axios from "axios";
import Link from "next/link";
import {useEffect, useState} from "react"
import tableStyles from "../common/styles/userList.module.css"

const Table = ({data}) => (<>
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

export default function TodoList(){
    const [data, setData] = useState([])
    return (<>
    <h1>일정</h1>
    <Table data={data}/>
    </>)
}

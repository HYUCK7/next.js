import tableStyles from "../common/styles/userList.module.css"

const Table = ({ columns, colspan, data}) => {
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
        <tr className={tableStyles.tr}>
          { data.length == 0 ?<td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다.</td>
          : <td colSpan={colspan} className={tableStyles.td}>데이터가 있습니다.</td>}
        </tr>
      </tbody>
    </table>
  );
  }

export default function userList(){
  const columns = ["id", "password", "name", "tel"];
  const data = [23523523523]
  const count = data.length
  return (<>
      <h1>사용자 목록</h1>
      {count!=0 && <h3>회원수 : {count} 명 </h3>}
      <div className={tableStyles.td}>
      <Table columns={columns} colspan = {4} data = {data}/>
      </div>
      </>
)}
   
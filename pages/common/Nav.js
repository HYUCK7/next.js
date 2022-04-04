import Link from "next/link";
import styles from "./styles/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul><button onClick={ () => {
          history.back('/'); } } >back</button>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>Calculator</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/basic/todo'>Todo</Link></li>
        <li className={styles.li}> <Link href='/board/board-list/'>Board</Link></li>
        <li className={styles.li}> <Link href='/game/game-list'>game</Link></li>
        <li className={styles.li}> <Link href='/game/team-list/'>team</Link></li>
        <li className={styles.li}> <Link href='/user/signup/'>login</Link></li>
        <li className={styles.li}> <Link href='/admin/dashboard/'>대시보드</Link></li>
        <li className={styles.li}> <Link href='/board/board-form/'>보드폼</Link></li>
      </ul>
    </nav>
  )
}
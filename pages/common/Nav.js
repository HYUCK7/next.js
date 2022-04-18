import Link from "next/link";
import styles from "./styles/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul><button onClick={ () => {
          history.back('/'); } } >back</button>
        <li className={styles.li}> <Link href='/'>main</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>Calculator</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/todo/todolist'>스케줄목록</Link></li>
        <li className={styles.li}> <Link href='/todo/todo'>스케줄등록</Link></li>

        <li className={styles.li}> <Link href='/todo/addTodo'>Todo추가</Link></li>
        <li className={styles.li}> <Link href='/todo/modifyTodo'>Todo수정</Link></li>
        <li className={styles.li}> <Link href='/todo/getTodos'>Todo목록</Link></li>
        <li className={styles.li}> <Link href='/todo/removeTodo'>Todo삭제</Link></li>

        <li className={styles.li}> <Link href='/board/board-list/'>Board</Link></li>
        <li className={styles.li}> <Link href='/board/addArticle/'>게시글등록</Link></li>
        <li className={styles.li}> <Link href='/board/getArticles/'>게시글리스트</Link></li>
        <li className={styles.li}> <Link href='/board/updateArticle/'>게시글수정</Link></li>
        <li className={styles.li}> <Link href='/board/removeArticle/'>게시글삭제</Link></li>

        <li className={styles.li}> <Link href='/game/game-list'>game</Link></li>
        <li className={styles.li}> <Link href='/game/addGame'>게임추가</Link></li>
        <li className={styles.li}> <Link href='/game/getGames'>게임리스트</Link></li>
        <li className={styles.li}> <Link href='/game/removeGame'>게임삭제</Link></li>
        <li className={styles.li}> <Link href='/game/updateGame'>게임수정</Link></li>

        <li className={styles.li}> <Link href='/game/team-list/'>team</Link></li>
        <li className={styles.li}> <Link href='/user/join/'>Join</Link></li>
        <li className={styles.li}> <Link href='/user/login/'>login</Link></li>
        <li className={styles.li}> <Link href='/user/logout/'>logout</Link></li>
        <li className={styles.li}> <Link href='/admin/dashboard/'>대시보드</Link></li>
        <li className={styles.li}> <Link href='/board/board-form/'>보드폼</Link></li>
        <li className={styles.li}> <Link href='/user/getUsers/'>유저 리스트</Link></li>
        <li className={styles.li}> <Link href='/board/boardlist/'>선수 리스트</Link></li>
        <li className={styles.li}> <Link href='/user/Profile/'>사용자 프로필</Link></li>
        <li className={styles.li}> <Link href='/user/updateUser/'>사용자 수정</Link></li>
        <li className={styles.li}> <Link href='/user/withdrawUser/'>회원탈퇴</Link></li>

      </ul>
    </nav>
  )
}
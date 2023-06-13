import css from './footer.module.scss'
import Tasks from "./tasks/tasks";

const Footer = ({activeCount, finishedCount}) => {
    console.log(css)
    return (
        <footer className = {css.footer}>
            <Tasks finishedCount={finishedCount} activeCount={activeCount}/>
            <div className={css.boardBy}>
                Kanban board by Anna Bezushko, 2023
            </div>
        </footer>
    )
}

export default Footer;
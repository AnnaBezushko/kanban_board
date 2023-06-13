import css from './footer.module.scss'
import Tasks from "./tasks/tasks";

const Footer = () => {
    console.log(css)
    return (
        <footer className = {css.footer}>
            <Tasks/>
            <div className={css.boardBy}>
                Kanban board by Anna Bezushko, 2023
            </div>
        </footer>
    )
}

export default Footer;
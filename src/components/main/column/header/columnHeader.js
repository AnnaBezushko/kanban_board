import css from './columnHeader.module.scss'


const ColumnHeader = (props) => {
    return (
        <header className={css.columnHeader} >
            {props.name}
        </header>
    )
}

export default ColumnHeader;
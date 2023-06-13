import css from './dropdown.module.scss'

const Dropdown = () => {
    return (
        <div className = {css.dropdown}>
            <svg className={css.rhomb} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.7782" width="11" height="11" transform="rotate(45 7.7782 0)" fill="white"/>
            </svg>
            <ul className={css.dropdownUl}>
                <li>Profile</li>
                <li>Log Out</li>
            </ul>
        </div>
    )
}

export default Dropdown;
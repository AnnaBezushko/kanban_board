import css from "./header.module.scss";
import UserMenu from "./userMenu/userMenu";
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.awesome}>Awesome Kanban Board</div>
      <UserMenu />
    </header>
  );
};

export default Header;

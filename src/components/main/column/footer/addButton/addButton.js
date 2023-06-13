import css from "./addButton.module.scss";

const AddButton = (props) => {
  return (
    <button className={css.addButton} onClick={props.onClick}>
      + Add card
    </button>
  );
};

export default AddButton;

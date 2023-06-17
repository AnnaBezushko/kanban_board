import css from "./addButton.module.scss";

const AddButton = (props) => {
  return (
    <button className={css.addButton} onClick={props.onClick} disabled={props.disabled}>
      + Add card
    </button>
  );
};

export default AddButton;

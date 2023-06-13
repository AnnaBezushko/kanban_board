import css from "./submitButton.module.scss";

const SubmitButton = (props) => {
  return (
    <button className={css.submitButton} onClick={props.onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;

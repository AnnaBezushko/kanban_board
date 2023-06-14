import css from "./input.module.scss";

const Input = (props) => {
  function handleChange(event) {
    props.setName(event.target.value);
    console.log(event.target.value);
  }
  return (
    <input
      value={props.name}
      placeholder="__________________________________"
      onChange={handleChange}
      className={css.input}
    />
  );
};

export default Input;

import css from "./cardsDropdown.module.scss";
import Select from "react-select";
import { DropdownIndicator } from "./reactSelectParts";

const CardsDropdown = (props) => {
  const handleChange = (selectOption) => {
    props.setTask(selectOption.value);
  };

  const selectedOption = props.task
    ? { value: props.task, label: props.task.name }
    : null;
  const styles = {
    container: (base) => ({
      ...base,
      padding: "0px 0px 15px 0px",
      boxSizing: "content-box",
      width: "258px",
      height: "35px",
    }),
    control: (base) => ({
      ...base,
      border: "none",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    option: (base) => ({
      ...base,
      fontSize: "18px",
      fontFamily: '"Roboto", sans-serif',
    }),
  };
  return (
    <div className={css.cardsDropdown}>
      <Select
        styles={styles}
        menuPortalTarget={document.querySelector("body")}
        placeholder="Select task:"
        onChange={handleChange}
        value={selectedOption}
        options={props.selectOptions.map((task) => ({
          value: task,
          label: task.name,

        }))}
        components={{ DropdownIndicator }}
      />
    </div>
  );
};

export default CardsDropdown;

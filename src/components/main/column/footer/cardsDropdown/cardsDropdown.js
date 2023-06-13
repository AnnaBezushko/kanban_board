import css from "./cardsDropdown.module.scss";
import { useState } from "react";

const CardsDropdown = (props) => {
  const [shown, setShown] = useState(false);
  const setTask = (task) => {
    props.setTask(task);
    setShown(false);
  };
  return (
    <div className={css.cardsDropdown}>
      {props.task?.name || "выберите"}
      <div onClick={() => setShown(true)}>
        Ж
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z"
            fill="white"
          />
        </svg>
      </div>
      {shown && (
        <div>
          {props.selectOptions.map((task) => (
            <div onClick={() => setTask(task)}>{task.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsDropdown;

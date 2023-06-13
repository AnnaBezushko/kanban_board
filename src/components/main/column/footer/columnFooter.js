import css from "./columnFooter.module.scss";
import AddButton from "./addButton/addButton";
import SubmitButton from "./submitButton/submitButton";
import CardsDropdown from "./cardsDropdown/cardsDropdown";
import { useState } from "react";
import Input from "./input/input";
import { createTask } from "../../main";

const ColumnFooter = (props) => {
  const [task, setTask] = useState();
  const [shown, setShown] = useState(false);
  const [name, setName] = useState();
  function handleClick() {
    console.log(task);
    if (props.withInput) {
      if (name) {
        const newTask = createTask(name);
        props.addTask(newTask);
        setName(undefined);
      }
    } else {
      if (task) {
        props.addTask(task);
        setTask(undefined);
      }
    }
  }

  return (
    <footer className={css.columnFooter}>
      {shown && props.withInput && <Input setName={setName} />}
      <br />
      {shown && !props.withInput && (
        <CardsDropdown
          setTask={setTask}
          task={task}
          selectOptions={props.selectOptions}
        />
      )}
      <br />
      {!name && !task && (
        <AddButton
          onClick={() => {
            setShown(true);
          }}
        />
      )}
      <br />
      {(name || task) && <SubmitButton onClick={handleClick} />}
    </footer>
  );
};

export default ColumnFooter;
import css from "./columnFooter.module.scss";
import AddButton from "./addButton/addButton";
import SubmitButton from "./submitButton/submitButton";
import CardsDropdown from "./cardsDropdown/cardsDropdown";
import { useState } from "react";
import Input from "./input/input";
import { useTasks } from "../../../hooks/tasks/taskProvider";

const ColumnFooter = (props) => {
  const { createTask, updateTask, tasks } = useTasks();
  const [task, setTask] = useState(null);
  const [shown, setShown] = useState(false);
  const [name, setName] = useState("");
  const isBacklogTask = props.state === "backlog";
  function handleClick() {
    if (isBacklogTask) {
      if (name) {
        createTask(name);
        setName("");
      }
    } else {
      if (task) {
        console.log(task);
        task.status = props.state;
        updateTask(task);
        setTask(null);
      }
    }
    setShown(false);
  }
  const previousTasks = tasks.filter((t) => t.status === props.ancestor);

  return (
    <footer className={css.columnFooter}>
      {shown && isBacklogTask && <Input name={name} setName={setName} />}
      {shown && !isBacklogTask && (
        <CardsDropdown
          setTask={setTask}
          task={task}
          selectOptions={previousTasks}
        />
      )}
      {!name && !task && !shown && (
        <AddButton
          onClick={() => {
            setShown(true);
          }}
          disabled={!previousTasks.length}
        />
      )}
      {(name || task) && <SubmitButton onClick={handleClick} />}
    </footer>
  );
};

export default ColumnFooter;

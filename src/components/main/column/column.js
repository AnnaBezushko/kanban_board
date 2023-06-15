import css from "./column.module.scss";
import React from "react";
import Card from "./card/card";
import ColumnHeader from "./header/columnHeader";
import ColumnFooter from "./footer/columnFooter";
import { useTasks } from "../../hooks/tasks/taskProvider";

const Column = (props) => {
  const { tasks } = useTasks();
  return (
    <div className={css.column}>
      <ColumnHeader name={props.name} />
      <div className={css.scrollContainer}>
        {tasks
          .filter((t) => t.status === props.state)
          .map((task) => (
            <Card task={task} key={task.id} />
          ))}
      </div>
      <ColumnFooter state={props.state} ancestor={props.ancestor} />
    </div>
  );
};

export default Column;

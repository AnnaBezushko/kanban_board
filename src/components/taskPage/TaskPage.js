import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import css from "./TaskPage.module.scss";
import { useTasks } from "../hooks/tasks/taskProvider";

function CloseIcon() {
  const navigate = useNavigate();
  return (
    <svg
      className={css.close}
      onClick={() => navigate("/")}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.35355"
        y1="0.646447"
        x2="24.3536"
        y2="23.6464"
        stroke="black"
      />
      <line
        y1="-0.5"
        x2="32.5269"
        y2="-0.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 24 1)"
        stroke="black"
      />
    </svg>
  );
}

export function TaskPage({ state, setState }) {
  const { updateTask, findById } = useTasks();
  const [isEditorOpened, setIsEditorOpened] = useState(false);

  const { taskId } = useParams();
  const task = findById(taskId);

  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    updateTask({ ...task, description });
    if (!description) setIsEditorOpened(false);
  };
  if (!task) {
    return (
      <div className={css.container}>
        Задача не найдена.
        <CloseIcon />
      </div>
    );
  }
  return (
    <div className={css.container}>
      <CloseIcon />
      <span className={css.title}>{task.name}</span>
      {task.description || isEditorOpened ? (
        <textarea
          className={css.editor}
          value={task.description}
          onChange={handleDescriptionChange}
          placeholder={"Enter description..."}
        />
      ) : (
        <div onClick={() => setIsEditorOpened(true)} className={css.empty}>
          This task has no description. Click to enter...
        </div>
      )}
    </div>
  );
}

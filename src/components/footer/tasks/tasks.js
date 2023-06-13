import css from "./tasks.module.scss";

const Tasks = () => {
  console.log(css);
  return (
    <div className={css.tasks}>
      <span className={css.activeTasks}>Active tasks:</span>
      <span>Finished tasks:</span>
    </div>
  );
};

export default Tasks;

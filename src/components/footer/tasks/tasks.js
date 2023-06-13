import css from "./tasks.module.scss";

const Tasks = ({activeCount, finishedCount}) => {
  console.log(css);
  return (
    <div className={css.tasks}>
      <span className={css.activeTasks}>Active tasks: {activeCount}</span>
      <span>Finished tasks: {finishedCount}</span>
    </div>
  );
};

export default Tasks;

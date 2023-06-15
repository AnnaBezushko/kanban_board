import css from "./main.module.scss";
import Column from "./column/column";
import { useTasks } from "../hooks/tasks/taskProvider";

const Main = () => {
  const { states } = useTasks();
  return (
    <main className={css.main}>
      {states.map((state) => (
        <Column
          key={state.id}
          name={state.name}
          state={state.state}
          ancestor={state.ancestor}
        />
      ))}
    </main>
  );
};

export default Main;

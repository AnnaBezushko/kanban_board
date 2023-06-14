import css from "./main.module.scss";
import Column from "./column/column";
import {filterBacklog, filterFinished, filterInProgress, filterReady, taskStatus} from "./stateManagement";

const Main = ({ state, setState }) => {
  const addTask = (columnName) => (task) => {
    const newState = {
      tasks: [...state.tasks],
    };
    if (columnName === "backlog") {
      newState.tasks.push(task);
    }
    if (columnName === "ready") {
      task.status = taskStatus.ready;
      // newState.tasks = newState.tasks.filter(
      //   (removed) => removed.id !== task.id
      // );
      // task
    }
    if (columnName === "inProgress") {
      task.status = taskStatus.inProgress;
      // newState.inProgress.push(task);
      // newState.ready = newState.ready.filter(
      //   (removed) => removed.id !== task.id
      // );
    }
    if (columnName === "finished") {
      task.status = taskStatus.finished;
      // newState.finished.push(task);
      // newState.inProgress = newState.inProgress.filter(
      //   (removed) => removed.id !== task.id
      // );
    }
    setState(newState);
  };
  return (
    <main className={css.main}>
      <Column
        name="Backlog"
        tasklist={state.tasks.filter(filterBacklog)}
        addTask={addTask("backlog")}
        withInput={true}
      />
      <Column
        name="Ready"
        tasklist={state.tasks.filter(filterReady)}
        addTask={addTask("ready")}
        selectOptions={state.tasks.filter(filterBacklog)}
      />
      <Column
        name="In Progress"
        tasklist={state.tasks.filter(filterInProgress)}
        addTask={addTask("inProgress")}
        selectOptions={state.tasks.filter(filterReady)}
      />
      <Column
        name="Finished"
        tasklist={state.tasks.filter(filterFinished)}
        addTask={addTask("finished")}
        selectOptions={state.tasks.filter(filterInProgress)}
      />
      {/*<Details/>*/}
    </main>
  );
};

export default Main;

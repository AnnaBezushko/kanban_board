import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const filterBacklog = (task) => task.status === "backlog";
export const filterFinished = (task) => task.status === "finished";

const states = [
  { id: 1, name: "Backlog", state: "backlog", ancestor: "backlog" },
  { id: 2, name: "Ready", state: "ready", ancestor: "backlog" },
  { id: 3, name: "In progress", state: "inProgress", ancestor: "ready" },
  { id: 4, name: "Finished", state: "finished", ancestor: "inProgress" },
];

const TaskContext = createContext("tasks");

let didInit = false;
export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState();

  const findById = (id) => tasks.find((t) => t.id === parseInt(id));

  useEffect(() => {
    if (!didInit || !tasks) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (didInit) return;
    didInit = true;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [
      { name: "Sprint bugfix", id: 1, status: "backlog" },
      { name: "Login page – performance issues", id: 2, status: "backlog" },
    ];
    console.log(tasks);
    setTasks(tasks);
  }, []);

  const context = {
    states,
    tasks,
    findById,
    createTask: (name, description = "") => {
      const task = {
        id: tasks.length + 1,
        name,
        description,
        status: "backlog",
      };
      setTasks([...tasks, task]);
    },
    updateTask: (item) => {
      const task = findById(item.id);
      task.name = item.name;
      task.state = item.state;
      task.description = item.description;
      setTasks([...tasks]);
    },
    removeTask: (id) => {
      const task = findById(id);
      if (!task) return;
      setTasks([...tasks.filter((t) => t.id !== id)]);
    },
    getActiveTaskCount: () => {
      return tasks.filter(filterBacklog).length;
    },
    getFinishedTaskCount: () => {
      return tasks.filter(filterFinished).length;
    },
  };
  return (
    <TaskContext.Provider value={context}>
      {didInit && props.children}
    </TaskContext.Provider>
  );
};

export function useTasks() {
  return useContext(TaskContext);
}

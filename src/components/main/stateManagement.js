export const taskStatus = {
    backlog: "backlog",
    ready: "ready",
    inProgress: "inProgress",
    finished: "finished",
};

export const filterBacklog = (task) => task.status === taskStatus.backlog;
export const filterReady = (task) => task.status === taskStatus.ready;
export const filterInProgress = (task) => task.status === taskStatus.inProgress;
export const filterFinished = (task) => task.status === taskStatus.finished;

export function createTask(name, description = "") {
    return {
        id: Date.now().toString(),
        name,
        description,
        status: taskStatus.backlog,
    };
}

export function updateTasksArrayAndGetNewState(state, task){
    const tasks = [...state.tasks];
    console.log(state, task);
    const index = tasks.findIndex((t) => t.id === task.id);
    if(index === -1){
        throw Error(`Undefined task ${task.id}`);
    }
    tasks[index] = task;
    return {...state, tasks}
}
import {useNavigate, useParams} from "react-router";
import {updateTasksArrayAndGetNewState} from "../main/stateManagement";
import {useState} from "react";

function getTaskById(state, taskId){
    return state.tasks.filter((task) => task.id === taskId)[0];
}

function BackButton(){
    const navigate = useNavigate();
    return <button onClick={() => navigate('/')}>На главную</button>
}

function editDescription(state, setState, task, description){
    task.description = description;
    setState(updateTasksArrayAndGetNewState(state, task))
}

export function TaskPage({state, setState}) {
    const [isEditorOpened, setIsEditorOpened] = useState(false);
    const {taskId} = useParams();
    const task = getTaskById(state, taskId) ;
    const handleDescriptionChange = (e) => {
        editDescription(state, setState, task, e.target.value);
        if(!e.target.value) setIsEditorOpened(false);
    };
    if (!task) {
        return <div>Задача не найдена.<BackButton/></div>;
    }
    return <div>
        {task.name}
        {(task.description || isEditorOpened) ?
            <textarea value={task.description} onChange={handleDescriptionChange}></textarea> :
            <div onClick={() => setIsEditorOpened(true)} style={{cursor: 'pointer'}}>
                This task has no description
            </div>
        }
        <BackButton/>
    </div>
}
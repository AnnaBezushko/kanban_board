import {useNavigate, useParams} from "react-router";
import {updateTasksArrayAndGetNewState} from "../main/stateManagement";
import {useState} from "react";
import css from "./TaskPage.module.scss";

function getTaskById(state, taskId){
    return state.tasks.filter((task) => task.id === taskId)[0];
}

function BackButton(){
    const navigate = useNavigate();
    return <button className={css.backButton} onClick={() => navigate('/')}>На главную</button>
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
        return <div className={css.container}>Задача не найдена.<BackButton/></div>;
    }
    return <div className={css.container}>
        <span className={css.title}>{task.name}</span>
        {(task.description || isEditorOpened) ?
            <textarea
                className={css.editor}
                value={task.description}
                onChange={handleDescriptionChange}
                placeholder={'Enter description...'}
            /> :
            <div onClick={() => setIsEditorOpened(true)} style={{cursor: 'pointer'}}>
                This task has no description. Click to enter...
            </div>
        }
        <BackButton/>
    </div>
}
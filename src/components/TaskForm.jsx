import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateTask = useSelector(state => state.task)
    const {id} = useParams()

    const [Task, setTask] = useState({
        name: "",
        description: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        if(id){
            dispatch(editTask(Task))
        } else {
            dispatch(addTask({
                ...Task,
                id: uuid(),
                completed: false
            }));
        }
        navigate('/')
    }

    const handleChange = e => {
        const { value,name } = e.target;
        setTask({
            ...Task,
            [name]:value
        })
    }

    useEffect(()=>{
        if(id){
            const taskFound = stateTask.find(task=> task.id === id);
            setTask(taskFound)
        }
    },[id,stateTask])

    return (
        <form className="" >
            <input 
                name="name" 
                type="text" 
                placeholder="Title" 
                onChange={handleChange} 
                value={Task.name}
            />

            <textarea 
                name="description" 
                onChange={handleChange}
                value={Task.description}
            ></textarea>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>{id?"edit":"save"}</button>
        </form>
    )
}

export default TaskForm
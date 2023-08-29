import { useSelector } from "react-redux";
import Task from "./Task";
import { Link } from "react-router-dom";

const TaskList = () => {
    const tasks = useSelector(({task}) => task);
    return (
        <div>
            <header>
                <h1>task {tasks.length} </h1>

                <Link to={'/create-task'} >
                    Crear tarea
                </Link>
            
            </header>
            {
                tasks.map(task => 
                    <Task
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        description={task.description}
                        completed={task?.completed}
                    />

                )
            }
        </div>
    )
}

export default TaskList
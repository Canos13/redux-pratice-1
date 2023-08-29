import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice'
import { Link } from 'react-router-dom'

const Task = ({id,name,description,completed}) => {

    const dispath = useDispatch()

    const handleDelete = id => {
        dispath(deleteTask(id))
    }

    return (
        <div className='py-3' >
            <h1> {name} </h1>
            <p>  {description} </p>
            <p>
                {
                    completed
                    ? "Completado"
                    : "No completado"
                }
            </p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleDelete(id)}>delete</button>
            <Link to={`/edit-task/${id}`} > edit task </Link>
        </div>
    )
}


Task.propTypes = {
    completed: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Task
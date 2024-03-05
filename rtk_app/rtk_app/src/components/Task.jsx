import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { updateTask, deleteTask } from "../store/slices/todoSlice.js"


function Task(task) {
    const dispatch = useDispatch()

    function update(id) {
        dispatch(updateTask(id));
    }

    function deleting(id) {
        dispatch(deleteTask(id))
    }

  return (
    <div>
        <button onClick={() => update(task.id)}>complete</button>
        <button onClick={() => deleting(task.id)}>delete</button>
    </div>
  )
}

export default Task
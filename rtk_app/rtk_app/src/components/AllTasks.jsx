import Task from "./Task.jsx"
import PropTypes from "prop-types"

function AllTasks({ tasks }) {
  return (
    <div>
        {taskSlice.map((task) => (
            <Task key={task.id} task={task} />
        ))}
        <style jsx="true">
            {`
            .all{
                color: red,
                display: grid;
                margin-top: 2rem;
                grid-template-columns
            }
            `}
        </style>
    </div>
  )
}

export default AllTasks
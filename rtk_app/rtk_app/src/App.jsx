import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { addTask } from './store/slices/todoSlice'
import AllTasks from './components/AllTasks'

function App() {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const { tasks } = useSelector((state) => state.tasks);

  function onSubmit(e) {
    e.preventDefault();

    const task = {
      id: uuidv4(),
      task: inputRef.current.value,
      completed: false,
    };

    dispatch(addTask(task))

    inputRef.current.value = ""
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Enter task</label> <br />
        <input type="text"
        ref={inputRef}
        id='' />
        <button>Add</button>
      </div>
    </form>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TODO } from './store/actions'


function App() {
  const dispatch = useDispatch()
  const value = useSelector(state => state.todos.todo)

  const [inputValue, setInputValue] = useState('')

  const addTodo = (event) => {
    event.preventDefault()

    const todos = {
      id: Math.floor(Math.random() * 10),
      todo: inputValue
    }

    dispatch({type: ADD_TODO, payload:todos})

    setInputValue('')
  }

  return (
    <>
      <form action="" onSubmit={addTodo}>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <button type='submit'>Add Todo</button>
        <br /><br />

        <p>{value}</p>
        <button>update</button>
        <button>delete</button>
      </form>
    </>
  )
  }

export default App

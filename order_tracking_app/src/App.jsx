import { useState } from 'react';
import './App.css'
import { useSelector } from 'react-redux';

function App() {
  const value = useSelector((state) => state.orders);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const [name, setName] = useState('');
  const [meal, setMeal] = useState('');
  // const [price, setPrice] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
        <p>Welcome to Ayebs' Kitchen</p>
        <p>Place Your Order</p>
        <p>{date}</p>
        <p>Order Id: </p>
        </div>

        <label htmlFor="">Customer name</label>
        <input type="text" 
        placeholder='Enter your name'
        value={name}
        onChange={(event) => setName(event.target.value)}/>
        <br />

        <label htmlFor="">Meal</label>
        <input type="text" 
        placeholder='Type package name' 
        value={meal} 
        onChange={(event) => setMeal(event.target.value)}/>
        <br />

        <label htmlFor="">Number of packages</label>
        <input type="number" min={1} max={20} />
        <br />

        <button type='button'>Order Now</button>
      </form>
    </div>
  )
}

export default App

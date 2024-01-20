import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { postOrder } from "./store/action";
import { postOrder } from "./store/action/action";

function App() {
  const value = useSelector((state) => state.orders);
  console.log(value);

  const id = value.map((number) => {
    return number.id;
  });
  console.log("id", id);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [meal, setMeal] = useState("");
  const [num, setNum] = useState(0);
  // const [price, setPrice] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    const newOrder = {
      id: Math.floor(Math.random() * 10),
      name: name,
      meal: meal,
      num: num,
    };

    dispatch(postOrder(newOrder));

    setName("");
    setMeal("");
    setNum(0);
  };

  return (
    <div>
      <div>
        <p>Welcome to Ayebs' Kitchen</p>
        <p>Place Your Order</p>
        <p>{date}</p>
        <p>Order Id: {id}</p>
      </div>

      <form action="" onSubmit={submitForm}>
        <label htmlFor="">Customer name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label htmlFor="">Meal</label>
        <input
          type="text"
          placeholder="Type package name"
          value={meal}
          onChange={(event) => setMeal(event.target.value)}
        />
        <br />

        <label htmlFor="">Number of packages</label>
        <input
          type="number"
          min={1}
          max={20}
          value={num}
          onChange={(event) => setNum(event.target.value)}
        />
        <br />

        <button type="submit">Order Now</button>
      </form>

      <div>
        {value.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.meal}</p>
            <p>{item.num}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

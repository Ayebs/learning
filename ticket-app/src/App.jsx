import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTickets, postTicket, deleteTicket, updateTicket } from "./store/thunk";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const value = useSelector((state) => state.tickets);
  console.log({ value });

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  // handleSubmit function is fired when the form is submitted (onSubmit)
  const handleSubmit = (event) => {
    event.preventDefault();

    //data being passed to the ticket array in the ticketReducer
    const info = {
      title: title,
      summary: summary,
    };

    dispatch(postTicket(info));
    setSummary("");
    setTitle("");
  };

  // this displays the fetched data and displays them upon entry into the app
  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <label htmlFor="">Summary</label>
        <input
          type="text"
          placeholder="Description"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />
        <br />
        <button>Add Ticket</button>
      </form>

      <div style={{ display: "flex", gap: "1rem" }}>
        {value.map((item) => (
          <div key={item._id} style={item.workedOn ? { backgroundColor: "purple" } : {backgroundColor: "grey"}}>
            <div>
              <p>{item.title}</p>
              <p>{item.summary}</p>
            </div>
            <div className="icons">
              <FaEdit onClick={() => dispatch(updateTicket(item._id))} />
              <MdDelete onClick={() => dispatch(deleteTicket(item._id))} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

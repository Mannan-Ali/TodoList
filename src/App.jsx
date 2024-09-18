import  { useState } from "react";
import List from "./components/TodoList";
import './App.css'
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteVal(id) {
    setItems((prevVal) => {
      return prevVal.filter((item, index) => {
        return index !== id;
      }); // here item is important as 2nd para should be index
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <List
              key={index}
              id={index}
              todoVal={todoItem}
              handleClick={deleteVal}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

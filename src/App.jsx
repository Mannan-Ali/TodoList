import  { useState } from "react";
import List from "./components/TodoList";
import InputArea from "./components/InputArea";
import './App.css';

function App() {
  const [items, setItems] = useState([]);


  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
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
      <InputArea addVal={addItem} />
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

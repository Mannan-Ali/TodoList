/* eslint-disable react/prop-types */
import { useState } from "react";

function List(props) {
  const [val, func] = useState(false);
  function handleClick() {
    func(!val);
  }
  

  return (
    <div className="ListDiv">
    <li style={{ textDecoration: val && "line-through" }}
    onClick={handleClick}>
      {props.todoVal}
    </li>
    <i className="ri-close-fill icon"  onClick={() => {
        props.handleClick(props.id);
      }}></i>
    </div>
  );
}
export default List;

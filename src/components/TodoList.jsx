/* eslint-disable react/prop-types */
// import React, { useState } from "react";

function List(props) {
  // const [val, func] = useState(false);
  // function handleClick() {
  //   func(!val);
  // }
  // style={{ textDecoration: val && "line-through" }}

  return (
    <li
      onClick={() => {
        props.handleClick(props.id);
      }}
    >
      {props.todoVal}
    </li>
  );
}
export default List;

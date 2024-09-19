/* eslint-disable react/prop-types */
import { useState } from "react";

function InputArea(props){
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
      }
    return (
        <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={()=>{props.addVal(inputText);
          setInputText("");
        }}>
          <span>Add</span>
        </button>
      </div>
    )
}
export default InputArea;
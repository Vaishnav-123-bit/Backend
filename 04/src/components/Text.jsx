import React ,{useState} from "react";

const Text = (props) => {
    const[text,setText]=useState("enter your words")
    const handleClick=()=>{
        setText("Text set correct" + text)
        let newText=text.toUpperCase()
        setText(newText)
    }
  return (
    <>
      <div className="bg-gray-200">{props.title}</div>
      <div className={`bg-red-100` }>{text}</div>
      <button onClick={handleClick}>B1</button>

      <div>
        <h4>words {text.split(" ").length} characters={text.length}</h4>
      </div>
    </>
  );
};

export default Text;

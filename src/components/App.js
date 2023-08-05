
import React from "react";
import './../styles/App.css';

const App = () => {
  let i = document.getElementById("input");
  let p = document.getElementById("para");
  p.innerText = i.value;
  return (
    <div>
        <p>Enter your name:</p>
        <input type="text" id= "input"></input>
        <p id="para"></p>
    </div>
  )
}

export default App

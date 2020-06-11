import React, { useState } from "react";
import "./room.css";

function Room() {
  const [isLit, setLit] = useState(true);
  let [temp, setTemp] = useState(22);

  return (
    <div className={`room ${isLit ? "dark" : "lit"}`}>
      <h1> Room is {isLit ? "Lit" : "Dark"}</h1>
      <br />
      <button onClick={() => setLit(true)} className="btnL">
        Light On
      </button>
      <button onClick={() => setLit(false)} className="btnL">
        Light OFF
      </button>
      <br />
      <h3>Current Temprature is {temp} </h3>
      <button
        onClick={() => {
          setTemp(++temp);
        }}
        className="btnT"
      >
        +
      </button>
      <button onClick={() => setTemp(--temp)} className="btnT">
        -
      </button>
    </div>
  );
}

export default Room;

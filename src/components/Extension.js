import React from "react"
import '../assets/styles/Extension.css'



export default function Extension(props) {


  return (
    <div className="extension">


      <div className="extension-header">
        <img src={props.logo} alt="Extension Logo" />

        <div className="info">
          <h2>{props.name}</h2>
          <p>{props.description}</p>

        </div>
      </div>

      <div className="options">
        <button className="remove-btn">Remove</button>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
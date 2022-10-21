import React, { useState } from "react";
import "./Info.css";
const Info = ({ taskArr, BtnDelete }) => {
  function handleEdit(objTask) {
    handleShow();
    setoneEditTask(objTask);
  }
  return (
    <div id="container">
      {taskArr.map((item, index) => (
        <div id="card" key={item.id}>
          <img src={item.img} alt="Photo" />
          <div className="infoP">
            <p>{item.name}</p>
            <p>{item.price} Сом</p>
          </div>
          <div className="allBtn">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => BtnDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default Info;

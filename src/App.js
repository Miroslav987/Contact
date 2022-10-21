import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./Components/Info/Info";
import InpAll from "./Components/InpAll/InpAll";
import Modal from "./Components/Modal/Modal";

const App = () => {
  const [taskArr, setTaskArr] = useState([]);
  const [editAll, seteditAll] = useState({});
  console.log(taskArr);
  function handleInp(objTask) {
    let newTodo = [...taskArr];
    newTodo.push(objTask);
    setTaskArr(newTodo);
  }
  function BtnDelete(id) {
    let newTask = taskArr.filter(item => {
      console.log(item.id);
      return item.id !== id;
    });
    setTaskArr(newTask);
  }
  function saveEditedINp(editObj) {
    let newEditedInp = taskArr.map(item => {
      if (item.id === editObj.id) {
        return editObj;
      } else {
        return item;
      }
    });
    setTaskArr(newEditedInp);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let data = localStorage.getItem("tasks");
      setTaskArr(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  }, [taskArr]);

  return (
    <>
      <InpAll handleInp={handleInp} />
      <br />
      <Info taskArr={taskArr} BtnDelete={BtnDelete} handleShow={handleShow} />
      <Modal
        saveEditedINp={saveEditedINp}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default App;

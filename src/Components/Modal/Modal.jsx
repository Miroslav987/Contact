import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Modal.css";

const Modal = ({ show, handleClose, saveEditedINp, oneEditTask }) => {
  console.log(oneEditTask);
  const [editinpName, seteditInpName] = useState(oneEditTask.name);
  const [editinpPrice, seteditInpPrice] = useState(oneEditTask.price);
  const [editinpUrl, seteditInpUrl] = useState(oneEditTask.img);
  function handleSave() {
    if (!editinpName.trim() || !editinpPrice.trim() || !editinpUrl.trim()) {
      toast.error(" Заполните поле", {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    let editObj = {
      name: editinpName,
      price: editinpPrice,
      img: editinpUrl,
      id: oneEditTask.id,
    };
    handleClose();
    saveEditedINp(editObj);
  }
  return (
    <div id="modal" show={show} onHide={handleClose}>
      <div id="modal_block">
        <input
          type="text"
          placeholder="name"
          value={editinpName}
          onChange={e => {
            seteditInpName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="price"
          value={editinpPrice}
          onChange={e => {
            seteditInpPrice(e.target.value);
          }}
        />
        <input
          type="url"
          placeholder="img"
          value={editinpUrl}
          onChange={e => {
            seteditInpUrl(e.target.value);
          }}
        />
        <div id="modal-btn">
          <button onClick={handleClose}>Close</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

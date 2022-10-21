import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./InpAll.css";

const InpAll = ({ handleInp }) => {
  const [inpName, setInpName] = useState("");
  const [inpPrice, setInpPrice] = useState("");
  const [inpUrl, setInpUrl] = useState("");
  function handleAdd() {
    if (!inpName.trim() || !inpPrice.trim() || !inpUrl.trim()) {
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
    let newInp = {
      name: inpName,
      price: inpPrice,
      img: inpUrl,
      id: Date.now(),
    };
    handleInp(newInp);
    setInpName("");
    setInpPrice("");
    setInpUrl("");
  }
  return (
    <div id="block_inp">
      <input
        type="text"
        name=""
        value={inpName}
        onChange={e => setInpName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        name=""
        value={inpPrice}
        onChange={e => setInpPrice(e.target.value)}
        placeholder="price"
      />
      <input
        type="url"
        name=""
        value={inpUrl}
        onChange={e => setInpUrl(e.target.value)}
        placeholder="img"
      />

      <br />
      <button onClick={handleAdd} id="save">
        Save
      </button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default InpAll;

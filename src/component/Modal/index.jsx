import React from "react";
import "./Modal.css";

const Modal = ({ openModal, children }) => {

    if(!openModal) return null
  return (
    <div className="modal">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Modal;

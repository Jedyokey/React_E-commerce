import React from 'react';
import "./Modal.css";
import { HiX } from 'react-icons/hi';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <HiX size={24} />
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
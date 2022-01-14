/* eslint-disable */
import React from 'react';
import './Modal.scss';

export const Modal = ({ active, setActive, content }) => {
  const closeModal = () => {
    setActive(false);
    window.location.reload();
  };

  return (
    <div
      className={active ? "Modal Modal--active" : "Modal"}
      onClick={closeModal}
    >
      <div className="Modal__content">
        {content}
      </div>

      <button
        className="Modal__closeButton"
        onClick={closeModal}
      >
        X
      </button>
    </div>
  );
};

/* eslint-disable */
import React from 'react';
import './Modal.scss';

export const Modal = ({ active, setActive, content }) => {
  return (
    <div
      className={active ? "Modal Modal--active" : "Modal"}
      onClick={() => setActive(false)}
    >
      <div className="Modal__content">
        {content}
      </div>
    </div>
  );
};

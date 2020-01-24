import React from 'react';
import ModalHeader from './modal-header';
import './modal.css';

const Modal = props => (
  <div
    className={`modal ${props.className}`}
    onMouseDown={props.onMouseDown}
    onMouseUp={props.onMouseUp}
  >
    <div className={'modal-wrap'}>
      {props.header ? (
        <ModalHeader text={props.header} closeModal={props.closeModal} />
      ) : null}
      <div
        className={`modal-content ${props.header ? 'with-header' : ''} ${
          props.className
        }`}
      >
        {props.children}
      </div>
    </div>
  </div>
);

export default Modal;

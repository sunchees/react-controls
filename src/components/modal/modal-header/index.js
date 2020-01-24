import React from 'react';
import Button from '../../button';
import './modal-header.css';

const ModalHeader = ({ text, closeModal, className = '' }) => (
  <div className={`modal-header ${className}`}>
    <div className='modal-header__header-text'>{text}</div>
    {closeModal ? (
      <Button className='modal-header__close-button' onClick={closeModal}>
        ✕
      </Button>
    ) : null}
  </div>
);

export default ModalHeader;

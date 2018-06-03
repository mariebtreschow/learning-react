import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearState}
    closeTimeoutMS={200}
    className='modal'
    >

    <h3 className='modal__title'>Selected Options</h3>
    {props.selectedOption && <p className='modal__body' >{props.selectedOption}</p>}
    <button className='button' onClick={props.handleClearState}>OK</button>
  </Modal>
);


export default OptionModal;

import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={!!props.selectedOptions} contentLabel = "Primer"> 
        <h3>Selektovana Opcija</h3>
        {props.selectedOptions && <p>{props.selectedOptions}</p>}
        <button onClick= {props.clear}>Okay</button>
    </Modal>
)


export default OptionModal


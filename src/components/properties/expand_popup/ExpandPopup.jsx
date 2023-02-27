import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ExpandPopup = (props) => {
    const [lgShow, setLgShow] = useState(true);
    return (
        <>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Large Modal
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
        </Modal>
        </>
    );
}

export default ExpandPopup;
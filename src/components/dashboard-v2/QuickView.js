import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MDBIcon } from 'mdb-react-ui-kit';

const QuickView = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);
        setShow(false)
    };

    return(
        // <div className='plat-quickview-body'>
        //     <Button variant="primary" onClick={handleShow} className="plat-offcanvas-button">
        //         <iconify-icon icon="material-symbols:play-arrow" style={{ fontSize: '30px', color: '#1b5f9d' }}></iconify-icon>
        //     </Button>
        //     <Offcanvas show={show} onHide={handleClose} className="plat-quick-view"> 
        //         <Offcanvas.Header closeButton>
        //         <Offcanvas.Title className='plat-quickview-title'>Quick view</Offcanvas.Title>
        //         </Offcanvas.Header>
        //         <Offcanvas.Body>
        //             <input 
        //                 type="checkbox" 
        //                 id="q-checkbox-1-1"   
        //                 className="plat-item-checkbox" 
        //                 name="All Environmnet"
        //                 value="Production"
        //                 onChange={handleChange}
        //             /><label htmlFor="q-checkbox-1-1"></label>
        //             <span className='plat-item-list'>Top 5 spending accounts</span>
        //         </Offcanvas.Body>
        //     </Offcanvas>
        // </div>
        <></>
    );
}

export default QuickView;
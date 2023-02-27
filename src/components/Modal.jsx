
import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import Alert from '@mui/material/Alert';
import Spinner from 'react-bootstrap/Spinner';


function Modal({ flag, setCloseModal, content, onSubmit, accountValidate, buttonloader, closealert, changeCloseAlert, submitbuttonstatus }) {
    const [basicModal, setBasicModal] = useState(false);
    useEffect(() => {
        setBasicModal(flag);
    }, [flag]);

    useEffect(() => {
        if(!basicModal) setCloseModal();
    }, [basicModal]);

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Account Settings</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={setCloseModal}></MDBBtn>
            </MDBModalHeader>
            {closealert ? <Alert severity="error">Wrong Information</Alert> : null}
            <MDBModalBody>
                {content}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={setCloseModal}>
                Close
              </MDBBtn>
              {
                submitbuttonstatus === 'new' ? 
                <MDBBtn onClick={onSubmit}>
                  {accountValidate == 'validate' ? 'Validate Account' : 'Configure Account'}
                  {
                    buttonloader && 
                    <Spinner animation="border" role="status" className='spinner-size'>
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  }
                </MDBBtn> :
                <MDBBtn onClick={onSubmit}>
                  Update Account
                </MDBBtn>
              }
                
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Modal;
import "./zoomin.css";
import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
} from "mdb-react-ui-kit";

const ZoomIn = (props) => {
    

    return(
        <>
            <MDBModal show={props.zoominstatus} setShow={props.setZoomInStatus} tabIndex="-1">
                <MDBModalDialog className="plat-zoom-dialog">
                <MDBModalContent className="plat-zoom-content">
                    <MDBModalHeader>
                    </MDBModalHeader>
                    <MDBModalBody className="plat-zoom-body">
                        {props.children}
                    </MDBModalBody>
                    <MDBModalFooter>
                    </MDBModalFooter>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default ZoomIn;
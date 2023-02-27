import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalBody
  } from "mdb-react-ui-kit";
import { Col, Row } from "react-bootstrap";
import './popupdetails.css';
import { IoMdClose } from "react-icons/io";


const BudgetComplianceInfo = (props) => {
    return(
        <>
            <MDBModal show={props.zoominstatus} setShow={props.setZoomInStatus} tabIndex="-1">
                  <MDBModalDialog className="plat-modal-dialog">
                          <MDBModalContent >
                              <div className="plat-model-fullcover">
                                  <MDBModalBody className="plat-popup-tagging-main-body">
                                      <Col>
                                         
                                      </Col>
                                  </MDBModalBody>
                                  <div className="plat-model-close-icon" onClick={() => props.setZoomInStatus(false)}>
                                          <IoMdClose className="plat-model-top-close-icon" />
                                  </div>
                              </div>
                          </MDBModalContent>   
                  </MDBModalDialog>
            </MDBModal>
           
        </>
    )
}

export default BudgetComplianceInfo;
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalBody
  } from "mdb-react-ui-kit";
import { Col, Row } from "react-bootstrap";
import './popupdetails.css';
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
  
  
  const TaggingDetails = (props) => {
    // console.log(props);
    const [records, setRecords] = useState({
        tagged: [],
        untagged: [],
        partially_tagged: []
    });
    useEffect(() => {
        var partially_tagged = props.records.list?.filter((v, index) => v.tagging_details === 'partially_tagged' );
        var tagged = props.records.list?.filter((v, index) => v.tagging_details === 'tagged' );
        var untagged = props.records.list?.filter((v, index) => v.tagging_details === 'Untagged' );

        //short
        partially_tagged = [...partially_tagged].sort((a, b) => (a.services > b.services ? -1 : 1));
        tagged = [...tagged].sort((a, b) => (a.services > b.services ? -1 : 1));
        untagged = [...untagged].sort((a, b) => (a.services > b.services ? -1 : 1));

        // console.log(+Math.round(partially_tagged.length / 3) + +1);

        setRecords({
            tagged: [...tagged].sort((a, b) => (Number((a.count_untagged_resource)) > Number((b.count_untagged_resource)) ? -1 : 1)),
            untagged: [...untagged].sort((a, b) => (Number((a.count_untagged_resource)) > Number((b.count_untagged_resource)) ? -1 : 1)),
            partially_tagged: [...partially_tagged].sort((a, b) => (Number((a.count_untagged_resource)) > Number((b.count_untagged_resource)) ? -1 : 1))
        })
    },[props]);
      return(
          <>
              <MDBModal show={props.zoominstatus} setShow={props.setZoomInStatus} tabIndex="-1">
                    <MDBModalDialog className="plat-modal-dialog">
                            <MDBModalContent >
                                <div className="plat-model-fullcover">
                                    <MDBModalBody className="plat-popup-tagging-main-body">
                                        <Col>
                                            <div>
                                                <h1 className="plat-popup-tagging-title">Partially Tagged</h1>
                                                <Row>
                                                    {
                                                        records.partially_tagged.map((data,index) =>{ 
                                                        return <>
                                                            <Col lg={3} className="plat-popup-tagging-body">
                                                                <p className="plat-popup-tagging-list">{data.services} ({data.count_untagged_resource}) </p>
                                                            </Col> 
                                                        </>
                                                        })
                                                    } 
                                                </Row>
                                            </div>
                                            <div>
                                                <h1 className="plat-popup-tagging-title">Untagged</h1>
                                                <Row>
                                                    {
                                                        records.untagged.map((data,index) =>{ 
                                                        return <>
                                                            <Col lg={3} className="plat-popup-tagging-body">
                                                                <p className="plat-popup-tagging-list">{data.services} ({data.count_untagged_resource}) </p>
                                                            </Col> 
                                                        </>
                                                        })
                                                    }
                                                    
                                                </Row>
                                            </div>
                                            <div>
                                                <h1 className="plat-popup-tagging-title">Tagged</h1>
                                                <Row>
                                                    {
                                                        records.tagged.map((data,index) =>{ 
                                                        return <>
                                                            <Col lg={3} className="plat-popup-tagging-body">
                                                                <p className="plat-popup-tagging-list">{data.services} ({data.count_untagged_resource}) </p>
                                                            </Col> 
                                                        </>
                                                        })
                                                    }
                                                    
                                                </Row>
                                            </div>
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
  
  export default TaggingDetails;
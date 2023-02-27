import "./accordion.css";
import { Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { AiOutlineCloudServer, AiOutlineDatabase } from "react-icons/ai";




const Accordion = () => {
    return(
        <div className='plat-assets-spend-body'>
            <Row className='plat-table-assets-spend-thead'>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th'>
                    <div className='assets-table-list'>
                        <p className='assets-table-top-header'>Environment</p>
                    </div>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th'> 
                    <div className='assets-table-header'>
                        <p className='assets-table-header-title'><AiOutlineCloudServer   className='asset-spend-top-icon'/> VM</p>
                        <div className='assets-table-title-body'>
                            <p className='assets-table-count'>Count</p>
                            <p className='assets-table-spend'>Spend</p>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th'> 
                    <div className='assets-table-header'>
                        <p className='assets-table-header-title'><AiOutlineDatabase   className='asset-spend-top-icon'/>DBaaS</p>
                        <div className='assets-table-title-body'>
                            <p className='assets-table-count'>Count</p>
                            <p className='assets-table-spend'>Spend</p>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th'> 
                    <div className='assets-table-header'>
                        <p className='assets-table-header-title'>Others</p>
                        <div className='assets-table-title-body'>
                            <p className='assets-table-count'>Count</p>
                            <p className='assets-table-spend'>Spend</p>
                        </div>
                    </div>
                </Col>

                
            </Row>

            <ul class="cd-accordion--animated">
                <li class="cd-accordion__item cd-accordion__item--has-children">
                   
                    <input class="cd-accordion__input" type="checkbox" name ="group-1" id="group-1" />
                    <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-1">
                        <span> 
                            <Row className='asset-table-body-list'> 
                                <Col  className='asset-table-body-main-title'>All Environment</Col>
                                <Col>
                                    <div className='assets-table-body-0-set-vm'>
                                        <div className='assets-table-body-set-vm'>
                                            <span className='assets-vm-body-count'>1</span>
                                            <span className='assets-vm-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>  
                                </Col>
                                <Col>
                                    <div className='assets-table-body-0-set-dbaas'>
                                        <div className='assets-table-body-set-dbaas'>
                                            <span className='assets-dbaas-body-count'>1</span>
                                            <span className='assets-dbaas-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>  
                                </Col>
                                <Col>
                                    <div className='assets-table-body-0-set-others'>
                                        <div className='assets-table-body-set-others'>
                                            <span className='assets-others-body-count'>1</span>
                                            <span className='assets-others-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </span>
                    </label>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  
                    
                    <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input class="cd-accordion__input" type="checkbox" name ="sub-group-2" id="sub-group-2" />
                    <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-2">
                    <span> 
                            <Row className='asset-table-body-list'> 
                                <Col  className='asset-table-body-main-title'>Production</Col>
                                <Col>
                                    <div className='assets-table-body-0-set-vm'>
                                        <div className='assets-table-body-set-vm'>
                                            <span className='assets-vm-body-count'>1</span>
                                            <span className='assets-vm-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>  
                                </Col>
                                <Col>
                                    <div className='assets-table-body-0-set-dbaas'>
                                        <div className='assets-table-body-set-dbaas'>
                                            <span className='assets-dbaas-body-count'>1</span>
                                            <span className='assets-dbaas-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>  
                                </Col>
                                <Col>
                                    <div className='assets-table-body-0-set-others'>
                                        <div className='assets-table-body-set-others'>
                                            <span className='assets-others-body-count'>1</span>
                                            <span className='assets-others-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </span>    
                    </label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                        <li class="cd-accordion__item cd-accordion__item--has-children">
                        <input class="cd-accordion__input" type="checkbox" name ="sub-group-level-3" id="sub-group-level-3" />
                        <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-level-3">
                        <span> 
                            <Row className='asset-table-body-list'> 
                                <Col  className='asset-table-body-main-title'>AWS</Col>
                                <Col>
                                    <div className='assets-table-body-0-set-vm'>
                                        <div className='assets-table-body-set-vm'>
                                            <span className='assets-vm-body-count'>1</span>
                                            <span className='assets-vm-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>  
                                </Col>
                                <Col>
                                    <div className='assets-table-body-0-set-dbaas'>
                                        <div className='assets-table-body-set-dbaas'>
                                            <span className='assets-dbaas-body-count'>1</span>
                                            <span className='assets-dbaas-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>  
                                </Col>
                                <Col>
                                    <div className='assets-table-body-0-set-others'>
                                        <div className='assets-table-body-set-others'>
                                            <span className='assets-others-body-count'>1</span>
                                            <span className='assets-others-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </span>  
                        </label>

                        <ul class="cd-accordion__sub cd-accordion__sub--l3">
                            
                            <li class="cd-accordion__item">
                                <a class="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)">
                                    <span> 
                                        <Row className='asset-table-body-list asset-table-down-product'> 
                                            <Col  className='asset-table-body-main-title asset-table-down-product-title'>ERP</Col>
                                            <Col>
                                                <div className='assets-table-body-0-set-vm'>
                                                    <div className='assets-table-body-set-vm'>
                                                        <span className='assets-vm-body-count'>1</span>
                                                        <span className='assets-vm-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                                    </div>
                                                </div>  
                                            </Col>
                                            <Col>
                                                <div className='assets-table-body-0-set-dbaas'>
                                                    <div className='assets-table-body-set-dbaas'>
                                                        <span className='assets-dbaas-body-count'>1</span>
                                                        <span className='assets-dbaas-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                                    </div>
                                                </div>  
                                            </Col>
                                            <Col>
                                                <div className='assets-table-body-0-set-others'>
                                                    <div className='assets-table-body-set-others'>
                                                        <span className='assets-others-body-count'>1</span>
                                                        <span className='assets-others-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </span>  
                                </a>
                            </li>
                            <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)">
                                <span> 
                                    <Row className='asset-table-body-list asset-table-down-product'> 
                                        <Col  className='asset-table-body-main-title asset-table-down-product-title'>CRM</Col>
                                            <Col>
                                                <div className='assets-table-body-0-set-vm'>
                                                    <div className='assets-table-body-set-vm'>
                                                        <span className='assets-vm-body-count'>1</span>
                                                        <span className='assets-vm-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                                    </div>
                                                </div>  
                                            </Col>
                                            <Col>
                                                <div className='assets-table-body-0-set-dbaas'>
                                                    <div className='assets-table-body-set-dbaas'>
                                                        <span className='assets-dbaas-body-count'>1</span>
                                                        <span className='assets-dbaas-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                                    </div>
                                                </div>  
                                            </Col>
                                            <Col>
                                                <div className='assets-table-body-0-set-others'>
                                                    <div className='assets-table-body-set-others'>
                                                        <span className='assets-others-body-count'>1</span>
                                                        <span className='assets-others-body-spend'>$2,222 <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '12px' }} /></span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </span>      
                                
                            </a></li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>   
            </ul>
           
        </div>
    );
}
export default Accordion;
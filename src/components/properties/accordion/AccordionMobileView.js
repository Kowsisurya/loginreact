import { Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { AiOutlineCloudServer, AiOutlineDatabase } from "react-icons/ai";

import "./accordion.css";
import ToggleButton from './ToggleButton';

const AccordionMobileView = (props) => {
    return(
        <>
            <Row className='plat-table-assets-spend-thead'>
                <Col lg="12" className='plat-table-assets-th plat-table-assets-th-mobile'>
                    <div className='assets-table-list'>
                        <p className='assets-table-top-header'>Environment</p>
                    </div>
                </Col>
            </Row>
            <ul className="cd-accordion--animated">
                <li className="cd-accordion__item cd-accordion__item--has-children">
                   
                    <input className="cd-accordion__input" type="checkbox" name ="group-1" id="group-1" />
                    <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-1">
                        <span> 
                            <Row className='asset-table-body-list'> 
                                <ToggleButton status={true} newclass="monile-environment-icon" clickoption={true}/>
                                <div  className='asset-table-body-main-title'>All Environment</div>


                                <div className='assets-table-body-mobile'>
                                    <div className='assets-table-body-0-set-text'>
                                        <div className='assets-table-body-set-text'>
                                            <span className='assets-body-count-text'>Count</span>
                                            <span className='assets-body-spend-text'>Spend</span>
                                        </div>
                                    </div> 

                                    {
                                        props.allenvironmentdetails.map((data,index) => 
                                            <>
                                                <p className='assets-table-header-title'><AiOutlineCloudServer   className='asset-spend-top-icon'/> {data.type}</p>
                                                <div className='assets-table-body-0-set'>
                                                    <div className='assets-table-body-set'>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <div className='assets-body-count'>{data.count}</div>
                                                            </Col>
                                                            <Col>
                                                                <div className='assets-body-spend'>${data.spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 "+(data.spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(data.spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    </div>
                                                </div>  
                                            </>     
                                        )
                                    }
                                </div>
                            </Row>
                        </span>
                    </label>

                <ul className="cd-accordion__sub cd-accordion__sub--l1">
                  {
                    props.listenvironmentdetails.map((listdata, index) => 
                    <>
                        <li className="cd-accordion__item cd-accordion__item--has-children">
                            <input className="cd-accordion__input" type="checkbox" name ="sub-group-2" id={"sub-group-"+index} />
                            <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor={"sub-group-"+index}>
                            <span> 
                                    <Row className='asset-table-body-list'> 
                                        <ToggleButton status={true} newclass="monile-environment-list-icon" clickoption={true}/>
                                        <div  className='asset-table-body-main-title'>{listdata[0]}</div>
                                        <div className='assets-table-body-mobile'>
                                            <div className='assets-table-body-0-set-text'>
                                                <div className='assets-table-body-set-text'>
                                                    <span className='assets-body-count-text'>Count</span>
                                                    <span className='assets-body-spend-text'>Spend</span>
                                                </div>
                                            </div>  
                                            <p className='assets-table-header-title'><AiOutlineCloudServer   className='asset-spend-top-icon'/> VM</p>
                                            <div className='assets-table-body-0-set'>
                                                <div className='assets-table-body-set'>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <div className='assets-body-count'>{listdata[1].count}</div>
                                                        </Col>
                                                        <Col>
                                                            { listdata[1].spend === '-' ?
                                                                <div className='assets-body-spend'> -</div> :
                                                                <div className='assets-body-spend'>${listdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(listdata[1].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(listdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                            }
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                </div>
                                            </div>  
                                            <p className='assets-table-header-title'><AiOutlineDatabase   className='asset-spend-top-icon'/>DBaaS</p>
                                            <div className='assets-table-body-0-set'>
                                                <div className='assets-table-body-set'>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <div className='assets-body-count'>{listdata[2].count}</div>
                                                        </Col>
                                                        <Col>
                                                            { listdata[2].spend === '-' ?
                                                                <div className='assets-body-spend'> -</div> :
                                                                <div className='assets-body-spend'>${listdata[2].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(listdata[2].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(listdata[2].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                            }
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                </div>
                                            </div>  
                                            <p className='assets-table-header-title'>Others</p>
                                            <div className='assets-table-body-0-set'>
                                                <div className='assets-table-body-set'>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <div className='assets-body-count'>{listdata[3].count}</div>
                                                        </Col>
                                                        <Col>
                                                            { listdata[3].spend === '-' ?
                                                                <div className='assets-body-spend'> -</div> :
                                                                <div className='assets-body-spend'>${listdata[3].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(listdata[3].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(listdata[3].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                            }
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                </div>
                                            </div>  
                                        </div>
                                    </Row>
                                </span>   
                            </label>

                            {
                                listdata[4][0].map((cloudlistdata) => 
                                    <>
                                    <ul className="cd-accordion__sub cd-accordion__sub--l2">
                                        <li className="cd-accordion__item cd-accordion__item--has-children">
                                        <input className="cd-accordion__input" type="checkbox" name ={"sub-group-level-"+index} id={"sub-group-level-"+index} />
                                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor={"sub-group-level-"+index}>
                                        <span> 
                                            <Row className='asset-table-body-list'> 
                                                <ToggleButton status={true} clickoption={true}/>
                                                <div  className='asset-table-body-main-title'>{cloudlistdata[0]}</div>
                                                <div className='assets-table-body-mobile'>
                                                    <div className='assets-table-body-0-set-text'>
                                                        <div className='assets-table-body-set-text'>
                                                            <span className='assets-body-count-text'>Count</span>
                                                            <span className='assets-body-spend-text'>Spend</span>
                                                        </div>
                                                    </div>  
                                                    <p className='assets-table-header-title'><AiOutlineCloudServer   className='asset-spend-top-icon'/> VM</p>
                                                    <div className='assets-table-body-0-set'>
                                                        <div className='assets-table-body-set'>
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <div className='assets-body-count'>{cloudlistdata[1].count}</div>
                                                                </Col>
                                                                <Col>
                                                                    { cloudlistdata[1].spend === '-' ?
                                                                        <div className='assets-body-spend'> -</div> :
                                                                        <div className='assets-body-spend'>${cloudlistdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(cloudlistdata[1].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(cloudlistdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                    }
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        </div>
                                                    </div>  
                                                    <p className='assets-table-header-title'><AiOutlineDatabase   className='asset-spend-top-icon'/>DBaaS</p>
                                                    <div className='assets-table-body-0-set'>
                                                        <div className='assets-table-body-set'>
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <div className='assets-body-count'>{cloudlistdata[2].count}</div>
                                                                </Col>
                                                                <Col>
                                                                    { cloudlistdata[2].spend === '-' ?
                                                                        <div className='assets-body-spend'> -</div> :
                                                                        <div className='assets-body-spend'>${cloudlistdata[2].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(cloudlistdata[2].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(cloudlistdata[2].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                    }
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        </div>
                                                    </div>  
                                                    <p className='assets-table-header-title'>Others</p>
                                                    <div className='assets-table-body-0-set'>
                                                        <div className='assets-table-body-set'>
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <div className='assets-body-count'>{cloudlistdata[3].count}</div>
                                                                </Col>
                                                                <Col>
                                                                    { cloudlistdata[3].spend === '-' ?
                                                                        <div className='assets-body-spend'> -</div> :
                                                                        <div className='assets-body-spend'>${cloudlistdata[3].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(cloudlistdata[3].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(cloudlistdata[3].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                    }
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </Row>
                                        </span>
                                        </label>
                                        {
                                            cloudlistdata[4][0].map((applistdata) => 
                                                <>
                                                    <ul className="cd-accordion__sub cd-accordion__sub--l3">
                                            
                                                        <li className="cd-accordion__item">
                                                            <a className="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)">
                                                            <span> 
                                                        <Row className='asset-table-body-list'> 
                                                            <div  className='asset-table-body-main-title'>{applistdata[0]}</div>
                                                            <div className='assets-table-body-mobile application-assets-table-body-mobile'>
                                                                <div className='assets-table-body-0-set-text'>
                                                                    <div className='assets-table-body-set-text'>
                                                                        <span className='assets-body-count-text'>Count</span>
                                                                        <span className='assets-body-spend-text'>Spend</span>
                                                                    </div>
                                                                </div>  
                                                                <p className='assets-table-header-title'><AiOutlineCloudServer   className='asset-spend-top-icon'/> VM</p>
                                                                <div className='assets-table-body-0-set'>
                                                                    <div className='assets-table-body-set'>
                                                                    <Col>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className='assets-body-count'>{applistdata[1].count}</div>
                                                                            </Col>
                                                                            <Col>
                                                                                { applistdata[1].spend === '-' ?
                                                                                    <div className='assets-body-spend'> -</div> :
                                                                                    <div className='assets-body-spend'>${applistdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(applistdata[1].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                                }
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    </div>
                                                                </div>  
                                                                <p className='assets-table-header-title'><AiOutlineDatabase   className='asset-spend-top-icon'/>DBaaS</p>
                                                                <div className='assets-table-body-0-set'>
                                                                    <div className='assets-table-body-set'>
                                                                    <Col>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className='assets-body-count'>{applistdata[2].count}</div>
                                                                            </Col>
                                                                            <Col>
                                                                                { applistdata[2].spend === '-' ?
                                                                                    <div className='assets-body-spend'> -</div> :
                                                                                    <div className='assets-body-spend'>${applistdata[2].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(applistdata[2].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[2].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                                }
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>

                                                                    </div>
                                                                </div>  
                                                                <p className='assets-table-header-title'>Others</p>
                                                                <div className='assets-table-body-0-set'>
                                                                    <div className='assets-table-body-set'>
                                                                    <Col>
                                                                        <Row>
                                                                            <Col>
                                                                                <div className='assets-body-count'>{applistdata[3].count}</div>
                                                                            </Col>
                                                                            <Col>
                                                                                { applistdata[3].spend === '-' ?
                                                                                    <div className='assets-body-spend'> -</div> :
                                                                                    <div className='assets-body-spend'>${applistdata[3].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 "+(applistdata[3].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[3].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                                }
                                                                            </Col>
                                                                        </Row>
                                                                    </Col>
                                                                    </div>
                                                                </div>  
                                                            </div>
                                                        </Row>
                                                    </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </>
                                            )
                                        }
                                        
                                        </li>
                                    </ul>
                                    </>
                                )
                            }
                            </li>
                    </>
                    )
                  }
                </ul>
                </li>   
            </ul>
        </>
    )
}

export default AccordionMobileView;
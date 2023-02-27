import { Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { AiOutlineCloudServer, AiOutlineDatabase } from "react-icons/ai";
import { useState } from 'react';

const DesktopSearchList = (props) => {
    const [datalist, setDatalist] = useState([props.searchasdata]);
    const searchassetlist = {
        width: '927px !important'
    }
    return(
       
        <>
        {
            [props.searchasdata].map((applistdata, index) =>
                <ul className="cd-accordion--animated" key={index}>  
                    <li className="cd-accordion__item cd-accordion__item--has-children">
                        <a className="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)">
                            <span> 
                                <Row className='asset-table-body-list asset-table-down-product search-asset-list'  style={searchassetlist}> 
                                <Col  className='asset-table-body-main-title asset-table-down-product-title asset-table-down-product-title-search asset-search-title'>
                                    {
                                        applistdata[0].length > 10 ?
                                        `${applistdata[0].substring(0, 12)}...` :
                                        applistdata[0]
                                    }
                                    </Col>
                                                                    <Col>
                                                                        <div className='assets-table-body-0-set assets-table-body-0-set-search'>
                                                                            <div className='assets-table-body-set-search'>
                                                                                <Row className='asset-table-width'>
                                                                                    <Col>
                                                                                        <Row>
                                                                                            <Col>
                                                                                                <div className='assets-body-count assets-body-count-search'>{applistdata[1].count}</div>
                                                                                            </Col>
                                                                                            <Col>
                                                                                            { applistdata[1].spend === '-' ?
                                                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                                                <div className='assets-body-spend'>${applistdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 mt-1 ms-1 "+(applistdata[1].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                                            }
                                                                                            </Col> 
                                                                                        </Row>
                                                                                    </Col>
                                                                                </Row> 
                                                                            </div>
                                                                        </div>   
                                                                    </Col>
                                                                    <Col>
                                                                        <div className='assets-table-body-0-set assets-table-body-0-set-search'>
                                                                            <div className='assets-table-body-set-search'>
                                                                            <Row className='asset-table-width'>
                                                                                    <Col>
                                                                                        <Row>
                                                                                            <Col>
                                                                                                <div className='assets-body-count assets-body-count-search'>{applistdata[2].count}</div>
                                                                                            </Col>
                                                                                            <Col>
                                                                                            { applistdata[2].spend === '-' ?
                                                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                                                <div className='assets-body-spend'>${applistdata[2].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 mt-1 ms-1 "+(applistdata[2].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[2].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                                            }
                                                                                            </Col> 
                                                                                        </Row>
                                                                                    </Col>
                                                                                </Row> 


                                                                            
                                                                            </div>
                                                                        </div>  
                                                                    </Col>
                                                                    <Col>
                                                                        <div className='assets-table-body-0-set assets-table-body-0-set-search'>
                                                                            <div className='assets-table-body-set-search'>
                                                                            <Row className='asset-table-width'>
                                                                                    <Col>
                                                                                        <Row>
                                                                                            <Col>
                                                                                                <div className='assets-body-count assets-body-count-search'>{applistdata[3].count}</div>
                                                                                            </Col>
                                                                                            <Col>
                                                                                            { applistdata[3].spend === '-' ?
                                                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                                                <div className='assets-body-spend'>${applistdata[3].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"me-1 mt-1 ms-1 "+(applistdata[3].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[3].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} /></div>
                                                                                            }
                                                                                            </Col> 
                                                                                        </Row>
                                                                                    </Col>
                                                                                </Row> 
                                                                            </div>
                                                                        </div>  
                                                                    </Col>
                                </Row>
                            </span>  
                        </a>
                    </li>
                    
                </ul>
            )
        }
        </>
    );
}

export default DesktopSearchList;
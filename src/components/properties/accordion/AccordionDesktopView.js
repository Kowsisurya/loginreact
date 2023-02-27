import { Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import { AiOutlineCloudServer, AiOutlineDatabase } from "react-icons/ai";
import "./accordion.css";
import DesktopSearchList from './DesktopSearchList';
import ToggleButton from './ToggleButton';
import { useEffect, useState } from 'react';
import { Tooltip } from 'antd';


const AccordionDesktopView = (props) => {
    const checkboxClick = (e) => {
        // console.log(e.target.checked);
        // console.log(e.target.id);
        // console.log(e.target.name)
        console.log(e.target.checked);
        if(e.target.checked){
            console.log("in");
            document.getElementById(e.target.id).checked = false;
        }else{
            console.log("out");
            document.getElementById(e.target.id).checked = true;
        }
    }
    return (
            <>
                <Row className='plat-table-assets-spend-thead'>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th asset-left-title'>
                    <div className='assets-table-list'>
                        <p className='assets-table-top-header' onClick={() => props.setApplicationViewStatus(true)}>Environment</p>
                    </div>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th'> 
                    <div className='assets-table-header'>
                        <p className='assets-table-header-title'>
                            <iconify-icon class="asset-spend-tab-icon" icon="mdi:cloud-print-outline"></iconify-icon> 
                            <span className='top-icon-text' >VM</span>
                        </p>
                        <div className='assets-table-title-body'>
                            <p className='assets-table-count'>Count</p>
                            <p className='assets-table-spend'>Spend</p>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th'> 
                    <div className='assets-table-header'>
                        <p className='assets-table-header-title'><iconify-icon icon="carbon:ibm-cloud-hyper-protect-dbaas" class="asset-spend-tab-icon"></iconify-icon><span className='top-icon-text'>DBaaS</span></p>
                        <div className='assets-table-title-body'>
                            <p className='assets-table-count'>Count</p>
                            <p className='assets-table-spend'>Spend</p>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th'> 
                    <div className='assets-table-header'>
                        <p className='assets-table-header-title'><iconify-icon icon="carbon:cloud-logging" class="asset-spend-tab-icon"></iconify-icon><span className='top-icon-text'>Others</span></p>
                        <div className='assets-table-title-body'>
                            <p className='assets-table-count'>Count</p>
                            <p className='assets-table-spend'>Spend</p>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <div className='asset-spend-scroll'> */}
            <div>
            {props.searchasdata.length > 0 ? 
               <DesktopSearchList  searchasdata = {props.searchasdata}/>
            :
            <ul className="cd-accordion--animated">
                <li className="cd-accordion__item cd-accordion__item--has-children">
                    <input className="cd-accordion__input" type="checkbox" name ="group-1" id="group-1" defaultChecked/>
                    <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-1">
                        <span> 
                            
                            <Row className='asset-table-body-list'> 
                                <ToggleButton status={false} newclass="all-environment-icon" clickoption={true}/>
                                <Col lg="3" className='asset-table-body-main-title asset-left-title-body' >All Environment</Col>
                                {
                                    props.allenvironmentdetails.map((data,index) => 
                                        <Col key={index} lg="3" className='asset-body-content'>
                                            <div className='assets-table-body-0-set'>
                                                <div className='assets-table-body-set'>
                                                    <Row className='asset-table-width'>
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <div className='assets-body-count' style={{fontWeight: 'bold'}}>{data.count}</div>
                                                                </Col>
                                                                <Col>
                                                                { data.spend === '-' ?
                                                                    <div className='assets-body-spend asset-text-center' style={{fontWeight: 'bold'}}>-</div> : 
                                                                    <div className='assets-body-spend' style={{fontWeight: 'bold'}}>${data.spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(data.spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(data.spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} /></div>
                                                                }
                                                                </Col> 
                                                            </Row>
                                                        </Col>
                                                    </Row>  
                                                </div>
                                            </div>  
                                        </Col>
                                    )
                                }
                            </Row>
                            <div className='asset-spend-border-bottom'></div>
                        </span>
                    </label>

                <ul className="cd-accordion__sub cd-accordion__sub--l1">
                    {
                        props.listenvironmentdetails.map((listdata, index) => 
                            <li className="cd-accordion__item cd-accordion__item--has-children">
                            <input className="cd-accordion__input" type="checkbox" id={"sub-group-"+index} defaultChecked/>
                            <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor={"sub-group-"+index}>
                            <span> 
                                    <Row className='asset-table-body-list'> 
                                    <ToggleButton status={false} newclass="environment-list-icon" clickoption={true}/>
                                        <Col lg="3"  className='asset-table-body-main-title asset-left-title-body environment-list-title'>
                                            {
                                                listdata[0].length > 10 ?
                                                <>
                                                    <Tooltip placement="topLeft" title={listdata[0]}>
                                                        <span className='env-tooltip-view'>{listdata[0].substring(0, 12)}...</span>
                                                    </Tooltip>
                                                </> :
                                                listdata[0]
                                            }
                                        </Col>
                                        <Col lg="3" className='asset-body-content'>
                                            <div className='assets-table-body-0-set'>
                                                <div className='assets-table-body-set'>
                                                <Row className='asset-table-width'>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <div className='assets-body-count'>{listdata[1].count}</div>
                                                            </Col>
                                                            <Col>
                                                            { listdata[1].spend === '-' ?
                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                <div className='assets-body-spend'>${listdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}
                                                                <MDBIcon className={"ms-1 me-1 mt-1 "+(listdata[1].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(listdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
                                                                </div>
                                                            }
                                                            </Col> 
                                                        </Row>
                                                    </Col>
                                                </Row>  
                                                </div>
                                            </div>   
                                        </Col>
                                        <Col lg="3" className='asset-body-content'>
                                            <div className='assets-table-body-0-set'>
                                                <div className='assets-table-body-set'>
                                                <Row className='asset-table-width'>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <div className='assets-body-count'>{listdata[2].count}</div>
                                                            </Col>
                                                            <Col>
                                                            { listdata[2].spend === '-' ?
                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                <div className='assets-body-spend'>${listdata[2].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(listdata[2].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(listdata[2].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} /></div>
                                                            }
                                                            </Col> 
                                                        </Row>
                                                    </Col>
                                                </Row>  
                                                </div>
                                            </div>    
                                        </Col>
                                        <Col lg="3" className='asset-body-content'>
                                            <div className='assets-table-body-0-set'>
                                                <div className='assets-table-body-set'>
                                                <Row className='asset-table-width'>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <div className='assets-body-count'>{listdata[3].count}</div>
                                                            </Col>
                                                            <Col>
                                                            { listdata[3].spend === '-' ?
                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                <div className='assets-body-spend'>${listdata[3].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(listdata[3].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(listdata[3].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} /></div>
                                                            }
                                                            </Col> 
                                                        </Row>
                                                    </Col>
                                                </Row>  
                                                </div>
                                            </div>  
                                            
                                        </Col>
                                        
                                    </Row>
                                    <div className='environment-asset-spend-border-bottom'></div>
                                </span>    
                            </label>



                            {
                                listdata[4][0].map((cloudlistdata) => 
                                    <ul className="cd-accordion__sub cd-accordion__sub--l2">
                                        <li className="cd-accordion__item cd-accordion__item--has-children">
                                        <input className="cd-accordion__input" type="checkbox" name ={"sub-group-level-"+index} id={"sub-group-level-"+index} />
                                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor={"sub-group-level-"+index}>
                                        <span> 
                                            <Row className='asset-table-body-list' > 
                                            <ToggleButton status={true}  newclass="cloud-list-icon" clickoption={true}/>
                                                <Col lg="3" className='asset-table-body-main-title asset-left-title-body cloud-list-title'>
                                                    {
                                                        cloudlistdata[0] === 'aws' ?
                                                            <>
                                                                <iconify-icon icon="logos:aws" class="asset-spend-cloud-list-icon"></iconify-icon>
                                                                AWS
                                                            </>
                                                            :
                                                            <>
                                                                <iconify-icon icon="vscode-icons:file-type-azure" class="asset-spend-cloud-list-icon"></iconify-icon>
                                                                {
                                                                    cloudlistdata[0].length > 10 ?
                                                                    <>
                                                                        <Tooltip placement="topLeft" title={cloudlistdata[0]}>
                                                                            <span className='env-tooltip-view'>{cloudlistdata[0].substring(0, 12)}...</span>
                                                                        </Tooltip>
                                                                    </> :
                                                                    cloudlistdata[0]
                                                                }
                                                            </>
                                                            
                                                    }
                                               </Col>
                                                <Col className='asset-body-content' lg="3">
                                                    <div className='assets-table-body-0-set'>
                                                        <div className='assets-table-body-set'>
                                                        <Row className='asset-table-width'>
                                                            <Col>
                                                                <Row>
                                                                    <Col>
                                                                        <div className='assets-body-count'>{cloudlistdata[1].count}</div>
                                                                    </Col>
                                                                    <Col>
                                                                    { cloudlistdata[1].spend === '-' ?
                                                                        <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                        <div className='assets-body-spend'>${cloudlistdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(cloudlistdata[1].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(cloudlistdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
                                                                        </div>
                                                                    }
                                                                    </Col> 
                                                                </Row>
                                                            </Col>
                                                        </Row>  


                                                        </div>
                                                    </div>  
                                                </Col>
                                                <Col className='asset-body-content' lg="3">
                                                    <div className='assets-table-body-0-set'>
                                                        <div className='assets-table-body-set'>
                                                            <Row className='asset-table-width'>
                                                                <Col>
                                                                    <Row>
                                                                        <Col>
                                                                            <div className='assets-body-count'>{cloudlistdata[2].count}</div>
                                                                        </Col>
                                                                        <Col>
                                                                        { cloudlistdata[2].spend === '-' ?
                                                                            <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                            <div className='assets-body-spend'>${cloudlistdata[2].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(cloudlistdata[2].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(cloudlistdata[2].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
                                                                            </div>
                                                                        }
                                                                        </Col> 
                                                                    </Row>
                                                                </Col>
                                                            </Row>  
                                                        </div>
                                                    </div>   
                                                </Col>
                                                <Col className='asset-body-content' lg="3">
                                                    <div className='assets-table-body-0-set'>
                                                        <div className='assets-table-body-set'>
                                                            <Row className='asset-table-width'>
                                                                <Col>
                                                                    <Row>
                                                                        <Col>
                                                                            <div className='assets-body-count'>{cloudlistdata[1].count}</div>
                                                                        </Col>
                                                                        <Col>
                                                                        { cloudlistdata[3].spend === '-' ?
                                                                            <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                            <div className='assets-body-spend'>${cloudlistdata[3].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(cloudlistdata[3].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(cloudlistdata[3].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
                                                                            </div>
                                                                        }
                                                                        </Col> 
                                                                    </Row>
                                                                </Col>
                                                            </Row>  
                                                        </div>
                                                    </div>  
                                                </Col>
                                            </Row>
                                            <div className='cloud-asset-spend-border-bottom'></div>
                                        </span>  
                                        </label>
                                        {
                                            cloudlistdata[4][0].map((applistdata) => 
                                                <ul className="cd-accordion__sub cd-accordion__sub--l2">  
                                                    <li className="cd-accordion__item cd-accordion__item--has-children">
                                                        <a className="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)">
                                                            <span> 
                                                                <Row className='asset-table-body-list asset-table-down-product'> 
                                                                    {/* <Col lg="3"  className='asset-table-down-product-title asset-table-body-main-title  application-list-title' onClick={() => props.setVmViewStatus({application:applistdata[0], environment: listdata[0],cloud: cloudlistdata[0]})}> */}
                                                                    <Col lg="3"  className='asset-table-down-product-title asset-table-body-main-title  application-list-title' >
                                                                    {
                                                                        applistdata[0].length > 7 ?
                                                                        <>
                                                                            <Tooltip placement="topLeft" title={applistdata[0]}>
                                                                                <span className='env-tooltip-view'>{applistdata[0].substring(0, 7)}...</span>
                                                                            </Tooltip>
                                                                        </> :
                                                                        applistdata[0]
                                                                    } </Col>
                                                                    <Col lg="3" className='asset-body-content'>
                                                                        <div className='assets-table-body-0-set'>
                                                                            <div className='assets-table-body-set'>
                                                                                <Row className='asset-table-width'>
                                                                                    <Col>
                                                                                        <Row>
                                                                                            <Col>
                                                                                                <div className='assets-body-count'>{applistdata[1].count}</div>
                                                                                            </Col>
                                                                                            <Col>
                                                                                            { applistdata[1].spend === '-' ?
                                                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                                                <div className='assets-body-spend'>${applistdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(applistdata[1].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
                                                                                                </div>
                                                                                            }
                                                                                            </Col> 
                                                                                        </Row>
                                                                                    </Col>
                                                                                </Row> 
                                                                            </div>
                                                                        </div>   
                                                                    </Col>
                                                                    <Col lg="3" className='asset-body-content'>
                                                                        <div className='assets-table-body-0-set'>
                                                                            <div className='assets-table-body-set'>
                                                                            <Row className='asset-table-width'>
                                                                                    <Col lg="3" className='asset-body-content'>
                                                                                        <Row>
                                                                                            <Col>
                                                                                                <div className='assets-body-count'>{applistdata[2].count}</div>
                                                                                            </Col>
                                                                                            <Col>
                                                                                            { applistdata[2].spend === '-' ?
                                                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                                                <div className='assets-body-spend'>${applistdata[2].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(applistdata[2].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[2].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
                                                                                                </div>
                                                                                            }
                                                                                            </Col> 
                                                                                        </Row>
                                                                                    </Col>
                                                                                </Row> 


                                                                            
                                                                            </div>
                                                                        </div>  
                                                                    </Col>
                                                                    <Col lg="3" className='asset-body-content'>
                                                                        <div className='assets-table-body-0-set'>
                                                                            <div className='assets-table-body-set'>
                                                                            <Row className='asset-table-width'>
                                                                                    <Col >
                                                                                        <Row>
                                                                                            <Col>
                                                                                                <div className='assets-body-count'>{applistdata[3].count}</div>
                                                                                            </Col>
                                                                                            <Col>
                                                                                            { applistdata[3].spend === '-' ?
                                                                                                <div className='assets-body-spend asset-text-center'>-</div> : 
                                                                                                <div className='assets-body-spend'>${applistdata[3].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(applistdata[3].spend > 0 ? "text-danger-icon-custom" : "text-success-icon-custom")}  fas icon={(applistdata[3].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
                                                                                                </div>
                                                                                            }
                                                                                            </Col> 
                                                                                        </Row>
                                                                                    </Col>
                                                                                </Row> 
                                                                            </div>
                                                                        </div>  
                                                                    </Col>
                                                                </Row>
                                                                <div className='application-asset-spend-border-bottom'></div>
                                                            </span>  
                                                        </a>
                                                    </li>
                                                    
                                                </ul>
                                            )
                                        }
                                        {/* <ul className="cd-accordion__sub cd-accordion__sub--l3"> */}
                                        
                                        </li>
                                    </ul>
                                )
                            }
                            </li>
                        )
                    }   
                </ul>
                </li>   
            </ul>
            }
             <Row className='plat-table-assets-spend-tfooter'>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th-footer-title'>
                   
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th-footer'> 
                    <div className='assets-table-footer'>
                       
                    </div>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th-footer'> 
                    <div className='assets-table-footer'>
                        
                    </div>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3" className='plat-table-assets-th-footer'> 
                    <div className='assets-table-footer'>
                        
                    </div>
                </Col>
            </Row>
            </div>
            </>
    );
}
export default  AccordionDesktopView;
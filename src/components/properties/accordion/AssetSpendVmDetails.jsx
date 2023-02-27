import { Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import ToggleButton from './ToggleButton';
import VmApplicationList from './VmApplicationList';
import { Tooltip } from 'antd';


const AssetSpendVmDetails = (props) => {
    // console.log(props)
    // console.log("vm details");
    
    return(
        <div className='plat-vm-details-full-body'>
            <Row className='plat-table-assets-spend-thead'>
            <Col lg="3" md="3" sm="3" xs="3">
                <div className='assets-table-list'>
                    <p className='assets-table-top-header' >Environment</p>
                </div>
            </Col>
            <Col lg="9" md="9" sm="9" xs="9"> 
                <div className='vm-assets-table-header'>
                    <p className='vm-assets-table-header-title' onClick={() => props.setVmViewStatus(false)}>
                        <iconify-icon class="asset-spend-tab-icon" icon="mdi:cloud-print-outline"></iconify-icon> 
                        <span className='top-icon-text' >VM</span>
                    </p>
                    <div className='vm-assets-table-title-body'>
                        <div className='vm-assets-table-count'>
                            <p>Count</p>
                        </div>
                        <div className='vm-assets-table-spend'>
                            <p>Spend</p>
                        </div> 
                    </div>
                </div>
            </Col>
        
        </Row>
        <div className='asset-spend-scroll'>
        <ul className="cd-accordion--animated">
            <li className="cd-accordion__item cd-accordion__item--has-children" >
                <input className="cd-accordion__input cd-accordion-enable" type="checkbox" name ="group-1" id="group-1" />
                <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor="group-1" >
                    <span className='vm-asset-label-span'> 
                        
                        <Row className='vm-asset-table-body-list'> 
                            <ToggleButton status={false} newclass="vm-all-environment-icon" clickoption={false}/>
                            <Col xs="3" sm='3' md='3' lg="3" xl="3" className='vm-asset-table-body-main-title vm-asset-left-title-body' >All Environment</Col>
                            <Col xs="9" sm='9' md='9' lg="9" xl="9">
                                        <div className='vm-assets-table-body-0-set'>
                                            <div className='vm-assets-table-body-set'>
                                                <Row className='asset-table-width'>
                                                    <Col>
                                                        <Row>
                                                            <Col>
                                                                <div className='vm-assets-body-count'>{props.allenvironmentdetails[0].count}</div>
                                                            </Col>
                                                            <Col>
                                                            { props.allenvironmentdetails[0].spend === '-' ?
                                                                <div className='vm-assets-body-spend asset-text-center'>-</div> : 
                                                                <div className='vm-assets-body-spend'>${props.allenvironmentdetails[0].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(props.allenvironmentdetails[0].spend > 0 ? "vm-text-danger-icon-custom" : "vm-text-success-icon-custom")}  fas icon={(props.allenvironmentdetails[0].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} /></div>
                                                            }
                                                            </Col> 
                                                        </Row>
                                                    </Col>
                                                </Row>  
                                            </div>
                                        </div>  
                                    </Col>
                        </Row>
                        <div className='vm-asset-spend-border-bottom'></div>
                    </span>
                </label>
            {/* <ul className={classname.allenvironment_classname+" cd-accordion__sub--l1"}> */}
            <ul className="cd-accordion__sub cd-accordion__sub--l1">
                {
                    props.listenvironmentdetails.map((listdata, index) => 
                        <li className="cd-accordion__item cd-accordion__item--has-children">
                        <input className={"cd-accordion__input "+(listdata[0].toLowerCase() === props.vmexpanddetails.environment.toLowerCase() ? "cd-accordion-enable" : " ")} type="checkbox" id={"sub-group-"+index} />
                        <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor={"sub-group-"+index}>
                        <span className='vm-asset-label-span'> 
                                <Row className='vm-asset-table-body-list'> 
                                <ToggleButton 
                                    status={(listdata[0].toLowerCase() === props.vmexpanddetails.environment.toLowerCase() ? false : true)} 
                                    newclass="vm-environment-list-icon"
                                    clickoption={(listdata[0].toLowerCase() === props.vmexpanddetails.environment.toLowerCase() ? false : true)}
                                
                                />
                                    <Col xs="3" sm='3' md='3' lg="3" xl="3"  className='vm-asset-table-body-main-title vm-asset-left-title-body environment-list-title'>
                                    {
                                        listdata[0].length > 10 ?
                                        <>
                                            <Tooltip placement="topLeft" title={listdata[0]}>
                                                {listdata[0].substring(0, 12)}...
                                            </Tooltip>
                                        </> :
                                        listdata[0]
                                    }
                                    </Col>
                                    
                                    <Col xs="9" sm='9' md='9' lg="9" xl="9">
                                        <div className='vm-assets-table-body-0-set'>
                                            <div className='vm-assets-table-body-set'>
                                            <Row className='asset-table-width'>
                                                <Col>
                                                    <Row>
                                                        <Col>
                                                            <div className='vm-assets-body-count'>{listdata[1].count}</div>
                                                        </Col>
                                                        <Col>
                                                        { listdata[1].spend === '-' ?
                                                            <div className='vm-assets-body-spend '>-</div> : 
                                                            <div className='vm-assets-body-spend'>${listdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}
                                                            <MDBIcon className={"ms-1 me-1 mt-1 "+(listdata[1].spend > 0 ? "vm-text-danger-icon-custom" : "vm-text-success-icon-custom")}  fas icon={(listdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
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
                                <div className='vm-environment-asset-spend-border-bottom'></div>
                            </span>    
                        </label>



                        {
                            listdata[4][0].map((cloudlistdata) => 
                                <ul className="cd-accordion__sub cd-accordion__sub--l2">
                                    <li className="cd-accordion__item cd-accordion__item--has-children">
                                    <input className={"cd-accordion__input "+(cloudlistdata[0].toLowerCase() === props.vmexpanddetails.cloud.toLowerCase() && "cd-accordion-enable")} type="checkbox" name ={"sub-group-level-"+index} id={"sub-group-level-"+index} />
                                    <label className="cd-accordion__label cd-accordion__label--icon-folder" htmlFor={"sub-group-level-"+index}>
                                    <span className='vm-asset-label-span'> 
                                        <Row className='vm-asset-table-body-list' > 
                                        <ToggleButton 
                                            status={(cloudlistdata[0].toLowerCase() === props.vmexpanddetails.cloud.toLowerCase() ? false : true)}  
                                            newclass="vm-cloud-list-icon"
                                            clickoption={(cloudlistdata[0].toLowerCase() === props.vmexpanddetails.cloud.toLowerCase() ? false : true)}
                                        />
                                            <Col xs="3" sm='3' md='3' lg="3" xl="3" className='vm-asset-table-body-main-title vm-asset-left-title-body cloud-list-title'>
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
                                                                        {cloudlistdata[0].substring(0, 12)}...
                                                                    </Tooltip>
                                                                </> :
                                                                cloudlistdata[0]
                                                            }
                                                        </>
                                                        
                                                }
                                        </Col>
                                        <Col xs="9" sm='9' md='9' lg="9" xl="9">
                                            <div className='vm-assets-table-body-0-set'>
                                                <div className='vm-assets-table-body-set'>
                                                    <Row className='asset-table-width'>
                                                        <Col>
                                                            <Row>
                                                                <Col>
                                                                    <div className='vm-assets-body-count'>{cloudlistdata[1].count}</div>
                                                                </Col>
                                                                <Col>
                                                                { cloudlistdata[1].spend === '-' ?
                                                                    <div className='vm-assets-body-spend asset-text-center'>-</div> : 
                                                                    <div className='vm-assets-body-spend'>${cloudlistdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(cloudlistdata[1].spend > 0 ? "vm-text-danger-icon-custom" : "vm-text-success-icon-custom")}  fas icon={(cloudlistdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
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
                                        <div className='vm-cloud-asset-spend-border-bottom'></div>
                                    </span>  
                                    </label>
                                    {
                                        cloudlistdata[4][0].map((applistdata) => 
                                            <ul className="cd-accordion__sub cd-accordion__sub--l2">  
                                                <li className="cd-accordion__item cd-accordion__item--has-children">
                                                    <a className="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)">
                                                        <span className='vm-asset-label-span'> 

                                                            {/*  */}
                                                            {
                                                                props.vmexpanddetails.environment === listdata[0] && props.vmexpanddetails.cloud === cloudlistdata[0] &&  props.vmexpanddetails.application === applistdata[0] ?
                                                                <VmApplicationList 
                                                                    vmexpanddetails = {props.vmexpanddetails}
                                                                /> :
                                                                <>
                                                                    <Row className='vm-asset-table-body-list '> 
                                                                        <Col xs="3" sm='3' md='3' lg="3" xl="3"  className='vm-asset-table-down-product-title vm-asset-table-body-main-title  application-list-title' onClick={() => props.viewAssetAndSpendVmDetails({application:applistdata[0], environment: listdata[0],cloud: cloudlistdata[0]})}>
                                                                        {
                                                                            applistdata[0].length > 7 ?
                                                                            <>
                                                                                <Tooltip placement="topLeft" title={applistdata[0]}>
                                                                                    {applistdata[0].substring(0, 7)}...
                                                                                </Tooltip>
                                                                            </> :
                                                                            applistdata[0]
                                                                        }
                                                                        </Col>
                                                                        <Col xs="9" sm='9' md='9' lg="9" xl="9">
                                                                            <div className='vm-assets-table-body-0-set vm-cloud-spend'>
                                                                                <div className='vm-assets-table-body-set'>
                                                                                    <Row className='asset-table-width'>
                                                                                        <Col>
                                                                                            <Row>
                                                                                                <Col>
                                                                                                    <div className='vm-assets-body-count'>{applistdata[1].count}</div>
                                                                                                </Col>
                                                                                                <Col>
                                                                                                { applistdata[1].spend === '-' ?
                                                                                                    <div className='vm-assets-body-spend asset-text-center'>-</div> : 
                                                                                                    <div className='vm-assets-body-spend'>${applistdata[1].spend.toLocaleString(undefined, {maximumFractionDigits:2})}<MDBIcon className={"ms-1 me-1 mt-1 "+(applistdata[1].spend > 0 ? "vm-text-danger-icon-custom" : "vm-text-success-icon-custom")}  fas icon={(applistdata[1].spend > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '14px' }} />
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
                                                                </>

                                                            }
                                                            
                                                            <div className='vm-application-asset-spend-border-bottom'></div>
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
    
        <Row className='vm-plat-table-assets-spend-tfooter'>
            <Col xs="3" sm='3' md='3' lg="3" xl="3" >
            
            </Col>
            <Col xs="9" sm='9' md='9' lg="9" xl="9" > 
                <div className='vm-assets-table-footer'>
                
                </div>
            </Col>
            
        </Row>
        </div>
    </div>
    )
}
export default AssetSpendVmDetails;
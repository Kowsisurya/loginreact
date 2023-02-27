import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { MDBIcon } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { React, useState } from "react";


const Row1new = () => {

    const today = new Date();
    const [startDate, setStartDate] = useState();

    const handleChange = (e) => {
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);
    };
    const handleaccountChange = (e) => {
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);
    }
    const handleCloudChange = (e) => {
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);
    }
    const handleapplicationChange = (e) => {
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);
    }
    const clearAllDate = (e) => {
        console.log("clear");
    }

    return(
        <>
            <Row>
                <Col md="auto" sm="auto">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        All Environments <MDBIcon className='close-icon-red' fas icon="times" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.ItemText><span className='plat-item-title'>Environment</span></Dropdown.ItemText>
                        <Dropdown.Item as="button" active>
                            <input 
                                type="checkbox" 
                                id="checkbox-1-1"   
                                className="plat-item-checkbox" 
                                name="All Environmnet"
                                value="Production"
                                onChange={handleChange}
                            /><label htmlFor="checkbox-1-1"></label>
                            <span className='plat-item-list'>Production</span>
                        </Dropdown.Item>
                        <Dropdown.Item as="button" active>
                            <input
                                className='plat-item-checkbox'
                                id="checkbox-1-2"
                                type="checkbox"
                                name="All Environmnet"
                                value="Non-Production"
                                onChange={handleChange}
                            /><label htmlFor="checkbox-1-2"></label>
                            <span className='plat-item-list'>Non-Production</span>
                        </Dropdown.Item>
                        <Dropdown.Item as="button" active>
                            <input
                                className='plat-item-checkbox'
                                id="checkbox-1-3"
                                type="checkbox"
                                name="All Environmnet"
                                value="Sandbox"
                                onChange={handleChange}
                            /><label htmlFor="checkbox-1-3"></label>
                            <span className='plat-item-list'>Sandbox</span>
                        </Dropdown.Item>
                        
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md="auto" sm="auto">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        All Cloud <MDBIcon className='close-icon-red' fas icon="times" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.ItemText><span className='plat-item-title'>Cloud</span></Dropdown.ItemText>
                        <Dropdown.Item as="button" active>
                            <input 
                                type="checkbox" 
                                id="checkbox-2-1"   
                                className="plat-item-checkbox" 
                                name="All Cloud"
                                value="AWS"
                                onChange={handleCloudChange}
                            /><label htmlFor="checkbox-2-1"></label>
                            <span className='plat-item-list'>AWS</span>
                        </Dropdown.Item>
                        <Dropdown.Item as="button" active>
                            <input 
                                type="checkbox" 
                                id="checkbox-2-2"   
                                className="plat-item-checkbox" 
                                name="All Cloud"
                                value="Azure"
                                onChange={handleCloudChange}
                            /><label htmlFor="checkbox-2-2"></label>
                            <span className='plat-item-list'>Azure</span>
                        </Dropdown.Item>
                        <Dropdown.Item as="button" active>
                            <input 
                                type="checkbox" 
                                id="checkbox-2-3"   
                                className="plat-item-checkbox" 
                                name="All Cloud"
                                value="GCP"
                                onChange={handleCloudChange}
                            /><label htmlFor="checkbox-2-3"></label>
                            <span className='plat-item-list'>GCP</span>
                        </Dropdown.Item>
                        
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md="auto" sm="auto">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        All Applications <MDBIcon className='close-icon-red' fas icon="times" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.ItemText><span className='plat-item-title'>Application</span></Dropdown.ItemText>
                            <Dropdown.Item as="button" active>
                                <input 
                                    type="checkbox" 
                                    id="checkbox-3-1"   
                                    className="plat-item-checkbox" 
                                    name="All Applications"
                                    value="CRM"
                                    onChange={handleapplicationChange}
                                /><label htmlFor="checkbox-3-1"></label>
                                <span className='plat-item-list'>CRM</span>
                            </Dropdown.Item>
                            <Dropdown.Item as="button" active>
                                <input 
                                    type="checkbox" 
                                    id="checkbox-3-2"   
                                    className="plat-item-checkbox" 
                                    name="All Applications"
                                    value="SRM"
                                    onChange={handleapplicationChange}
                                /><label htmlFor="checkbox-3-2"></label>
                                <span className='plat-item-list'>SRM</span>
                            </Dropdown.Item>
                            <Dropdown.Item as="button" active>
                                <input 
                                    type="checkbox" 
                                    id="checkbox-3-3"   
                                    className="plat-item-checkbox" 
                                    name="All Applications"
                                    value="Oracle"
                                    onChange={handleapplicationChange}
                                /><label htmlFor="checkbox-3-3"></label>
                                <span className='plat-item-list'>Oracle</span>
                            </Dropdown.Item>
                            <Dropdown.Item as="button" active>
                                <input 
                                    type="checkbox" 
                                    id="checkbox-3-4"   
                                    className="plat-item-checkbox" 
                                    name="All Applications"
                                    value="HRMS"
                                    onChange={handleapplicationChange}
                                /><label htmlFor="checkbox-3-4"></label>
                                <span className='plat-item-list'>HRMS</span>
                            </Dropdown.Item>
                            <Dropdown.Item as="button" active>
                                <input 
                                    type="checkbox" 
                                    id="checkbox-3-5"   
                                    className="plat-item-checkbox" 
                                    name="All Applications"
                                    value="ERP"
                                    onChange={handleapplicationChange}
                                /><label htmlFor="checkbox-3-5"></label>
                                <span className='plat-item-list'>ERP</span>
                            </Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md="auto" sm="auto">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        All Accounts <MDBIcon className='close-icon-red' fas icon="times" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.ItemText><span className='plat-item-title'>Account</span></Dropdown.ItemText>
                            <Dropdown.Item as="button" active>
                                <input 
                                    type="checkbox" 
                                    id="checkbox-4-1"   
                                    className="plat-item-checkbox" 
                                    name="All Accounts"
                                    value="All Accounts"
                                    onChange={handleaccountChange}
                                /><label htmlFor="checkbox-4-1"></label>
                                <span className='plat-item-list'>All Accounts</span>
                            </Dropdown.Item>
                            <Dropdown.Item as="button" active>
                                <input 
                                    type="checkbox" 
                                    id="checkbox-4-2"   
                                    className="plat-item-checkbox" 
                                    name="All Accounts"
                                    value="Production Accounts"
                                    onChange={handleaccountChange}
                                /><label htmlFor="checkbox-4-2"></label>
                                <span className='plat-item-list'>Production Accounts</span>
                            </Dropdown.Item>
                            <Dropdown.Item as="button" active>
                                <input 
                                    type="checkbox" 
                                    id="checkbox-4-3"   
                                    className="plat-item-checkbox" 
                                    name="All Accounts"
                                    value="Non Production Accounts"
                                    onChange={handleaccountChange}
                                /><label htmlFor="checkbox-4-3"></label>
                                <span className='plat-item-list'>Non Production Accounts</span>
                            </Dropdown.Item>
                        
                        
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md="auto" sm="auto">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        December 2022 <MDBIcon className='close-icon-red' fas icon="times" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.ItemText>
                                <span className='plat-item-title plat-single-date'>Month:    
                                    {/* <span className='plat-single-date'> 
                                        <DatePicker  
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                        />   
                                        <span className='plat-single-icon'> 
                                            <MDBIcon className='plat-icon-cal' fas icon="calendar-alt" />
                                        </span>
                                    </span> */}

                                    <DatePicker  
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                        />   
                                    <MDBIcon className='plat-icon-cal' fas icon="calendar-alt" />
                                    
                                    
                                </span>
                            </Dropdown.ItemText>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md="auto" sm="auto">
                    <button className="btnSecondary" onClick={clearAllDate}> Clear all filters </button>
                </Col>
            </Row>  
        </>
    );
}

export default Row1new;
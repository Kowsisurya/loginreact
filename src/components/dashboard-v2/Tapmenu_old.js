import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';

const Tapmenu = (props) =>{
    const [expandstatus, setExpandstatus] = useState(false);
    useEffect(() => {
        if(props.tabname == 'assetsandspend'){
            setExpandstatus(true)
        }
    },[])
    console.log(expandstatus)
    return(
        <>
            <Row>
                    <Col lg={7} className="plat-tapmenu-left">
                        <Row>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    All Services 
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    <Dropdown.ItemText><span className='plat-item-title'>Account</span></Dropdown.ItemText>
                                        <Dropdown.Item as="button" active>
                                            
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    All DB 
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    <Dropdown.ItemText><span className='plat-item-title'>Account</span></Dropdown.ItemText>
                                        <Dropdown.Item as="button" active>
                                            
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    All OS 
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    <Dropdown.ItemText><span className='plat-item-title'>Account</span></Dropdown.ItemText>
                                        <Dropdown.Item as="button" active>
                                            
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    All Infra 
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    <Dropdown.ItemText><span className='plat-item-title'>Account</span></Dropdown.ItemText>
                                        <Dropdown.Item as="button" active>
                                            
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            {/* { expandstatus ?
                                <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                    <button className="btnSecondary plat-expond-collapse"> Expond All </button>
                                </Col> 
                                :
                                <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                    <button className="btnSecondary plat-expond-collapse"> Expond All </button>
                                </Col> 
                            } */}
                            { expandstatus &&
                                <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                    <button className="btnSecondary plat-expond-collapse"> Expond All </button>
                                </Col>
                            }
                            { expandstatus &&
                                <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                    <button className="btnSecondary plat-expond-collapse"> Collapse All </button>
                                </Col>
                            }
                        </Row>
                    </Col>
                    <Col lg={5} className="plat-tapmenu-right">
                        <div className='plat-tapmenu-right-body'>
                            <div className='plat-three-dort-body'>
                                <Dropdown>
                                    <Dropdown.Toggle className='plat-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                        <MDBIcon className='me-1 pl-2' fas icon="ellipsis-h" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    <Dropdown.ItemText><span className='plat-item-title'>Account</span></Dropdown.ItemText>
                                        <Dropdown.Item as="button" active>
                                            
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='plat-threedort-input-body'>
                                <input
                                    className="SearchInput"
                                    type="text"
                                    placeholder="Search by app"
                                />
                            </div>
                        </div>
                            
                           
                    </Col>
                </Row>  
        </>
    );
}
export default Tapmenu;
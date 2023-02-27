import React, { useEffect, useState } from "react";
import { Box, Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { MDBIcon } from 'mdb-react-ui-kit';
import { Row, Col } from 'react-bootstrap';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { FaExpandAlt } from "react-icons/fa";

export default function SavingModelCard(props) {

    const [cardResponse, setCardResponse] = useState([]);
    // let totalSavingsCardData;
    // useEffect(() => {
    //     fetch("http://localhost:3001/savingsmodelcarddata")
    //         .then((res) => res.json())
    //         .then((res) => setCardResponse(res))
    //         .catch(err => console.log(err))

    //     fetchTotalSavingsCardData();
    // }, [])

    // const fetchTotalSavingsCardData = () => {
    //     cardResponse && cardResponse.map(item => {
    //         totalSavingsCardData = item.totalSavingsCard;
    //     })
    // }

    return (
        <>
            <div className="savingsModelCard">
                <div className='plat-full-cover'>
                    <Row className=''>
                        <Col lg="2" className='mt-3 plat-main-box-saving'>
                            <Box className='plat-box' style={{ "height": "100px", "padding": "0.5rem" }}>
                                <Row>
                                    <Col lg="12">
                                        <p className="mt-3 savingsModelTotalSavingsHeader text-center">
                                            Total Savings
                                        </p>
                                    </Col>
                                    <Col lg="12">
                                        <Row className='plat-box-body'>
                                                <label className='poppins-font cardnumber savingsModelTotalSavingsCount'>  ${props.totalsavings.toLocaleString(undefined, {maximumFractionDigits:2})}</label>
                                        </Row>
                                    </Col>
                                    
                                </Row>
                            </Box>

                        </Col>
                        <Col lg="2" md="12" sm="12" xs="12" className='mt-3 plat-main-box-saving'>
                            <Box className='plat-box' style={{ "height": "100px" }}>
                                <div className='text-center savingsModelCardHeader pt-2'>
                                    On Demand

                                </div>
                                <Col  className="plat-saving-card-body">
                                    <Row>
                                        <Col lg="6" md="6" sm="6" xs="6" className="cardNumberSavingsModelActualPotential  savingsModelCardStyle" >
                                            <div className='plat-actual-titla'>Actual</div><br></br>
                                            <div className='plat-actual-value'>${props.ondemand.actual}</div>
                                        </Col>
                                        <Col lg="6" md="6" sm="6" xs="6" className="cardNumberSavingsModelActualPotential  savingsModelCardStyle">
                                            <div className='plat-potential-titla'>Potential</div><br></br>
                                            <div className='plat-potential-value' > ${props.ondemand.potential} </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <div className='poppins-font cardNumberSavingsModel savingsModelCardStyle'>  ${props.ondemand.spend}</div>
                            </Box>
                        </Col>
                        <Col lg="4" className='mt-3 plat-main-box-saving'>
                            <Box className='plat-box' style={{ "height": "100px" }}>
                                <Row>
                                    <Col lg="12" md="12" sm="12" xs="12">
                                        <div className='text-center savingsModelCardHeader pt-2'>RI</div>
                                    </Col>
                                    <Col lg="12" md="12" sm="12" xs="12">
                                        <Row className='plat-box-body'>
                                            <Col lg="6" md="6" sm="6" xs="6" style={{ borderRight: "1px solid" }}>
                                                <Row>
                                                    <Col lg="12" md="12" sm="12" xs="12">
                                                        <Row className="cardNumberSavingsModelActualPotentialrileft">
                                                            <Col lg="4" md="4" sm="4" xs="4" className=" savingsModelCardStyle" >
                                                                <div className='plat-actual-titla'> Actual </div><br></br>
                                                                <div className='plat-actual-value'> ${props.ri1year.actual}  </div>
                                                            </Col>
                                                            <Col lg="4" md="4" sm="4" xs="4"  className="savingsModelCardStyle" >
                                                                <p className="ri-center-year">1 Year</p>
                                                            </Col>
                                                            <Col lg="4" md="4" sm="4" xs="4"  className="savingsModelCardStyle" >
                                                                <div className='plat-potential-titla'>Potential</div><br></br>
                                                                <div className='plat-potential-value'>${props.ri1year.potential}  </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col lg="12" md="12" sm="12" xs="12">
                                                        <div className='poppins-font cardNumberSavingsModel'>  $ {props.ri1year.spend}  </div>
                                                    </Col>  
                                                </Row>
                                            </Col>

                                            <Col lg="6" md="6" sm="6" xs="6">
                                                <Row>
                                                    <Col className="col-lg-12 col-md-12">
                                                        <Row className="cardNumberSavingsModelActualPotentialriright">
                                                            <Col lg="4" md="4" sm="4" xs="4">
                                                                <div className='plat-actual-titla'> Actual </div><br></br>
                                                                <div className='plat-actual-value'> ${props.ri2year.actual}  </div>
                                                            </Col>
                                                            <Col lg="4" md="4" sm="4" xs="4">
                                                                <div className="ri-center-year"> 3 Year  </div>
                                                            </Col>
                                                            <Col lg="4" md="4" sm="4" xs="4" >
                                                                <div className='plat-potential-titla'> Potential </div><br></br>
                                                                <div className='plat-potential-value'>  ${props.ri2year.potential}  </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col lg="12" md="12" sm="12" xs="12" >
                                                        <div className='poppins-font cardNumberSavingsModel'>  $ {props.ri2year.spend}  </div>
                                                    </Col> 
                                                </Row>      
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Box>

                        </Col>
                        <Col lg="2" className='mt-3 plat-main-box-saving'>
                            <Box className='plat-box' style={{ "height": "100px" }}>

                                <div className='text-center savingsModelCardHeader pt-2'>Savings Plan</div>
                                <Col className="plat-saving-card-body">
                                    <Row>
                                        <Col lg="6" md="6" sm="6" xs="6" className="cardNumberSavingsModelActualPotential  savingsModelCardStyle" >
                                            <div className='plat-actual-titla'>Actual</div><br></br>
                                            <div className='plat-actual-value'> ${props.savingsplan.actual}  </div>
                                        </Col>
                                        <Col lg="6" md="6" sm="6" xs="6" className="cardNumberSavingsModelActualPotential  savingsModelCardStyle">
                                            <div className='plat-potential-titla'>Potential </div><br></br>
                                            <div className='plat-potential-value'> ${props.savingsplan.potential}  </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <div className='poppins-font cardNumberSavingsModel savingsModelCardStyle'>  $ {props.savingsplan.spend}  </div>

                            </Box>

                        </Col>
                        <Col lg="2" className='mt-3 plat-main-box-saving'>
                            <Box className='plat-box' style={{ "height": "100px" }}>

                                <div className='text-center savingsModelCardHeader pt-2 '> Spot </div>

                                <Col className="plat-saving-card-body">
                                    <Row>
                                        <Col lg="6" md="6" sm="6" xs="6" className="cardNumberSavingsModelActualPotential  savingsModelCardStyle">
                                            <div className='plat-actual-titla'>Actual</div><br></br>
                                            <div className='plat-actual-value' > ${props.spot.actual}  </div>
                                        </Col>
                                        <Col lg="6" md="6" sm="6" xs="6" className="cardNumberSavingsModelActualPotential  savingsModelCardStyle" >
                                            <div className='plat-potential-titla'>Potential </div><br></br>
                                            <div className='plat-potential-value' > ${props.spot.potential}  </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col className='poppins-font cardNumberSavingsModel savingsModelCardStyle'>  $ {props.spot.spend}  </Col>
                            </Box>

                        </Col>
                    </Row>
                </div>

                {/* <Row className='plat-quick-box-body'>
                        <Col lg="3" className='mt-3 plat-main-box'> */}
                {/* <FullScreen handle={screen1} className="plat-dashboard-full-screen"> */}
                {/* <Box className='plat-box'>
                        <Row>
                            <div className='plat-asset-body'>
                                <div className='plat-asset-month'>
                                    <p className=' -sm-1'>Total Savings</p>
                                </div>
                            </div>

                            <Row className='plat-box-body'>
                                <Typography className='poppins-font cardnumber plat-totle-value'
                                    color="black"
                                    gutterBottom
                                >
                                    <label className='poppins-font cardnumber'> $972 </label>
                                </Typography>
                            </Row>

                        </Row>
                        {/* <Row>
                            <Col>
                                <div className=''>
                                    <div className=''>
                                        <p className=''>Total Savings</p>
                                    </div>
                                    <div className=''>
                                        <p className=''>$ 972</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className=''>
                                    <div className=''>
                                        <p className=''>On Demand </p>
                                    </div>
                                    <div>
                                        <div className="d-flex">
                                            <p> Actual </p>
                                            <p> $14500 </p>
                                        </div>
                                        <div className="d-flex">
                                            <p> Potential </p>
                                            <p> $14500 </p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <p className='p2'>$ 4500</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className=''>
                                    <div className=''>
                                        <p className=''>Total Savings</p>
                                    </div>
                                    <div className=''>
                                        <p className='p2'>$ </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className=''>
                                    <div className=''>
                                        <p className=''>Total Savings</p>
                                    </div>
                                    <div className=''>
                                        <p className='p2'>$ </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className=''>
                                    <div className=''>
                                        <p className=''>Total Savings</p>
                                    </div>
                                    <div className=''>
                                        <p className='p2'>$ </p>
                                    </div>
                                </div>
                            </Col>




                        </Row> */}
                {/* </Box> */}


                {/* <Box className="d-lg-flex">
                    <Card>
                        <CardContent>
                            <h6> Total Savings</h6>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            Test Data
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            Test Data
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            Test Data
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            Test Data
                        </CardContent>
                    </Card>
                     </Box> */}
            </div>

        </>
    )
}
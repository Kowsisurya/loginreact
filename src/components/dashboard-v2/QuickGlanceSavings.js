import { Row, Col } from 'react-bootstrap';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState  } from 'react';
import { getSavingModel, filterSavingModel } from "../action/costimizedashboardAction";
import { FaExpandAlt } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";
import ZoomIn from '../properties/Zoomin/ZoomIn';

import { dummySavingsModel } from '../dummy_records/DummyRecords';


const QuickGlanceSavings = () => {
    //savings
    const { applicationList, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate, selectedservices, selectedos, selectedinfra,selecteddb, dummydatastatus } = useSelector((state) => state.constimize);
    const [apllicationlist, setApplicationList] = useState(applicationList);
    const [pricelist, setPriceList] = useState(['On Demand', 'RI 1 YR', 'RI 3 YR', 'Savings plan', 'Spot']);
    const [tablerecords, setTablerecords] = useState([]);
    const [totalsavings, setTotalSaving] = useState(0);
    const [totalpotential, setTotalPotential] = useState(0);
    const [ondemand, setOndemand] = useState([]);
    const [ri1year, setRi1Year] = useState([]);
    const [ri2year, setRi2Year] = useState([]);
    const [savingsplan, setSavingsPlan] = useState([]);
    const [spot, setSpot] = useState([]);
    const { companyName } = useSelector((state) => state.user);
    const [zoominstatus, setZoomInStatus] = useState(false);
    const [zoominpopupcontent, setZoomInPopupContent] = useState('');
    const dispatch = useDispatch();
    //savings
    useEffect(() => {
        const apivalue = {
            environment : selectedEnvironment.toString(),
            account: selectedAccount.toString(),
            cloud: selectedCloud.toString(),
            application: selectedApplication.toString(),
            services: selectedservices.toString(),
            os: selectedos.toString(),
            infra: selectedinfra.toString(),
            db: selecteddb.toString()
        }
        
        if(dummydatastatus){
            const dummyrecords = dummySavingsModel();
            setTotalSaving(dummyrecords.newfunctionquery.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}));
            setTotalPotential(dummyrecords.newfunctionquery.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}));

            var listfortable = [];
            applicationList.map((applicationdata, index) => {
                //total list
                const listenvironmentfillter = dummyrecords.newfunctionquery.filter(datas => {
                    return datas.applications === applicationdata;
                });
                pricelist.map((pricelistdata, index) => {
                    const pricelistfilter = listenvironmentfillter.filter(datas => {
                        return datas.pricing_model === pricelistdata;
                    });
                    if(pricelistfilter.length> 0){
                        listfortable.push({application:applicationdata, pricemodel: pricelistdata, spend: pricelistfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ), actual_saving: pricelistfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ), potential_savings: pricelistfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 )});
                    }
                })
            });
            setTablerecords(listfortable);
        }else{
            dispatch(filterSavingModel({companyName, selectedTopdate, apivalue}))
            .unwrap()
            .then(({ data }) => {

                setTotalSaving(data.newfunctionquery.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}));
                setTotalPotential(data.newfunctionquery.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}));

                var listfortable = [];
                applicationList.map((applicationdata, index) => {
                    //total list
                    const listenvironmentfillter = data.newfunctionquery.filter(datas => {
                        return datas.applications === applicationdata;
                    });
                    pricelist.map((pricelistdata, index) => {
                        const pricelistfilter = listenvironmentfillter.filter(datas => {
                            return datas.pricing_model === pricelistdata;
                        });
                        if(pricelistfilter.length> 0){
                            listfortable.push({application:applicationdata, pricemodel: pricelistdata, spend: pricelistfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ), actual_saving: pricelistfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ), potential_savings: pricelistfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 )});
                        }
                    })
                });
                setTablerecords(listfortable);
            })
            .catch(err => {
            console.log(err.message);
            });
        }
        

    },[applicationList, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication,  selectedservices, selectedos, selectedinfra,selecteddb]);

   

    const saving_col1 = <Box className='plat-box'>
            <Row>
                <Col lg="12">
                    <p className='plat-quick-inline saving-model'>Realised Savings PA</p>
                </Col>
                <div className='plat-box-body saving-model'>
                    <Typography className='poppins-font cardnumber plat-totle-value'
                        color="black"
                        gutterBottom
                    >
                        {
                            totalsavings === 0 ?
                            <label className='poppins-font cardtext'> No Savings Identified</label>
                            :
                            <label className='poppins-font cardnumber'> ${totalsavings}</label>
                        }
                        
                    </Typography>
                </div>
                
            </Row>
        </Box>;

    const saving_col2 = <Box className='plat-box'>
        <Row>
            <Col lg="12">
                <p className='plat-quick-inline saving-model'>Potential Savings</p>
            </Col>
            <div className='plat-box-body saving-model'>
                <Typography className='poppins-font cardnumber plat-totle-value'
                    color="black"
                    gutterBottom
                >
                        {
                            totalpotential === 0 ?
                            <label className='poppins-font cardtext '> No Potential Savings Identified</label>
                            :
                            <label className='poppins-font cardnumber'> ${totalpotential}</label>
                        }
                </Typography>
            </div>  
        </Row>
    </Box>;
     const sectionZoomin = (type) => {
        if(type === 'row3-col1'){
            setZoomInPopupContent(saving_col1);
            setZoomInStatus(true); 
        }else if (type === 'row3-col2') {
            setZoomInPopupContent(saving_col2);
            setZoomInStatus(true); 
        }
     }
    return(<>
        <ZoomIn zoominstatus={zoominstatus} setZoomInStatus={setZoomInStatus}>
            {zoominpopupcontent}
        </ZoomIn>
        <div className='plat-full-cover'>   
                        <h1 className='Plat-quick-title'>Cost Savings</h1>
                        <Row className='plat-quick-box-body'>
                            <Col lg="3" className='mt-3 plat-main-box'>
                                {saving_col2}
                                {/* <div className='plat-box-topicon'>
                                    <FaExpandAlt   className='plat-expandalt-icon' onClick={() => sectionZoomin('row3-col2')}/>
                                </div> */}
                            </Col> 
                            <Col lg="3" className='mt-3 plat-main-box'>
                                {saving_col1}
                                {/* <div className='plat-box-topicon'>
                                    <FaExpandAlt   className='plat-expandalt-icon' onClick={() => sectionZoomin('row3-col1')}/>
                                </div> */}
                            </Col>
                            <Col lg="3" className='mt-3 plat-main-box'>
                            <Box className='plat-box'>
                                <Row>
                                    <Col lg="12">
                                        <p className='plat-quick-inline saving-model'>Pending Action</p>
                                    </Col>
                                    <div className='plat-box-body saving-model'>
                                        <Typography className='poppins-font cardnumber plat-totle-value'
                                            color="black"
                                            gutterBottom
                                        >
                                                {/* {
                                                    totalpotential === 0 ?
                                                    <label className='poppins-font cardtext '> No Pending Action Identified</label>
                                                    :
                                                    <label className='poppins-font cardnumber'> ${totalpotential}</label>
                                                } */}
                                                <label className='poppins-font cardnumber'> $200</label>
                                        </Typography>
                                    </div>  
                                </Row>
                            </Box>
                            </Col>
                        </Row>
                    </div>
    </>)
}

export default QuickGlanceSavings;
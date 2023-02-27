import React, { Fragment } from 'react';
import QuickView from '../QuickView';
import Tapmenu from '../Tapmenu';
import { Row, Col } from 'react-bootstrap';
import Accordion from '../../properties/accordion/Accordion';
import { Box } from '@mui/material';
import SavingModelCard from './SavingsModelCard';
import SavingsModelBarChart from './SavingsModelBarChart';
import SavingsModelDonutChart from './SavingsModelDonutChart';
import SavingsModelTable from './SavingsModelTable';
import { FaExpandAlt } from "react-icons/fa";
import BarChart from '../../costimize/barChart';
import "./savingsmodel.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getSavingModel, filterSavingModel } from "../../action/costimizedashboardAction";
import SavingPioChart from './savingPioChart';
import SavingsCountChart from '../PopupChart/SavingsCountChart';
import SavingsSpendChart from '../PopupChart/SavingsSpendChart';
import Dropdown from 'react-bootstrap/Dropdown';
import { HiOutlineArrowsExpand } from "react-icons/hi";
import Spinner from 'react-bootstrap/Spinner';

import { dummySavingsModel } from '../../dummy_records/DummyRecords';


export default function SavingsModel() {
    const { companyName } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { applicationList, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate, selectedservices, selectedos, selectedinfra,selecteddb, dummydatastatus } = useSelector((state) => state.constimize);
    const [apllicationlist, setApplicationList] = useState([]);
    const [pricelist, setPriceList] = useState(['On Demand', 'RI 1 YR', 'RI 3 YR', 'Savings plan', 'Spot']);
    const [tablerecords, setTablerecords] = useState([]);
    const [totalsavings, setTotalSaving] = useState(0);
    const [ondemand, setOndemand] = useState({spend: 0, actual: 0, potential: 0});
    const [ri1year, setRi1Year] = useState({spend: 0, actual: 0, potential:0});
    const [ri2year, setRi2Year] = useState({spend: 0, actual: 0, potential:0});
    const [savingsplan, setSavingsPlan] = useState({spend: 0, actual: 0, potential:0});
    const [spot, setSpot] = useState({spend: 0, actual: 0, potential:0});
    const [savingrecords, setSavingsRecords] = useState([]);
    const [datachanges, setDataChanges] = useState(true);

    const [countstatus, setCountStatus] = useState(false);
    const [spendstatus, setSpendStatus] = useState(false);

    const [preloader, setPreloader] = useState(true);
    
    // console.log(selectedTopdate);

    useEffect(() => {
        setPreloader(true);
        console.log(dummydatastatus);
        if(dummydatastatus){
            const dummyrecords = dummySavingsModel();
            setTotalSaving(dummyrecords.newfunctionquery.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ));
            //on demand

            const ondemandfilter = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.pricing_model === 'On Demand';
            });
            setOndemand({spend: ondemandfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ondemandfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ondemandfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

                //ri1
            const ri1filter = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.pricing_model === 'RI 1 YR';
            });
            setRi1Year({spend: ri1filter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ri1filter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ri1filter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

            // ri2
            const ri2filter = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.pricing_model === 'RI 3 YR';
            });
            setRi2Year({spend: ri2filter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ri2filter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ri2filter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

            // savings plan
            const savingsplanfilter = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.pricing_model === 'Savings plan';
            });
            // console.log(savingsplanfilter);
            setSavingsPlan({spend: savingsplanfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: savingsplanfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:savingsplanfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

            //spot
            const spotfilter = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.pricing_model === 'Spot';
            });
            setSpot({spend: spotfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: spotfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:spotfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});


            setSavingsRecords(dummyrecords.newfunctionquery);
            setDataChanges(!datachanges);
            setPreloader(false);
        }else{
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
            
            dispatch(filterSavingModel({companyName, selectedTopdate, apivalue}))
            .unwrap()
            .then(({ data }) => {
                // console.log("data");
                // console.log(data.newfunctionquery6);
                setTotalSaving(data.newfunctionquery6.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ));
                //on demand

                const ondemandfilter = data.newfunctionquery6?.filter(datas => {
                    return datas.pricing_model === 'On Demand';
                });
                setOndemand({spend: ondemandfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ondemandfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ondemandfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

                    //ri1
                const ri1filter = data.newfunctionquery6?.filter(datas => {
                    return datas.pricing_model === 'RI 1 YR';
                });
                setRi1Year({spend: ri1filter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ri1filter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ri1filter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

                // ri2
                const ri2filter = data.newfunctionquery6?.filter(datas => {
                    return datas.pricing_model === 'RI 3 YR';
                });
                setRi2Year({spend: ri2filter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ri2filter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ri2filter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

                // savings plan
                const savingsplanfilter = data.newfunctionquery6?.filter(datas => {
                    return datas.pricing_model === 'Savings plan';
                });
                // console.log(savingsplanfilter);
                setSavingsPlan({spend: savingsplanfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: savingsplanfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:savingsplanfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

                //spot
                const spotfilter = data.newfunctionquery6?.filter(datas => {
                    return datas.pricing_model === 'Spot';
                });
                setSpot({spend: spotfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: spotfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:spotfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});


                setSavingsRecords(data.newfunctionquery6);
                setDataChanges(!datachanges);
                setPreloader(false);
            })
            .catch(err => {
            console.log(err.message);
            setPreloader(false);
            });
        }
        
    },[applicationList, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication,  selectedservices, selectedos, selectedinfra, selecteddb, selectedTopdate]);
    useEffect(() => {
        var listfortable = [];

        // const savingapplicationlist = savingrecords.map(v => v.applications.toLowerCase());
        // const applicationListnew = new Set([...savingapplicationlist]);
        // const applicationuniqu = [...applicationListnew];


        applicationList.map((applicationdata, index) => {
            //total list
            const listenvironmentfillter = savingrecords?.filter(datas => {
                return datas.applications.toLowerCase() === applicationdata.toLowerCase();
            });
            pricelist.map((pricelistdata, index) => {
                const pricelistfilter = listenvironmentfillter?.filter(datas => {
                    return datas.pricing_model?.toLowerCase() === pricelistdata.toLowerCase();
                });
                if(pricelistfilter?.length> 0){
                    listfortable.push({application:applicationdata, pricemodel: pricelistdata, spend: pricelistfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ), actual_saving: pricelistfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ), potential_savings: pricelistfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 )});
                }
                
            })
        });
        // console.log(listfortable);
        setTablerecords(listfortable);
    },[datachanges])

    // useEffect(() => {
    //     console.log(tablerecords)
        
    //     //on demand
    //     const ondemandfilter = tablerecords?.filter(datas => {
    //         return datas.pricemodel === 'On Demand';
    //     });
    //     setOndemand({spend: ondemandfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ondemandfilter.reduce((a,v) =>  a = +a + +v.actual_saving , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ondemandfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

    //     //ri1
    //     const ri1filter = tablerecords?.filter(datas => {
    //         return datas.pricemodel === 'RI 1 YR';
    //     });
    //     setRi1Year({spend: ri1filter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ri1filter.reduce((a,v) =>  a = +a + +v.actual_saving , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ri1filter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

    //     // ri2
    //     const ri2filter = tablerecords?.filter(datas => {
    //         return datas.pricemodel === 'RI 3 YR';
    //     });
    //     setRi2Year({spend: ri2filter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: ri2filter.reduce((a,v) =>  a = +a + +v.actual_saving , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:ri2filter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

    //     // savings plan
    //     const savingsplanfilter = tablerecords?.filter(datas => {
    //         return datas.pricemodel === 'Savings plan';
    //     });
    //     setSavingsPlan({spend: savingsplanfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: savingsplanfilter.reduce((a,v) =>  a = +a + +v.actual_saving , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:savingsplanfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

    //     //spot
    //     const spotfilter = tablerecords?.filter(datas => {
    //         return datas.pricemodel === 'Spot';
    //     });
    //     setSpot({spend: spotfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), actual: spotfilter.reduce((a,v) =>  a = +a + +v.actual_saving , 0 ).toLocaleString(undefined, {maximumFractionDigits:2}), potential:spotfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 ).toLocaleString(undefined, {maximumFractionDigits:2})});

    // },[tablerecords]);

    const searchBoxApplication = (e) => {
        const allenvironmentvmfiltered = applicationList?.filter(datas => {
            return datas.toLowerCase() === e.target.value.toLowerCase();
        });
        if(allenvironmentvmfiltered?.length > 0){
            var listfortable = [];
                //total list
                const listenvironmentfillter = savingrecords?.filter(datas => {
                    return datas.applications === e.target.value;
                });
                pricelist.map((pricelistdata, index) => {
                    const pricelistfilter = listenvironmentfillter?.filter(datas => {
                        return datas.pricing_model === pricelistdata;
                    });
                    if(pricelistfilter?.length> 0){
                        listfortable.push({application:e.target.value, pricemodel: pricelistdata, spend: pricelistfilter.reduce((a,v) =>  a = +a + +v.spend , 0 ), actual_saving: pricelistfilter.reduce((a,v) =>  a = +a + +v.actual_savings , 0 ), potential_savings: pricelistfilter.reduce((a,v) =>  a = +a + +v.potential_savings , 0 )});
                    }
                    
                })
                setTablerecords(listfortable);
        }else{
            setDataChanges(!datachanges);
        }
    }

    return (<>
        <Fragment>
            <SavingsCountChart 
                 zoominstatus={countstatus} 
                 setZoomInStatus={setCountStatus} 
            />
            <SavingsSpendChart 
                zoominstatus={spendstatus} 
                setZoomInStatus={setSpendStatus} 
            />
            <div className='plat-dashboard-body'>
                <div className='plat-dashboard-quickview'>
                    <QuickView/>
                </div>
                <div className='plat-dashboard-tabs'>
                    <Tapmenu  excalrecords={tablerecords} excalname='savings models' searchBoxApplication={searchBoxApplication} type="savingsmodel"/>
                    <div className='plat-full-asset-spend-cover'>
                    {
                            preloader ?
                            <Spinner animation="grow" className='plat-spinner-grow' />
                            :
                            <>
                        <Row className='plat-savings-box-body'>
                            <Col lg="9" className='plat-savings-box-table-body'>
                                <Box>
                                    <div>
                                        <SavingModelCard  
                                            totalsavings={totalsavings}
                                            ondemand = {ondemand}
                                            ri1year = {ri1year}
                                            ri2year = {ri2year}
                                            savingsplan = {savingsplan}
                                            spot = {spot}
                                        />
                                    </div>
                                    <div className='mt-5'>
                                        <SavingsModelTable tablerecords={tablerecords} />

                                    </div>

                                </Box>
                            </Col>
                            <Col lg="3">
                                <Box className='plat-savings-bar-chart'>
                                    <SavingsModelBarChart />
                                    {/* <BarChart /> */}
                                    <div className='plat-barchart-icon-saving'>
                                        {/* <FaExpandAlt className='plat-expandalt-icon' onClick={() => setSpendStatus(true)} /> */}
                                        {/* <iconify-icon icon="entypo:dots-three-horizontal" className='plat-expandalt-icon' onClick={() => setSpendStatus(true)}></iconify-icon> */}
                                        <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                            <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='plat-box-menu-list'>
                                            <Dropdown.ItemText onClick={() => setSpendStatus(true)} className="plat-dropdown-item-text">
                                                <span className='plat-box-item-title list-expand-left'>
                                                    All Spend Trend
                                                </span>
                                                <span className='plat-box-item-title list-expand-right'>
                                                    <HiOutlineArrowsExpand />
                                                </span>
                                            </Dropdown.ItemText>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Box>
                                <Box  className='plat-savings-donut-chart'>
                                    {/* <SavingsModelDonutChart /> */}
                                    <SavingPioChart />
                                    <div className='plat-donutchart-icon'>
                                        {/* <iconify-icon icon="entypo:dots-three-horizontal" className='plat-expandalt-icon' onClick={() => setCountStatus(true)}></iconify-icon> */}
                                        <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                            <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='plat-box-menu-list'>
                                            <Dropdown.ItemText onClick={() => setCountStatus(true)} className="plat-dropdown-item-text">
                                                <span className='plat-box-item-title list-expand-left'>
                                                    All Spend Trend
                                                </span>
                                                <span className='plat-box-item-title list-expand-right'>
                                                    <HiOutlineArrowsExpand />
                                                </span>
                                            </Dropdown.ItemText>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* <FaExpandAlt className='plat-expandalt-icon' onClick={() => setCountStatus(true)} /> */}
                                    </div>
                                </Box>
                            </Col>
                        </Row>
                        </>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    </>)
}
import { Row, Col } from 'react-bootstrap';
import { Fragment } from "react";
import { Box } from '@mui/material';
import Chart from "./trendChartv2";
import Tapmenu from './Tapmenu';
import { MDBIcon } from 'mdb-react-ui-kit';
import Typography from "@material-ui/core/Typography";
import Table from 'react-bootstrap/Table';
import QuickView from './QuickView';
import { FaExpandAlt } from "react-icons/fa";
// import BarChartv2 from './BarChartv2';
import PieChart from '../costimize/pieChart';
import BarChart from '../costimize/barChart';
import Accordion from '../properties/accordion/Accordion';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAssetandSpendList, filterAssetandSpendList } from "../action/costimizedashboardAction";
import { searchApplication } from '../slice/costimizeSlice';
import { useState } from 'react';
import AssetSpendCountChart from './PopupChart/AssetSpendCountChart';
import AssetSpendSpendChart from './PopupChart/AssetSpendSpendChart';
import { titleCase } from "../custom_hook/CustomHook"
import ApplicationDetails from '../properties/accordion/ApplicationDetails';
import Spinner from 'react-bootstrap/Spinner';
import AssetSpendVmDetails from '../properties/accordion/AssetSpendVmDetails';
import Dropdown from 'react-bootstrap/Dropdown';
import { HiOutlineArrowsExpand } from "react-icons/hi";

import { dummyAssetandSpend } from '../dummy_records/DummyRecords';


const AssetAndSpend = () => {
    const { applicationList, selectedAccount, selectedApplication, selectedCloud, selecteddb, selectedEnvironment, selectedinfra, selectedTopdate, selectedos, selectedservices, environmentList, dummydatastatus  } = useSelector((state) => state.constimize);
    const { companyName } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [countchart, setCountChart] = useState([]);
    const [spendchart, setSpendChart] = useState([]);
    const [tablerecords, setTableRecords] = useState([]);

    const [searchapplication, setSearchApplication] = useState('');

    const [barchartvalue, setBarChartValue] = useState([]);
    const [countchartcategories, setCountChartCategories] = useState([]);
    const [countchartvm, setChartVm] = useState([]);
    const [countchartdbaas, setChartDbass] = useState([]);
    const [countchartothers, setChartOthers] = useState([]);
    const [barcharttype, setBarChartType] = useState("vm");
    //chart status
    const [countstatus, setCountStatus] = useState(false);
    const [spendstatus, setSpendStatus] = useState(false);
    const [vmexpanddetails, setVmExpandDetails] = useState({
        application: '',
        environment: '',
        cloud:''
    });

    const [applicationviewstatus, setApplicationViewStatus] = useState(false);
    const [vmviewstatus, setVmViewStatus] = useState(false);
    const [preloader, setPreloader] = useState(true);
    //accourdion records
    const [ allenvironmentdetails, setAllEnvironmentDetails ] = useState([
        {type:'VM', count:'-', spend:'-' },
        {type:'DB', count:'-', spend:'-' },
        {type:'Others', count:'-', spend:'-' }
    ]);
    const [ listenvironmentdetails, setListEnvironmentDetails ] = useState([]);
    const [ assetspenddata, setAssetSpendData ] = useState([]);

    const getCloudList = (list) => {

        var cloudlist = ['aws','azure','gcp'];
        var envtemp = [];
        cloudlist.map((envdata, index) => {
            // console.log(list);
            const listenvironmentfillter = list.filter(datas => {
                return datas.all_cloud?.toLowerCase() === envdata?.toLowerCase();
            });

            // console.log("listenvironmentfillter");
            // console.log(listenvironmentfillter);
            var applicationlist = getApplicationList(listenvironmentfillter);
            //  console.log("applicationlist");
            // console.log(applicationlist);
            //vm
            const environmentvmfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'VM';
            });
            var environmentvm = {type:'VM', count:'-', spend:'-' };
            if(environmentvmfiltered.length > 0){
                environmentvm = {type:'VM', count:environmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }

            //db
            const environmentdbfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'DB';
            });
            var environmentdb = {type:'DB', count:'-', spend:'-' };
            if(environmentdbfiltered.length > 0){
                environmentdb = {type:'DB', count:environmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }
            //others
            const environmentothersfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'Others';
            });
            var environmentothers = {type:'Others', count:'-', spend:'-' };
            if(environmentothersfiltered.length > 0){
                environmentothers = {type:'Others', count:environmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }   
            if(environmentvmfiltered.length > 0 || environmentdbfiltered.length > 0 || environmentothersfiltered.length > 0){
                 envtemp.push([envdata,environmentvm,environmentdb,environmentothers,[applicationlist]])
            }
            
        })
        // console.log("envtemp");
        // console.log(envtemp);
        return envtemp;
    }

    const getApplicationList = (list) => {
        // console.log(list);

        var cloudlist = applicationList;
        var envtemp = [];
        cloudlist.map((envdata, index) => {
            // console.log(envdata);
            const listenvironmentfillter = list.filter(datas => {
                // console.log("envdata");
                // console.log(envdata);
                return datas.applications?.toLowerCase() === envdata?.toLowerCase();
            });
            // console.log(listenvironmentfillter);
            //vm
            const environmentvmfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'VM';
            });
            var environmentvm = {type:'VM', count:'-', spend:'-' };
            if(environmentvmfiltered.length > 0){
                environmentvm = {type:'VM', count:environmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }

            //db
            const environmentdbfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'DB';
            });
            var environmentdb = {type:'DB', count:'-', spend:'-' };
            if(environmentdbfiltered.length > 0){
                environmentdb = {type:'DB', count:environmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }
            //others
            const environmentothersfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'Others';
            });
            var environmentothers = {type:'Others', count:'-', spend:'-' };
            if(environmentothersfiltered.length > 0){
                environmentothers = {type:'Others', count:environmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            } 
            if(environmentvmfiltered.length > 0 || environmentdbfiltered.length > 0 || environmentothersfiltered.length > 0){
                envtemp.push([envdata,environmentvm,environmentdb,environmentothers])
            }
           
            
        })
        return envtemp;
    }

    //asset and spend details


    useEffect(() => {
        setPreloader(true);
        // console.log(preloader);
        if(dummydatastatus){
            const dummyrecords = dummyAssetandSpend();
            setAssetSpendData(dummyrecords.newfunctionquery);
            //all environment
            //vm
            const allenvironmentvmfiltered = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.infras === 'VM';
            });
            var allenvironmentvm = {type:'VM', count:'-', spend:'-' };
            if(allenvironmentvmfiltered?.length > 0){
                allenvironmentvm = {type:'VM', count:allenvironmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: allenvironmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }
            //db
            const allenvironmentdbfiltered = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.infras === 'DB';
            });
            var allenvironmentdb = {type:'DB', count:'-', spend:'-' };
            if(allenvironmentdbfiltered?.length > 0){
                allenvironmentdb = {type:'DB', count:allenvironmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: allenvironmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }
            //others
            const allenvironmentothersfiltered = dummyrecords.newfunctionquery?.filter(datas => {
                return datas.infras === 'Others';
            });
            var allenvironmentothers = {type:'Others', count:'-', spend:'-' };
            if(allenvironmentothersfiltered?.length > 0){
                allenvironmentothers = {type:'Others', count:allenvironmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: allenvironmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }
            setAllEnvironmentDetails([allenvironmentvm,allenvironmentdb,allenvironmentothers]);

            var envtemp = [];
            //environment list
            environmentList.map((envdata, index) => {
                const listenvironmentfillter = dummyrecords.newfunctionquery?.filter(datas => {
                    return datas.environments?.toLowerCase() === envdata?.toLowerCase();
                });
                var allcloudlist = getCloudList(listenvironmentfillter);
                //vm
                const environmentvmfiltered = listenvironmentfillter?.filter(datas => {
                    return datas.infras === 'VM';
                });
                var environmentvm = {type:'VM', count:'-', spend:'-' };
                if(environmentvmfiltered.length > 0){
                    environmentvm = {type:'VM', count:environmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                }

                //db
                const environmentdbfiltered = listenvironmentfillter?.filter(datas => {
                    return datas.infras === 'DB';
                });
                var environmentdb = {type:'DB', count:'-', spend:'-' };
                if(environmentdbfiltered.length > 0){
                    environmentdb = {type:'DB', count:environmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                }
                //others
                const environmentothersfiltered = listenvironmentfillter?.filter(datas => {
                    return datas.infras === 'Others';
                });
                var environmentothers = {type:'Others', count:'-', spend:'-' };
                if(environmentothersfiltered.length > 0){
                    environmentothers = {type:'Others', count:environmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                }   
                envtemp.push([envdata,environmentvm,environmentdb,environmentothers,[allcloudlist]])
            })
            setListEnvironmentDetails(envtemp);


            
                var appcountlist = [["type", "VM", "DBaaS", "Others"]];
                var appspendlist = [];
                var tablenewrecords = [];
                var categories = [];
                var chartvm = [];
                var chartdbaas = [];
                var chartothers = [];
                var barchartvalue = [];
                applicationList.map((appdata, index) => {
                    const listenvironmentfillter = dummyrecords.newfunctionquery.filter(datas => {
                        return datas.applications === appdata;
                    });

                    //vm
                    const allenvironmentvmfiltered = listenvironmentfillter.filter(datas => {
                        return datas.infras === 'VM';
                    });
                    const vmcount = allenvironmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 );
                    const vmspend = allenvironmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 );
                    //db
                    const allenvironmentdbfiltered = listenvironmentfillter.filter(datas => {
                        return datas.infras === 'DB';
                    });
                    const dbcount = allenvironmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 );
                    const dbspend = allenvironmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 );
                    //others
                    const allenvironmentothersfiltered = listenvironmentfillter.filter(datas => {
                        return datas.infras === 'Others';
                    });
                    const otherscount = allenvironmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 );
                    const othersspend = allenvironmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 );
                    const totalspend = +vmspend + +dbspend + +othersspend;
                    const totalcount = +vmcount + +dbcount + +otherscount;
                    // console.log(titleCase(appdata));
                    appcountlist.push([titleCase(appdata),vmcount,dbcount,otherscount]);
                    categories.push(titleCase(appdata));
                    chartvm.push(vmcount);
                    chartdbaas.push(dbcount);
                    chartothers.push(otherscount);
                    appspendlist.push({value:totalspend, name:titleCase(appdata)});

                    tablenewrecords.push({"Application Title": titleCase(appdata), "VM Count": vmcount, "VM Spend": vmspend, "DBaaS Count": dbcount, "DBaaS Spend": dbspend, "Others Count": otherscount, "Others Spend": othersspend });
                    barchartvalue.push({
                        categories: titleCase(appdata),
                        vmcount: vmcount,
                        dbcount: dbcount,
                        otherscount: otherscount
                    });
                });
                setBarChartValue(barchartvalue);
                setCountChartCategories(categories);
                setChartVm(chartvm);
                setChartDbass(chartdbaas);
                setChartOthers(chartothers);
                
                setCountChart(appcountlist);
                setSpendChart(appspendlist);
                setTableRecords(tablenewrecords);
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
            
            // console.log(apivalue);
            dispatch(filterAssetandSpendList({companyName, selectedTopdate, apivalue}))
                .unwrap()
                .then(({ data }) => {  
                    // console.log("data checking");
                    // console.log(data);

                    setAssetSpendData(data.newfunctionquery);
                //all environment
                //vm
                const allenvironmentvmfiltered = data.newfunctionquery?.filter(datas => {
                    return datas.infras === 'VM';
                });
                var allenvironmentvm = {type:'VM', count:'-', spend:'-' };
                if(allenvironmentvmfiltered?.length > 0){
                    allenvironmentvm = {type:'VM', count:allenvironmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: allenvironmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                }
                //db
                const allenvironmentdbfiltered = data.newfunctionquery?.filter(datas => {
                    return datas.infras === 'DB';
                });
                var allenvironmentdb = {type:'DB', count:'-', spend:'-' };
                if(allenvironmentdbfiltered?.length > 0){
                    allenvironmentdb = {type:'DB', count:allenvironmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: allenvironmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                }
                //others
                const allenvironmentothersfiltered = data.newfunctionquery?.filter(datas => {
                    return datas.infras === 'Others';
                });
                var allenvironmentothers = {type:'Others', count:'-', spend:'-' };
                if(allenvironmentothersfiltered?.length > 0){
                    allenvironmentothers = {type:'Others', count:allenvironmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: allenvironmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                }
                setAllEnvironmentDetails([allenvironmentvm,allenvironmentdb,allenvironmentothers]);

                var envtemp = [];
                //environment list
                environmentList.map((envdata, index) => {
                    const listenvironmentfillter = data.newfunctionquery?.filter(datas => {
                        return datas.environments?.toLowerCase() === envdata?.toLowerCase();
                    });
                    var allcloudlist = getCloudList(listenvironmentfillter);
                    //vm
                    const environmentvmfiltered = listenvironmentfillter?.filter(datas => {
                        return datas.infras === 'VM';
                    });
                    var environmentvm = {type:'VM', count:'-', spend:'-' };
                    if(environmentvmfiltered.length > 0){
                        environmentvm = {type:'VM', count:environmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                    }

                    //db
                    const environmentdbfiltered = listenvironmentfillter?.filter(datas => {
                        return datas.infras === 'DB';
                    });
                    var environmentdb = {type:'DB', count:'-', spend:'-' };
                    if(environmentdbfiltered.length > 0){
                        environmentdb = {type:'DB', count:environmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                    }
                    //others
                    const environmentothersfiltered = listenvironmentfillter?.filter(datas => {
                        return datas.infras === 'Others';
                    });
                    var environmentothers = {type:'Others', count:'-', spend:'-' };
                    if(environmentothersfiltered.length > 0){
                        environmentothers = {type:'Others', count:environmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
                    }   
                    envtemp.push([envdata,environmentvm,environmentdb,environmentothers,[allcloudlist]])
                })
                setListEnvironmentDetails(envtemp);


                
                    var appcountlist = [["type", "VM", "DBaaS", "Others"]];
                    var appspendlist = [];
                    var tablenewrecords = [];
                    var categories = [];
                    var chartvm = [];
                    var chartdbaas = [];
                    var chartothers = [];
                    var barchartvalue = [];
                    applicationList.map((appdata, index) => {
                        const listenvironmentfillter = data.newfunctionquery.filter(datas => {
                            return datas.applications === appdata;
                        });

                        //vm
                        const allenvironmentvmfiltered = listenvironmentfillter.filter(datas => {
                            return datas.infras === 'VM';
                        });
                        const vmcount = allenvironmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 );
                        const vmspend = allenvironmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 );
                        //db
                        const allenvironmentdbfiltered = listenvironmentfillter.filter(datas => {
                            return datas.infras === 'DB';
                        });
                        const dbcount = allenvironmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 );
                        const dbspend = allenvironmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 );
                        //others
                        const allenvironmentothersfiltered = listenvironmentfillter.filter(datas => {
                            return datas.infras === 'Others';
                        });
                        const otherscount = allenvironmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 );
                        const othersspend = allenvironmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 );
                        const totalspend = +vmspend + +dbspend + +othersspend;
                        const totalcount = +vmcount + +dbcount + +otherscount;
                        // console.log(titleCase(appdata));
                        appcountlist.push([titleCase(appdata),vmcount,dbcount,otherscount]);
                        categories.push(titleCase(appdata));
                        chartvm.push(vmcount);
                        chartdbaas.push(dbcount);
                        chartothers.push(otherscount);
                        appspendlist.push({value:totalspend, name:titleCase(appdata)});

                        tablenewrecords.push({"Application Title": titleCase(appdata), "VM Count": vmcount, "VM Spend": vmspend, "DBaaS Count": dbcount, "DBaaS Spend": dbspend, "Others Count": otherscount, "Others Spend": othersspend });
                        barchartvalue.push({
                            categories: titleCase(appdata),
                            vmcount: vmcount,
                            dbcount: dbcount,
                            otherscount: otherscount
                        });
                    });
                    setBarChartValue(barchartvalue);
                    setCountChartCategories(categories);
                    setChartVm(chartvm);
                    setChartDbass(chartdbaas);
                    setChartOthers(chartothers);
                    
                    setCountChart(appcountlist);
                    setSpendChart(appspendlist);
                    setTableRecords(tablenewrecords);
                    setPreloader(false);
                })
                .catch(err => {
                console.log(err.message);
                setPreloader(false);
                });
            }
       
    },[applicationList, selectedAccount, selectedApplication, selectedCloud, selecteddb, selectedEnvironment, selectedinfra, selectedTopdate, selectedos, selectedservices, environmentList]);
    
    const searchBoxApplication = (e) => {
        const allenvironmentvmfiltered = applicationList.filter(datas => {
            return datas.toLowerCase() === e.target.value.toLowerCase();
        });
        if(allenvironmentvmfiltered.length > 0){
            dispatch(searchApplication(e.target.value));
            setSearchApplication(e.target.value);
        }else{
            dispatch(searchApplication(''));
            setSearchApplication('');
        }
    }
    const barChartView = (type) => {
        setBarChartType(type);
    }
    const viewAssetAndSpendVmDetails = (data) => {
        setVmViewStatus(true);
        setVmExpandDetails({
            application: data.application,
            cloud:data.cloud,
            environment: data.environment
        })
    }
    return(
        <Fragment>
            <AssetSpendCountChart 
                zoominstatus={countstatus} 
                setZoomInStatus={setCountStatus}  
                countchartcategories = {countchartcategories} 
                countchartvm = {countchartvm} 
                countchartdbaas = {countchartdbaas} 
                countchartothers = {countchartothers}
            />
            <AssetSpendSpendChart 
                zoominstatus={spendstatus} 
                setZoomInStatus={setSpendStatus}  
                spendchart = {spendchart}
            />
            <div className='plat-dashboard-body'>
                <div className='plat-dashboard-quickview' >
                    <QuickView />
                </div>
                <div className='plat-dashboard-tabs' >
                    <Tapmenu 
                        excalrecords={tablerecords} 
                        excalname='Asset/Spend' 
                        searchBoxApplication={searchBoxApplication} 
                        type="assetandspend"
                        osstatus = {true}
                        dbstatus = {true}
                    />
                    <div className='plat-main-title'>
                        <h1 className='top-Plat-quick-title'>Asset / Spend</h1> 
                    </div>
                        
                    {
                        applicationviewstatus && 
                        <ApplicationDetails 
                            setApplicationViewStatus={setApplicationViewStatus}
                        />
                    }
                    {
                        vmviewstatus && 
                        <AssetSpendVmDetails 
                            setVmViewStatus={setVmViewStatus}
                            allenvironmentdetails = {allenvironmentdetails}
                            listenvironmentdetails = {listenvironmentdetails}
                            type={"VM"}
                            vmexpanddetails = {vmexpanddetails}
                            viewAssetAndSpendVmDetails={viewAssetAndSpendVmDetails}
                        />
                    }
                    {
                        !applicationviewstatus  && !vmviewstatus ?
                        <div className='plat-full-asset-spend-cover'>   
                        {
                            preloader ?
                            <Spinner animation="grow" className='plat-spinner-grow' />
                            :
                            <>
                                <Row className='plat-asset-spend-box-body'>
                                <Col lg="8" className='plat-accordion-size'>
                                    <Box className='plat-asset-spend-left'>
                                        <Accordion
                                            setApplicationViewStatus={setApplicationViewStatus}
                                            setVmViewStatus={viewAssetAndSpendVmDetails}
                                            setPreloader={setPreloader}
                                            allenvironmentdetails = {allenvironmentdetails}
                                            listenvironmentdetails = {listenvironmentdetails}
                                            assetspenddata = {assetspenddata}
                                            searchapplication = {searchapplication}
                                        />
                                    </Box>
                                </Col>
                                <Col lg="4">
                                    <Box className='plat-asset-spend-right'>
                                        <BarChart countchartcategories = {countchartcategories} countchartvm = {countchartvm} countchartdbaas = {countchartdbaas} countchartothers = {countchartothers} barcharttype={barcharttype} barchartvalue = {barchartvalue} />
                                        <div className='plat-barchart-icon'>
                                            <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                                <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                    <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className='plat-box-menu-list'>
                                                    <Dropdown.ItemText onClick={() => barChartView("vm")} className="plat-dropdown-item-text">
                                                        <span className='plat-box-item-title list-expand-left'>
                                                            VM
                                                        </span>
                                                        <span className='plat-box-item-title list-expand-right'>
                                                            <iconify-icon icon="mdi:cloud-print-outline"></iconify-icon>
                                                        </span>
                                                    </Dropdown.ItemText>
                                                    <Dropdown.ItemText onClick={() => barChartView("db")} className="plat-dropdown-item-text">
                                                        <span className='plat-box-item-title list-expand-left'>
                                                            DBaaS
                                                        </span>
                                                        <span className='plat-box-item-title list-expand-right'>
                                                            <iconify-icon icon="carbon:ibm-cloud-hyper-protect-dbaas"></iconify-icon>
                                                        </span>
                                                    </Dropdown.ItemText>
                                                    <Dropdown.ItemText onClick={() => barChartView("others")} className="plat-dropdown-item-text">
                                                        <span className='plat-box-item-title list-expand-left'>
                                                            Others
                                                        </span>
                                                        <span className='plat-box-item-title list-expand-right'>
                                                            <iconify-icon icon="carbon:cloud-logging"></iconify-icon>
                                                        </span>
                                                    </Dropdown.ItemText>
                                                    <Dropdown.ItemText onClick={() => setCountStatus(true)} className="plat-dropdown-item-text">
                                                        <span className='plat-box-item-title list-expand-left'>
                                                            All Infra Count
                                                        </span>
                                                        <span className='plat-box-item-title list-expand-right'>
                                                            <HiOutlineArrowsExpand />
                                                        </span>
                                                    </Dropdown.ItemText>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </div>
                                        <PieChart spendchart = {spendchart}/>
                                        <div className='plat-piechart-icon'>
                                            <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                                <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                    <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className='plat-box-menu-list'>
                                                    <Dropdown.ItemText onClick={() => setSpendStatus(true)} className="plat-dropdown-item-text">
                                                        <span className='plat-box-item-title list-expand-left'>
                                                            All Spend
                                                        </span>
                                                        <span className='plat-box-item-title list-expand-right'>
                                                            <HiOutlineArrowsExpand />
                                                        </span>
                                                    </Dropdown.ItemText>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Box>
                                </Col>  
                            </Row>
                            </>
                        }
                            
                        </div>
                             : 
                            <></>
                    } 
  
                </div>
            </div>
        </Fragment>
    );
}
export default AssetAndSpend;
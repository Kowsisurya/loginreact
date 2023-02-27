import { Row, Col } from 'react-bootstrap';
import { Box } from '@mui/material';
import Tapmenu from './Tapmenu';
import { MDBIcon } from 'mdb-react-ui-kit';
import Typography from "@material-ui/core/Typography";
import Table from 'react-bootstrap/Table';
import QuickView from './QuickView';
import { FaExpandAlt } from "react-icons/fa";
import ExpandPopup from '../properties/expand_popup/ExpandPopup';
import { Expand } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSummaryDashboard, getUntaggedResources, getAssetSummaryData, getCreditChart, getProjectedSpend } from "../action/costimizedashboardAction";
import { spendTrandChartData, spendTrandChartMonth } from '../slice/costimizeSlice';

import React, { useCallback, Fragment, useEffect, useState, memo  } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import QuickGlanceSavings from './QuickGlanceSavings';
import ZoomIn from '../properties/Zoomin/ZoomIn';
import Trendchart from './PopupChart/Trendchart';
import LineChart from './trendChartv2';

import { HiOutlineArrowsExpand } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";

import Dropdown from 'react-bootstrap/Dropdown';
import TaggingDetails from './PopupDetails/TaggingDetails';
// import CreditChart from './CreditChart';
import Creditchart from './PopupChart/Creditchart';
import Spinner from 'react-bootstrap/Spinner';

//dummy records
import { dummyTagginCompliance, dummySummaryDashboard, dummyCredits } from '../dummy_records/DummyRecords';
import PlatToolTip from '../properties/Tooltip/PlatToolTip';
import { Tooltip } from 'antd';
import UnderResourcesInfo from './PopupDetails/UnderResourcesInfo';
import BudgetComplianceInfo from './PopupDetails/BudgetComplianceInfo';
import DashboardSidebar from './DashboardSidebar';

const QuickGlance = () => {

    const { companyName } = useSelector((state) => state.user);
    const [currrentspend, setCurrrentSpend] = useState(0);
    const [projectedspend, setProjectedSpend] = useState(0);
    const [currrentspenddiff, setCurrrentSpendDiff] = useState(0);
    const [projectedspenddiff, setProjectedSpendDiff] = useState({
        diff: 0,
        status_value: "+"
    });
    const [untaggedresources, setUntaggedResources] = useState({
        partially_tagged : 0,
        untagged: 0,
        percentage: 0,
        list:[]
    });

    const [budgetdetails, setBudgetDetails] = useState({
        overall_budget : 120000,
        month_budget : 2352
    });

    const [datestring, setDataString] = useState('');
    const [zoominstatus, setZoomInStatus] = useState(false);
    const [chartzoominstatus, setChartZoomInStatus] = useState(false);
    const [creditchartzoominstatus, setCreditChartZoomInStatus] = useState(false);
    const [taggingstatus, setTaggingStatus] = useState(false);
    const [underresources, setUnderResourcesStatus] = useState(false);
    const [budgetcompliance, setBudgetComplianceStatus] = useState(false);


    const [zoominpopupcontent, setZoomInPopupContent] = useState('');

    const [creditchart, setCreditChart] = useState({
        chartdate:[],
        chartvalue:[],
        monthvalue: 0
    });

    const [trandchartdata, setTrandChartData] = useState([]);
    const [trandchartmonth, setTrandChartMonth] = useState([]);
    const [assetsummaryvm, setAssetSummaryVm] = useState({
        count:0,
        core:0,
        ram:0,
        storage:0
    });
    const [assetsummarydb, setAssetSummaryDb] = useState({
        count:0,
        core:0,
        ram:0,
        storage:0
    });
    const [assetsummaryothers, setAssetSummaryOthers] = useState({
        count:0,
        core:0,
        ram:0,
        storage:0
    });
    const [preloader, setPreloader] = useState(true);
    

    const { applicationList, selectedTopdate, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication,  selectedservices, selectedos, selectedinfra,selecteddb,dummydatastatus  } = useSelector((state) => state.constimize);

    


    const dispatch = useDispatch();
    const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthNames = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
    ];
    const current = new Date(selectedTopdate);
    const [quickdate, setQuickDate] = useState(`${current.getDate()}`);
    const quickmonth = `${monthNamesShort[current.getMonth()]}`;
    const [shortmonth, setShortMonth] = useState();
    const quickfullmonth = `${monthNames[current.getMonth()]}`;
    const quickyear = `${current.getFullYear()}`;
    const currentdate = new Date();
    const currentdatemonth = `${monthNamesShort[currentdate.getMonth()]}`;
    const currentdateday = `${currentdate.getDate()}`;

    // const date = dateOrdinal(14)
    // console.log(dateOrdinal(14));
    function dateOrdinal(dom) {
        if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
        else if (dom == 22 || dom == 2) return dom + "nd";
        else if (dom == 23 || dom == 3) return dom + "rd";
        else return dom + "th";
    };

    
    useEffect(() => {
        //summary dashboard
        setPreloader(true);

        

        var temp_chartmonth = [];
        var chartlength = 0;
        var chartcurrentdate = new Date();
        if(selectedTopdate.split(",").length == 3){
            setDataString("3 Months");
            const lastDayOfMonth = new Date();
            setShortMonth(`${monthNamesShort[lastDayOfMonth.getMonth()]}`)
            setQuickDate(dateOrdinal(lastDayOfMonth.getDate()));
            chartlength = 3;
        }else if(selectedTopdate.split(",").length == 6){
            setDataString("6 Months");
            const lastDayOfMonth = new Date();
            setShortMonth(`${monthNamesShort[lastDayOfMonth.getMonth()]}`)
            setQuickDate(dateOrdinal(lastDayOfMonth.getDate()));
            chartlength = 6;
        }else if(selectedTopdate.split(",").length == 12){
            setDataString("One Year");
            const lastDayOfMonth = new Date();
            setShortMonth(`${monthNamesShort[lastDayOfMonth.getMonth()]}`)
            setQuickDate(dateOrdinal(lastDayOfMonth.getDate()));
            chartlength = 12;
        }else if(selectedTopdate.split(",").length == 7){
            setDataString("7 Days");
            const lastDayOfMonth = new Date();
            setShortMonth(`${monthNamesShort[lastDayOfMonth.getMonth()]}`)
            setQuickDate(dateOrdinal(lastDayOfMonth.getDate()));
            chartlength = 6;
        }else{
            setDataString(quickmonth +" "+ quickyear)
            if(currentdatemonth === quickmonth){
                setQuickDate(dateOrdinal(currentdateday));
            }else{
                const lastDayOfMonth = new Date(current.getFullYear(), current.getMonth()+1, 0);
                const lastdayofdate = `${lastDayOfMonth.getDate()}`;
                setQuickDate(dateOrdinal(lastdayofdate));
            }
            chartlength = 6;
            chartcurrentdate = new Date(selectedTopdate);
        }
      
        
        // setDataString
        var apivalue = {
            environment : selectedEnvironment.toString(),
            account: selectedAccount.toString(),
            cloud: selectedCloud.toString(),
            application: selectedApplication.toString(),
            services: selectedservices.toString(),
            os: selectedos.toString(),
            infra: selectedinfra.toString(),
            db: selecteddb.toString()
        }


        
        
        //chart
        var temp_chartdata = [];
        for (let index = 0; index < chartlength; index++) {
            const month_2_current = new Date(chartcurrentdate.getFullYear(),chartcurrentdate.getMonth()-index,1);
            const selectedTopdate_new = `${month_2_current.getFullYear()}-${month_2_current.getMonth()+1}-01`;
            temp_chartmonth.push(selectedTopdate_new);   
        }


        var selectedTopdate_new = temp_chartmonth.toString();



       

        if(dummydatastatus){
            const dummysummary = dummySummaryDashboard();
            const chartdatelist = [];
            const chartvaluelist = [];
            setCurrrentSpend(0);
            setProjectedSpend(0);
            setCurrrentSpendDiff(0);
            setProjectedSpendDiff(0);
            dummysummary.newfunctionquery3.map((data_value) => {
                const month_2_current = new Date(data_value.reportmonth);
                const chartmonth = `${monthNamesShort[month_2_current.getMonth()]}`;
                chartdatelist.push(chartmonth);
                chartvaluelist.push(Math.round(data_value.spend));
                //box
                // console.log(data_value.reportmonth);
                // console.log(new Date(data_value.reportmonth).getMonth());
                // console.log(new Date(selectedTopdate).getMonth());

                if(new Date(data_value.reportmonth).getMonth() === new Date(selectedTopdate).getMonth() && selectedTopdate.split(",").length === 1){
                    const tempcurrentspend =  Number(data_value.spend);
                    setCurrrentSpend(tempcurrentspend.toLocaleString(undefined, {maximumFractionDigits:2}));
                    const tempprojectspend = Number(data_value.projected_spend);
                    setProjectedSpend(tempprojectspend.toLocaleString(undefined, {maximumFractionDigits:2}));
                    const tempcurrentspenddiff = Number(data_value.actualspend_previous_month_dif); 
                    setCurrrentSpendDiff(tempcurrentspenddiff.toLocaleString(undefined, {maximumFractionDigits:2}));
                    const tempprojectspenddiff = Number(data_value.projectedspend_previous_month_diff);
                    setProjectedSpendDiff(tempprojectspenddiff.toLocaleString(undefined, {maximumFractionDigits:2}));
                }
            })  
            dispatch(spendTrandChartData(chartvaluelist));
            dispatch(spendTrandChartMonth(chartdatelist));
            //box
            if(selectedTopdate.split(",").length !== 1){
                const tempcurrentspend = dummysummary.newfunctionquery3.reduce((a,v) =>  a = +a + +v.spend , 0 );
                setCurrrentSpend(tempcurrentspend.toLocaleString(undefined, {maximumFractionDigits:2}));
                const tempprojectspend = dummysummary.newfunctionquery3.reduce((a,v) =>  a = +a + +v.projected_spend , 0 );
                setProjectedSpend(tempprojectspend.toLocaleString(undefined, {maximumFractionDigits:2}));
                const tempcurrentspenddiff = dummysummary.newfunctionquery3.reduce((a,v) =>  a = +a + +v.actualspend_previous_month_dif , 0 );
                setCurrrentSpendDiff(tempcurrentspenddiff.toLocaleString(undefined, {maximumFractionDigits:2}));
                const tempprojectspenddiff = dummysummary.newfunctionquery3.reduce((a,v) =>  a = +a + +v.projectedspend_previous_month_diff , 0 );
                setProjectedSpendDiff(tempprojectspenddiff.toLocaleString(undefined, {maximumFractionDigits:2}));
            }
        }else{
            dispatch(getAllSummaryDashboard({companyName, selectedTopdate_new, apivalue}))
            .unwrap()
            .then(({ data }) => {
                //chart
                const chartdatelist = [];
                const chartvaluelist = [];
                setCurrrentSpend(0);
                // setProjectedSpend(0);
                setCurrrentSpendDiff(0);
                // setProjectedSpendDiff(0);
                data.newfunctionquery3.map((data_value) => {
                    const month_2_current = new Date(data_value.reportmonth);
                    const chartmonth = `${monthNamesShort[month_2_current.getMonth()]}-${month_2_current.getFullYear().toString().substr(-2)}`;
                    chartdatelist.push(chartmonth);
                    chartvaluelist.push(Math.round(data_value.spend));
                    //box
                    if(new Date(data_value.reportmonth).getMonth() === new Date(selectedTopdate).getMonth() && selectedTopdate.split(",").length === 1){
                        const tempcurrentspend =  Number(data_value.spend);
                        setCurrrentSpend(tempcurrentspend.toLocaleString(undefined, {maximumFractionDigits:2}));
                        // const tempprojectspend = Number(data_value.projected_spend);
                        // setProjectedSpend(tempprojectspend.toLocaleString(undefined, {maximumFractionDigits:2}));
                        var tempcurrentspenddiff = Number(data_value.actualspend_previous_month_dif); 
                        tempcurrentspenddiff = tempcurrentspenddiff === 0 ? tempcurrentspenddiff : tempcurrentspenddiff.toLocaleString(undefined, {maximumFractionDigits:2});
                        setCurrrentSpendDiff(tempcurrentspenddiff);
                        // const tempprojectspenddiff = Number(data_value.projectedspend_previous_month_diff);
                        // setProjectedSpendDiff(tempprojectspenddiff.toLocaleString(undefined, {maximumFractionDigits:2}));
                    }
                })  
                dispatch(spendTrandChartData(chartvaluelist));
                dispatch(spendTrandChartMonth(chartdatelist));
                //box
                if(selectedTopdate.split(",").length !== 1){
                    const tempcurrentspend = data.newfunctionquery3.reduce((a,v) =>  a = +a + +v.spend , 0 );
                    setCurrrentSpend(tempcurrentspend.toLocaleString(undefined, {maximumFractionDigits:2}));
                    // const tempprojectspend = data.newfunctionquery3.reduce((a,v) =>  a = +a + +v.projected_spend , 0 );
                    // setProjectedSpend(tempprojectspend.toLocaleString(undefined, {maximumFractionDigits:2}));
                    var tempcurrentspenddiff = data.newfunctionquery3.reduce((a,v) =>  a = +a + +v.actualspend_previous_month_dif , 0 );
                    tempcurrentspenddiff = tempcurrentspenddiff === 0 ? tempcurrentspenddiff : tempcurrentspenddiff.toLocaleString(undefined, {maximumFractionDigits:2});
                    setCurrrentSpendDiff(tempcurrentspenddiff);
                    // const tempprojectspenddiff = data.newfunctionquery3.reduce((a,v) =>  a = +a + +v.projectedspend_previous_month_diff , 0 );
                    // setProjectedSpendDiff(tempprojectspenddiff.toLocaleString(undefined, {maximumFractionDigits:2}));
                }
            })
            .catch(err => {
                console.log(err.message);
                setCurrrentSpend(0);
                // setProjectedSpend(0);
                setCurrrentSpendDiff(0);
                // setProjectedSpendDiff(0);
            });


            // console.log(new Date());

            // const date_checking = `${new Date().getFullYear()}-${new Date().getMonth()+1}-01`;
            // console.log(date_checking);
            var projected_date = [
                `${new Date().getFullYear()}-${new Date().getMonth()+1}-01`,
                `${new Date().getFullYear()}-${new Date().getMonth()}-01`
            ];
            projected_date = projected_date.toString();
            
            dispatch(getProjectedSpend({companyName, projected_date, apivalue}))
            .unwrap()
            .then(({ data }) => {
                //current month
                const current_month_records = data.newfunctionquery8.filter((x)=>{
                    if(`${new Date().getFullYear()}-${new Date().getMonth()}` === `${new Date(x.reportmonth).getFullYear()}-${new Date(x.reportmonth).getMonth()}`){
                        return x;
                    } 
                });
                var tempprojectspend = current_month_records.reduce((a,v) =>  a = +a + +v.projected_spend , 0 );
                const new_tempprojectspend = tempprojectspend === 0 ? tempprojectspend : tempprojectspend.toLocaleString(undefined, {maximumFractionDigits:2});
                
                //last month
                const last_month_records = data.newfunctionquery8.filter((x)=>{
                    if(`${new Date().getFullYear()}-${new Date().getMonth()-1}` === `${new Date(x.reportmonth).getFullYear()}-${new Date(x.reportmonth).getMonth()}`){
                        return x;
                    } 
                });
                var tempprojectspend_last_month = last_month_records.reduce((a,v) =>  a = +a + +v.projected_spend , 0 );
                const new_tempprojectspend_last_month = tempprojectspend_last_month === 0 ? tempprojectspend_last_month : tempprojectspend_last_month.toLocaleString(undefined, {maximumFractionDigits:2});
                console.log(tempprojectspend_last_month);
                setProjectedSpend(0);
                
                setProjectedSpendDiff({
                    diff: 0,
                    status_value: "+"
                });
                
            
                var projectspendstatus;
                if(tempprojectspend > tempprojectspend_last_month){
                    projectspendstatus = "+";
                }else{
                    projectspendstatus = "-";
                }

                setProjectedSpend(new_tempprojectspend);

                setProjectedSpendDiff({
                    diff: (tempprojectspend * 100 / tempprojectspend_last_month).toLocaleString(undefined, {maximumFractionDigits:2}),
                    status_value: projectspendstatus
                });
                
            })
            .catch(err => {
                console.log(err.message);
                setProjectedSpend(0);
                setProjectedSpendDiff({
                    diff: 0,
                    status_value: "+"
                });
            });
        }
        if(dummydatastatus){
            const dummyrecords = dummyCredits();
            const chartdatelist = [];
            const chartvaluelist = [];
            var monthvalue = 0;
            dummyrecords.newfunctionquery4.map((data_value) => {
                if(new Date(data_value.reportmonth).getMonth() === new Date(selectedTopdate).getMonth()){
                    const spend = Math.abs(Number(data_value.spend));
                    monthvalue = spend.toLocaleString(undefined, {maximumFractionDigits:2});
                }
            });
            setCreditChart({
                chartdate: chartdatelist,
                chartvalue: chartvaluelist,
                monthvalue:monthvalue
            })
        }else{
            dispatch(getCreditChart({companyName, selectedTopdate_new, apivalue}))
            .unwrap()
            .then(({ data }) => {
                //chart
                const chartdatelist = [];
                const chartvaluelist = [];
                var monthvalue = 0;
                data.newfunctionquery4.map((data_value) => {
                    if(new Date(data_value.reportmonth).getMonth() === new Date(selectedTopdate).getMonth()){
                        const spend = Math.abs(Number(data_value.spend));
                        monthvalue = spend.toLocaleString(undefined, {maximumFractionDigits:2});
                    }
                });
                setCreditChart({
                    chartdate: chartdatelist,
                    chartvalue: chartvaluelist,
                    monthvalue:monthvalue
                })
            })
            .catch(err => {
                console.log(err.message);
            });
        }
        
        



        //UntaggedResources
        if(dummydatastatus){
            const taggingdummyrecords = dummyTagginCompliance();
            const total_tagged = taggingdummyrecords.newfunctionquery2?.reduce((a,v) =>  a = +a + +v.count_untagged_resource , 0 );

            const partially_tagged = taggingdummyrecords.newfunctionquery2?.filter((v, index) => v.tagging_details === 'partially_tagged' );
            const untagged = taggingdummyrecords.newfunctionquery2?.filter((v, index) => v.tagging_details === 'Untagged' );
            const total_partially_tagged = partially_tagged?.reduce((a,v) =>  a = +a + +v.count_untagged_resource , 0 );
            const total_untagged = untagged?.reduce((a,v) =>  a = +a + +v.count_untagged_resource , 0 );
            const percentage_value = (+total_partially_tagged + +total_untagged) * 100 / total_tagged;
           
            setUntaggedResources({
                partially_tagged : total_partially_tagged.toString(),
                untagged: total_untagged.toString(),
                percentage: Number.isNaN(percentage_value) ? 0 : percentage_value.toLocaleString(undefined, {maximumFractionDigits:2}),
                list:taggingdummyrecords.newfunctionquery2
            });

            setPreloader(false);
        }else{
            dispatch(getUntaggedResources({companyName, selectedTopdate, apivalue}))
            .unwrap()
            .then(({ data }) => {
                const total_tagged = data.newfunctionquery2?.reduce((a,v) =>  a = +a + +v.count_untagged_resource , 0 );

                const partially_tagged = data.newfunctionquery2?.filter((v, index) => v.tagging_details === 'partially_tagged' );
                const untagged = data.newfunctionquery2?.filter((v, index) => v.tagging_details === 'Untagged' );
                // const total_partially_tagged = partially_tagged?.reduce((a,v) =>  a = +a + +v.count_untagged_resource , 0 );
                const total_partially_tagged = partially_tagged?.reduce((a,v) =>  a = +a + +v.count_untagged_resource , 0 );
                const total_untagged = untagged?.reduce((a,v) =>  a = +a + +v.count_untagged_resource , 0 );
                const percentage_value = (+total_partially_tagged + +total_untagged) * 100 / total_tagged;
                // console.log(0 / 0)
                // console.log(
                //     {
                //         total_tagged: total_tagged,
                //         partially_tagged : total_partially_tagged,
                //         untagged: total_untagged,
                //         percentage: percentage_value
                //     }
                // )
                setUntaggedResources({
                    partially_tagged : total_partially_tagged.toString(),
                    untagged: total_untagged.toString(),
                    percentage: Number.isNaN(percentage_value) ? 0 : percentage_value.toLocaleString(undefined, {maximumFractionDigits:2}),
                    list:data.newfunctionquery2
                });
                setPreloader(false);
            })
            .catch(err => {
            console.log(err.message);
            setPreloader(false);
            });
        }
        

        
    },[selectedAccount, selectedApplication, selectedCloud, selectedservices, selectedEnvironment, selectedTopdate, companyName, selecteddb, selectedinfra, selectedos]);

    function nFormatter(num, digits) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      }


    const ExpandPopup = () => {
        console.log("on");
       return <ExpandPopup status="true" />;
    }
    
    const screen1 = useFullScreenHandle();
    const screen2 = useFullScreenHandle();
   

    const policy_col1 = <Box className='plat-box'>
        <Row>
            <Col lg="12">
                <p className='plat-quick-inline policy-managment'>
                Under Utilized Resources 
                </p>
            </Col>
            <div className='plat-box-body policy-managment'>
                <Typography className='poppins-font cardnumber plat-totle-value'
                    color="black"
                    gutterBottom
                >
                    <label className='poppins-font cardnumber'> 30% </label>
                </Typography>
                <p className='policy-bottom-line'>
                    Underutilized Assets - 30
                </p>
            </div>  
        </Row>
    </Box>;
    const credit_box = <Box className='plat-box'>
    <Row>
        <Col lg="12">
            {/* <p className='plat-quick-inline policy-managment quick-credits'>
                Credits <br></br>
                Applied for the month
            </p> */}
            <p className='plat-quick-inline saving-model'> Credits Applied</p>
        </Col>
        <div className='plat-box-body saving-model'>
            <Typography className='poppins-font cardnumber plat-totle-value'
                color="black"
                gutterBottom
            >
                {
                    creditchart.monthvalue === 0 ?
                    <label className='poppins-font cardtext'> Not Applied </label> :
                    <label className='poppins-font cardnumber'> $ {creditchart.monthvalue} </label>
                }
            </Typography>
        </div>  
    </Row>
</Box>;
    // const policy_col2 = <Box className='plat-box'>
    //     <Row>
    //         <Col lg="12">
    //             <p className='plat-quick-inline policy-managment'>Untagged Resources</p>
    //         </Col>
    //         <div className='plat-box-body policy-managment'>
    //             <Typography className='poppins-font cardnumber plat-totle-value'
    //                 color="black"
    //                 gutterBottom
    //             >
    //                 <label className='poppins-font cardnumber'> {untaggedresources} </label>
    //             </Typography>
    //         </div> 
    //     </Row>
    // </Box>;

    const policy_col2 = <Box className='plat-box'>
        <Row>
            <Col lg="12">
                <p className='plat-quick-inline policy-managment'>Tagging Compliance</p>
            </Col>
            <div className='plat-box-body policy-managment'>
                <Typography className='poppins-font cardnumber plat-totle-value'
                    color="black"
                    gutterBottom
                >
                    <label className='poppins-font cardnumber'> {untaggedresources.percentage}% </label>
                </Typography>
            </div>
            <div className='policy-bottom-line-body'>
                <p className='policy-bottom-line-left'>
                    Partially tagged - {
                        untaggedresources.partially_tagged.length > 4 ?
                        <>
                             <Tooltip placement="bottom" title={untaggedresources.partially_tagged}>
                                {untaggedresources.partially_tagged.substring(0, 4)}...
                            </Tooltip>
                        </> :
                        untaggedresources.partially_tagged
                    }
                </p>
                
                <p className='policy-bottom-line-right'>
                    Untagged - {
                        untaggedresources.untagged.length > 4 ?
                        <>
                            <Tooltip placement="bottom" title={untaggedresources.untagged}>
                                {untaggedresources.untagged.substring(0, 4)}...
                            </Tooltip>
                        </>
                         :
                        untaggedresources.untagged
                    }
                </p>
            </div>
        </Row>
    </Box>;

    const policy_col3 = <Box className='plat-box'>
        <Row>
            <Col lg="12">
                <p className='plat-quick-inline policy-managment'>Policy Compliance</p>
            </Col>
            <div className='plat-box-body policy-managment'>
                <Typography className='poppins-font cardnumber plat-totle-value'
                    color="black"
                    gutterBottom
                >
                    <label className='poppins-font cardnumber'> 70%  </label>
                </Typography>
                <p className='policy-bottom-line'>
                    Click for detailed compliance information 
                </p>
            </div>
            
        </Row>
    </Box>;

    const asset_col1 = <Box className='plat-box'>
            <Row>
                {/* <div className='plat-asset-body'>
                    <div className='plat-asset-month'>
                        
                        <p className='plat-quick-inline plat-quick-inline-sm-1'>{datestring}</p>
                    </div>
                    <div className='plat-asset-date'>
                        {
                            quickmonth !== 'undefined' ?
                            <p className='plat-quick-inline plat-quick-inline-sm-2'>As of {quickdate} {quickmonth}</p>
                            :
                            <p className='plat-quick-inline plat-quick-inline-sm-2'>As of {quickdate} {shortmonth}</p>
                        }
                        
                    </div>
                </div> */}

                        <Col lg="12">
                            <p className='plat-quick-inline saving-model'>Spend for the month</p>
                        </Col>

                      
                <div className='plat-box-body  saving-model'>
                    <Typography className='poppins-font cardnumber plat-totle-value'
                        color="black"
                        gutterBottom
                    >
                        <label className='poppins-font cardnumber'> ${currrentspend}</label>
                        &nbsp;&nbsp;
                        {
                            currrentspenddiff === 0 ? 
                            <>
                                <label className={"labelsmallest poppins-font text-gray-color"}>{currrentspenddiff}</label>
                            </>
                             :
                            <>
                                <MDBIcon className={"me-1 "+(currrentspenddiff > 0 ? "text-success" : "text-danger-label")}  fas icon={(currrentspenddiff > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} />
                                <label className={"labelsmallest poppins-font "+(currrentspenddiff > 0 ? "text-success" : "text-danger-label")}>{currrentspenddiff}</label>
                            </>
                            
                        }
                        
                    </Typography>
                </div>
                
            </Row>
        </Box>;
    const asset_col3 = <Box className='plat-box'>
            <Row>
            <Col lg="12">
                <p className='plat-quick-inline saving-model'>Spend forecast for the feb</p>
            </Col>
            <div className='plat-box-body saving-model'>
                <Typography className='poppins-font cardnumber plat-totle-value'
                    color="black"
                    gutterBottom
                >
                    <label className='poppins-font cardnumber'> ${projectedspend}</label>
                        &nbsp;&nbsp;
                    {
                        projectedspenddiff.diff === 0 ?
                        <label className={"labelsmallest poppins-font text-gray-color"}>{projectedspenddiff.diff}</label>
                        :
                        <>
                            <MDBIcon className={"me-1 "+(projectedspenddiff.status_value === "+" ? "text-danger-label" : "text-success")}  fas icon={(projectedspenddiff.status_value === "+" ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} />
                            <label className={"labelsmallest poppins-font "+(projectedspenddiff.status_value === "+" ? "text-danger-label" : "text-success")}>{projectedspenddiff.diff}%</label>
                        </>
                    }
                </Typography>
            </div>
            </Row>
        </Box>;
    const asset_col4 = <Box className='plat-box'>
                <div className='plat-table'>
                    <p className='quick-asset-title'>Asset Summary</p>
                    <Table bordered size="sm" className='plat-table-custom'>
                        <thead className='table-asset-thead'>
                            <tr>
                                <th className='plat-table-head-3'>Asset Type</th>
                                <th className='plat-table-head-3'>VM Count</th>
                                <th className='plat-table-head-3'>Core</th>
                                <th className='plat-table-head-3'>RAM(TB)</th>
                                <th className='plat-table-head-3'>Storage(TB)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='plat-table-head-2'>VM</td>
                                <td className='plat-table-body'>{assetsummaryvm.count}</td>
                                <td className='plat-table-body'>{assetsummaryvm.core}</td>
                                <td className='plat-table-body'>{assetsummaryvm.ram}</td>
                                <td className='plat-table-body'>{assetsummaryvm.storage}</td>
                            </tr>
                            <tr>
                                <td className='plat-table-head-2'>DBaaS</td>
                                <td className='plat-table-body'>{assetsummarydb.count}</td>
                                <td className='plat-table-body'>{assetsummarydb.core}</td>
                                <td className='plat-table-body'>{assetsummarydb.ram}</td>
                                <td className='plat-table-body'>{assetsummarydb.storage}</td>
                            </tr>
                            <tr>
                                <td className='plat-table-head-2'>Others</td>
                                <td className='plat-table-body'>{assetsummaryothers.count}</td>
                                <td className='plat-table-body'>{assetsummaryothers.core}</td>
                                <td className='plat-table-body'>{assetsummaryothers.ram}</td>
                                <td className='plat-table-body'>{assetsummaryothers.storage}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                
            </Box>;

    const sectionZoomin = (type) => {
        if(type === 'row1-col2'){
            setTaggingStatus(true);
        }  else if (type === 'row2-col2') {
            setChartZoomInStatus(true);
        } else if (type === 'row2-credit') {
            setCreditChartZoomInStatus(true);
        } else if (type === 'untiled_resources') {
            setUnderResourcesStatus(true);
        } else if (type === 'budget_compliance'){
            setBudgetComplianceStatus(true);
        }
    }

    return(
        <Fragment>
            <Trendchart zoominstatus={chartzoominstatus} setZoomInStatus={setChartZoomInStatus} />
            <Creditchart 
                zoominstatus={creditchartzoominstatus} 
                setZoomInStatus={setCreditChartZoomInStatus} 
                creditchart = {creditchart}
            />
            <TaggingDetails zoominstatus={taggingstatus} setZoomInStatus={setTaggingStatus} records={untaggedresources} />
            <UnderResourcesInfo 
                zoominstatus={underresources} 
                setZoomInStatus={setUnderResourcesStatus}
            />
            <BudgetComplianceInfo 
                zoominstatus={budgetcompliance} 
                setZoomInStatus={setBudgetComplianceStatus}
            />
            <ZoomIn zoominstatus={zoominstatus} setZoomInStatus={setZoomInStatus}>
                {zoominpopupcontent}
            </ZoomIn>
            <div className='plat-dashboard-body'>
                <div className='plat-dashboard-quickview' >
                    <QuickView />
                    {/* <DashboardSidebar /> */}
                </div>
                <div className='plat-dashboard-tabs' >
                    <Tapmenu 
                        type="quickglance"
                        osstatus = {true}
                        dbstatus = {true}
                    />
                    <div className='plat-full-asset-spend-cover'>
                    {
                            preloader ?
                            <Spinner animation="grow" className='plat-spinner-grow' />
                            :
                            <>
                        <div className='plat-full-cover'>  
                            <h1 className='top-Plat-quick-title'>Quick Glance</h1> 
                            <h1 className='Plat-quick-title'>Budget / Variance</h1>
                            <Row className='plat-quick-box-body'>
                                <Col lg="3" className='mt-3 plat-main-box'>
                                    <Box className='plat-box'>
                                        <Row>
                                            <Col lg="12">
                                                <p className='plat-quick-inline saving-model'>Budget for the period</p>
                                            </Col>
                                            <div className='plat-box-body saving-model'>
                                                <Typography className='poppins-font cardnumber plat-totle-value'
                                                    color="black"
                                                    gutterBottom
                                                >
                                                    {
                                                        budgetdetails.overall_budget === 0 ?
                                                        <label className='poppins-font cardtext'> No Budget</label>
                                                        :
                                                        <>
                                                            <label className='poppins-font cardnumber'> ${budgetdetails.overall_budget.toLocaleString(undefined, {maximumFractionDigits:2})}</label>&nbsp;
                                                            <MDBIcon className={"me-1 text-danger-label"}  fas icon="caret-up"  style={{ fontSize: '12px' }} />

                                                            <label className={"labelsmallest poppins-font text-danger-label"}>60%</label>
                                                            {/* {
                                                                currrentspenddiff === 0 ? 
                                                                <>
                                                                    <label className={"labelsmallest poppins-font text-gray-color"}>{currrentspenddiff}</label>
                                                                </>
                                                                :
                                                                <>
                                                                    <MDBIcon className={"me-1 "+(currrentspenddiff > 0 ? "text-success" : "text-danger-label")}  fas icon={(currrentspenddiff > 0 ? "caret-up" : "caret-down")} style={{ fontSize: '12px' }} />
                                                                    <label className={"labelsmallest poppins-font "+(currrentspenddiff > 0 ? "text-success" : "text-danger-label")}>{currrentspenddiff}</label>
                                                                </>
                                                            } */}
                                                        </>
                                                        
                                                    }
                                                </Typography>
                                            </div>
                                            
                                        </Row>
                                    </Box>
                                </Col>
                                
                                <Col lg="3" className='mt-3 plat-main-box'>
                                    {asset_col1}
                                </Col>
                                
                                <Col lg="3" className='mt-3 plat-main-box'>
                                    {asset_col3}
                                </Col>
                                {/* credit */}
                                <Col lg="3" className='mt-3 plat-main-box'>
                                    <Box className='plat-box'>
                                        {credit_box}
                                    </Box>
                                </Col>
                                {/* <Col lg="3" className='mt-3 plat-main-box'>
                                    <Box className='plat-box'>
                                        <LineChart />
                                    </Box>
                                    <div className='plat-box-topicon-option'>
                                        <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                            <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='plat-box-menu-list'>
                                            <Dropdown.ItemText onClick={() => sectionZoomin('row2-col2')} className="plat-dropdown-item-text"><span className='plat-box-item-title list-expand-left'>
                                                Expand
                                                </span>
                                                <span className='plat-box-item-title list-expand-right'><HiOutlineArrowsExpand /></span> </Dropdown.ItemText>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col> */}
                                
                                
                                
                            </Row>
                        </div>
                        <QuickGlanceSavings />

                        <div className='plat-full-cover'>   
                            
                            <h1 className='Plat-quick-title'>Policy and Compliance</h1>
                            <Row className='plat-quick-box-body'>
                            
                                <Col lg="3" className='mt-3 plat-main-box'>
                                    {policy_col1}
                                    <div className='plat-box-topicon-option'>
                                        <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                            <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='plat-box-menu-list more-details'>
                                                <Dropdown.ItemText onClick={() => sectionZoomin('untiled_resources')} className="plat-dropdown-item-text">
                                                    <span className='plat-box-item-title list-expand-left'>
                                                        More Info
                                                    </span>
                                                    <span className='plat-box-item-title list-expand-right'>
                                                        <CgDetailsMore />
                                                    </span>
                                                </Dropdown.ItemText>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </Col> 
                                
                                <Col lg="3" className='mt-3 plat-main-box'>
                                    {policy_col2}
                                    <div className='plat-box-topicon-option'>
                                        <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                            <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='plat-box-menu-list more-details'>
                                                <Dropdown.ItemText onClick={() => sectionZoomin('row1-col2')} className="plat-dropdown-item-text">
                                                    <span className='plat-box-item-title list-expand-left'>
                                                        More Details
                                                    </span>
                                                    <span className='plat-box-item-title list-expand-right'>
                                                        <CgDetailsMore />
                                                    </span>
                                                </Dropdown.ItemText>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col>
                                {/* <Col lg="3" className='mt-3 plat-main-box'>
                                    {policy_col3}
                                </Col> */}
                                <Col lg="3" className='mt-3 plat-main-box'>
                                    <Box className='plat-box'>
                                        <Row>
                                            <Col lg="12">
                                                <p className='plat-quick-inline policy-managment'>Budget Compliance</p>
                                            </Col>
                                            <div className='plat-box-body policy-managment'>
                                                <Typography className='poppins-font cardnumber plat-totle-value'
                                                    color="black"
                                                    gutterBottom
                                                >
                                                    <label className='poppins-font cardnumber'> 70%  </label>
                                                </Typography>
                                                <p className='policy-bottom-line'>
                                                    Click for detailed compliance information 
                                                </p>
                                            </div>
                                            
                                        </Row>
                                    </Box>
                                    <div className='plat-box-topicon-option'>
                                        <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                            <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='plat-box-menu-list more-details'>
                                                <Dropdown.ItemText onClick={() => sectionZoomin('budget_compliance')} className="plat-dropdown-item-text">
                                                    <span className='plat-box-item-title list-expand-left'>
                                                        More Info
                                                    </span>
                                                    <span className='plat-box-item-title list-expand-right'>
                                                        <CgDetailsMore />
                                                    </span>
                                                </Dropdown.ItemText>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col>

                                <Col lg="3" className='mt-3 plat-main-box'>
                                    <Box className='plat-box'>
                                        <Row>
                                            <Col lg="12">
                                                <p className='plat-quick-inline policy-managment'>Hourly Compliance</p>
                                            </Col>
                                            <div className='plat-box-body policy-managment'>
                                                <Typography className='poppins-font cardnumber plat-totle-value'
                                                    color="black"
                                                    gutterBottom
                                                >
                                                    <label className='poppins-font cardnumber'> 70%  </label>
                                                </Typography>
                                                <p className='policy-bottom-line'>
                                                    Click for detailed compliance information 
                                                </p>
                                            </div>
                                            
                                        </Row>
                                    </Box>
                                    <div className='plat-box-topicon-option'>
                                        <Dropdown className='plat-costimize-dropdown plat-box-costimize-dropdown'>
                                            <Dropdown.Toggle className='plat-three-dort plat-tap-menu plat-box-three-dort' id="dropdown-button-dark-example1" variant="secondary">
                                                <iconify-icon icon="ph:dots-three-bold" class='plat-expandalt-icon-view'></iconify-icon>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='plat-box-menu-list more-details'>
                                                <Dropdown.ItemText onClick={() => sectionZoomin('budget_compliance')} className="plat-dropdown-item-text">
                                                    <span className='plat-box-item-title list-expand-left'>
                                                        More Info
                                                    </span>
                                                    <span className='plat-box-item-title list-expand-right'>
                                                        <CgDetailsMore />
                                                    </span>
                                                </Dropdown.ItemText>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                        {/* <div className='plat-full-cover'>   
                            <h1 className='Plat-quick-title'>Assets/Spend</h1>
                            <Row className='plat-quick-box-body'>
                                
                                <Col lg="3" className='mt-3 plat-main-box'>
                                    {asset_col4}
                                    <div className='plat-box-topicon'>
                                        <FaExpandAlt   className='plat-expandalt-icon' onClick={() => sectionZoomin('row2-col4')}/>
                                    </div>
                                </Col>
                                
                            </Row>
                        </div> */}
                        
                    

                    
                    </>
                        } 
                    </div>
                   
                    
                </div>
            </div>
        </Fragment>
    );
}
export default memo(QuickGlance);
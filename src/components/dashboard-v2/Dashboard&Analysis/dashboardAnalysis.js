import React from "react";
import DashboardBarChartCurrentMonth from "./dashboardBarChartCurrentMonth";
import DashboardBarChartPreviousMonth from "./dashboardBarChartPreviousMonth";
import DashboardLineChart from "./dashboardLineChart";
import { Row, Col } from "react-bootstrap";
import "./dashboardAnalysis.css";
import QuickView from "../QuickView";
import Tapmenu from "../Tapmenu";
import { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSummaryDashboard, getCreditChart } from "../../action/costimizedashboardAction";
import { spendTrandChartData, spendTrandChartMonth } from '../../slice/costimizeSlice';
import CreditChart from "../CreditChart";

import { dummySummaryDashboard, dummyCredits } from '../../dummy_records/DummyRecords';


export default function DashboardTab() {
    const { selectedTopdate, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication,  selectedservices, selectedos, selectedinfra,selecteddb, dummydatastatus  } = useSelector((state) => state.constimize);
    const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const { companyName } = useSelector((state) => state.user);
    const [creditchart, setCreditChart] = useState({
        chartdate:[],
        chartvalue:[]
    });

    const dispatch = useDispatch();

    useEffect(() => {
        //summary dashboard
       
        var temp_chartmonth = [];
        var temp_chartdata = [];
        var chartlength = 0;
        // console.log(new Date(selectedTopdate));
        var currentdate = new Date();
        if(selectedTopdate.split(",").length == 3){
            chartlength = 3;
        }else if(selectedTopdate.split(",").length == 6){
            chartlength = 6;
        }else if(selectedTopdate.split(",").length == 12){
            chartlength = 12;
        }else{
            chartlength = 6;
            currentdate = new Date(selectedTopdate);
        }

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
        dispatch(spendTrandChartData([]));
        dispatch(spendTrandChartMonth([]));

        var temp_chartdata = [];
        for (let index = 0; index < chartlength; index++) {
            const month_2_current = new Date(currentdate.getFullYear(),currentdate.getMonth()-index,1);
            const selectedTopdate_new = `${month_2_current.getFullYear()}-${month_2_current.getMonth()+1}-01`;
            temp_chartmonth.push(selectedTopdate_new);   
        }
        var selectedTopdate_new = temp_chartmonth.toString();
        if(dummydatastatus){
            const dummyrecords = dummySummaryDashboard();
            //chart
            const chartdatelist = [];
            const chartvaluelist = [];
            dummyrecords.newfunctionquery3.map((data_value) => {
                const month_2_current = new Date(data_value.reportmonth);
                const chartmonth = `${monthNamesShort[month_2_current.getMonth()]}`;
                chartdatelist.push(chartmonth);
                chartvaluelist.push(Math.round(data_value.spend));
            })  
            dispatch(spendTrandChartData(chartvaluelist));
            dispatch(spendTrandChartMonth(chartdatelist));
        }else{
            dispatch(getAllSummaryDashboard({companyName, selectedTopdate_new, apivalue}))
            .unwrap()
            .then(({ data }) => {
                //chart
                const chartdatelist = [];
                const chartvaluelist = [];
                data.newfunctionquery3.map((data_value) => {
                    const month_2_current = new Date(data_value.reportmonth);
                    const chartmonth = `${monthNamesShort[month_2_current.getMonth()]}`;
                    chartdatelist.push(chartmonth);
                    chartvaluelist.push(Math.round(data_value.spend));
                })  
                dispatch(spendTrandChartData(chartvaluelist));
                dispatch(spendTrandChartMonth(chartdatelist));
            })
            .catch(err => {
                console.log(err.message);
            });
        }
       

        if(dummydatastatus){
            const dummyrecords = dummyCredits();
            const chartdatelist = [];
            const chartvaluelist = [];
            dummyrecords.newfunctionquery4.map((data_value) => {
                const month_2_current = new Date(data_value.reportmonth);
                const chartmonth = `${monthNamesShort[month_2_current.getMonth()]}`;
                chartdatelist.push(chartmonth);
                chartvaluelist.push(Math.abs(Math.round(data_value.spend)));
            }) 
            setCreditChart({
                chartdate: chartdatelist,
                chartvalue: chartvaluelist
            })

        }else{
            dispatch(getCreditChart({companyName, selectedTopdate_new, apivalue}))
            .unwrap()
            .then(({ data }) => {
                //chart
                const chartdatelist = [];
                const chartvaluelist = [];
                data.newfunctionquery4.map((data_value) => {
                    const month_2_current = new Date(data_value.reportmonth);
                    const chartmonth = `${monthNamesShort[month_2_current.getMonth()]}`;
                    chartdatelist.push(chartmonth);
                    chartvaluelist.push(Math.abs(Math.round(data_value.spend)));
                }) 
                setCreditChart({
                    chartdate: chartdatelist,
                    chartvalue: chartvaluelist
                })
            })
            .catch(err => {
                console.log(err.message);
            });
        }
       

    },[selectedAccount, selectedApplication, selectedCloud, selectedservices, selectedEnvironment, selectedTopdate, companyName, selecteddb, selectedinfra, selectedos]);
    
    return (<>
                <div className="d-lg-flex d-xs-block plat-dashboard-body">
                <div className='plat-dashboard-quickview' >
                    <QuickView />
                </div>
                <div className='plat-dashboard-tabs' >
                    <Tapmenu 
                        type="dashboardanalysis"
                        osstatus = {true}
                        dbstatus = {true}
                    />

                    <div className='plat-main-title'>
                        <h1 className='top-Plat-quick-title'>Dashboard & Analysis</h1> 
                    </div>


                    <Col lg='10'  md="12" sm="12" xs="12" className="dashboard-analysis-body">
                        <Row>
                            <Col lg='4' >
                                <div className="dashboardLineChart analysis-border" >
                                    {/* <h6 className="text-center"> Total Spend Trend</h6> */}
                                    <DashboardLineChart />
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className=" dashboardBarChartPreviousMonth analysis-border" >
                                    {/* <h6 className="text-center"> Previous Chart </h6> */}
                                    <DashboardBarChartCurrentMonth />
                                </div>
                            </Col>
                            <Col lg='4'>
                                <div className="dashboardBarChartCurrentMonth analysis-border previouschart">
                                    {/* <h6 className="text-center"> Current Chart </h6> */}
                                    <DashboardBarChartPreviousMonth />
                                </div>
                            </Col> 
                            <Col lg='4'>
                                <div className="dashboardBarChartCurrentMonth analysis-border previouschart">
                                    {/* <h6 className="text-center"> Current Chart </h6> */}
                                    <CreditChart 
                                        creditchart = {creditchart}
                                    />
                                </div>
                            </Col> 
                        </Row>
                    </Col>
            </div>
        </div> 
    </>)
}
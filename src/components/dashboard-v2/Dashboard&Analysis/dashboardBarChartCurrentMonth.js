import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from 'react-redux';
import { chartMonthSpend } from "../../action/costimizedashboardAction";
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

import { dummyEnvironmentSpend } from '../../dummy_records/DummyRecords';

var colors = [
    '#ee7304',
    '#ffc000',
    '#0e5772',
    '#487b78',
    '#00b0f0',
    '#00b050'
  ]

function DashboardBarChartCurrentMonth({ data }) {
    const { companyName } = useSelector((state) => state.user);
    const { selectedTopdate, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedservices, selectedos, selectedinfra,selecteddb, environmentList, dummydatastatus } = useSelector((state) => state.constimize);
    const dispatch = useDispatch();
    const [chartvalue, setChartValue] = useState([]);
    const [chartcate, setChartCate] = useState([]);
    const [labelstatus, setLabelStatus] = useState(false);
    useEffect(() => {
      var makeDate = selectedTopdate;
      if(selectedTopdate.split(",").length > 1){
          var currentdate = new Date();
          makeDate = `${currentdate.getFullYear()}-${currentdate.getMonth()+1}-01`;
      } 
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
        const dummyrecords = dummyEnvironmentSpend();
        var valuelist = [];
        var catelist = [];
        environmentList.map((envdata, index) => {
            const listenvironmentfillter = dummyrecords.newfunctionquery.filter(datas => {
                return datas.environments?.toLowerCase() === envdata?.toLowerCase();
            });
            const chartvalue = Math.round(listenvironmentfillter.reduce((a,v) =>  a = +a + +v.spend , 0 ));
            // valuelist.push([envdata?.toLowerCase(), chartvalue, 'environment', chartvalue, selectedTopdate]);
            if(chartvalue){
              valuelist.push(chartvalue);
              catelist.push(envdata?.toLowerCase())
            }
        });
        
        if((Math.max(...valuelist) - Math.min(...valuelist)) > 1000){
          setLabelStatus(true);
        }else{
          setLabelStatus(false);
        }
        setChartValue(valuelist);
        setChartCate(catelist);
      }else{
        dispatch(chartMonthSpend({companyName, makeDate, apivalue}))
        .unwrap()
        .then(({ data }) => {
            // var valuelist = [['demo', '0', 'demo', '0', selectedTopdate]];
            var valuelist = [];
            var catelist = [];
            environmentList.map((envdata, index) => {
                const listenvironmentfillter = data.newfunctionquery.filter(datas => {
                    return datas.environments?.toLowerCase() === envdata?.toLowerCase();
                });
                const chartvalue = Math.round(listenvironmentfillter.reduce((a,v) =>  a = +a + +v.spend , 0 ));
                // valuelist.push([envdata?.toLowerCase(), chartvalue, 'environment', chartvalue, selectedTopdate]);
                if(chartvalue){
                  valuelist.push(chartvalue);
                  catelist.push(envdata?.toLowerCase())
                }
            });
            
            if((Math.max(...valuelist) - Math.min(...valuelist)) > 1000){
              setLabelStatus(true);
            }else{
              setLabelStatus(false);
            }
            setChartValue(valuelist);
            setChartCate(catelist);
            // var valuelist = [['demo', '0', 'demo', '0', selectedTopdate]];
            // data.monthwiseenvironmentspendanalysis.map((datas, index) => {
            //     valuelist.push([datas.environment, datas.spend, 'environment', datas.spend, selectedTopdate]);
            // })
            // setChartValue(valuelist);
        })
        .catch(err => {
        console.log(err.message);
        });
      }
      
  },[selectedAccount, selectedApplication, selectedCloud, selectedservices, selectedEnvironment, selectedTopdate, companyName, selecteddb, selectedinfra, selectedos])

    const options = {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          },
          toolbar: {
            show: false,
          },
          zoom: {
              enabled: true,
          }
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (num, opts) {
            if(labelstatus){
              if(num > 100){
                return '';
              }else{
                return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
              }
            }
          },
          style: {
            fontSize: '9px',
            colors: ['#fff']
          },
          background: {
            enabled: true,
            foreColor: '#000',
            borderWidth: 0,
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45
            }
          }
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: chartcate,
          labels: {
            rotate: 0,
            style: {
              colors: "#000",
              fontSize: '12px'
            }
          },
        },
        yaxis: {
          tickAmount: 6,
          labels: {
              formatter: (num) => { 
                const spend_value = Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
                return spend_value;
               },
          },
        },
        title: {
            text: 'Current Month - Spend',
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 5,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  'bold',
              color:  '#595959'
            },
        },
       
      };
      const series =  [{
        name: 'spend',
        data: chartvalue
      }];
   
    return (

                <ReactApexChart options={options} series={series} type="bar" height={200} />
    );
}

export default DashboardBarChartCurrentMonth;
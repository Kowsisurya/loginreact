import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from 'react-redux';
import { chartMonthApplicationSpend, spendChartMonthApplicationSpend } from "../../action/costimizedashboardAction";
import { useState, useEffect } from 'react';
import React from "react";
import ReactApexChart from "react-apexcharts";
import { titleCase, getRandomColor } from "../../custom_hook/CustomHook";

export default function SavingPioChart() {

  const { companyName } = useSelector((state) => state.user);
  const { selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate, apllicationlist, selectedservices, selectedos, selectedinfra, selecteddb, applicationList  } = useSelector((state) => state.constimize);
  const dispatch = useDispatch();
  const [chartvalue, setChartValue] = useState([0,0,0]);
  const [chartcate, setChartCate] = useState([]);
  const [colorlist, setColorList] = useState([]);
  useEffect(() => {
  var makeDate = selectedTopdate;
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
  
  dispatch(spendChartMonthApplicationSpend({companyName, makeDate, apivalue}))
  .unwrap()
  .then(({ data }) => {
    var listvalue = [];
    var catelist = [];
    var listvalue = [];
    applicationList.map((appdata, index) => {
      const listapplicationlistfillter = data.newfunctionquery?.filter(datas => {
          return datas.applications?.toLowerCase() === appdata?.toLowerCase();
      });
      const chartvalue = Math.round(listapplicationlistfillter?.reduce((a,v) =>  a = +a + +v.spend , 0 ));
      // if(chartvalue !== 0 ){
        // listvalue.push({value: chartvalue, name: appdata});
        // catelist.push(titleCase(appdata));
        // listvalue.push(chartvalue);
        if(index < 5){
          catelist.push(titleCase(appdata));
          listvalue.push(chartvalue);
        }
        // else{
        //   catelist.pop();
        //   catelist.push("Others");
        //   //month 1
        //   let lastelement = listvalue[listvalue.length - 1];
        //   listvalue.pop();
        //   listvalue.push(+lastelement + +chartvalue);
        // }
      // }
    });
    // console.log(catelist);
    const colors = [];
    listvalue.map(() => {
      colors.push(getRandomColor())
    })
    setColorList(colors);
    setChartValue(listvalue);
    setChartCate(catelist);
  })
  .catch(err => {
  console.log(err.message);
  });


    // dispatch(chartMonthApplicationSpend({companyName, makeDate, apivalue}))
    // .unwrap()
    // .then(({ data }) => {
    //   console.log("data");
    //   console.log(data);
    //     var listvalue = [];
    //     data.monthwiseapplicationspendanalysis.map((datas, index) => {
    //       listvalue.push({value: datas.spend, name: datas.application});
    //     })
    //     setChartValue(listvalue);
    // })
    // .catch(err => {
    // console.log(err.message);
    // });
  },[companyName, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate]);


  // function getRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }
   const options = {
    chart: {
      type: 'donut',
      background: '#fff',
      // height: "300px"
    },
    title: {
        text: 'Top Current Month Spend',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          color:  '#595959'
        },
    },
    legend: {
      show: true,
      offsetY: 0,
      position: 'bottom'
    },
    colors: colorlist,
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%"
      }
    },
    labels: chartcate,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  const series = chartvalue;
  return (
    <ReactApexChart options={options} series={series} type="donut" height={300} />
  )
}
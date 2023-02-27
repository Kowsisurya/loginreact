import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from 'react-redux';
import { chartMonthApplicationSpend, spendChartMonthApplicationSpend } from "../../action/costimizedashboardAction";
import { useState, useEffect } from 'react';
import React from "react";
import ReactApexChart from "react-apexcharts";
import { titleCase, getRandomColor } from "../../custom_hook/CustomHook";
import { dummyMonth1records } from '../../dummy_records/DummyRecords';

export default function SavingPioChart() {

  const { companyName } = useSelector((state) => state.user);
  const { selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate, apllicationlist, selectedservices, selectedos, selectedinfra, selecteddb, applicationList, dummydatastatus  } = useSelector((state) => state.constimize);
  const dispatch = useDispatch();
  const [chartvalue, setChartValue] = useState([0,0,0]);
  const [chartcate, setChartCate] = useState([]);
  const [colorlist, setColorList] = useState([]);
  useEffect(() => {
    var makeDate = selectedTopdate;
    if(dummydatastatus){
      const dummyrecords = dummyMonth1records();
      var listvalue = [];
        var catelist = [];
        var listvalue = [];
        var mainchartvalue = [];
        applicationList.map((appdata, index) => {
          const listapplicationlistfillter = dummyrecords.newfunctionquery?.filter(datas => {
              return datas.applications?.toLowerCase() === appdata?.toLowerCase();
          });
          const chartvalue = Math.round(listapplicationlistfillter?.reduce((a,v) =>  a = +a + +v.spend , 0 ));
          mainchartvalue.push({
            cate: titleCase(appdata),
            value: chartvalue
          });
        });
        
        var getchartvaluelist = [...mainchartvalue].sort((a, b) => (a.value > b.value ? -1 : 1));
        getchartvaluelist.map((data, index) => {
            if(index < 5){
              catelist.push(titleCase(data.cate));
              listvalue.push(data.value);
            }
        })

        const colors = [];
        listvalue.map(() => {
          colors.push(getRandomColor())
        })
        setColorList(colors);
        setChartValue(listvalue);
        setChartCate(catelist);
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
      
      dispatch(spendChartMonthApplicationSpend({companyName, makeDate, apivalue}))
      .unwrap()
      .then(({ data }) => {
        var listvalue = [];
        var catelist = [];
        var listvalue = [];
        var mainchartvalue = [];
        applicationList.map((appdata, index) => {
          const listapplicationlistfillter = data.newfunctionquery?.filter(datas => {
              return datas.applications?.toLowerCase() === appdata?.toLowerCase();
          });
          const chartvalue = Math.round(listapplicationlistfillter?.reduce((a,v) =>  a = +a + +v.spend , 0 ));
          mainchartvalue.push({
            cate: titleCase(appdata),
            value: chartvalue
          });
        });
        
        var getchartvaluelist = [...mainchartvalue].sort((a, b) => (a.value > b.value ? -1 : 1));
        getchartvaluelist.map((data, index) => {
            if(index < 5){
              catelist.push(titleCase(data.cate));
              listvalue.push(data.value);
            }
        })

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
    } 
    

  },[companyName, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate]);


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
      enabled: true,
      formatter: function (val) {
        return Math.round(val) + "%"
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
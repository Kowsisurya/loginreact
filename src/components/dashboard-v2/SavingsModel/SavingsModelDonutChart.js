import React from "react";
import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from 'react-redux';
import { chartMonthApplicationSpend } from "../../action/costimizedashboardAction";
import { useState, useEffect } from 'react';


function SavingsModelDonutChart() {

  const { companyName } = useSelector((state) => state.user);
  const { selectedTopdate  } = useSelector((state) => state.constimize);
  const dispatch = useDispatch();
  const [chartvalue, setChartValue] = useState();

  useEffect(() => {
    var makeDate = selectedTopdate;
    dispatch(chartMonthApplicationSpend({companyName, makeDate}))
    .unwrap()
    .then(({ data }) => {
        var listvalue = [];
        data.monthwiseapplicationspendanalysis.map((datas, index) => {
          listvalue.push({value: datas.spend, name: datas.application});
        })
        setChartValue(listvalue);
    })
    .catch(err => {
    console.log(err.message);
    });
  },[selectedTopdate]);
// { value: 5315, name: 'Security' },
// console.log(chartvalue);
  const options = {
    title: {
      text: 'Current Month Spend',
      left: 'center',
      textStyle: {
        color: 'black',
        fontSize: '12px',
        position: 'top',
        textAlign: 'center',
        fontFamily: 'Poppins',
        left: "center"
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      fontSize:30,
      orient: 'horizontal',
      //  bottom: '0px',
      top:"5%",
      // label: {
      //   position: 'top',
      //   color: "black",
      //   fontSize: "2px",
      // },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '60%'],
        data: chartvalue,
        emphasis: {
          itemStyle: {
            shadowBlur: 9,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          }
        }
      }
    ]
  };

  return (

    <ReactECharts option={options}
      style={{ height: '300px', width: 'auto', backgroundColor: 'white', boxshadow: ' 5px 10px', border: '1px solid lightgray', padding: '1px' }} />
  );
}

export default SavingsModelDonutChart;
import React from "react";
import ReactECharts from 'echarts-for-react';

function DonutChart() {
    const options = {
        title: {
          text: 'Spend',
          left: 'center',
      textStyle: {
        color: 'black',
        fontSize: '7px',
        position: 'top',
        textAlign:'center',
        fontFamily: 'Poppins',
        left: "center"
           
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          bottom: '4px',
          label: {
            // position: 'top',
           color: "black",
           fontSize: "7px",
          
            },
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius:['40%', '70%'],
            data: [
              { value: 1048, name: 'ERP' },
              { value: 735, name: 'CRM' },
              { value: 580, name: 'SRM' },
              { value: 484, name: 'Salesforce' }
           
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 9,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    
    return (
     
        <ReactECharts option={options} 
         style={{ height: '150px', width: '280px', backgroundColor: 'white',boxshadow:' 5px 10px',border: '1px solid lightgray', padding: '1px'}}/>
   
    );
}

export default DonutChart;
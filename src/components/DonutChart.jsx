import React from "react";
import ReactECharts from 'echarts-for-react';

function DonutChart() {
    const options = {
        title: {
          text: 'Current Month Spend by Account - AWS',
          //subtext: 'Fake Data',
          top: '2px'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          bottom: '4px'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius:['40%', '70%'],
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };;
    
    return (
        <ReactECharts option={options} />
    );
}

export default DonutChart;
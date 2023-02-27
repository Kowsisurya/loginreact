import React from "react";
import ReactECharts from 'echarts-for-react';

function BarChart({data}) {
    const options = data || {
        title: {
            text: 'Current Month Spend by Application Group - AWS',
            //subtext: 'Fake Data',
            top: '2px'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [
              120,
              {
                value: 200,
                itemStyle: {
                  color: '#a90000'
                }
              },
              150,
              80,
              70,
              110,
              130
            ],
            type: 'bar'
          }
        ]
      };
    
    return (
        <ReactECharts option={options} />
    );
}

export default BarChart;
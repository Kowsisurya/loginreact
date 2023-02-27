import ReactECharts from 'echarts-for-react';
import "../costimize/style.css";
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
var colors = [
    '#1b5f9d'
  ]

export default function CreditChart(props) {
    console.log(props);
    const [discrete, setDiscrete] = useState([]);
    useEffect(() => {
        const discrete_records = [];
        var previous_data = 0;
        props.creditchart.chartvalue.map((data, index) => {
            var color;
            if(index === 0){
                color = '#1F6D1E';
            }else{
                if(previous_data >= data){
                    color = '#1F6D1E';
                }else{
                    color = "#BE1E2D";
                }
            }
            previous_data = data;
            discrete_records.push(
                {
                    seriesIndex: 0,
                    dataPointIndex: index,
                    fillColor: color,
                    strokeColor: color,
                    size: 3
                  }
            );
        });
        setDiscrete(discrete_records);
    },[props.creditchart.chartvalue])

    const options = {
        chart: {
            type: 'line',
            height: 160,
            offsetY: 5,
            toolbar: {
                show: false,
            }
        },
        stroke: {
            show: true,
            curve: 'straight',
            lineCap: 'butt',
            colors: "#000",
            width: 1,
            dashArray: 0,      
        },
        markers: {
            size: [3,7],
            strokeColors: '#fff',
            strokeWidth: 0,
            strokeOpacity: 0,
            strokeDashArray: 0,
            fillOpacity: 0,
            discrete: discrete,
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
            size: undefined,
            sizeOffset: 3
            }
        },
        grid:{
            show: false
        },
        colors: colors,
        xaxis: {
          categories: props.creditchart.chartdate,
          axisBorder: {
                show: true,
                color: '#78909C',
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
            },
            labels: {
              offsetX: 0,
              offsetY: -6,
              style: {
                  fontSize: '7px',
                  fontWeight: 400,
              }
          },
        },
        yaxis: {
            axisBorder: {
                show: true,
                color: '#78909C',
                offsetX: 0,
                offsetY: 0
            },
            title: {
              text: "$",
              rotate: -180,
              offsetX: 7,
              offsetY: 0,
              style: {
                  color: undefined,
                  fontSize: '12px',
                  fontWeight: 500,
              },
          },
          labels: {
              style: {
                  fontSize: '8px',
                  fontWeight: 400,
              },
              formatter: (num) => { 
                return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
               },
          },
        },
        title: {
            text: 'Credit',
            align: 'center',
            margin: 0,
            offsetX: 0,
            offsetY: 16,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  '500',
              color:  '#263238'
            },
        }
      };
      const series =  [{
        name: "Credit",
        data: props.creditchart.chartvalue
      }];
  return(
    <>
      <ReactApexChart options={options} series={series} type="line" height={110} />
      <FaRegCalendarAlt className='quick-glance-spend-chart-cal' />
    </>
   
  )
}
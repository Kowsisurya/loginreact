import ReactECharts from 'echarts-for-react';
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { FaRegCalendarAlt } from "react-icons/fa";
var colors = [
    '#1cade4'
  ]

export default function DashboardLineChart(props) {
    const { spendtrandschartdata, spendtrandschartmonth } = useSelector((state) => state.constimize);

    
    const options = {
        chart: {
            id: 'fb',
            group: 'social',
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
            colors: "#1cade4",
            width: 3,
            dashArray: 0,      
        },
        markers: {
            size: [3,7],
            strokeColors: '#fff',
            strokeWidth: 0,
            strokeOpacity: 0,
            strokeDashArray: 0,
            fillOpacity: 0,
            discrete: [],
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
            show: true
        },
        colors: colors,
        xaxis: {
          categories: spendtrandschartmonth,
          tickPlacement: 'between',
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
                offsetY: 0,
                style: {
                    fontSize: '12px',
                    fontWeight: 500,
                }
            },
        },
        yaxis: {
          labels: {
              style: {
                  fontSize: '12px',
                  fontWeight: 500,
              },
              formatter: (num) => { 
                const spend_value = Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
                return '$'+spend_value;
               },
          },
        },
        title: {
            text: 'Total Spend Trend',
            align: 'center',
            margin: 0,
            offsetX: 0,
            offsetY: 5,
            floating: false,
            style: {
              fontSize:  '14px',
              fontWeight:  '600',
              color:  '#595959'
            },
        }
      };

      const series =  [{
        name: "Spend Trend",
        data: spendtrandschartdata
      }];
  return(
    <>
    
      <ReactApexChart options={options} series={series} type="line" height={200} />
    </>
   
  )
}
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";


const VmApplicationListChart = (props) => {
    const [discrete, setDiscrete] = useState([]);
    const [chartvalue, setChartValues] = useState({
        spendtrandschartdata: [],
        spendtrandschartmonth: []
    });
    useEffect(() => {
        //table records
        const chartdata = [];
        const chartmonth = [];
        props.records.map((data) => {
            chartdata.push(data.spend);
            chartmonth.push(data.month);
        });
        setChartValues({
            spendtrandschartdata: chartdata,
            spendtrandschartmonth: chartmonth
        })

        const discrete_records = [];
        var previous_data = 0;
        chartdata.map((data, index) => {
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
    },[props])

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
        colors: ['#1b5f9d'],
        xaxis: {
          categories: chartvalue.spendtrandschartmonth,
          axisBorder: {
                show: false
            },
            labels: {
                show:false,
            },
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            enabled: true,
            fixed: {
                enabled: true,
                position: 'bottomRight',
                offsetX: 0,
                offsetY: 0,
            },
            marker: {
                show: false,
            },
            y: {
                show: true,
                formatter: (num) => { 
                    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
                },
            },
        },
        yaxis: {
            show: false,
        },
      };
      const series =  [{
        name: "Trend",
        data: chartvalue.spendtrandschartdata
      }];
  return(
    <>
      <ReactApexChart options={options} series={series} type="line" height={50} width={110} />
    </>
  )
}

export default VmApplicationListChart;
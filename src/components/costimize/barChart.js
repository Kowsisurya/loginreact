
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

var colors = [
  '#ee7304',
  '#ffc000',
  '#0e5772',
  '#487b78',
  '#00b0f0',
  '#00b050'
]

function BarChart(props,{data}) {
  // console.log(props);
  const [chartvalue, setChartValue] = useState({
    cate_list: [],
    vmcount:[],
    dbcount: [],
    othercount: [],
    chartcount:[],
    chartcolor: ['#4472c4'],
    chartname: "VM"
    })
  const [secondmax,setSecondMax] = useState(0);
  const [firstmax,setFirstMax] = useState(0);
  useEffect(() => {
    var cate_list = [];
    var vmcount = [];
    var dbcount = [];
    var othercount = [];
    var records_list = [];
    
    if(props.barcharttype === 'vm'){
      records_list = [...props.barchartvalue].sort((a, b) => (a.vmcount > b.vmcount ? -1 : 1));
    }else if(props.barcharttype === 'others'){
      records_list = [...props.barchartvalue].sort((a, b) => (a.otherscount > b.otherscount ? -1 : 1));
    }else{
      records_list = [...props.barchartvalue].sort((a, b) => (a.dbcount > b.dbcount ? -1 : 1));
    }



    records_list.map((data,index) => {
      if(index < 5){
        cate_list.push(data.categories);
        vmcount.push(data.vmcount);
        dbcount.push(data.dbcount);
        othercount.push(data.otherscount);
      }
    });

    
    var chartcolor = ['#4472c4'];
    var charttype = "VM";
    var chartcount = vmcount;
    if(props.barcharttype === 'vm'){
      chartcolor = ['#4472c4'];
      charttype = "VM";
      chartcount = vmcount;
    }else if(props.barcharttype === 'others'){
      chartcolor = ['#a5a5a5'];
      charttype = "Others";
      chartcount = othercount;
    }else{
      chartcolor = ['#ed7d31'];
      charttype = "DBaaS";
      chartcount = dbcount;
    }


    var arr_other = othercount;
    var arr_db = dbcount;
    var arr_vm = vmcount;
    // var total_array_list = othercount.concat(dbcount,vmcount);
    var total_array_list = chartcount;
    setFirstMax(Math.max(...total_array_list));
    arr_other = arr_other.reduce((pv, cv) => pv + cv, 0)
    arr_db = arr_db.reduce((pv, cv) => pv + cv, 0)
    arr_vm = arr_vm.reduce((pv, cv) => pv + cv, 0)
    const total_sum = +arr_other + +arr_db + +arr_vm;
    const total_count = +(vmcount.length) + +(dbcount.length) + +(othercount.length);
    if(Math.max(...total_array_list) > 10){
      setSecondMax(Math.round(total_sum / total_count));
    }else{
      setSecondMax(Math.max(...total_array_list));
    }

    setChartValue({
      cate_list: cate_list,
      vmcount: vmcount,
      dbcount: dbcount,
      othercount: othercount,
      chartcount:chartcount,
      chartcolor: chartcolor,
      chartname: charttype
    });
  }, [props]);
  const options =  {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
          show: false,
      },
      background: '#fff'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        distributed: true,
        columnWidth: '55%',
        endingShape: 'rounded',
        dataLabels: {
          orientation: 'vertical',
          position: 'top' // bottom/center/top
        }
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: 10000,
      formatter: function (num, opts) {
        if(secondmax > num || num === 0){
          return '';
        }else{
          return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
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
    // colors: chartvalue.chartcolor,
    colors: colors,
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: chartvalue.cate_list,
      tickPlacement: 'between',
      labels: {
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: true,
          minHeight: undefined,
          // maxHeight: undefined,
          // style: {
          //     colors: [],
          //     fontSize: '8px'
          // },
          offsetX: 0,
          offsetY: -5,
          style: {
              fontSize: '8px',
          },
      },
    },
    fill: {
      opacity: 1
    },
    title: {
        text: `Top 5 ${chartvalue.chartname} Count`,
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 10,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          color:  '#595959'
        },
    },
    yaxis: {
        max:secondmax,
        
        labels: {
          show: true,
          formatter: (value) => { 
            if(firstmax > 10){
              if( Math.round(value) === secondmax){
                // return firstmax;
                return '...';
              }else{
                return Math.round(value);
              }
            }else{
              return Math.round(value);
            }  
           },
      },
    },
    legend: {
      show: false,
      offsetY: -7,
    },
  };

  const series =  [{
    name: chartvalue.chartname,
    data: chartvalue.chartcount
  }];
    return (
      <ReactApexChart options={options} series={series} type="bar" height={235} />
    );
}

export default BarChart;
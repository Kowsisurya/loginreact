
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

function BarChart(props,{data}) {
  const [chartvalue, setChartValue] = useState({
    cate_list: [],
    vmcount:[],
    dbcount: [],
    othercount: []
    })
  const [secondmax,setSecondMax] = useState(0);
  const [firstmax,setFirstMax] = useState(0);
  useEffect(() => {
    var cate_list = [];
    var vmcount = [];
    var dbcount = [];
    var othercount = [];
    props.countchartcategories.map((data,index) => {
      if(index < 5){
        cate_list.push(props.countchartcategories[index]);
        vmcount.push(props.countchartvm[index]);
        dbcount.push(props.countchartdbaas[index]);
        othercount.push(props.countchartothers[index]);
      }
      // else{
      //   if(!cate_list.includes("Others")){
      //     cate_list.push("Others");
      //   }
      //   if(vmcount.length === 3){
      //     // vm / db / others
      //     vmcount.push(props.countchartvm[index]);
      //     dbcount.push(props.countchartdbaas[index]);
      //     othercount.push(props.countchartothers[index]);
      //   }else{
      //     //vm
      //     let lastvmElement = vmcount[vmcount.length - 1];
      //     vmcount.pop();
      //     vmcount.push(+lastvmElement + +props.countchartvm[index]);
      //     //db
      //     let lastdbElement = dbcount[dbcount.length - 1];
      //     dbcount.pop();
      //     dbcount.push(+lastdbElement + +props.countchartdbaas[index]);
      //     //others
      //     let lastothersElement = othercount[othercount.length - 1];
      //     othercount.pop();
      //     othercount.push(+lastothersElement + +props.countchartothers[index]);
      //   }
      // }
      
    });

    var arr_other = othercount;
    var arr_db = dbcount;
    var arr_vm = vmcount;
    var total_array_list = othercount.concat(dbcount,vmcount);
    setFirstMax(Math.max(...total_array_list));
    arr_other = arr_other.reduce((pv, cv) => pv + cv, 0)
    arr_db = arr_db.reduce((pv, cv) => pv + cv, 0)
    arr_vm = arr_vm.reduce((pv, cv) => pv + cv, 0)
    const total_sum = +arr_other + +arr_db + +arr_vm;
    const total_count = +(vmcount.length) + +(dbcount.length) + +(othercount.length);
    console.log(Math.round(total_sum / total_count));
    if(Math.max(...total_array_list) > 10){
      setSecondMax(Math.round(total_sum / total_count));
    }else{
      setSecondMax(Math.max(...total_array_list));
    }
    

    setChartValue({
      cate_list: cate_list,
      vmcount: vmcount,
      dbcount: dbcount,
      othercount: othercount
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
    colors: [
      '#4472c4',
      '#ed7d31',
      '#a5a5a5'
    ],
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
        text: 'Top 5 Count',
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
      show: true,
      offsetY: -7,
    },
  };

  const series =  [{
    name: 'VM',
    data: chartvalue.vmcount
  }, {
    name: 'Dbaas',
    data: chartvalue.dbcount
  }, {
    name: 'Others',
    data: chartvalue.othercount
  }];
    return (
      <ReactApexChart options={options} series={series} type="bar" height={235} />
    );
}

export default BarChart;
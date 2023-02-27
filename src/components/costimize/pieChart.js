import ReactECharts from 'echarts-for-react';
import "./style.css";
import { useEffect, useState } from 'react';

export default function PieChart(props) {
  // console.log(props);
  const [chartvalue, setChartValue] = useState([]);

  useEffect(() => {
    const dummy = [...props.spendchart].sort((a, b) => (a.value > b.value ? -1 : 1));
      var chartdummyvalue = [];
      dummy.map((data,index) => {
        if(index < 5){
          chartdummyvalue.push(data);
        }
        // else{
        //   const lastvalue = chartdummyvalue.slice(-1);
        //   chartdummyvalue.pop();
        //   chartdummyvalue.push({value:+lastvalue[0].value + +data.value ,name:"Others"});
        // }
      })
      setChartValue(chartdummyvalue)
  },[props]);

  // console.log(chartvalue);
   const option = {
    title: {
      text: 'Top 5 Spend ',
      left: 'center',
      textStyle: {
        color: '#595959',
        fontSize: '14px',
        position: 'top',
        textAlign:'center',
        fontFamily: 'Poppins',
        left: "center",
        fontWeight:  '600',
      }
    },
    // legend: {
    //       show: true,
    //       orient: 'horizontal',
    //       bottom: '4px',
    //       data: ['ERP', 'CRM', 'SRM','Salesforce'],
    //       label: {
    //         position: 'top',
    //       color: "black",
    //       fontSize: "6px",
          
    //         },
    //   },
      legend: {
        orient: 'vertical',
        bottom: 'bottom',
        textStyle: {
          fontSize: 9
        },
        itemWidth: 12.5
      },
        series: [
          {
            type: 'pie',
            data: chartvalue,
            // data: [
            //   { value: 407, name: 'ERP' },
            //   { value: 550, name: 'CRM' },
            //   { value: 1580, name: 'SRM' },
            //   { value: 1463, name: 'Salesforce' }
            // ],
            label: {
              // position: 'top',
             color: "black",
             fontSize: "7px",
            
              },
            radius: '50%'
          }
        ],
        emphasis: {
          label: {
              show: true,
              fontSize: '07px',
              
          }
      },
      };
     

    
  return (
     
    <ReactECharts className='poppins-font-chart'
    option={option}
    style={{ backgroundColor: 'white',boxshadow:' 5px 10px', padding: '1px', margin: '5px', height: '235px'}}
    //  style={{ height: '150px', width: '280px', backgroundColor: 'white',boxshadow:' 5px 10px',border: '1px solid lightgray', padding: '1px'}}
      // style={{ height: '80px', width: '220px'}}
      // option={{ maintainAspectRatio: false }} 
      />
   
  )
}
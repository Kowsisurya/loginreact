import ReactECharts from 'echarts-for-react';
import "./style.css";

export default function LineChart() {
  // var options = { xAxis: { axisLabel: { fontSize: '09px' } } }
  const option = {
   
     title: {
      text: 'Spend Trend',
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
   
    xAxis: {
      data: ['May', 'June', 'July', 'Aug', 'Sep'],
    axisLabel: {
      fontSize: '7px',
      fontFamily: 'Poppins',
    
    }
    },
    
    yAxis: {
      type: 'value',
       axisLabel: {
        fontSize: '7px',
        fontFamily: 'Poppins',
        // width: 75,
      }
    },
    series: [{
      data: [41, 11, 22, 36, 10],
  
      type: 'line',
      label: {
         position: 'top',
        color: "black",
        fontSize: "7px",
       
         },
    }]
  };
  // }

  const onChartClick = (params) => {
    console.log('Chart clicked', params);
  };

  const onEvents = {
    click: onChartClick,
  };

  return (
     
    <ReactECharts className='poppins-font-chart'
    option={option}
    onEvents={onEvents}
      style={{ height: '84px', width: '240px', backgroundColor: 'aliceblue',boxshadow:' 5px 10px',border: '1px solid lightgray', padding: '1px'}}
      // style={{ height: '80px', width: '220px'}}
      // option={{ maintainAspectRatio: false }} 
      />
   
  )
}
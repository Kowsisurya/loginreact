import ReactECharts from 'echarts-for-react';
import "../costimize/style.css";
import { useSelector } from 'react-redux';

export default function LineChart(props) {
  const { spendtrandschartdata, spendtrandschartmonth } = useSelector((state) => state.constimize);
  // console.log(spendtrandschartdata);
  // console.log(spendtrandschartmonth);

  const option = {
     title: {
      text: 'Spend Trend',
      left: 'center',
      textStyle: {
        color: 'black',
        fontSize: '12px',
        position: 'top',
        textAlign:'center',
        fontFamily: 'Poppins',
        left: "center"
        
      }
    },
   
    xAxis: {
      // data: ['May', 'June', 'July', 'Aug', 'Sep', 'Sep'],
      data: spendtrandschartmonth,
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
      // data: [41, 11, 22, 36, 10, 15],
      data: spendtrandschartdata,
  
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
     
    <ReactECharts className='poppins-font-chart custom-style-linechart'
    option={option}
    onEvents={onEvents}
      // style={{ width: 'auto'}}
      // option={{ maintainAspectRatio: false }} 
      />
   
  )
}
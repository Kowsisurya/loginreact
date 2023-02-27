import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class BarChartv2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'VM',
            data: [44, 55, 57, 56]
          }, {
            name: 'Dbaas',
            data: [76, 85, 101, 98]
          }, {
            name: 'Others',
            data: [35, 41, 36, 26]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              background: '#fff',
              toolbar: {
                show: false,
              }
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            colors:['#4472c4', '#ed7d31', '#a5a5a5'],
            xaxis: {
              categories: ['ERP', 'CRM', 'SRM', 'Salesforce'],
            },
            title: {
                text: 'All Infra Count',
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                  fontSize:  '14px',
                  fontWeight:  'bold',
                  fontFamily:  undefined,
                  color:  '#323232'
                },
            },
            fill: {
              opacity: 1
            }
          },
        
        
        };
      }

    

      render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" />
            </div>
        );
      }
    }

export default BarChartv2;
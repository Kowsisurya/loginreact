import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
} from "mdb-react-ui-kit";

import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
var colors = [
    '#1b5f9d'
  ]


const Trendchart = (props) => {
    const { spendtrandschartdata, spendtrandschartmonth } = useSelector((state) => state.constimize);
    const [discrete, setDiscrete] = useState([]);
    useEffect(() => {
        const discrete_records = [];
        var previous_data = 0;
        spendtrandschartdata.map((data, index) => {
            var color;
            if(index === 0){
                color = '#1F6D1E';
            }else{
                if(previous_data > data){
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
                    size: 4
                  }
            );
        });
        setDiscrete(discrete_records);
    },[spendtrandschartdata])
    const options = {
        chart: {
            offsetX: -10,
            offsetY: 0,
            events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              },
            toolbar: {
                show: false,
            }
        },
        tooltip: {
            enabled: true,
        },
        stroke: {
            show: true,
            curve: 'straight',
            lineCap: 'butt',
            colors: "#000",
            width: 1,
            dashArray: 0,      
        },
        plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
            }
          },
          
        markers: {
            size: [5,7],
            discrete: discrete
        },
        grid:{
            show: false
        },
        
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
              offsetY: 3,
              style: {
                  fontSize: '17px',
                  fontWeight: 400,
              }
          },
          title: {
                text: "Month",
                rotate: -180,
                offsetX: 0,
                offsetY: -10,
                style: {
                    color: undefined,
                    fontSize: '18px',
                    fontWeight: 500,
                },
            }
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
                offsetX: 0,
                offsetY: 10,
                style: {
                    color: undefined,
                    fontSize: '18px',
                    fontWeight: 500,
                },
            },
            labels: {
                style: {
                    fontSize: '15px',
                    fontWeight: 400,
                },
                formatter: (num) => { 
                    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
                },
            },
        },
        title: {
            text: 'Spend Trend',
            align: 'center',
            margin: 0,
            offsetX: 0,
            offsetY: 10,
            floating: false,
            style: {
              fontSize:  '18px',
              fontWeight:  '500',
              color:  '#263238'
            },
        }
      };

      const series =  [{
        name: "Spend Trend",
        data: spendtrandschartdata
      }];

    return(
        <>
            <MDBModal show={props.zoominstatus} setShow={props.setZoomInStatus} tabIndex="-1">
                <MDBModalDialog className="plat-modal-dialog">
                <MDBModalContent >
                    <div className="plat-model-fullcover">
                        <MDBModalBody>
                                <ReactApexChart options={options} series={series} type="line" height={360}/>
                                {/* <FaRegCalendarAlt className='quick-glance-spend-chart-cal-new' /> */}
                        </MDBModalBody>
                        <div className="plat-model-close-icon" onClick={() => props.setZoomInStatus(false)}>
                                <IoMdClose className="plat-model-top-close-icon" />
                        </div>
                    </div>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export default Trendchart;
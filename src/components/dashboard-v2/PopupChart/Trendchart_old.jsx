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
import { Box } from '@mui/material';
var colors = [
    '#1b5f9d'
  ]


const Trendchart = (props) => {
    const { spendtrandschartdata, spendtrandschartmonth } = useSelector((state) => state.constimize);
    console.log(spendtrandschartdata);
    console.log(spendtrandschartmonth)
    const options = {
        chart: {
            id: 'fb',
            group: 'social',
            type: 'line',
            height: 160,
            offsetX: -10,
            offsetY: 0,
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
            show: false
        },
        colors: colors,
        xaxis: {
          categories: spendtrandschartmonth,
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
                    <MDBModalBody>
                            <ReactApexChart options={options} series={series} type="line" height={350}/>
                            <FaRegCalendarAlt className='quick-glance-spend-chart-cal-new' />
                    </MDBModalBody>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export default Trendchart;
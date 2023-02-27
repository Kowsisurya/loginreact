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
import "./popupchart.css"
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";


const AssetSpendCountChart = (props) => {

    const [secondmax,setSecondMax] = useState(0);
    const [firstmax,setFirstMax] = useState(0);

    useEffect(() => {
      if(props.countchartothers.length > 0){
        var arr_other = props.countchartothers;
        var arr_db = props.countchartdbaas;
        var arr_vm = props.countchartvm;

        var total_array_list = arr_other.concat(arr_db,arr_vm);
        setFirstMax(Math.max(...total_array_list));

        arr_other = arr_other.reduce((pv, cv) => pv + cv, 0)
        arr_db = arr_db.reduce((pv, cv) => pv + cv, 0)
        arr_vm = arr_vm.reduce((pv, cv) => pv + cv, 0)
        const total_sum = +arr_other + +arr_db + +arr_vm;
        const total_count = +(props.countchartothers.length) + +(props.countchartdbaas.length) + +(props.countchartvm.length);
        setSecondMax(Math.round(total_sum / total_count));

        if(Math.max(...total_array_list) > 10){
          setSecondMax(Math.round(total_sum / total_count));
        }else{
          setSecondMax(Math.max(...total_array_list));
        }
      }
     
    },[props]);

    const options =  {
        chart: {
          type: 'bar',
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
          categories: props.countchartcategories,
          tickPlacement: 'between',
          labels: {
              show: true,
              rotate: -45,
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
              offsetY: 0
          },
        },
        yaxis: {
            labels: {
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
            max:secondmax
        },
        fill: {
          opacity: 1
        },
        title: {
            text: 'All Infra Count',
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
        legend: {
          show: true,
          offsetY: -15,
        },
      };
    
      const series =  [{
        name: 'VM',
        data: props.countchartvm
      }, {
        name: 'Dbaas',
        data: props.countchartdbaas
      }, {
        name: 'Others',
        data: props.countchartothers
      }];
     
    return(
        <>
            <MDBModal show={props.zoominstatus} setShow={props.setZoomInStatus} tabIndex="-1">
                <MDBModalDialog className="plat-modal-dialog">
                  <MDBModalContent >
                    <div className="plat-model-fullcover">
                      <MDBModalBody>
                          <ReactApexChart options={options} series={series} type="bar"  />
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

export default AssetSpendCountChart;
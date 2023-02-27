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
import ReactECharts from 'echarts-for-react';
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import { getRandomColor } from "../../custom_hook/CustomHook"

const AssetSpendSpendChart = (props) => {
  const [colorlist, setColorList] = useState([]);
  useEffect(() => {
    const chartdata = props.spendchart;
    const colors = [];
    chartdata.map(() => {
      colors.push(getRandomColor())
    })
    setColorList(colors);
  },[props])
    const option = {
        title: {
          text: 'All Spend',
          left: 'center',
          textStyle: {
            color: '#595959',
            fontSize: '14px',
            position: 'top',
            textAlign:'center',
            fontFamily: 'Poppins',
            left: "center"
            
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
            left: 'right'
          },
            series: [
              {
                type: 'pie',
                color: colorlist,
                data: props.spendchart,
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
    return(
        <>
            <MDBModal show={props.zoominstatus} setShow={props.setZoomInStatus} tabIndex="-1">
                <MDBModalDialog className="plat-modal-dialog">
                
                  <MDBModalContent >
                  <div className="plat-model-fullcover">
                      <MDBModalBody>
                      <ReactECharts className='poppins-font-chart'
      option={option}
      style={{ backgroundColor: 'white',boxshadow:' 5px 10px', padding: '1px', margin: '5px', height: '550px'}}
      //  style={{ height: '150px', width: '280px', backgroundColor: 'white',boxshadow:' 5px 10px',border: '1px solid lightgray', padding: '1px'}}
        // style={{ height: '80px', width: '220px'}}
        // option={{ maintainAspectRatio: false }} 
        />
                          {/* <ReactApexChart options={options} series={series} type="bar"  /> */}
                      </MDBModalBody>
                      <div className="plat-model-close-icon" onClick={() => props.setZoomInStatus(false)}>
                              <IoMdClose className="plat-model-top-close-icon" />
                      </div>
                    </div>
                  </MDBModalContent>
                  
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}
export default AssetSpendSpendChart;
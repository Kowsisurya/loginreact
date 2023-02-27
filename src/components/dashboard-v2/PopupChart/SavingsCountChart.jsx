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

import ReactApexChart from 'react-apexcharts';
import { FaRegCalendarAlt } from "react-icons/fa";
import "./popupchart.css"

import { useDispatch, useSelector } from 'react-redux';
import { chartMonthApplicationSpend, spendChartMonthApplicationSpend } from "../../action/costimizedashboardAction";
import React, { useState, useEffect } from 'react';
import { titleCase } from "../../custom_hook/CustomHook";
import { IoMdClose } from "react-icons/io";
import { getRandomColor } from "../../custom_hook/CustomHook"


const SavingsCountChart = (props) => {
    
  const { companyName } = useSelector((state) => state.user);
  const { selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate, apllicationlist, selectedservices, selectedos, selectedinfra, selecteddb, applicationList  } = useSelector((state) => state.constimize);
  const dispatch = useDispatch();
  const [chartvalue, setChartValue] = useState([0,0,0]);
  const [chartcate, setChartCate] = useState([]);
  const [colorlist, setColorList] = useState([]);

  useEffect(() => {
  var makeDate = selectedTopdate;
  const apivalue = {
      environment : selectedEnvironment.toString(),
      account: selectedAccount.toString(),
      cloud: selectedCloud.toString(),
      application: selectedApplication.toString(),
      services: selectedservices.toString(),
      os: selectedos.toString(),
      infra: selectedinfra.toString(),
      db: selecteddb.toString()
  }
  
  dispatch(spendChartMonthApplicationSpend({companyName, makeDate, apivalue}))
  .unwrap()
  .then(({ data }) => {
    var listvalue = [];
    var catelist = [];
    var listvalue = [];
    applicationList.map((appdata, index) => {
      const listapplicationlistfillter = data.newfunctionquery?.filter(datas => {
          return datas.applications?.toLowerCase() === appdata?.toLowerCase();
      });
      const chartvalue = Math.round(listapplicationlistfillter.reduce((a,v) =>  a = +a + +v.spend , 0 ));
      // if(chartvalue !== 0 ){
        catelist.push(titleCase(appdata));
        listvalue.push(chartvalue);
      // }
    });
    setChartValue(listvalue);
    setChartCate(catelist);
    const colors = [];
    listvalue.map(() => {
      colors.push(getRandomColor())
    })
    setColorList(colors);
  })
  .catch(err => {
  console.log(err.message);
  });

  },[companyName, selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate]);

   const options = {
    chart: {
      type: 'donut',
      background: '#fff',
      // height: "300px"
    },
    title: {
        text: 'Current Month Spend',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          color:  '#595959'
        },
    },
    legend: {
      show: true,
      offsetY: 0,
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.round(val) + "%"
      }
    },
    colors: colorlist,
    labels: chartcate,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  const series = chartvalue;

    return(
        <>
            <MDBModal show={props.zoominstatus} setShow={props.setZoomInStatus} tabIndex="-1">
                <MDBModalDialog className="plat-modal-dialog">
                  <MDBModalContent >
                    <div className="plat-model-fullcover">
                      <MDBModalBody>
                          <ReactApexChart options={options} series={series} type="donut" height={500} />
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

export default SavingsCountChart;
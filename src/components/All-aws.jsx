import React, {useState} from "react";
import ReactECharts from 'echarts-for-react';
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";
import DonutChart2 from "./DonutChart2";
import LineChart from "./LineChart";
import Waterfall from "./Waterfal";
import { MDBCheckbox, MDBIcon, MDBCol } from 'mdb-react-ui-kit';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AllAWS() {

    const dataOption = {
        title: {
            text: 'Current Month Spend by Environment - AWS',
            //subtext: 'Fake Data',
            top: '2px'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [
              120,
              {
                value: 200,
                itemStyle: {
                  color: '#a90000'
                }
              },
              150,
              80,
              70,
              110,
                  130,
              
                  120,
                  {
                    value: 200,
                    itemStyle: {
                      color: '#a90000'
                    }
                  },
                  150,
                  80,
                  70,
                  110,
                  130
                
            ],
            type: 'bar'
          }
        ]
    };
    
    const dataOption2 = {
        title: {
            text: 'Current Month Spend by Environment - AWS',
            //subtext: 'Fake Data',
            top: '2px'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [
              120,
              {
                value: 200,
                itemStyle: {
                  color: '#a90000'
                }
              },
                  150,
              5
            ],
            type: 'bar'
          }
        ]
    };
    
    const initialState = [
        {
            id: 1,
            name: "Line chart",
            content: <LineChart />,
            isShow: true
        },
        {
            id: 2,
            name: "BarChart",
            content: <BarChart />,
            isShow: true
        },
        {
            id: 3,
            name: "BarChart",
            content: <BarChart data={dataOption} />,
            isShow: true
        },
        {
            id: 4,
            name: "DonutChart",
            content: <DonutChart />,
            isShow: true
        },
        {
            id: 4,
            name: "DonutChart",
            content: <DonutChart />,
            isShow: true
        },
        {
            id: 4,
            name: "DonutChart",
            content: <DonutChart />,
            isShow: true
        },
    ];

    const [charts, setCharts] = useState(initialState);
    const [drag, setdrag] = useState(false);
    const [basicModal, setBasicModal] = useState(false);
    const [checkedList, setCheckedList] = useState({});
    const [storeChecked, setStoreChecked] = useState({});

    const onDragStart = (e, type) => {
        e.dataTransfer.setData("type", type);
        console.log('onDragStart');
    }

    const onDrop = (e) => {
        e.preventDefault();
        setdrag(false);
        var data = e.dataTransfer.getData("type");
        if (data === 'donut') {
            setCharts(charts => (
                [
                    {
                        id: charts.length + 1,
                        name: 'DonutChart',
                        content: <DonutChart2 />,
                        isShow: true
                    },
                    ...charts
                ]
            ));
        } else {
            setCharts(charts => (
                [
                    {
                        id: charts.length + 1,
                        name: 'BarChart',
                        content: <BarChart />,
                        isShow: true
                    },
                    ...charts
                ]
            ));
        }
    }

    const ondragover = (e) => {
        e.preventDefault();
        setdrag(true);
        console.log('ondragover');
    }

    const onSubmitBox = () => {
        console.log(storeChecked, 'storeChecked')
        const newChart = charts.map((v) => {
            return {
                ...v,
                isShow: (storeChecked[v.id] === true || storeChecked[v.id] === false) ? storeChecked[v.id]: true
            }
        });
        console.log(newChart);
        setCharts(newChart);
        setBasicModal(false);
    }

    const onChangeCheck = (e, id) => {
        setStoreChecked(prev => (
            {
                ...prev,   
                [id]: e.target.checked
            }
        ));
    }

    const modal = () => {
        return (
          <>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
              <MDBModalDialog scrollable>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Dashboard settings</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={() => setBasicModal(false)}></MDBBtn>
                  </MDBModalHeader>
                    <MDBModalBody>
                        <MDBListGroup style={{ minWidth: '22rem' }} light small>
                        {charts.map(widget => (
                            <>
                                <MDBListGroupItem>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label={`${widget.name} - ${widget.id}`} onClick={(e) => onChangeCheck(e, widget.id)} defaultChecked={widget.isShow === false ? false: true} />
                                </MDBListGroupItem>
                            </>
                        ))}
                    </MDBListGroup>
                  </MDBModalBody>
      
                  <MDBModalFooter>
                    <MDBBtn color='secondary' onClick={() => setBasicModal(false)}>
                      Close
                    </MDBBtn>
                    <MDBBtn onClick={() => onSubmitBox()}>Save changes</MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </>
        );
      }

    return (
        <>
            {modal()}
            <div className="blocks">
                <div className="block-div">
                    <img src="https://costimize-assets-bucket.s3.ap-south-1.amazonaws.com/cmacgm+logo.png" width="142"/>
                </div>
                <div className="block-div">
                    <div><h5>Last Modified Date (AWS)</h5></div>
                    <div><h2>14-11-2022</h2></div>
                </div>
                <div className="block-div">
                    <div><h5>Total Spend (USD)</h5></div>
                    <div><h2>$67,946</h2></div>
                </div>
                <div className="block-div">
                    <div><h5>Total EC2 Compute Spend</h5></div>
                    <div><h2>$24,935</h2></div>
                </div>
                <div className="block-div">
                    <div><h5>On-Demand EC2 Compute Spend</h5></div>
                    <div><h2>$2,958</h2></div>
                </div>
                <div className="block-div">
                    <div><h5>RI EC2 Compute Spend</h5></div>
                    <div><h2>No data</h2></div>
                </div>
            </div>
            <div className="blocks" style={{"justify-content": "left"}}>
                <div className="block-div" style={{"margin-right": "23px"}}>
                    <div><h5>Spot EC2 Compute Spend</h5></div>
                    <div><h2>No data</h2></div>
                </div>
                <div className="block-div">
                    <div><h5>Savings Plan EC2 Compute Spend</h5></div>
                    <div><h2>$21,977</h2></div>
                </div>
            </div>
            <div style={{display: "flex", marginBottom: "15px"}}>
                <div id="test" draggable="true" onDragStart={(e) => onDragStart(e, "donut")}>
                <MDBIcon fas icon="plus" /> Donut Chart  
                </div>
                <div  draggable="true" onDragStart={(e) => onDragStart(e, "bar")}>
                    &nbsp; <MDBIcon fas icon="plus" /> Bar Chart
                </div>
                <div>
                    &nbsp;&nbsp;<MDBIcon fas icon="cog" onClick={ () =>setBasicModal(true) } /> Settings
                </div>
            </div>
            <div className={`consolidated-view ${drag ? 'drag-border' : ''}`} onDrop={onDrop} onDragOver={ondragover}>
                {
                    charts.map(v => 
                        {
                            return (v.isShow ? <div className="charts">
                                {v.content}
                            </div> : null)
                        }
                    )
                }
                
            </div>
            <div className="consolidated-view">
                <div className="chart3">
                    <Waterfall />;
                </div>
            </div>
        </>
    )
}

export default AllAWS;
import QuickView from '../QuickView';
import Tapmenu from '../Tapmenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'antd';
import './budgetplanning.css';
import ReactApexChart from "react-apexcharts";
import ListBudgetPlanning from './ListBudgetPlanning';
import { useState } from "react";
import EditBudgetPlanning from './EditBudgetPlanning';




const BudgetPlanning = () => {
    
    const [addrecordsstatus, addRecordsStatus] = useState(false)
      const options = {
        chart: {
          type: 'donut',
          background: '#ecf4ff',
          // height: "300px"
        },
        title: {
            text: '',
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
        colors: ["#92e77d", "#662386"],
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return Math.round(val) + "%"
          }
        },
        labels: ["total spend","Remaining"],
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
      const series = [44, 55];
    return (
        <>
            <div className='plat-dashboard-body'>
                <div className='plat-dashboard-quickview'>
                    <QuickView/>
                </div>

                <div className='plat-dashboard-tabs'>
                    <Tapmenu  
                        excalname='savings models' 
                        type="savingsmodel"
                        osstatus = {false}
                        dbstatus = {false}
                    />

                    <div className='plat-main-title'>
                        <h1 className='top-Plat-quick-title'>Budget Planning</h1> 
                    </div>
                    
                    <div className='plat-full-asset-spend-cover'>
                        <Row>
                            <Col lg={2} className="budget-projected-col">
                                <Card
                                    className='budget-projected-box'
                                >
                                    <h1 className='budget-allocated-content'>Allocated Budget <br />
                                        for the current month</h1>
                                    <h1  className="budget-box-cneter-icon">
                                        <iconify-icon icon="mdi:currency-usd"></iconify-icon>
                                    </h1>
                                    <h1 className='budget-allocated-value'>$20,612</h1>
                                </Card>
                            </Col>
                            <Col lg={2} className="budget-projected-col">
                                <Card
                                    className='budget-projected-box'
                                >
                                    <h1 className='budget-allocated-content'>Projected Balance</h1>
                                    <h1  className="budget-box-cneter-icon">
                                        <iconify-icon icon="ic:outline-balance"></iconify-icon>
                                    </h1>
                                    <h1 className='budget-allocated-value'>$5,474</h1>
                                    <h1 className='budget-allocated-witget-content'>27% exceeding budget</h1>
                                </Card>
                            </Col>
                            <Col lg={4} className="budget-projected-cost-col">
                                <div
                                    className='budget-projected-cost-box'
                                >
                                    <Row>
                                        <Col lg={7} className="cost-left-box">
                                            <Row>
                                                <Col lg={12}>
                                                    <h1 className='budget-cost-title'>Budget Overview</h1>
                                                </Col>
                                                <Col lg={12}>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <h1 className='budget-cost-value'>$22,309</h1>
                                                            <h1 className='budget-cost-value'>Total spend</h1>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <h1 className='budget-cost-value'>$22,309</h1>
                                                            <h1 className='budget-cost-value'>Total budget</h1>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={5}>
                                            <ReactApexChart 
                                                options={options} 
                                                series={series} 
                                                type="donut" 
                                                height={320}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={7}>
                            {
                                addrecordsstatus ?
                                    <>
                                        <div onClick={() => addRecordsStatus(false)}>
                                            <iconify-icon  icon="material-symbols:arrow-back" class="plat-saving-add-icon"></iconify-icon>
                                        </div>
                                        <EditBudgetPlanning />
                                    </>
                                    
                                :
                                    <>
                                        <div onClick={() => addRecordsStatus(true)}>
                                            <iconify-icon icon="material-symbols:edit" class="plat-saving-add-icon"></iconify-icon>
                                        </div>
                                        <ListBudgetPlanning />
                                    </>
                            }
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BudgetPlanning;
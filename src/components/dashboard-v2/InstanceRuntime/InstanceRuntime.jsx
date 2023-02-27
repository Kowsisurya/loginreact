
import QuickView from '../QuickView';
import Tapmenu from '../Tapmenu';
import { useState } from "react";
import { Table } from 'antd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const columns = [
    {
      title: 'Application',
      dataIndex: 'application',
      key: 'application',
    },
    {
      title: 'Environment',
      dataIndex: 'environment',
      key: 'environment',
    },
    {
      title: 'Instance Name',
      dataIndex: 'instance_name',
      key: 'instance_name',
    },
    {
      title: 'Planned Runtime',
      dataIndex: 'planned_runtime',
      key: 'planned_runtime',
    },
    {
      title: 'Actual Runtime',
      dataIndex: 'actual_runtime',
      key: 'actual_runtime',
    },
    {
      title: 'Idle Time',
      dataIndex: 'idle_time',
      key: 'idle_time',
    },
    {
        title: 'Down size',
        dataIndex: 'down_size',
        key: 'down_size',
    },
    {
        title: 'Upsize',
        dataIndex: 'upsize',
        key: 'upsize',
    },
    
  ];
  const data = [
    {
        key: '1',
        application: 'Employee Portal',
        environment: 'PRD',
        instance_name: "agency-coastalcorp-nprd",
        planned_runtime: '24*7',
        actual_runtime: '100%',
        idle_time: 'NA',
        down_size: 'NA',
        upsize: 'NA'
    },
    {
        key: '2',
        application: 'Mulesoft',
        environment: 'PRD',
        instance_name: "agency-coastalcorp-nprd",
        planned_runtime: '24*7',
        actual_runtime: '100%',
        idle_time: 'NA',
        down_size: 'NA',
        upsize: 'NA'
      },
      
  ];
 
  const tableProps = {
  };


const InstanceRuntime = () => {
    const [addrecordsstatus, addRecordsStatus] = useState(false)
    return(
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
                        <h1 className='top-Plat-quick-title'>Instance Runtime</h1> 
                    </div>
                    
                   
                    <div className='plat-full-asset-spend-cover'>
                        <Row>
                            <Col lg={11} >
                            <Table 
                                {...tableProps}
                                className="savings_new_table"
                                columns={columns} 
                                dataSource={data} 
                                pagination={false}
                                rowClassName={(record, index) => record.type === 'footer' ? 'budget-table-footer' : ''}
                            />
                            </Col>
                        </Row>
                        
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default InstanceRuntime;
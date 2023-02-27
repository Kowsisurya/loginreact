import { Table } from 'antd';
import { useEffect, useState } from 'react';

const columns = [
    {
      title: 'Application',
      dataIndex: 'application',
      key: 'application',
      responsive: ['md',"xs"],
    },
    {
      title: 'Environment',
      dataIndex: 'environment',
      key: 'environment',
      responsive: ['md'],
    },
    {
      title: 'Services',
      dataIndex: 'services',
      key: 'services',
    },
    {
      title: 'Account',
      dataIndex: 'account',
      key: 'account',
    },
    {
        title: "Environment Identified Potential Realised Status Details",
        render: (record) => (
          <>
            {record.environment}
            <br />
            ${record.identified}
            <br />
            ${record.potential}
            <br />
            ${record.realised}
            <br />
            {record.status}
            <br />
            {record.details}
          </>
        ),
        responsive: ["xs"]
      },
    {
      title: 'Identified Savings/Month',
      dataIndex: 'identified',
      key: 'identified',
      responsive: ['md'],
      render: (record) => {
            return (
                <>
                ${record}
                </>
            )
        }
    },
    {
      title: 'Month / Year',
      dataIndex: 'identifieddateyear',
      key: 'identifieddateyear',
    },
    {
      title: 'Potential Savings/Month',
      key: 'potential',
      dataIndex: 'potential',
      responsive: ['md'],
      render: (record) => {
            return (
                <>
                ${record}
                </>
            )
        }
    },
    {
      title: 'Month / Year',
      dataIndex: 'potentialdateyear',
      key: 'potentialdateyear',
    },
    {
        title: 'Realised Savings/Annum',
        dataIndex: 'realised',
        key: 'realised',
        responsive: ['md'],
        render: (record) => {
            return (
                <>
                ${record}
                </>
            )
        }
    },
    {
      title: 'Month / Year',
      dataIndex: 'realiseddateyear',
      key: 'realiseddateyear',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
        title: 'Details',
        dataIndex: 'details',
        key: 'details',
        responsive: ['md'],
    },
  ];
  const data = [
    {
      key: '1',
      application: 'Employee Portal',
      environment: 'PRD',
      identified: '46',
      potential: "46",
      realised: '552',
      status: 'Completed',
      services: 'AmazonEC2',
      identifieddateyear: "02/2023",
      potentialdateyear: "02/2023",
      realiseddateyear: "02/2023",
      account: 'Log-archive',
      details: 'Conversion to RI',
      type:"data"
    },
    {
        key: '2',
        application: 'Employee Portal',
        environment: 'PRD',
        identified: '46',
        potential: "46",
        realised: '552',
        status: 'Completed',
        identifieddateyear: "02/2023",
        potentialdateyear: "02/2023",
        realiseddateyear: "02/2023",
        services: 'AmazonEC2',
        account: 'Log-archive',
        details: 'Conversion to RI',
        type:"data"
      },
      
  ];
 
  const tableProps = {
  };

const AllListSavingsModel = (props) => {
    const [tablerecords,setTableRecords] = useState([]);
    useEffect(() => {
        const indentified =  data.reduce((a,v) =>  a = +a + +v.identified , 0 );
        const potential =  data.reduce((a,v) =>  a = +a + +v.potential , 0 );
        const realised =  data.reduce((a,v) =>  a = +a + +v.realised , 0 );
        setTableRecords([...data, {
            key: '3',
            application: 'total',
            environment: '',
            identified: indentified,
            potential: potential,
            realised: realised,
            status: '',
            details: '',
            type:"footer"
          }]);
    },[props])


    return (
        <>
            <Table 
                {...tableProps}
                className="savings_new_table"
                columns={columns} 
                dataSource={tablerecords} 
                rowClassName={(record, index) => record.type === 'footer' ? 'savings-table-footer' : ''}
            />
        </>
    )
}
export default AllListSavingsModel;
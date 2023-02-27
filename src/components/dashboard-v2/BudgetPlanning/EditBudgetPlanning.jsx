import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table, Input, Select, Card, DatePicker, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const EditBudgetPlanning = () => {

    const {  environmentList, applicationList } = useSelector((state) => state.constimize);

    const [tablerecords, setTableRecords] = useState([{
        key: 1,
        application: '',
        environment: '',
        account: '',
        allocated_budget: '',
        budget_spend: '',
        month_year: '',
        type:"data",
        add:"add"
      }]);
      const [tablecolums, setTableColums] = useState([]);

      useEffect(() => {
        const allenvironment = environmentList.map((list) => {
          return {
            value: list,
            label: list,
          }
        });
    
        const allapplication = applicationList.map((list) => {
          return {
            value: list,
            label: list,
          }
        });
    
    
        const columns = [
          {
            title: 'Application',
            dataIndex: 'application',
            key: 'application',
            render: (record, index) => {
                  return (
                    <Select
                        showSearch
                        style={{
                          width: 120,
                        }}
                        placeholder="Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={allapplication}
                    />
                  )  
            }
          },
          {
            title: 'Environment',
            dataIndex: 'environment',
            key: 'environment',
            render: (record) => {
                  return (
                    <Select
                        showSearch
                        style={{
                          width: 120,
                        }}
                        placeholder="Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={allenvironment}
                    />
                  )  
            }
          },
          {
            title: 'Account',
            dataIndex: 'account',
            key: 'account',
            render: (record) => {
                  return (
                    <Input 
                      style={{
                        width: "100%",
                      }}
                     />
                  )  
            },
          },
          {
              title: 'Allocated Budget',
              dataIndex: 'allocated_budget',
              key: 'allocated_budget',
              render: (record) => {
                    return (
                        <Input 
                        style={{
                          width: "100%",
                        }}
                        prefix="$"
                       />
                    )  
              }
             
            },
          {
            title: 'Budget Spend',
            key: 'budget_spend',
            dataIndex: 'budget_spend',
            render: (record) => {
                  return (
                    <>
                      <Input 
                        style={{
                          width: "100%",
                        }}
                        prefix="$"
                      />
                    </>
                  )  
            }
          },
          {
              title: 'Month/Year',
              dataIndex: 'month_year',
              key: 'month_year',
              render: (record) => {
                    return (
                      <>
                        <DatePicker picker="month" />
                      </>
                    )  
              }
          },
          
          {
              title: ' ',
              dataIndex: 'add',
              key: 'add',
              render: (record, index) => {
                if(index.key == tablerecords.length){
                  return (
                    <>
                      <div onClick={() => addNewRow()}>
                      <iconify-icon 
                        icon="material-symbols:add"
                        class="table-add-records-icon"
                      ></iconify-icon>
                      
                    </div>
                    {/* <div onClick={() => removeLastRow()}>
                      <iconify-icon 
                        icon="material-symbols:remove-rounded"
                        class="table-add-records-icon"
                      ></iconify-icon>
                    </div> */}
    
                    
                    </>
                    
                      
                  )
                }
              }
          },
        ];
    
        
        setTableColums(columns)
      },[environmentList, tablerecords]);
      
      const addNewRow = () => {
        const next_line = +tablerecords.length + +1;
        setTableRecords([...tablerecords, {
          key: next_line,
          application: '',
          environment: '',
          account: '',
          allocated_budget: '',
          budget_spend: '',
          month_year: '',
          type:"data",
        }]);
      }
      
      // const removeLastRow = () => {
      //   const newrecords = tablerecords.splice(-1);
      //   setTableRecords(tablerecords);
      //   console.log(newrecords);
      // }
    
    const tableProps = {
    };
    return(
        <>
            <Row>
                <Col lg={8}>
                    <Card
                        className='budget-projected-month-box'
                    >
                        <Row>
                            <Col lg={6}>
                                <h1 className='budget-project-month-title'>
                                    Budget for the Month
                                </h1>
                                <h1 className='budget-project-month-title'>
                                <Input style={{
                                    width: 150,
                                    }}  placeholder="Budget" prefix="$" />
                                </h1>
                               
                            </Col>
                            <Col lg={6}>
                                <h1 className='budget-project-month-title'>
                                    Month / Year
                                </h1>
                                <h1 className='budget-project-month-title'>
                                    02 / 2023
                                </h1>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Table 
                        {...tableProps}
                        className="savings_new_table"
                        columns={tablecolums} 
                        dataSource={tablerecords} 
                        rowClassName={(record, index) => record.type === 'footer' ? 'savings-table-footer' : ''}
                        pagination={false}
                    />
                    <Button 
                        type="submit"
                        style={{ background: "#84aee7", color: "#fff", float: "right", margin: "5px" }}
                    >Submit</Button>
                </Col>
            </Row>
        </>
    )
}

export default EditBudgetPlanning;
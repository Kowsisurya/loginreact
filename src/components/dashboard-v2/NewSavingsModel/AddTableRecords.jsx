import { Table, Input, Select, DatePicker, Button } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const { TextArea } = Input;

const AddTableRecords = () => {

  const {  environmentList, applicationList } = useSelector((state) => state.constimize);

  const [tablerecords, setTableRecords] = useState([{
    key: 1,
    application: '',
    environment: '',
    account:'',
    identified: '',
    eligibility: '',
    potential: '',
    implemented: '',
    realised: '',
    recommendation: '',
    details: '',
    identifieddateyear: "",
    potentialdateyear: "",
    realiseddateyear: "",
    eligibilitydateyear: "",
    type:"data",
    add:"add"
  }]);
  const [tablecolums, setTableColums] = useState([]);
  const dispatch = useDispatch();

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
                      width: "100%",
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
                      width: "100%",
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
                <Select
                    showSearch
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[{
                      value: 'AmazonCloudFront',
                      label: 'AmazonCloudFront',
                    }]}
                />
              )  
        }
      },
      {
        title: 'Identified Savings/Month',
        dataIndex: 'identified',
        key: 'identified',
        render: (record) => {
              return (
                <Input 
                  style={{
                    width: "100%",
                  }}
                  prefix="$"
                 />
              )  
        },
      },
      {
          title: 'Date',
          dataIndex: 'month_year',
          key: 'month_year',
          render: (record) => {
                return (
                  <>
                    <DatePicker  style={{
                          width: "100%",
                        }}
                        picker="month" />
                  </>
                )  
          }
      },
      {
          title: 'Eligibility',
          dataIndex: 'eligibility',
          key: 'eligibility',
          render: (record) => {
                return (
                  <>
                     <Select
                        showSearch
                        style={{
                          width: "100%",
                        }}
                        placeholder="Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                          {
                            value: "Yes",
                            label: "Yes",
                          },
                          {
                            value: "No",
                            label: "No",
                          }
                        ]}
                    />
                  </>
                )  
          }
         
        },
      {
        title: 'Potential Savings/Month',
        key: 'potential',
        dataIndex: 'potential',
        render: (record) => {
              return (
                <>
                  <Input 
                    style={{
                      width: "100%",
                    }}
                    prefix="$"
                    disabled 
                  />
                </>
              )  
        }
      },
      {
        title: 'Date',
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
          title: 'Realised Savings/Annum',
          dataIndex: 'realised',
          key: 'realised',
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
        title: 'Date',
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
      title: 'Implemented',
      dataIndex: 'implemented',
      key: 'implemented',
      render: (record) => {
            return (
              <>
                 <Select
                    showSearch
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: "Yes",
                        label: "Yes",
                      },
                      {
                        value: "No",
                        label: "No",
                      }
                    ]}
                />
              </>
            )  
      }
     
    },
      {
          title: 'Recommendation',
          dataIndex: 'recommendation',
          key: 'recommendation',
          render: (record) => {
                return (
                  <>
                    <Input 
                    style={{
                      width: "100%",
                    }}
                    disabled 
                    value="identified"
                  />
                  </>
                )  
          }
      },
      {
          title: 'Details',
          dataIndex: 'details',
          key: 'details',
          render: (record) => {
                return (
                  <>
                    <TextArea 
                    
                    />
                  </>
                )  
          }
      },
      {
          title: ' ',
          dataIndex: 'add',
          key: 'add',
          render: (record, index) => {
            var addicon = '';
            if(index.key == tablerecords.length){
             
              
              addicon = <div onClick={() => addNewRow()}>
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
            }

            return (
                <>
                {addicon}
                <div>
                <iconify-icon 
                    icon="material-symbols:edit-outline"
                    class="table-add-records-icon"
                  ></iconify-icon>
                </div>
              </>  
            )
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
      identified: '',
      eligibility: '',
      implemented:'',
      potential: '',
      realised: '',
      recommendation: '',
      details: '',
      type:"data",
      add:"add"
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
        <div className='table-full-screen-width'>
          <Table 
                {...tableProps}
                className="savings_new_table"
                columns={tablecolums} 
                dataSource={tablerecords} 
                rowClassName={(record, index) => record.type === 'footer' ? 'savings-table-footer' : ''}
                pagination={false}
            />
        </div>
        <br></br>
            <Button 
              type="submit"
              style={{ background: "#84aee7", color: "#fff", float: "right", marginRight: "90px" }}
              >Submit</Button>
        </>
    )
}
export default AddTableRecords;
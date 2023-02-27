import React, { useEffect, useState } from "react";
import { Fragment } from "react";

// import Table from "material-ui/Table/Table";
// import { DataGrid } from '@mui/x-data-grid';
import { Table } from "react-bootstrap";

const SavingsModelTable = (props) => {
    const [tableData, setTableData] = useState([]);
    const padding_condition = 1;
    return (
        <>
            <div className="saving-table-scroll">
                <Table responsive className="savings-table-table table-scroll">
                    <thead>
                            {/* <th className="savings-table-header saving-table-application">  Application   </th>
                            <th className="savings-table-header">  Pricing Model  </th>
                            <th className="savings-table-header">  Spend  </th>
                            <th className="savings-table-header"> Actual Savings </th>
                            <th className="savings-table-header">  Potential Savings  </th> */}
                              <tr className="savingModelTableStyle">
                                    <th className="savingsModelTableBody savingsModelTableBody-head saving-table-application saving-table-padding"> <div className="table-in-data">Application</div> </th>
                                    <th className="savingsModelTableBody savingsModelTableBody-head saving-table-padding"> <div className="table-in-data">Pricing Model</div> </th>
                                    <th className="savingsModelTableBody savingsModelTableBody-head saving-table-padding"> <div className="table-in-data">Spend</div></th>
                                    <th className="savingsModelTableBody savingsModelTableBody-head saving-table-padding"><div className="table-in-data">Actual Savings</div> </th>
                                    <th className="savingsModelTableBody savingsModelTableBody-head saving-table-padding"> <div className="table-in-data">Potential Savings</div> </th>
                                </tr>
                        
                    </thead>
                    <tbody className="savingsModelTableBody-tbody body-half-screen">
                        {/* {
                            tableData && tableData.length > 0 && tableData.map((item, index) => {
                                return (<tr key={index} className="savingModelTableStyle">
                                    <td className="savingsModelTableBody"> {item.application} </td>
                                    <td className="savingsModelTableBody"> {item.pricingmodel} </td>
                                    <td className="savingsModelTableBody"> {item.spend} </td>
                                    <td className="savingsModelTableBody"> {item.actualsavings} </td>
                                    <td className="savingsModelTableBody"> {item.potentialsavings} </td>
                                </tr>)
                            })
                        } */}

                                <tr className="savingModelTableStyle">
                                    
                                </tr>
                        {
                            props.tablerecords.map((item, index) => {
                                const padding_condition = index % 2;


                                return (
                                    <tr key={index} className="savingModelTableStyle">
                                    <td className={"savingsModelTableBody-tr saving-table-application " + (padding_condition === 1 ? 'saving-table-padding' : '')}>{item.application}</td>
                                    <td className={"savingsModelTableBody-tr " + (padding_condition === 1 ? 'saving-table-padding' : '')}> {item.pricemodel}</td>
                                    <td className={"savingsModelTableBody-tr " + (padding_condition === 1 ? 'saving-table-padding' : '')}>{item.spend === 0 ? 0 : `$${item.spend.toLocaleString(undefined, {maximumFractionDigits:2})}`}</td>
                                    <td className={"savingsModelTableBody-tr " + (padding_condition === 1 ? 'saving-table-padding' : '')}> {item.actual_saving === 0 ? 0 : `$${item.actual_saving.toLocaleString(undefined, {maximumFractionDigits:2})}`}</td>
                                    <td className={"savingsModelTableBody-tr " + (padding_condition === 1 ? 'saving-table-padding' : '')}> {item.potential_savings === 0 ? 0 : `$${item.potential_savings.toLocaleString(undefined, {maximumFractionDigits:2})}`} </td>
                                </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default SavingsModelTable



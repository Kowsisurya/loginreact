import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import VmApplicationListChart from './VmApplicationListChart';
import uparrow from "../../../assets/images/costimize/vm-table-up-arrow.png";

const dummy_table_records = [
    {
        name: "agency-coastalcorp-nprd",
        size: "m5.large",
        ram: "8 GiB",
        core: "2",
        storage: "350 GB",
        utilization: "50%",
        savings_opportunity: "243",
        spend_trend: [
            {month: "jan", spend: 2000},
            {month: "feb", spend: 12000},
            {month: "mar", spend: 21000},
            {month: "apr", spend: 6000},
        ]
    },{
        name: "agency-costplus-nprd",
        size: "r5.large",
        ram: "8 GiB",
        core: "2",
        storage: "850 GB",
        utilization: "50%",
        savings_opportunity: "432",
        spend_trend: [
            {month: "jan", spend: 2000},
            {month: "feb", spend: 12000},
            {month: "mar", spend: 21000},
            {month: "apr", spend: 6000},
        ]
    },{
        name: "agency-devopstest-nprd",
        size: "r5.xlarge",
        ram: "16 GiB",
        core: "2",
        storage: "950 GB",
        utilization: "50%",
        savings_opportunity: "322",
        spend_trend: [
            {month: "jan", spend: 2000},
            {month: "feb", spend: 12000},
            {month: "mar", spend: 21000},
            {month: "apr", spend: 6000},
        ]
    },{
        name: "agency-coastalcorp-nprd",
        size: "m5.large",
        ram: "32 GiB",
        core: "1",
        storage: "350 GB",
        utilization: "70%",
        savings_opportunity: "243",
        spend_trend: [
            {month: "jan", spend: 2000},
            {month: "feb", spend: 12000},
            {month: "mar", spend: 21000},
            {month: "apr", spend: 6000},
        ]
    },
]

const VmApplicationList = (props) => {
    const[tablerecords, setTableRecords] = useState(dummy_table_records)
    const [sortlist,setSortList] = useState({
        savingsopportunity: "top",
        utilization: "top",
        storage: "top",
        core: "top",
        ram: "top",
        size: "top",
        name: "top"
    })
    useEffect(() =>{
        // console.log(tablerecords);

    },[props])
    const tableSort = (type) => {
        if(type === "savingsopportunity"){
            if(sortlist.savingsopportunity === "top"){
                var condition = "savings_opportunity";
                setTableRecords([...tablerecords].sort((a, b) => (a.savings_opportunity.toLowerCase() > b.savings_opportunity.toLowerCase() ? -1 : 1)));
                setSortList({savingsopportunity:"bottom"});
            }else{
                setTableRecords([...tablerecords].sort((a, b) => (a.savings_opportunity.toLowerCase() < b.savings_opportunity.toLowerCase() ? -1 : 1)));
                setSortList({savingsopportunity:"top"});
            }
        }else if(type === "utilization"){
            if(sortlist.utilization === "top"){
                setTableRecords([...tablerecords].sort((a, b) => (a.utilization.toLowerCase() > b.utilization.toLowerCase() ? -1 : 1)));
                setSortList({utilization:"bottom"});
            }else{
                setTableRecords([...tablerecords].sort((a, b) => (a.utilization.toLowerCase() < b.utilization.toLowerCase() ? -1 : 1)));
                setSortList({utilization:"top"});
            }
        }else if(type === "storage"){
            if(sortlist.storage === "top"){
                setTableRecords([...tablerecords].sort((a, b) => (a.storage.toLowerCase() > b.storage.toLowerCase() ? -1 : 1)));
                setSortList({storage:"bottom"});
            }else{
                setTableRecords([...tablerecords].sort((a, b) => (a.storage.toLowerCase() < b.storage.toLowerCase() ? -1 : 1)));
                setSortList({storage:"top"});
            }
        }else if(type === "core"){
            if(sortlist.core === "top"){
                setTableRecords([...tablerecords].sort((a, b) => (a.core.toLowerCase() > b.core.toLowerCase() ? -1 : 1)));
                setSortList({core:"bottom"});
            }else{
                setTableRecords([...tablerecords].sort((a, b) => (a.core.toLowerCase() < b.core.toLowerCase() ? -1 : 1)));
                setSortList({core:"top"});
            }
        }else if(type === "ram"){
            if(sortlist.ram === "top"){
                setTableRecords([...tablerecords].sort((a, b) => (a.ram.toLowerCase() > b.ram.toLowerCase() ? -1 : 1)));
                setSortList({ram:"bottom"});
            }else{
                setTableRecords([...tablerecords].sort((a, b) => (a.ram.toLowerCase() < b.ram.toLowerCase() ? -1 : 1)));
                setSortList({ram:"top"});
            }
        }else if(type === "size"){
            if(sortlist.size === "top"){
                setTableRecords([...tablerecords].sort((a, b) => (a.size.toLowerCase() > b.size.toLowerCase() ? -1 : 1)));
                setSortList({size:"bottom"});
            }else{
                setTableRecords([...tablerecords].sort((a, b) => (a.size.toLowerCase() < b.size.toLowerCase() ? -1 : 1)));
                setSortList({size:"top"});
            }
        }else if(type === "name"){
            if(sortlist.name === "top"){
                setTableRecords([...tablerecords].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)));
                setSortList({name:"bottom"});
            }else{
                setTableRecords([...tablerecords].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)));
                setSortList({name:"top"});
            }
        }
    }

    return(
        <>
            {/* <ul className="cd-accordion__sub cd-accordion__sub--l2">  
                <li className="cd-accordion__item cd-accordion__item--has-children">
                    <a className="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)">
                        <span className='vm-asset-label-span'>  */}
                            <Row className='vm-asset-table-body-list '> 
                                <Col xs="3" sm='3' md='3' lg="3" xl="3"  className='vm-asset-table-down-product-title vm-asset-table-body-main-title  application-list-title'>
                                {props.vmexpanddetails.application}(27)</Col>
                                <Col xs="9" sm='9' md='9' lg="9" xl="9" >
                                    <div className='vm-table-main-body'>
                                        <div className='vm-table-body'>
                                            <Table responsive="sm" className='vm-application-table vm-application-table-scroll'>
                                                <thead className='vm-apllication-table-head'>
                                                    <tr className='vm-application-table-head-tr'>
                                                        <th className='vm-application-table-head-th application-first-title vm-application-table-head-name' onClick={() => tableSort("name")}>Name <iconify-icon icon="carbon:caret-sort" class="vm-application-table-sort-icon"></iconify-icon></th>
                                                        <th className='vm-application-table-head-th vm-application-table-head-size' onClick={() => tableSort("size")}>Size <iconify-icon icon="carbon:caret-sort" class="vm-application-table-sort-icon"></iconify-icon></th>
                                                        <th className='vm-application-table-head-th vm-application-table-head-ram' onClick={() => tableSort("ram")}>RAM <iconify-icon icon="carbon:caret-sort" class="vm-application-table-sort-icon"></iconify-icon></th>
                                                        <th className='vm-application-table-head-th vm-application-table-head-core' onClick={() => tableSort("core")}>Core <iconify-icon icon="carbon:caret-sort" class="vm-application-table-sort-icon"></iconify-icon></th>
                                                        <th className='vm-application-table-head-th vm-application-table-head-storage' onClick={() => tableSort("storage")}>Storage <iconify-icon icon="carbon:caret-sort" class="vm-application-table-sort-icon"></iconify-icon></th>
                                                        <th className='vm-application-table-head-th vm-application-table-head-utilization' onClick={() => tableSort("utilization")}>Utilization <iconify-icon icon="carbon:caret-sort" class="vm-application-table-sort-icon"></iconify-icon></th>
                                                        <th className='vm-application-table-head-th vm-application-table-head-savings' onClick={() => tableSort("savingsopportunity")}>Savings Opportunity <iconify-icon icon="carbon:caret-sort" class="vm-application-table-sort-icon"></iconify-icon></th>
                                                        <th className='vm-application-table-head-th application-last-title vm-application-table-head-chart'>Spend Trend</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='vm-application-table-body vm-table-body-half-screen'>
                                                    {
                                                        tablerecords.map((data) => 
                                                            <>
                                                                <tr className='vm-application-table-body-tr'>
                                                                    <td className='vm-application-table-body-td vm-application-table-td-left vm-application-table-head-name'>{data.name}</td>
                                                                    <td className='vm-application-table-body-td vm-application-table-td-left vm-application-table-head-size'>{data.size}</td>
                                                                    <td className='vm-application-table-body-td vm-application-table-head-ram'>{data.ram}</td>
                                                                    <td className='vm-application-table-body-td vm-application-table-head-core'>{data.core}</td>
                                                                    <td className='vm-application-table-body-td vm-application-table-head-storage'>{data.storage}</td>
                                                                    <td className='vm-application-table-body-td vm-application-table-head-utilization'>{data.utilization}</td>
                                                                    <td className='vm-application-table-body-td vm-application-table-head-savings'>$ {data.savings_opportunity}</td>
                                                                    <td className='vm-application-table-body-td vm-application-table-chart vm-application-table-head-chart'><VmApplicationListChart records={data.spend_trend} /></td>
                                                                </tr>
                                                            </>
                                                        )
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {/* <div className='vm-application-asset-spend-border-bottom'></div> */}
                        {/* </span>  
                    </a>
                </li>
            </ul> */}
        </>
    )
}

export default VmApplicationList;
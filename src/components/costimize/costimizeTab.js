import { useState } from 'react';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Tab from "./components/Tab";
import TabsPanel from "./components/TabsPanel";
import "./style.css";
import CostimizeRow2 from './costimizerow2';
import BarChart from './barChart';
import DonutChart from './donutChart';
import Row1 from './row1';
import Row2 from './row2';
import TablesDetails from './tables';
import SavingTablesDetails from './savingTables';
import SavingCardsRow1 from './SavingCards';
import Row3 from './row3';
import CostimizeAssetTablesDetails from './costimizeAssetstab';
import { MDBDropdown, MDBDropdownMenu, MDBIcon, MDBCheckbox, MDBDropdownToggle } from 'mdb-react-ui-kit';
import PieChart from './pieChart';
import Row1new from './Row1new';
import Row2new from './Row2new';



function AssestsTab() {
    const [basicActive, setBasicActive] = useState('tab1');
    const [dropsuggestionDisplay, setdropsuggestionDisplay] = useState("false");


    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };


    const handleClick = () => {
        console.log("inside")
        setdropsuggestionDisplay("true");

        console.log(dropsuggestionDisplay);
    };


    return (
        <div className='container-margin'>
            <div className="section-1" ><Row1new /></div>
            <div className="section-2" ><Row2new /></div>
            {/* <div class="row" ><Row1 /></div> */}
            {/* <div class="row"><Row2 /></div><br /> */}
            <div class="row mt-1">
                <TabsPanel>
                    <Tab title="Assests/Spend"
                        icon="fa fa-solid fa-desktop">
                        <div className="w-100">
                            <div className="form-group col-xs-12 col-sm-10 col-md-6 col-lg-12 mt-3">
                                <div className="d-lg-flex w-15">
                                    <div className='col-2'>
                                        <input
                                            className="SearchInput"
                                            type="text"
                                            placeholder="Search by app"
                                        />
                                    </div>
                                    <div className='col-1'>
                                        <ReactHTMLTableToExcel
                                            id="test-table-xls-button"
                                            className="btnSecondaryexcel mr-3 poppins-font"
                                            table="table-to-xls"
                                            sheet="tablexls"
                                            buttonText="Export to Excel"
                                        />
                                    </div>
                                    <div className='col-5'>
                                        <Row3 />
                                    </div>
                                    <div className='col-6'>
                                        <MDBDropdown>
                                            <MDBIcon className='me-1 pl-2' fas icon="ellipsis-h" onClick={handleClick} />
                                            {
                                                dropsuggestionDisplay === "true" ? (<div >
                                                    <div>

                                                    </div>
                                                    <p></p>
                                                </div>) : (<></>)
                                            }
                                        </MDBDropdown>

                                    </div>
                                </div>

                                <div className='d-lg-flex w-100'>
                                    <div className='w-75 p-3'>
                                        <TablesDetails />
                                    </div>&nbsp;&nbsp;
                                    <div className='w-15 p-3 aligns border'>
                                        <BarChart />
                                        <PieChart />
                                    </div>&nbsp;&nbsp;
                                    <div className='w-10 p-3 aligns'>
                                        <MDBIcon className='center' fas icon="caret-left" style={{ marginTop: '10rem' }} />

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* </div> */}
                    </Tab>
                    <Tab
                        title="Savings Models"
                        icon="fa fa-solid fa-piggy-bank">
                        <div className="d-lg-flex d-md-flex d-xs-block">
                            <div className="w-100">
                                <div className="form-group col-lg-12 col-md-6 col-xs-12 mt-2">
                                    <div className="d-lg-flex w-15">
                                        <div className='col-2'>
                                            <input
                                                className="SearchInput "
                                                type="text"
                                                placeholder="Search by app"
                                            />
                                        </div>
                                        <div className='col-2'>
                                            <ReactHTMLTableToExcel
                                                id="test-table-xls-button"
                                                className="floatRight btnSecondary mr-3 poppins-font"
                                                table="table-to-xls"
                                                sheet="tablexls"
                                                buttonText="Export to Excel"
                                            />
                                        </div>

                                    </div>
                                     <div className='d-lg-flex w-100'>
                                        <div className='w-75 p-3'>
                                        <SavingCardsRow1 /> <br/>
                                         <SavingTablesDetails />
                                        </div>&nbsp;&nbsp;
                                        <div className='w-15 p-3 aligns border'>
                                            <BarChart />
                                                <DonutChart />
                                        </div>&nbsp;&nbsp;
                                        <div className='w-10 p-3 aligns'>
                                            <MDBIcon className='center' fas icon="caret-left" style={{ marginTop: '10rem' }} />

                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </Tab>
                    {/* </Tab> */}
                    {/* <Tab eventKey="Third" title="Dashboard & Analysis" className="primary_blue shadow-sm div"> */}
                    <Tab icon=" fas fa-chart-line" title="Dashboard & Analysis"
                    >
                        <div className="d-lg-flex d-md-flex d-xs-block mt-4">
                            <div className="form-group col-lg-6 col-md-6 col-xs-12">
                                <label> Dashboard & Analysis </label>
                            </div>
                        </div>
                        {/* </Tab>
                        </Tabs> */}
                    </Tab>
                </TabsPanel>
            </div>
        </div >
        // <MDBContainer>
        //     <MDBRow>
        //          <CostimizeRow2 /> ;

        //     </MDBRow>
        //     <MDBRow>
        //         <MDBCol xs="12" sm='12' md='12' lg="10" xl="10">
        //           <div className='admin-content'>
        //                  <MDBTabs className='mb-3'>
        //                     <MDBTabsItem>
        //                         <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} >
        //                         <MDBIcon fas icon="briefcase" /> &nbsp; Assests/Spent
        //                         </MDBTabsLink>
        //                     </MDBTabsItem>
        //                     <MDBTabsItem>
        //                         <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
        //                             Savings Models
        //                         </MDBTabsLink>
        //                     </MDBTabsItem>
        //                     <MDBTabsItem>
        //                         <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
        //                             Dashboard & Analysis
        //                         </MDBTabsLink>
        //                     </MDBTabsItem>
        //                 </MDBTabs>

        //                 <MDBTabsContent>
        //                     <MDBTabsPane show={basicActive === 'tab1'}>
        //                         <MDBRow>
        //                             {/* {
        //                         listUsers.map(name => 
        //                             <MDBCol xs="12" sm='12' md='12' lg="3" xl="3"> {renderTiles(name)} </MDBCol>
        //                         )
        //                     } */}
        //                         </MDBRow>
        //                     </MDBTabsPane>
        //                     <MDBTabsPane show={basicActive === 'tab2'}>
        //                         <MDBRow>
        //                             {/* {
        //                         listUsers.map(name => 
        //                             <MDBCol xs="12" sm='12' md='12' lg="3" xl="3"> {renderTiles(name)} </MDBCol>
        //                         )
        //                     } */}
        //                         </MDBRow>
        //                     </MDBTabsPane>
        //                     <MDBTabsPane show={basicActive === 'tab3'}>
        //                         <MDBRow>
        //                             {/* {
        //                         listUsers.map(name => 
        //                             <MDBCol xs="12" sm='12' md='12' lg="3" xl="3"> {renderTiles(name)} </MDBCol>
        //                         )
        //                     } */}
        //                         </MDBRow>
        //                     </MDBTabsPane>
        //                 </MDBTabsContent>
        //             </div>
        //         </MDBCol>
        //         {/* <MDBCol xs="12" sm='12' md='12' lg="2" xl="2">
        //         <div className='admin-content'>
        //             <MDBBtn>+ Add new customer</MDBBtn>
        //         </div>
        //     </MDBCol> */}
        //     </MDBRow>
        // </MDBContainer>
    );
}
export default AssestsTab;
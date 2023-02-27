import Select, { components } from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBDropdown, MDBDropdownMenu, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { React, useEffect, useState } from "react";

import './style.css';
import './costimize.css';
import { CleaningServices } from '@mui/icons-material';




export default function Row1() {

  const [environmentsuggestionDisplay, setenvironmentsuggestionDisplay] = useState("false");
  const [cloudsuggestionDisplay, setcloudsuggestionDisplay] = useState("false");
  const [applicationsuggestionDisplay, setapplicationsuggestionDisplay] = useState("false");
  const [accountsuggestionDisplay, setaccountsuggestionDisplay] = useState("false");


  const onSearchClick = () => {
    console.log("inside")
    setenvironmentsuggestionDisplay("true");

    console.log(environmentsuggestionDisplay);
  };

  const oncloudSearchClick = () => {
    setcloudsuggestionDisplay("true");

    console.log(cloudsuggestionDisplay);
  };

  const handleCloudChange = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    setcloudsuggestionDisplay("false");
    console.log(cloudsuggestionDisplay);
  }

  const onapplicationSearchClick = () => {
    setapplicationsuggestionDisplay("true");

    console.log(applicationsuggestionDisplay);
  };

  const handleapplicationChange = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    setapplicationsuggestionDisplay("false");
    console.log(applicationsuggestionDisplay);
  }

  const onaccountSearchClick = () => {
    setaccountsuggestionDisplay("true");

    console.log(accountsuggestionDisplay);
  };

  const handleaccountChange = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    setaccountsuggestionDisplay("false");
    console.log(accountsuggestionDisplay);
  }
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    setenvironmentsuggestionDisplay("false");
    console.log(environmentsuggestionDisplay);

  };

  const onCloseClick = () => {
    setenvironmentsuggestionDisplay("false");

  }

  const environmentListOptions = [
    { value: 'All Environmnet', label: 'All Environmnet' },
    { value: 'Non-Production', label: 'Non-Production' },
    { value: 'Sandbox ', label: 'Sandbox' },
    { value: 'DevOps', label: 'DevOps' },
    { value: 'Backup', label: 'Backup' },
    { value: 'Sharedsvc', label: 'Sharedsvc' },
    { value: 'Network ', label: 'Network' },
    { value: 'Untagged', label: 'Untagged' },
    { value: 'Production', label: 'Production' }
  ]

  const Placeholder = props => {
    return <components.Placeholder {...props} />;
  };

  const CaretDownIcon = () => {
    return <FontAwesomeIcon icon="fa-sharp fa-solid fa-xmark" />;
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };





  return (
    <>
      <div className="poppins-font d-flex" >
        <div>
          <button class="btndropdwon" onClick={onSearchClick}> All Environments &nbsp;
            <MDBIcon className='red' fas icon="times" onClick={onCloseClick} /></button>
          {
            environmentsuggestionDisplay === "true" ? (<div >
              <input
                className='poppins-font'
                type="checkbox"
                name="All Environmnet"
                value="Production"
                onChange={handleChange}
              />Production <br />
              <input

                type="checkbox"
                name="All Environmnet"
                value="Non-Production"
                onChange={handleChange}
              />Non-Production<br />
              <input

                type="checkbox"
                name="All Environmnet"
                value="Sandbox"
                onChange={handleChange}
              />Sandbox
            </div>) : (<></>)
          }
        </div> &nbsp;&nbsp;

        <div >
          <button class="btndropdwon" onClick={oncloudSearchClick}> All Cloud &nbsp;
            <MDBIcon className='red' fas icon="times" /></button>
          {
            cloudsuggestionDisplay === "true" ? (<div >
              <input

                type="checkbox"
                name="All Cloud"
                value="AWS"
                onChange={handleCloudChange}
              />AWS <br />
              <input

                type="checkbox"
                name="All Cloud"
                value="Azure"
                onChange={handleCloudChange}
              />Azure<br />
              <input

                type="checkbox"
                name="All Cloud"
                value="GCP"
                onChange={handleCloudChange}
              />GCP
            </div>) : (<></>)
          }
        </div>&nbsp;&nbsp;


        <div >
          <button class="btndropdwon"  onClick={onapplicationSearchClick}> All Applications &nbsp;
            <MDBIcon className='red' fas icon="times" /></button>
            {
            applicationsuggestionDisplay === "true" ? (<div >
              <input

                type="checkbox"
                name="All Applications"
                value="CRM"
                onChange={handleapplicationChange}
              />CRM <br />
              <input

                type="checkbox"
                name="All Applications"
                value="SRM"
                onChange={handleapplicationChange}
              />SRM<br />
              <input

                type="checkbox"
                name="All Applications"
                value="Oracle"
                onChange={handleapplicationChange}
              />Oracle
            </div>) : (<></>)
          }
        </div>&nbsp;&nbsp;
        <div >
          <button class="btndropdwon"  onClick={onaccountSearchClick}> All Accounts &nbsp;
            <MDBIcon className='red' fas icon="times" /></button>
            {
            accountsuggestionDisplay === "true" ? (<div >
              <input

                type="checkbox"
                name="All Accounts"
                value="All Accounts"
                onChange={handleaccountChange}
              />All Accounts <br />
              <input

                type="checkbox"
                name="All Accounts"
                value="Production Account"
                onChange={handleaccountChange}
              />Production Account<br />
              <input

                type="checkbox"
                name="All Accounts"
                value="Non Production Account"
                onChange={handleaccountChange}
              />Non Production Account
            </div>) : (<></>)
          }
        </div>&nbsp;&nbsp;
        <div >
          <button class="btndropdwon"> December 2022 &nbsp;
            <MDBIcon className='red' fas icon="times" /></button>
        </div>&nbsp;&nbsp;
        <button className="btnSecondary" > Clear all filters </button>
      
      </div>
      <hr style={{width:'50%',textalign:'left',marginleft:'0'}}/>

      {/* 
           {/*             
          <Select
            components={{ Placeholder, DropdownIndicator }}
            defaultValue="All"
            isMulti
            name="colors1"
            options={environmentListOptions}
            className='mr-3'
          // classNamePrefix="Selects"
          /> 

           {/* <Select
            components={{ Placeholder, DropdownIndicator }}
            defaultValue={[environmentListOptions[0]]}
            isMulti
            name="colors2"
            options={environmentListOptions}
            className='mr-3'
          // classNamePrefix="Selects"
          /> 
        
        <div className=" mt-3 width75 borderbottom">
      <div className="d-flex">
              
   <MDBDropdown >
     <MDBDropdownToggle className="fliter" color='link'>All Environment</MDBDropdownToggle>
     <MDBDropdownMenu>
     <MDBCheckbox  value=''  label='Production' />
     <MDBCheckbox  value=''  label='Non-Production'  />
     <MDBCheckbox  value=''  label='Sandbox'  />
     
     </MDBDropdownMenu>
   </MDBDropdown>
  
<MDBDropdown>
       <MDBDropdownToggle color='link'>All Cloud</MDBDropdownToggle>
       <MDBDropdownMenu>
       <MDBCheckbox  value=''  label='AWS' />
     <MDBCheckbox  value=''  label='Azure'  />
     <MDBCheckbox  value=''  label='GCP'  />
       </MDBDropdownMenu>
     </MDBDropdown>

     <MDBDropdown>
       <MDBDropdownToggle color='link'>All Applications</MDBDropdownToggle>
       <MDBDropdownMenu>
       <MDBCheckbox  value=''  label='CRM' />
     <MDBCheckbox  value=''  label='SRM'  />
     <MDBCheckbox  value=''  label='Oracle'  />
     <MDBCheckbox  value=''  label='HRMS' />
     <MDBCheckbox  value=''  label='ERP'  />

       </MDBDropdownMenu>
     </MDBDropdown>

     <MDBDropdown>
       <MDBDropdownToggle color='link'>All Accounts</MDBDropdownToggle>
       <MDBDropdownMenu>
       <MDBCheckbox  value=''  label='All Accounts' />
     <MDBCheckbox  value=''  label='Production Account'  />
     <MDBCheckbox  value=''  label='Non Production Account'  />
       </MDBDropdownMenu>
</MDBDropdown>
       <MDBDropdown>
       <MDBDropdownToggle color='link'> December 2022</MDBDropdownToggle>
       <MDBDropdownMenu>
       <MDBCheckbox  value=''  label='All Accounts' />
     <MDBCheckbox  value=''  label='Production Account'  />
     <MDBCheckbox  value=''  label='Non Production Account'  />
       </MDBDropdownMenu> */}
      {/*       
     </MDBDropdown>
     
       <button className="btnSecondary" > Clear all filters </button>
     </div>
    </div>
      */}
    </>
  );
}

//     <>
//   const [basicModal, setBasicModal] = useState(false);
//   const [checkedAll, setCheckedAll] = useState(false);
//   const [checked, setChecked] = useState({});

//   const environmentListOptions = [
//     { value: 'Non-Production', label: 'Non-Production' },
//     { value: 'Sandbox ', label: 'Sandbox' },
//     { value: 'DevOps', label: 'DevOps' },
//     { value: 'Backup', label: 'Backup' },
//     { value: 'Sharedsvc', label: 'Sharedsvc' },
//     { value: 'Network ', label: 'Network' },
//     { value: 'Untagged', label: 'Untagged' },
//     { value: 'Production', label: 'Production' }
//   ]

//   const cloudList = [
//     { value: 'AWS', label: 'AWS' },
//     { value: 'Azure ', label: 'Azure' },
//     { value: 'GCP', label: 'GCP' }

//   ]

//   const applicationList = [
//     { value: 'ERM', label: 'ERM' },
//     { value: 'CRM ', label: 'CRM' },
//     { value: 'SRM', label: 'SRM' },
//     { value: 'Salesforce', label: 'Salesforce' }
//   ]

//   const accountList = [
//     { value: 'All Accounts', label: 'All Accounts' },
//     { value: 'Production Account ', label: 'Production Account' },
//     { value: 'Non Production Account', label: 'Non Production Account' }

//   ]

//   const selectAll = (value) => {
//     console.log(value);
//     setCheckedAll(value);
//     setChecked((prevState) => {
//       const newState = { ...prevState };
//       for (const inputName in newState) {
//         newState[inputName] = value;
//       }

//       return newState;
//     });
//   };

//   return (
//     <>


//     {/* <nav> */}
//                   {/* <div className="navbar-nav navFont"> */}
//                     <Navbar expand="lg" className="">
//                         {/* <Container> */}
//        <div className="mr-4 d-flex">
//         <NavDropdown
//           title={
//             <span className="colorBlack mb-1">All Environment</span>
//           }
//           id="basic-nav-dropdown"
//           className="mr-3 colorBlack"
//         >
//           <div className="splitNavItems">
//             <NavDropdown.Item>
//               <input
//                 className="mr-2"
//                 type="checkbox"
//                 name="environment"
//                 value=""
//                 onChange={(event) =>
//                   selectAll(event.target.checked)
//                 }
//                 checked={checkedAll}
//               />
//               Non-Production

//             </NavDropdown.Item>

//             <NavDropdown.Item>

//               User management

//             </NavDropdown.Item>

//             <NavDropdown.Item>

//               Billing

//             </NavDropdown.Item>

//           </div>
//         </NavDropdown>
//         </div>
//         <div className="mr-4 d-flex">

//         <NavDropdown
//           title={
//             <span className="colorBlack mb-1">All Cloud</span>
//           }
//           id="basic-nav-dropdown"
//           className="mr-3 colorBlack"
//         >
//           <div className="splitNavItems">
//             <NavDropdown.Item>
//               <input
//                 className="mr-2"
//                 type="checkbox"
//                 name="environment"
//                 value=""
//                 onChange={(event) =>
//                   selectAll(event.target.checked)
//                 }
//                 checked={checkedAll}
//               />
//               Non-Production

//             </NavDropdown.Item>

//             <NavDropdown.Item>

//               User management

//             </NavDropdown.Item>

//             <NavDropdown.Item>

//               Billing

//             </NavDropdown.Item>

//           </div>
//         </NavDropdown>
//         </div>
//         <NavDropdown
//           title={
//             <span className="colorBlack mb-1">All Application</span>
//           }
//           id="basic-nav-dropdown"
//           className="mr-3 colorBlack"
//         >
//           <div className="splitNavItems">
//             <NavDropdown.Item>
//               <input
//                 className="mr-2"
//                 type="checkbox"
//                 name="environment"
//                 value=""
//                 onChange={(event) =>
//                   selectAll(event.target.checked)
//                 }
//                 checked={checkedAll}
//               />
//               Non-Production

//             </NavDropdown.Item>

//             <NavDropdown.Item>
//               {/* <Link
//                                         to="/manageusers"
//                                         className="text-decoration-none colorBlack"
//                                       > */}
//               {/* <FaUserCog className="mr-3 colorBlue mb-2 mt-1 fontName" /> */}
//               User management
//               {/* </Link> */}
//             </NavDropdown.Item>

//             <NavDropdown.Item>

//               Billing

//             </NavDropdown.Item>

//           </div>
//         </NavDropdown>
//         <NavDropdown
//           title={
//             <span className="colorBlack mb-1">All Accounts</span>
//           }
//           id="basic-nav-dropdown"
//           className="mr-3 colorBlack"
//         >
//           <div className="splitNavItems">
//             <NavDropdown.Item>
//               <input
//                 className="mr-2"
//                 type="checkbox"
//                 name="environment"
//                 value=""
//                 onChange={(event) =>
//                   selectAll(event.target.checked)
//                 }
//                 checked={checkedAll}
//               />
//               Non-Production

//             </NavDropdown.Item>

//             <NavDropdown.Item>

//               User management

//             </NavDropdown.Item>

//             <NavDropdown.Item>

//               Billing

//             </NavDropdown.Item>

//           </div>
//         </NavDropdown>
//         {/* </Container> */}
//         </Navbar>
//         {/* </li> */}
//         {/* </div> */}
//         {/* </nav> */}


//       {/* <div className="mt-4 ms-3 me-3 ">
//         <div className="mt-1">

//           <table>
//             <tr>
//               <td>
//                 <Select
//                   isMulti
//                   // className="col-lg-12 col-md-6 col-xs-12"
//                   name="environment"
//                   options={environmentListOptions}
//                 // onChange={(selectedOption) => {
//                 //     setSelectedOption((prevState) => (
//                 //         { ...prevState, location: selectedOption }))
//                 // }}
//                 // ref={ref => {
//                 //     setSelectRef(ref);
//                 // }}
//                 />
//               </td>
//               <td>
//                 <Select
//                   isMulti
//                   // className="col-lg-12 col-md-6 col-xs-12"
//                   name="cloud"
//                   options={cloudList}
//                 // onChange={(selectedOption) => {
//                 //     setSelectedOption((prevState) => (
//                 //         { ...prevState, location: selectedOption }))
//                 // }}
//                 // ref={ref => {
//                 //     setSelectRef(ref);
//                 // }}
//                 />
//               </td>
//               <td>
//                 <Select
//                   isMulti
//                   // className="col-lg-12 col-md-6 col-xs-12"
//                   name="application"
//                   options={applicationList}
//                 // onChange={(selectedOption) => {
//                 //     setSelectedOption((prevState) => (
//                 //         { ...prevState, location: selectedOption }))
//                 // }}
//                 // ref={ref => {
//                 //     setSelectRef(ref);
//                 // }}
//                 />
//               </td>
//               <td>
//                 <Select
//                   isMulti
//                   // className="col-lg-12 col-md-6 col-xs-12"
//                   name="account"
//                   options={accountList}
//                 // onChange={(selectedOption) => {
//                 //     setSelectedOption((prevState) => (
//                 //         { ...prevState, location: selectedOption }))
//                 // }}
//                 // ref={ref => {
//                 //     setSelectRef(ref);
//                 // }}
//                 />
//               </td>
//             </tr>
//             <tr>

//             </tr>
//           </table>
//         </div>
//       </div> */}

//     </>
//   );
// }




// <MDBDropdown group>
//   <MDBDropdownToggle color='primary'>Action</MDBDropdownToggle>
//   <MDBDropdownMenu>
//     <MDBDropdownItem link>Action</MDBDropdownItem>
//     <MDBDropdownItem link>Another action</MDBDropdownItem>
//     <MDBDropdownItem link>Something else here</MDBDropdownItem>
//   </MDBDropdownMenu>
// </MDBDropdown>
// <MDBDropdown group>
//   <MDBDropdownToggle color='success'>Action</MDBDropdownToggle>
//   <MDBDropdownMenu>
//     <MDBDropdownItem link>Action</MDBDropdownItem>
//     <MDBDropdownItem link>Another action</MDBDropdownItem>
//     <MDBDropdownItem link>Something else here</MDBDropdownItem>
//   </MDBDropdownMenu>
// </MDBDropdown>

// <MDBDropdown group>
//   <MDBDropdownToggle color='warning'>Action</MDBDropdownToggle>
//   <MDBDropdownMenu>
//     <MDBDropdownItem link>Action</MDBDropdownItem>
//     <MDBDropdownItem link>Another action</MDBDropdownItem>
//     <MDBDropdownItem link>Something else here</MDBDropdownItem>
//   </MDBDropdownMenu>
// </MDBDropdown>

// <MDBDropdown group>
//   <MDBDropdownToggle color='info'>Action</MDBDropdownToggle>
//   <MDBDropdownMenu>
//     <MDBDropdownItem link>Action</MDBDropdownItem>
//     <MDBDropdownItem link>Another action</MDBDropdownItem>
//     <MDBDropdownItem link>Something else here</MDBDropdownItem>
//   </MDBDropdownMenu>
// </MDBDropdown>

// <MDBDropdown group>
//   <MDBDropdownToggle color='danger'>Action</MDBDropdownToggle>
//   <MDBDropdownMenu>
//     <MDBDropdownItem link>Action</MDBDropdownItem>
//     <MDBDropdownItem link>Another action</MDBDropdownItem>
//     <MDBDropdownItem link>Something else here</MDBDropdownItem>
//   </MDBDropdownMenu>
// </MDBDropdown>

// <MDBDropdown group>
//   <MDBDropdownToggle color='dark'>Action</MDBDropdownToggle>
//   <MDBDropdownMenu>
//     <MDBDropdownItem link>Action</MDBDropdownItem>
//     <MDBDropdownItem link>Another action</MDBDropdownItem>
//     <MDBDropdownItem link>Something else here</MDBDropdownItem>
//   </MDBDropdownMenu>
// </MDBDropdown>

// <MDBDropdown group className='shadow-0'>
//   <MDBDropdownToggle color='light'>Action</MDBDropdownToggle>
//   <MDBDropdownMenu>
//     <MDBDropdownItem link>Action</MDBDropdownItem>
//     <MDBDropdownItem link>Another action</MDBDropdownItem>
//     <MDBDropdownItem link>Something else here</MDBDropdownItem>
//   </MDBDropdownMenu>
// </MDBDropdown>


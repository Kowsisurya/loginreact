//  import React, { useEffect, useState } from "react";
// import Select from 'react-select';
// import { Modal } from "react-bootstrap";
// import { MDBIcon } from "mdb-react-ui-kit";


// export default function costimizerow1() {
//     //  const [selectRef, setSelectRef] = useState(null);
//     const [showConfigurationPopup, setShowConfigurationPopup] = useState(false);
//     const handleConfigurePopupClose = () => setShowConfigurationPopup(false);


    // const environmentListOptions = [
    //     { value: 'Non-Production', label: 'Non-Production' },
    //     { value: 'Sandbox ', label: 'Sandbox' },
    //     { value: 'DevOps', label: 'DevOps' },
    //     { value: 'Backup', label: 'Backup' },
    //     { value: 'Sharedsvc', label: 'Sharedsvc' },
    //     { value: 'Network ', label: 'Network' },
    //     { value: 'Untagged', label: 'Untagged' },
    //     { value: 'Production', label: 'Production' }
    // ]

    // const cloudList = [
    //     { value: 'AWS', label: 'AWS' },
    //     { value: 'Azure ', label: 'Azure' },
    //     { value: 'GCP', label: 'GCP' }
        
    // ]

    
    // const [selectedOption, setSelectedOption] = useState({
    //     environment: "All Environment",
       
    // });

 
//     return (
//         <>
        
//         <div>
//                 <Modal responsive centered show={showConfigurationPopup}>

//                     <Modal.Dialog className="w-75">

//                         <Modal.Header>
//                             <Modal.Title> </Modal.Title>
//                             <MDBIcon fas icon="briefcase" className="floatRight" onClick={handleConfigurePopupClose} />
//                         </Modal.Header>
//                         <Modal.Body>
//                             <div className="d-lg-flex d-md-block d-xs-block">
//                                 <div className="ml-1 mr-2 w-50">
//                                     <label>Environment </label>
//                                     <input
//                                   className="mr-2"
//                                   type="checkbox"
//                                   name=""
//                                   value=""
//                                 //   onChange={(event) =>
//                                 //     selectAll(event.target.checked)
//                                 //   }
//                                 //   checked={checkedAll}
//                                 />
//                                 <span className="names ml-2">Select All </span>
//                                 </div>

//                                </div>
//                         </Modal.Body>
//                         <Modal.Footer>
//                         </Modal.Footer>
//                     </Modal.Dialog>
//                 </Modal>
//             </div>
            
// <div className="mt-4 ms-3 me-3 ">
//                                 <div className="mt-1">
//                                     {/* <label> All Environment </label> */}
//                                     <Select
//                                         isMulti
//                                         // className="col-lg-12 col-md-6 col-xs-12"
//                                         name="environment"
//                                         options={environmentListOptions}
//                                         // onChange={(selectedOption) => {
//                                         //     setSelectedOption((prevState) => (
//                                         //         { ...prevState, location: selectedOption }))
//                                         // }}
//                                         // ref={ref => {
//                                         //     setSelectRef(ref);
//                                         // }}
//                                     />
//                                 </div>
//                                 <div className="mt-2">
//                                     {/* <label> All Cloud </label> */}
//                                     <Select
//                                         isMulti
//                                         name="cloud"
//                                         options={cloudList}
//                                         // onChange={(selectedOption) => setSelectedOption((prevState) => (
//                                         //     { ...prevState, industries: selectedOption }))}
//                                         // ref={ref => {
//                                         //     setSelectRef(ref);
//                                         // }}
//                                     />
//                                 </div>
//                                 </div>







// </>
// )
// }
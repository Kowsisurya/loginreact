import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MDBBtn } from 'mdb-react-ui-kit';

export default function Row3() {
  return (

    <>
      <div className="d-flex">
        <div>
          <button class="btndropdwon poppins-font"> All Services &nbsp;
            <MDBIcon className='red' fas icon="times" /></button></div>&nbsp;&nbsp;
        <div >
          <button class="btndropdwon poppins-font"> All DB &nbsp;
            <MDBIcon className='red' fas icon="times" /></button></div>&nbsp;&nbsp;
        <div >
          <button class="btndropdwon poppins-font"> All OS &nbsp;
            <MDBIcon className='red' fas icon="times" /></button></div>&nbsp;&nbsp;
        <div >
          <button class="btndropdwon poppins-font"> All Infra &nbsp;
            <MDBIcon className='red' fas icon="times" /></button>&nbsp;&nbsp;
        </div>

      </div>

    </>
  );
}

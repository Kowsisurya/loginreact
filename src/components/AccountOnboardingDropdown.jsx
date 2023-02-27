import React, { useState } from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBIcon, MDBCol } from 'mdb-react-ui-kit';
import Modal from './Modal';
import AWSAccountSettingForm from './AWSAccountSettingForm';

export default function AccountOnboardingDropdown() {
    const [flag, setFlag] = useState(false);
    const setCloseModal = () => {
        setFlag(false);
    }
  return (
    <MDBDropdown className='account-onboarding-dropdown'>
        <MDBDropdownToggle>
          <MDBIcon fas icon="cog" size='2x'/>
        </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link onClick={() => setFlag(true)}>Add</MDBDropdownItem>
        <MDBDropdownItem link>Activate</MDBDropdownItem>
        <MDBDropdownItem link>Deactivate</MDBDropdownItem>
        <MDBDropdownItem link>Delete</MDBDropdownItem>
      </MDBDropdownMenu>
          <Modal flag={flag} setCloseModal={ setCloseModal } content={<AWSAccountSettingForm />}/>
    </MDBDropdown>
  );
}
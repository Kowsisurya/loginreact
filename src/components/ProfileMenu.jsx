import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBBtn } from 'mdb-react-ui-kit';

export default function ProfileMenu() {
  return (
    <>
      <MDBDropdown dropdown group>
        <MDBDropdownToggle />
        <MDBDropdownMenu>
          <MDBDropdownItem link>Settings</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem link>Logout</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </>
  );
}
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBListGroup, MDBListGroupItem, MDBRipple,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,
  MDBSwitch,
  MDBCol
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";

function AdminActions() {
  const [basicActive, setBasicActive] = useState('tab1');
  const { userType, listUsers } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <MDBContainer>
        <MDBRow>
            
        </MDBRow>
      <MDBRow>
        <MDBCol xs="12" sm='12' md='8' lg="8" xl="8">
            <div style={{"marginTop": "35px", "paddingLeft": "126px"}}>
                <MDBListGroup style={{ minWidth: '22rem' }} light>
                    <MDBRipple>
                        <MDBListGroupItem tag='a' href action noBorders active aria-current='true' className='px-3 mb-4 plat_cursor_pointer' onClick={() => navigate('/user-mng')}>
                            User Management
                        </MDBListGroupItem>
                    </MDBRipple>
                    
                    {userType === 'master' ? (<>
                    {/* <MDBRipple>
                        <MDBListGroupItem tag='a' href='#' action noBorders active aria-current='true' className='px-3 mb-4' onClick={() => navigate('/admin-user-mng')}>
                            Admin User Management
                        </MDBListGroupItem>
                    </MDBRipple> */}
                    {/* <MDBRipple>
                        <MDBListGroupItem tag='a' href='#' action noBorders active className='px-3 mb-4' onClick={() => navigate('/role-mng')}>
                            Role Management
                        </MDBListGroupItem>
                    </MDBRipple> */}
                    {/* <MDBRipple>
                        <MDBListGroupItem tag='a' href='#' action noBorders active className='px-3 mb-4' onClick={() => navigate('/dashboard-config')}>
                            Dashboard Configuration
                        </MDBListGroupItem>
                    </MDBRipple> */}
                    <MDBRipple>
                        <MDBListGroupItem tag='a' href action noBorders active className='px-3 mb-4 plat_cursor_pointer' onClick={() => navigate('/account-onboarding')}>
                            Account Onboarding
                        </MDBListGroupItem>
                    </MDBRipple>
                    {/* <MDBRipple>
                        <MDBListGroupItem tag='a' href='#' action noBorders active className='px-3 mb-4' onClick={() => navigate('/account-offering')}>
                            Offering Account Mapping
                        </MDBListGroupItem>
                    </MDBRipple> */}
                    </>) : null }
                </MDBListGroup>
            </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AdminActions;
import React, { useState, useEffect } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';

import Login from '../../components/Login';
import { setUserType } from '../slice/userSlice';

function AdminPanel() {
  const [basicActive, setBasicActive] = useState('tab1');
  const dispatch = useDispatch();
  
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  useEffect(() => {
    dispatch(setUserType({type: "admin"}));
  }, []);
  
    return (
      <>
        <MDBContainer>
        <div className='home-page' style={{ maxWidth: "500px" }}>
          <MDBRow>
            <MDBCol size="12">
              <Login />
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
      </>
    );
  }
  
  export default AdminPanel;
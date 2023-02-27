import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';

import Login from './Login';
import Register from './Register';
import Header from './Header';

function Home() {
  const [basicActive, setBasicActive] = useState('tab1');
  const dispatch = useDispatch();

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <MDBContainer>
      <div className='home-page' style={{ maxWidth: "500px" }}>
        <MDBRow>
          <MDBTabs className='mb-2 nav-pills nav-justified nav-bg-color'>
            <MDBCol sm='12' md='5' lg="5" xl="2">

            </MDBCol>
            <MDBCol sm='12' md='5' lg="5" xl="4">
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBCol>
            <MDBCol sm='12' md='5' lg="5" xl="4">
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBCol>
            <MDBCol sm='12' md='5' lg="5" xl="2">

            </MDBCol>
          </MDBTabs>
        </MDBRow>

        <MDBRow>
          <MDBCol size="12">
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === 'tab1'}>
                <Login />
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === 'tab2'}>
                <Register />
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default Home;
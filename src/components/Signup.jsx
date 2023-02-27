import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
    MDBContainer,
    MDBIcon,
    MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';

import Login from './Login';
import Register from './Register';
import signup from '../assets/images/signup.png';
import signupInfo from '../assets/images/signup-info.png';
import { ReactComponent as GoogleIcons } from '../assets/svg/google-icons.svg';

function Signup() {
  const [basicActive, setBasicActive] = useState('tab2');
  const dispatch = useDispatch();

  return (
    <MDBContainer>
        <div className='home-page'>
            <MDBRow>
              <MDBCol xs="12" sm='12' md='12' lg="7" xl="7">
                <div className='signup-main-container'>
                      <div className='signup-main-image'>
                        <img src={signup} />
                      </div>
                      <div className='signup-main-image-info'>
                        <img width="200" src={signupInfo} />
                    </div>
                </div>
              </MDBCol>
              <MDBCol  xs="12" sm='12' md='12' lg="5" xl="5">
                  <div className='signup-main-form'>
                    <div className='signup-main-form-div'>

                      
                        <MDBTabs className='mb-3'>
                          <MDBTabsItem>
                            <MDBTabsLink onClick={() => setBasicActive('tab1')} active={basicActive === 'tab1'}>
                              Sign In
                            </MDBTabsLink>
                          </MDBTabsItem>
                          <MDBTabsItem>
                            <MDBTabsLink onClick={() => setBasicActive('tab2')} active={basicActive === 'tab2'}>
                              Sign Up
                            </MDBTabsLink>
                          </MDBTabsItem>
                        </MDBTabs>


                      <MDBTabsContent>
                        <MDBTabsPane show={basicActive === 'tab1'}>
                          <Login />
                        </MDBTabsPane>
                        <MDBTabsPane show={basicActive === 'tab2'}>
                          <Register />
                        </MDBTabsPane>
                      </MDBTabsContent>
                    </div>
                  </div>
              </MDBCol>
            </MDBRow>
            <MDBRow xs="12" sm='12' md='12' lg="5" xl="5">
                <MDBCol className='terms-cond'>
                    By signing up you agree to the Terms and conditions and privacy policy
                </MDBCol>
            </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default Signup;
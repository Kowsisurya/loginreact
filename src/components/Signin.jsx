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

function Signin() {
  const [basicActive, setBasicActive] = useState('tab1');
  const dispatch = useDispatch();

  return (
    <MDBContainer>
        <div className='home-page'>
            <MDBRow>
                <div className='signup-main-container'>
                    <div className='signup-main-image'>
                        <img src={signup} />
                      </div>
                    <div className='signup-main-form'>
                        <Login />
                    </div>
                </div>
            </MDBRow>
            <MDBRow>
                <MDBCol className='terms-cond'>
                    By signing up you agree to the Terms and conditions and privacy policy
                </MDBCol>
            </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default Signin;
import { Row, Col } from 'react-bootstrap';
import Capture from '../../assets/images/Capture.png';
import signupInfo from '../../assets/images/signup-info.png';
import signup from '../../assets/images/signup.png';
import './signgroup.css';
import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import Login from '../Login';
import Register from '../Register';
import { useDispatch, useSelector } from 'react-redux';
import { enableRegisterFlag } from '../slice/userSlice';

const Signgroup = (props) => {
    const [basicActive, setBasicActive] = useState('tab1');
    const { isRegisterFlag } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleClose = (event) => {
        dispatch(enableRegisterFlag(false));
      };

    useEffect(()=>{
        if(props.page_type === 'signin'){
            setBasicActive('tab1')
        }else{
            setBasicActive('tab2')
        }
    },[props])
    const tabChange = () => {
        if(basicActive === 'tab2'){
            setBasicActive('tab1')
        }else{
            setBasicActive('tab2')
        }
    }
    return(
        <>
        { isRegisterFlag ? <Snackbar open={true} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Successfully register user
            </Alert>
        </Snackbar>: "" }
            <div className='plat-home-page'>
                <div className='plat-home-logo'>
                    {/* <img height= "40px" width="160px" src={Capture} alt="Capture" /> */}
                </div>
                {/* <Row> */}
                    {/* <Col lg="8" md="7">
                        <div className='plat-sign-img-group'>
                            <div className='plat-signup-main-image'>
                                <img className='plat-signup-image' src={signup} />
                            </div>
                            <div className='plat-signup-main-image-info'>
                                <img  className='plat-signup-image-info' src={signupInfo} />
                            </div>
                        </div> 
                    </Col> */}
                   {/* <MDBDropdown>
      <MDBDropdownToggle>Dropdown button</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown> */}

                    <div className= 'lg-4 md-5'>
                        <div className='plat-sign-login-tap'>
                            <MDBTabs className='mb-3 plat-sign-tabs'>
                                <MDBTabsItem className='plat-sign-item'>
                                    <MDBTabsLink className='plat-sign-link signin' onClick={() => setBasicActive('tab1')} active={basicActive === 'tab1'}>
                                    Sign In
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem className='plat-sign-item'>
                                    <MDBTabsLink className='plat-sign-link signup' onClick={() => setBasicActive('tab2')} active={basicActive === 'tab2'}>
                                    Sign Up
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                          
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <Login  onSelectTab={tabChange}/>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <Register onSelectTab={tabChange}/>
                                </MDBTabsPane>
                            </MDBTabsContent>
                      
                        </div>
                    </div>
                {/* </Row> */}
            </div>
        </>
    );
}

export default Signgroup;
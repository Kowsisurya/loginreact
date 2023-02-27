import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';

import Login from './Login';
import Register from './Register';
import HomeImage from "../assets/images/home-page-better.png"
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { enableRegisterFlag } from './slice/userSlice';

function HomePage() {
  const [basicActive, setBasicActive] = useState('tab1');
  const dispatch = useDispatch();
  const { isRegisterFlag } = useSelector((state) => state.user);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const handleClose = (event) => {
    dispatch(enableRegisterFlag(false));
  };

  const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <MDBContainer className='plat-main-body'>
        { isRegisterFlag ? <Snackbar open={true} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Successfully register user
            </Alert>
        </Snackbar>: "" }
        <MDBRow>
            <MDBCol xs="12" sm='12' md='12' lg="6" xl="6">
                <div className='welcome-container'>
                    {/* <div className='home-title'><h3>Welcome to Nimbus+</h3></div> */}
                    <div className='welcome-list'>
                        <ul>
                            <li>Cloud waste minimization</li>
                            <li>Cluster optimization for container</li>
                            <li>RI management will spend less on-demand resources by up to 40%.</li>
                            <li>Spot Orchestrator can save money by replacing on-demand resources.</li>
                        </ul>
                    </div>
                    <div className='welcome-content'>
                        <p>
                        The majority of businesses lack the resources necessary to concentrate on cutting cloud costs. Nimbus+ allows you to execute workloads on spot instances, handle reservations automatically, and optimise your container in addition to reducing cloud waste. Data-driven automation underpins everything.
                        </p>
                    </div>
                    <div>
                        <MDBBtn>Get Started</MDBBtn>
                    </div>
                </div>    
            </MDBCol>
            {/* <MDBCol xs="12" sm='12' md='12' lg="6" xl="6">
                <div className='home-page-img'></div>
            </MDBCol> */}
        </MDBRow>
        <MDBRow className='better-container'>
            <MDBCol xs="12" sm='12' md='12' lg="6" xl="6" className='better-container-block'>
                {/* <div className='better-man-img'>
                    <img src={HomeImage} />
                </div> */}
            </MDBCol>
            <MDBCol xs="12" sm='12' md='12' lg="6" xl="6" className='better-container-block'>
                <div className='better-content'>
                    <div className='home-title'><h3>Why we are better</h3></div>
                    <div>We position ourselves to support you in delivering because we are aware of the commercial benefits our services will provide. We prioritise serving our clients and have straightforward SLAs.</div>

                    <div>Our own engineered intellectual property (IP) — Nimbus Frameworks, CompareCost.Cloud, Nimbus Insights, and Costimize Cloud — drives value through a fully qualified team of architects and consultants with more than 100 years of combined experience.</div>

                    <div>Through our strategic alliances with Trend Micro and Infra Guard, we, as your digital partner in the cloud world where security is a shared duty, will recommend the finest security solutions.</div>

                    <div>We are in a unique position to guide and assist you because we are a preferred partner to all the major hyperscale cloud providers.</div>
                </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}

export default HomePage;
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import logo from '../assets/images/logo.png';
import { useLocation, useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function App() {
  const navigate = useNavigate();
  const [showBasic, setShowBasic] = useState(false);
  const [path, setPath] = useState(null);
  const { loading, error, userInfo, profileInfo } = useSelector((state) => state.user);

  return (
    <header className='header-nav text-light'>
      <MDBNavbar expand='lg'  style={{"height" : "5rem"}}>
        <MDBContainer fluid>
          <div className='menu-logo'>
            <div>
              <MDBNavbarToggler onClick={() => setShowBasic(!showBasic)}
                aria-controls='navbarExample01' aria-expanded='false' aria-label='Toggle navigation'>
                <MDBIcon fas icon='bars' />
              </MDBNavbarToggler>
              <MDBNavbarBrand>
                <div className='logo'>
                  <img height= "50px" width="160px" src={logo} alt="Logo" />
                </div> 
              </MDBNavbarBrand>
            </div>
            {window.location.pathname !== "/admin" ? 
            <div>
              <MDBCollapse navbar show={showBasic} className="float-end me-5">
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                  <MDBNavbarItem active>
                    <MDBNavbarLink aria-current='page' href='#' className='ms-3 text-light'> Solutions </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#' className='ms-3 text-light'>Products</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#' className='ms-3 text-light'>Partners</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#' className='ms-3 text-light'>Resources</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#' className='ms-3 text-light'>About Us</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBDropdown group>
                    <MDBDropdownToggle color='info'>All Accounts</MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link onClick={() => navigate('/consolidated-view')}>All Accounts</MDBDropdownItem>
                      <MDBDropdownItem link onClick={() => navigate('/all-aws')}>All AWS Accounts</MDBDropdownItem>
                      <MDBDropdownItem link onClick={() => navigate('/all-azure')}>All Azure Accounts</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarNav>
              </MDBCollapse>
            </div> : null }
          </div>
          <div className='d-flex'>
          { userInfo && !userInfo.first_name  ? <>
          <MDBNavbarItem>
            <MDBBtn color='link' onClick={() => navigate('')}>Contact Us</MDBBtn>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBBtn color='link' className='active-btn' onClick={() => navigate('/signup')}>Sign In</MDBBtn>
          </MDBNavbarItem> </> : null }
          </div>
          <div className='heder-setting-menu'>
            { userInfo && userInfo.first_name  ?
            <MDBNavbar expand="lg" light bgColor="light">
              <MDBContainer fluid>
                <MDBNavbarNav>
                  <MDBNavbarItem>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        tag="a"
                        className="nav-link d-flex align-items-center"
                        href="#"
                      >
                        { userInfo && userInfo.first_name ? userInfo.first_name: '' }
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp"
                          className="rounded-circle"
                          height="22"
                          alt="Avatar"
                          loading="lazy"
                        />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link onClick={() => navigate('/admin-actions')}>
                          Settings
                        </MDBDropdownItem>
                        <MDBDropdownItem link onClick={() => navigate('/')}>
                          Logout
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBContainer>
            </MDBNavbar> : null }
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
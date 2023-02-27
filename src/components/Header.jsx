import React, { useEffect, useState } from 'react';
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
import Capture from '../assets/images/Capture.png';
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userInfoMethod } from './slice/userSlice';
// import "../components/costimize/costimize.css";

export default function App() {
  const navigate = useNavigate();
  const [showBasic, setShowBasic] = useState(false);
  const [path, setPath] = useState(null);
  const { loading, error, userInfo, profileInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(userInfoMethod({}));
    // navigate('/signin')
    navigate('/signin', { replace: true });
    window.location.reload();
  }
  return (
    <header className='header-nav text-light'>
      
      <MDBNavbar expand='lg'  style={{"height" : "3rem"}}>
        <MDBContainer fluid>
          <div className='menu-logo'>
            <div>
              <MDBNavbarToggler onClick={() => setShowBasic(!showBasic)}
                aria-controls='navbarExample01' aria-expanded='false' aria-label='Toggle navigation'>
                <MDBIcon fas icon='bars' />
              </MDBNavbarToggler>
              <MDBNavbarBrand>
                <div className='logo'>
                  <img height= "40px" width="160px" src={Capture} alt="Capture" />
                </div> 
              </MDBNavbarBrand>
               <MDBNavbarBrand>
                <div className='logo'>
                  <img height= "40px" width="160px" src={Capture} alt="Capture" />
                </div> 
              </MDBNavbarBrand>
            </div>
            {window.location.pathname !== "/admin" ? 
            <div>
              <MDBCollapse navbar show={showBasic} className="float-end me-5">
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                  <MDBNavbarItem active>
                  <MDBNavbarItem>
                    <MDBDropdown>
                      <MDBDropdownToggle tag='a' className='nav-link ms-3 text-light' role='button'>
                      Solutions
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link></MDBDropdownItem>
                        <MDBDropdownItem link></MDBDropdownItem>
                        <MDBDropdownItem link></MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                   {/* <MDBNavbarLink aria-current='page' href='#' className='ms-3 text-light'> Solutions </MDBNavbarLink> */}
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                  <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link ms-3 text-light' role='button'>
                Products
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link></MDBDropdownItem>
                  <MDBDropdownItem link></MDBDropdownItem>
                  <MDBDropdownItem link></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
                    {/* <MDBNavbarLink href='#' className='ms-3 text-light'>Products</MDBNavbarLink> */}
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                  <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link ms-3 text-light' role='button'>
                Partners
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link></MDBDropdownItem>
                  <MDBDropdownItem link></MDBDropdownItem>
                  <MDBDropdownItem link></MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                    {/* <MDBNavbarLink href='#' className='ms-3 text-light'>Partners</MDBNavbarLink> */}
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link ms-3 text-light' role='button'>
                  Resources
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link></MDBDropdownItem>
                  <MDBDropdownItem link></MDBDropdownItem>
                  <MDBDropdownItem link></MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                    {/* <MDBNavbarLink href='#' className='ms-3 text-light'>Resources</MDBNavbarLink> */}
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                  <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link ms-3 text-light' role='button'>
                  About Us
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link></MDBDropdownItem>
                  <MDBDropdownItem link></MDBDropdownItem>
                  <MDBDropdownItem link></MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                    {/* <MDBNavbarLink href='#' className='ms-3 text-light'>About Us</MDBNavbarLink> */}
                  </MDBNavbarItem>
                  {/* <MDBDropdown group>
                    <MDBDropdownToggle color='info'>All Accounts</MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link onClick={() => navigate('/consolidated-view')}>All Accounts</MDBDropdownItem>
                      <MDBDropdownItem link onClick={() => navigate('/all-aws')}>All AWS Accounts</MDBDropdownItem>
                      <MDBDropdownItem link onClick={() => navigate('/all-azure')}>All Azure Accounts</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown> */}
                </MDBNavbarNav>
              </MDBCollapse>
            </div> : null }
          </div>
          <div className='d-flex'>
          { userInfo && !userInfo.first_name  ? <>
          <MDBNavbarItem>
            {/* <MDBBtn color='link' onClick={() => navigate('')}>Contact Us</MDBBtn> */}
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBBtn color='link' className='active-btn' onClick={() => navigate('/signin')}>Sign In</MDBBtn>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBBtn color='link' className='active-btn' onClick={() => navigate('/signup')}>Sign Up</MDBBtn>
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
                        className="nav-link d-flex align-items-center plat_cursor_pointer"
                        href
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
                        {
                          userInfo.Role === 'Master' || userInfo.Role === 'Admin' ? 
                         
                        <>
                          <MDBDropdownItem className='plat_cursor_pointer' href link onClick={() => navigate('/admin-dashboard')}>
                           Dashboard
                          </MDBDropdownItem>
                          <MDBDropdownItem className='plat_cursor_pointer' href link onClick={() => navigate('/admin-actions')}>
                            Admin Panel
                          </MDBDropdownItem>
                        </>
                        : <></>
                           
                           
                        }
                        
                        <MDBDropdownItem className='plat_cursor_pointer' href link onClick={userLogout}>
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
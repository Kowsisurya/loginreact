import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Capture from '../../assets/images/Capture.png';
import "./header.css";
import { useDispatch, useSelector } from 'react-redux';
import { userInfoMethod } from '../slice/userSlice';
import { FaBell } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { NavbarBrand } from 'react-bootstrap';




const Header = () => {
    const navigate = useNavigate();
    // const [showBasic, setShowBasic] = useState(false);
    // const [path, setPath] = useState(null);
    const { userInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const userLogout = () => {
      dispatch(userInfoMethod({}));
      // navigate('/signin')
      navigate('/signin', { replace: true });
      window.location.reload();
    }
    const customer_image = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp";
    return(
        <>
            <Navbar expand="lg" className='plat-navbar' sticky="top">
                <Container fluid className='plat-container'>
                    <Navbar.Brand  className='plat-navbar-brand'> <img height= "40px" width="160px" src={Capture}  onClick={() => navigate('/')} alt="Capture" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='plat-navbar-collapse' >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        {/* <NavDropdown title="Solutions" id="navbarScrollingDropdown" className='navbar-top-menu'>
                            <NavDropdown.Item href="#"  className='navbar-top-submenu'>-</NavDropdown.Item>
                        </NavDropdown> */}
                       
                    </Nav>
                    <Button variant="outline-success" color='link' className='active-btn ms-2'onClick={() => navigate('/')}>Logout</Button>

                    {/* <Form className="d-flex">
                        // { userInfo && !userInfo.first_name  ? 
                            <>
                                <Button variant="outline-success" color='link' className='active-btn ms-2' onClick={() => navigate('/signin')}>Sign In</Button>
                                <Button variant="outline-success" color='link' className='active-btn ms-2' onClick={() => navigate('/signup')}>Sign Up</Button> 
                            </> 
                            : 
                            <> */}
                            {/* <iconify-icon icon="mdi:dots-grid"  class='menu-icon-without-bg'></iconify-icon>
                            <TbGridDots className='menu-icon-without-bg'/> */}
                                {/* <NavDropdown title={
                                        <TbGridDots className='menu-icon-without-bg'/> */}
                                {/* // } id="navbarScrollingDropdown" className='navbar-top-menu plat-navbar-top-menu' >
                                // </NavDropdown> 

                                // <NavDropdown title={ */}
                                {/* //         <IoIosSearch className='menu-icon-with-bg'/>
                                // } id="navbarScrollingDropdown" className='navbar-top-menu plat-navbar-top-menu' >
                                // </NavDropdown> 

                                // <Button variant="outline-success menu-admin-panel" onClick={() => navigate('/admin-actions')}>Admin Panel</Button> */}

                                {/* <NavDropdown title={
                                        <RiSettings3Fill className='menu-icon-with-bg'/>
                                } id="navbarScrollingDropdown" className='navbar-top-menu plat-navbar-top-menu' >
                                </NavDropdown> 

                                <NavDropdown title={
                                        <FaBell className='menu-icon-with-bg'/>
                                } id="navbarScrollingDropdown" className='navbar-top-menu plat-navbar-top-menu' >
                                </NavDropdown>  */}

                                {/* <NavDropdown title={
                                        <img 
                                            src={customer_image} 
                                            className="menu-top-img"
                                            width="30"
                                            height="30"
                                            alt="Avatar"
                                        /> */}
                                {/* // } id="navbarScrollingDropdown" className='navbar-top-menu plat-navbar-top-menu' >
                                //     { userInfo && userInfo.first_name ? */}
                                {/* //     <>
                                //         <label className='menu-topicon-username'>
                                        //  {userInfo.first_name}
                                //         </label>
                                //         <NavDropdown.Divider />
                                //     </> :
                                //     <></> */}
                              
{/*                                     
                                    {
                                        userInfo.Role === 'Master' || userInfo.Role === 'Admin' ? 
                                        <>
                                            <NavDropdown.Item className='navbar-top-submenu' onClick={() => navigate('/admin-dashboard')}>
                                            Dashboard
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className='navbar-top-submenu' onClick={() => navigate('/admin-actions')}>
                                                Admin Panel
                                            </NavDropdown.Item>
                                        </>
                    //                     : <></> */}
                    {/* // //                 }
                    // //                 <NavDropdown.Item className='navbar-top-submenu' onClick={userLogout}>Logout</NavDropdown.Item>
                    // //             </NavDropdown> 
                                */}
                    {/* // //         </> 
                    //     }
                    // </Form> */}
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBValidation, MDBValidationItem, MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import { useState } from 'react';
import client from './apploClient';
import { LOGIN_USER } from './Graphql';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './action/userAction';
import { Navigate } from "react-router-dom";
import { profileInfoMethod, setUserType, userInfoMethod, getCompanyName, getOfferingsList } from './slice/userSlice';
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useNavigate } from "react-router-dom";



function Login(props) {
    const { loading, error, userInfo, profileInfo } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigateFn = useNavigate();
    const [formValue, setFormValue] = useState({
        username: '',
        password: '',
    });
    const [close, setCloseAsset] = useState(false);
    const [successInfo, setSuccessInfo] = useState(false);
    const [loader, setLoader] = useState(false);
    const [nav, setNav] = useState(false);
    const [errorcontent, setErrorContent] = useState("");

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };
    let navigate=useNavigate()

    const submit = () => {
        if (username && password) {
            setLoader(true);
            console.log({ username, password })
            dispatch(loginUser({ username, password }))
            .unwrap()
                .then(({ data }) => {
                    // console.log(data);
                if (data.getUserConfig) {
                    // console.log(data.getUserConfig);
                    
                    if (data.getUserConfig.Role === 'User' || data.getUserConfig.Role === null || data.getUserConfig.Role === '') {
                        // console.log(data.getUserConfig);
                        if(data.getUserConfig.status === "active"){
                            dispatch(userInfoMethod(data.getUserConfig));
                            dispatch(getCompanyName(data.getUserConfig.company_name));
                            dispatch(getOfferingsList(data.getUserConfig.Offerings));
                            dispatch(setUserType({type: "User"}));
                            // setNav('/card');
                            navigateFn('/card');
                        }else{
                            setCloseAsset(true);
                            setLoader(false);
                            setSuccessInfo(false);
                            setErrorContent("Account inactive, contact admin.");
                        }
                       
                    } else if (data.getUserConfig.Role === 'Admin') {
                        dispatch(userInfoMethod(data.getUserConfig));
                        dispatch(setUserType({type: "Admin"}));
                        // setNav('/signedup-customer');
                        navigateFn('/signedup-customer');
                    } else {
                        dispatch(userInfoMethod(data.getUserConfig));
                        dispatch(setUserType({type: "master"}));
                        // setNav('/admin-dashboard');
                        navigateFn('/admin-dashboard');
                    }
                } else {
                    setCloseAsset(true);
                    setLoader(false);
                    setSuccessInfo(false);
                    setErrorContent("Loggedin Failiure!");
                }
            })
            .catch(err => {
                console.log(err);
                setLoader(false);
                setSuccessInfo(false);
                setErrorContent("Loggedin Failiure!");
            });
        }
    }

    const { username, password } = formValue;

    return (
        <div className='plat-signgroup-right-body'>
            <MDBValidation>
                {nav && (
                    <Navigate to={nav} replace={true} />
                )}
                {/* <div className="text-center mb-3">
                    <MDBBtn className='btn btn-primary btn-floating mx-1' style={{ backgroundColor: '#1266f1' }} href='#'>
                        <FcGoogle size={32}  />
                    </MDBBtn>
                    <MDBBtn className='btn btn-primary btn-floating mx-1' style={{ backgroundColor: '#1266f1' }} href='#'>
                        <ImLinkedin size={33}  color="#1b5f9d" />
                    </MDBBtn>
                </div>
                <p className="text-center">or</p> */}
                <div className="loginForm">
                    {close ? <Alert onClose={() => setCloseAsset(false)} severity={successInfo ? "success" : "error"}>{successInfo ? "You have loggedin successfully !" : errorcontent }</Alert> : null}
                    <div className='userName mb-3'>
                        <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the email.' invalid>
                            <label className='plat-form-label'>Email ID</label>
                            <MDBInput
                                // label='Email'
                                id='form1'
                                name='username'
                                type='text'
                                onChange={onChange}
                                value={username}
                                required />
                        </MDBValidationItem>
                    </div>
                    <div className='password mb-2'>
                        <MDBValidationItem className='mb-3 pb-1' 
                        feedback='Please enter the password.' invalid>
                            <label className='plat-form-label'>Password</label>
                            <MDBInput
                                // label='Password'
                                id='typePassword'
                                name='password'
                                pattern=".{8,}"
                                type='password'
                                onChange={onChange}
                                value={password}
                                required />
                        </MDBValidationItem>
                    </div>
                    <div className="row mb-4">
                        {/* <div class="col d-flex justify-content-center">
                            <div class="">
                                <MDBCheckbox id='flexCheckDefault' label='Remember me' />
                            </div>
                        </div>

                        <div class="col mb-4">
                            <a href="/forgotPassword"> Forgot password? </a>
                        </div> */}
                        {window.location.pathname !== "/admin" ? <div className="text-center">
                            <p className="mb-3"> Don't have an account? <a className='sign-page-link' href="javascript:void(0)" onClick={props.onSelectTab}> Sign up </a> </p>
                            <p className="mb-3">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="button-tooltip-2">Forgot password not available now. Contact admin.</Tooltip>}
                            >
                                <a className='sign-page-link plat_cursor_pointer' href> Forgot password? </a>
                            </OverlayTrigger>
                            </p>
                        </div> : null}
                        <div className='plat-loing-btn-body'>
                            {loader ? <LinearProgress color="secondary" /> : null}
                            <MDBBtn
                                disabled={loader}
                                type='submit'
                                className='me-1 plat-login-button'
                                // method="post"
                                // action="profile.js"
                                onClick={submit} > Sign in</MDBBtn>
                                {/* onClick={submit => navigate('/profile')}>Sign in</MDBBtn> */}
                        </div>
                        
                        
                    </div>
                </div>
            </MDBValidation>
        </div>
    )
}

export default Login;
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBRow, MDBCol, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { registerUser } from './action/userAction';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { enableRegisterFlag } from './slice/userSlice';
import { useSelector } from 'react-redux';
import { usermanagerUserList } from './action/userAction';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";




function Register(props) {
    const dispatch = useDispatch();
    const navigateFn = useNavigate();
    const { loading, userInfo, profileInfo } = useSelector((state) => state.user);
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phoneNo: '',
        password: '',
        repeat_password: '',
        checkbox: false
    });
    const [close, setCloseAsset] = useState(false);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [errorcontent, setErrorContent] = useState("Unable to register the user");

    const onChange = (e) => {
        if (e.target.name === 'checkbox') {
            var checkboxvalue = checkbox;
            if (checkbox) { checkboxvalue = false; } else { checkboxvalue = true; }
            setFormValue({ ...formValue, [e.target.name]: checkboxvalue });
        } else {
            setFormValue({ ...formValue, [e.target.name]: e.target.value });
        }
    };
    let navigate = useNavigate()

    const submit = () => {
        // console.log("submit");
        setLoader(true);
        dispatch(usermanagerUserList())
            .unwrap()
            .then(({ data }) => {
                // console.log(data);
                if (data.listUserConfigs) {
                    const newdata = data.listUserConfigs.items;
                    const filteredlist = newdata.filter(datas => {
                        return datas.company_name === companyName;
                    });
                    // console.log(filteredlist.length);
                    if (filteredlist.length > 0) {
                        setCloseAsset(true);
                        setError(true);
                        setLoader(false);
                        setErrorContent("Company name already exists");
                    } else {
                        if (firstName && lastName && email && companyName && phoneNo && password && checkbox) {
                            // console.log({ firstName, email, password, lastName, phoneNo, companyName,checkbox });
                            setLoader(true);
                            dispatch(registerUser({ firstName, email, password, lastName, phoneNo, companyName, checkbox }))
                                .unwrap()
                                .then(value => {
                                    console.log(value)
                                    setCloseAsset(true);
                                    setError(false);
                                    setLoader(false);
                                    navigateFn('/signin');
                                    dispatch(enableRegisterFlag(true))
                                })
                                .catch(err => {
                                    setCloseAsset(true);
                                    setError(true);
                                    setLoader(false);
                                    setErrorContent("Unable to register the user");
                                });
                        }
                    }
                }
            })
            .catch(err => {
                setError(err);
            });

    }

    const {
        firstName,
        lastName,
        email,
        companyName,
        phoneNo,
        password,
        repeat_password,
        checkbox
    } = formValue;

    return (
        <>
            <MDBValidation>
                <div className="loginForm">
                    {close ? <Alert onClose={() => setCloseAsset(false)} severity={error ? "error" : "success"}> {error ? errorcontent : "Register is successfully done !"}</Alert> : null}
                    <div className='plat-signgroup-right-body'>
                        <MDBRow>

                            <MDBValidationItem className='pb-6' feedback='Please enter the email.' invalid>
                                <label className='plat-form-label'>Email ID</label>
                                <MDBInput
                                    // label='Email'
                                    id='form1'
                                    type='text'
                                    name='email'
                                    onChange={onChange}
                                    value={email}
                                    pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                                    required
                                />
                            </MDBValidationItem>
                        </MDBRow>
                        <MDBRow md="12">
                            <MDBCol md="6">
                                <MDBValidationItem className='pb-1' feedback='Enter the first name.' invalid>
                                    <label className='plat-form-label'>First Name</label>
                                    <MDBInput
                                        // label='First name'
                                        id='form1'
                                        type='text'
                                        name='firstName'
                                        onChange={onChange}
                                        value={firstName}
                                        required={true}
                                    />
                                </MDBValidationItem>


                            </MDBCol>
                            <MDBCol md="6">
                                <MDBValidationItem className='pb-1' feedback='Enter the last name.' invalid>
                                    <label className='plat-lastname'>Last Name</label>
                                    <MDBInput
                                        // label='Last name'
                                        id='form1'
                                        type='text'
                                        name='lastName'
                                        onChange={onChange}
                                        value={lastName}
                                        required
                                    />
                                </MDBValidationItem>

                            </MDBCol>
                        </MDBRow>
                        <MDBRow md="12">
                            <MDBCol md="6">
                                <MDBValidationItem className='pb-1' feedback='Enter the password.' invalid>
                                    <label className='plat-form-label'>Password</label>
                                    <MDBInput
                                        // label='Password'
                                        id='form1'
                                        type='password'
                                        name='password'
                                        pattern=".{8,}"
                                        onChange={onChange}
                                        required
                                        value={password}
                                    />
                                </MDBValidationItem>

                            </MDBCol>
                            <MDBCol md="6">
                                <MDBValidationItem className='pb-1' feedback='Enter the password.' invalid>
                                    <label className='plat-lastname'>Repeat Password</label>
                                    <MDBInput
                                        // label='Repeat Password'
                                        id='form1'
                                        type='password'
                                        pattern=".{8,}"
                                        name='repeat_password'
                                        onChange={onChange}
                                        required
                                        value={repeat_password}
                                    />
                                </MDBValidationItem>

                            </MDBCol>
                        </MDBRow>
                        <MDBRow md="12">
                            <MDBCol md="6">
                                <MDBValidationItem className='pb-1' feedback='Enter the companyname.' invalid>
                                    <label className='plat-form-label '>Company Name</label>
                                    <MDBInput
                                        // label='Company Name'
                                        id='form1'
                                        type='text'
                                        name='companyName'
                                        onChange={onChange}
                                        value={companyName}
                                        required
                                    />
                                </MDBValidationItem>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBValidationItem className='pb-1' feedback='Enter the phone number.' invalid>
                                    <label className='plat-lastname'>Phone Number</label>
                                    <MDBInput
                                        // label='Phone Number'
                                        id='form1'
                                        type='text'
                                        name='phoneNo'
                                        onChange={onChange}
                                        required
                                        value={phoneNo}
                                        pattern='[0-9]*'
                                    />
                                </MDBValidationItem>
                            </MDBCol>

                        </MDBRow>
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center  mb-4 text-center">
                                <div className="form-check form-check-btn-group">
                                    <MDBCheckbox name='checkbox' onChange={onChange} value={checkbox} id='flexCheckDefault' label='' required /><p>I Agree <a className='sign-page-link sign-page-link-absolute' href="javascript:void(0)"> Terms and Conditions </a> </p>

                                    <p>Already have an account <a className='sign-page-link sign-page-link-absolute' href="javascript:void(0)" onClick={props.onSelectTab}> Sign in </a> </p>
                                </div>
                            </div>
                            <div className='plat-loing-btn-body'>
                                {loader ? <LinearProgress color="primary" /> : null}
                                <MDBBtn
                                    disabled={loader}
                                    className='me-1 plat-login-button'
                                    onClick={submit => navigate('/profile')}>Sign Up</MDBBtn>

                                {/* <div><button>
                                <div className="title" onclick={submit}>Sign Up</div>
                                   {isSubmitted ? <navigate('/profile')/> : null}
                                   </button>
                                </div> */}



                            </div>

                        </div>
                    </div>
                </div>

            </MDBValidation>

















        </>
    )
}

export default Register;
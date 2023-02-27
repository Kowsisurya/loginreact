import { MDBInput, MDBValidation, MDBValidationItem, MDBBtn } from 'mdb-react-ui-kit';
import React, { useState, forwardRef, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileInfoMethod } from './slice/userSlice';
import { getUserDetails } from './action/userAction';


const StepperProfileInfoForm = forwardRef(function (props, ref) {
    const pattern = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { profileInfo, onboardAction, userType, listUsers, updateuserdetails } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(onboardAction === 'create'){
            dispatch(profileInfoMethod({
                ...profileInfo,
                first_name: '',
                last_name: '',
                email: '',
                company_name: '',
                contact_no: '',
            }));   
        }else{
            if(updateuserdetails.email){
                dispatch(profileInfoMethod({
                    ...profileInfo,
                    first_name: updateuserdetails.first_name ? updateuserdetails.first_name : '',
                    last_name: updateuserdetails.last_name ? updateuserdetails.last_name : '',
                    email: updateuserdetails.email ? updateuserdetails.email : '',
                    company_name: updateuserdetails.company_name ? updateuserdetails.company_name : '',
                    contact_no: updateuserdetails.contact_no ? updateuserdetails.contact_no : '',
                }));   
            }
        }
      
    },[]);

    const onChange = (e) => {
        dispatch(profileInfoMethod({
            ...profileInfo,
            [e.target.name]: e.target.value
        }));
    };

    const onClickForm = () => {
        let error = true;
        if (profileInfo.first_name && profileInfo.last_name && pattern.test(profileInfo.email) && profileInfo.company_name && profileInfo.contact_no) {
            error = false;
        }
        props.getNextStepper(error, profileInfo);
    }

    return (
        <MDBValidation>
            <div className="StepperProfileInfoForm">
                <div className='mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the first name.' invalid>
                        <MDBInput
                            label='First name'
                            id='form1'
                            type='text'
                            name='first_name'
                            onChange={onChange}
                            value={profileInfo.first_name}
                            required={true}
                        />
                    </MDBValidationItem>
                </div>
                <div className='mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the last name.' invalid>
                        <MDBInput
                            label='Last name'
                            id='form1'
                            type='text'
                            name='last_name'
                            onChange={onChange}
                            value={profileInfo.last_name}
                            required
                        />
                    </MDBValidationItem>
                </div>
                <div className='userName mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the email.' invalid>
                        <MDBInput
                            label='Email'
                            id='form1'
                            type='text'
                            name='email'
                            onChange={onChange}
                            value={profileInfo.email}
                            readOnly={onboardAction === 'update' && (userType === 'user' || userType === 'admin')}
                            pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                            required
                        />
                    </MDBValidationItem>
                </div>
                <div className='mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the company name.' invalid>
                        <MDBInput
                            label='Company Name'
                            id='form1'
                            type='text'
                            name='company_name'
                            onChange={onChange}
                            value={profileInfo.company_name}
                            readOnly={onboardAction === 'update' && userType === 'user'}
                            required
                        />
                    </MDBValidationItem>
                </div>
                <div className='mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the phone name.' invalid>
                        <MDBInput
                            label='Phone No'
                            id='form1'
                            type='text'
                            name='contact_no'
                            onChange={onChange}
                            required
                            value={profileInfo.contact_no}
                            pattern='[0-9]*'
                        />
                    </MDBValidationItem>
                </div>
                <MDBBtn type='submit' className='mb-4' ref={ref} style={{display:'none'}} onClick={onClickForm}>submit</MDBBtn>
            </div>
        </MDBValidation>
    )
});

export default StepperProfileInfoForm;
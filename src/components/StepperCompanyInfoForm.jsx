import { MDBInput, MDBValidation, MDBValidationItem, MDBBtn } from 'mdb-react-ui-kit';
import React, { useState, forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { companyInfoMethod } from './slice/userSlice';
import { getUserDetails } from './action/userAction';

function StepperCompanyInfoForm(props, ref) {
    const pattern = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { companyInfo, updateuserdetails, onboardAction } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    useEffect(() => {

        if(onboardAction === 'create'){
            dispatch(companyInfoMethod({
                ...companyInfo,
                company_name: '',
                company_headquaters: '',
                address_information: '',
                state: '',
                country: '',
                company_mail_id: '',
                company_contact_no: ''
            }));   
        }else{
            if(updateuserdetails.email){
                dispatch(companyInfoMethod({
                    ...companyInfo,
                    company_name: updateuserdetails.company_name ? updateuserdetails.company_name : '',
                    company_headquaters: updateuserdetails.company_headquaters ? updateuserdetails.company_headquaters : '',
                    address_information: updateuserdetails.address_information ? updateuserdetails.address_information : '',
                    state: updateuserdetails.state ? updateuserdetails.state : '',
                    country: updateuserdetails.country ? updateuserdetails.country : '',
                    company_mail_id: updateuserdetails.company_mail_id ? updateuserdetails.company_mail_id : '',
                    company_contact_no: updateuserdetails.company_contact_no ? updateuserdetails.company_contact_no : '',
                }));      
                 
            }
        }



    },[]);

    const onChange = (e) => {
        dispatch(companyInfoMethod({
            ...companyInfo,
            [e.target.name]: e.target.value
        }));
    };

    const onClickForm = () => {
        let error = true;
        if (companyInfo.company_name && companyInfo.company_headquaters && pattern.test(companyInfo.company_mail_id) && companyInfo.address_information && companyInfo.state && companyInfo.country && companyInfo.company_contact_no) error = false;
        props.getNextStepper(error);
    }
    
    return (
        <MDBValidation>
        <div className="StepperCompanyInfoForm">
            <div className='mb-4'>
                <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the company name.' invalid>
                    <MDBInput
                        label='Company name'
                        id='form1'
                        type='text'
                        name='company_name'
                        onChange={onChange}
                        value={companyInfo.company_name}
                        required
                    />
                </MDBValidationItem>
            </div>
            <div className='mb-4'>
                <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the Head quators.' invalid>
                    <MDBInput
                        label='Head quators'
                        id='form1'
                        type='text'
                        name='company_headquaters'
                        onChange={onChange}
                        value={companyInfo.company_headquaters}
                        required
                    />
                </MDBValidationItem>
            </div>
            <div className='userName mb-4'>
                <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the Address info.' invalid>
                    <MDBInput
                        label='Address info'
                        id='form1'
                        type='text'
                        name='address_information'
                        onChange={onChange}
                        value={companyInfo.address_information}
                        required
                    />
                </MDBValidationItem>
            </div>
            <div className='mb-4'>
                <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the state.' invalid>
                    <MDBInput
                        label='State'
                        id='form1'
                        type='text'
                        name='state'
                        onChange={onChange}
                        value={companyInfo.state}
                        required
                    />
                </MDBValidationItem>
            </div>
            <div className='mb-4'>
                <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the country.' invalid>
                    <MDBInput
                        label='Country'
                        id='form1'
                        type='text'
                        name='country'
                        onChange={onChange}
                        value={companyInfo.country}
                        required
                    />
                </MDBValidationItem>
            </div>
            <div className='mb-4'>
                <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the email id.' invalid>
                    <MDBInput
                        label='Company email id'
                        id='form1'
                        type='text'
                        name='company_mail_id'
                        onChange={onChange}
                        value={companyInfo.company_mail_id}
                        pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                        required
                    />
                </MDBValidationItem>
            </div>
            <div className='mb-4'>
                <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the Company contact no.' invalid>
                    <MDBInput
                        label='Company contact no'
                        id='form1'
                        type='text'
                        name='company_contact_no'
                        onChange={onChange}
                        value={companyInfo.company_contact_no}
                        required
                    />
                </MDBValidationItem>
            </div>
            <MDBBtn type='submit' className='mb-4' ref={ref} style={{display:'none'}} onClick={onClickForm}>submit</MDBBtn>
            </div>
        </MDBValidation>
    )
}

export default forwardRef(StepperCompanyInfoForm);
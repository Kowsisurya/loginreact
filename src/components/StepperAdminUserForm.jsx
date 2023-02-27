import { MDBInput, MDBValidation, MDBValidationItem, MDBBtn } from 'mdb-react-ui-kit';
import React, { useState, forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { masterInfoMethod } from './slice/userSlice';

function StepperAdminUserForm(props, ref) {
    const pattern = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const dispatch = useDispatch();
    const { master_info } = useSelector((state) => state.user);

    const onChange = (e) => {
        dispatch(masterInfoMethod({
            ...master_info,
            [e.target.name]: e.target.value
        }));
    };

    const onClickForm = () => {
        let error = true;
        if (master_info.master_first_name && master_info.master_last_name && pattern.test(master_info.master_email) && master_info.master_contact_no) {
            error = false;
        }
        props.getNextStepper(error);
    }

    return (
        <MDBValidation>
            <div className="StepperAdminUserForm">
                <div className='mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the first name.' invalid>
                        <MDBInput
                            label='First name'
                            id='form1'
                            type='text'
                            name='master_first_name'
                            onChange={onChange}
                            value={master_info.master_first_name}
                            required
                        />
                    </MDBValidationItem>
                </div>
                <div className='mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the last name.' invalid>
                        <MDBInput
                            label='Last name'
                            id='form1'
                            type='text'
                            name='master_last_name'
                            onChange={onChange}
                            value={master_info.master_last_name}
                            required
                        />
                    </MDBValidationItem>
                </div>
                <div className='userName mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the email name.' invalid>
                        <MDBInput
                            label='Email id'
                            id='form1'
                            type='text'
                            name='master_email'
                            onChange={onChange}
                            value={master_info.master_email}
                            pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                            required
                        />
                    </MDBValidationItem>
                </div>
                <div className='mb-4'>
                    <MDBValidationItem className='mb-3 pb-1' feedback='Please enter the phone no.' invalid>
                        <MDBInput
                            label='Phone no'
                            id='form1'
                            type='text'
                            name='master_contact_no'
                            onChange={onChange}
                            value={master_info.master_contact_no}
                            required
                        />
                    </MDBValidationItem>
                </div>
                <MDBBtn type='submit' className='mb-4' ref={ref} style={{display:'none'}} onClick={onClickForm}>submit</MDBBtn>
            </div>
        </MDBValidation>
    )
}

export default forwardRef(StepperAdminUserForm);
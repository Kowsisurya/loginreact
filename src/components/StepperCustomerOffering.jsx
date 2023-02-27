import { MDBInput, MDBValidation, MDBValidationItem, MDBBtn, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import React, { useState, forwardRef, useEffect } from 'react';
import { customerOnboarding, customerUpdate } from './action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getUserDetails } from './action/userAction';
import { userDetailsUpdateStatus, onboardActionMethod } from './slice/userSlice';

function StepperCustomerOffering(props, ref) {
    const [flexCheck, setFormValue] = useState({});
    const [required, setRequired] = useState(true);
    const dispatch = useDispatch();
    const { master_info, profileInfo, companyInfo, updateuserdetails, onboardAction } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [cos_required, setConsRequired] = useState(false);
    const [war_required, setWarRequired] = useState(false);
    useEffect(() => {
        if(updateuserdetails.Offerings){
            const offeringlist = JSON.parse(updateuserdetails.Offerings);
            offeringlist.map((data) => {
                if(data === 'costmize'){
                    document.getElementById("flexCheck_1").checked = true;
                    setConsRequired(true);
                    setFormValue(prevState => (
                        {
                            ...prevState,
                            flexCheck_1: true
                        }
                    ))
                }else{
                    document.getElementById("flexCheck_2").checked = true;
                    setWarRequired(true);
                    setFormValue(prevState => (
                        {
                            ...prevState,
                            flexCheck_2: true
                        }
                    ))
                }
            });
        } 

    },[]);
   

    const onChange = (e) => {
        setFormValue(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.checked
            }
        )
        );
    };

    const onClickIcon = () => {
        window.open('http://localhost:3000/war','_blank');
    }

    const onClickIcon2 = () => {
        window.open('http://localhost:3000/account-onboarding','_blank');
    }

    const OnboardingCustomer = () => {
        var offerings_value = [];
        if(flexCheck.flexCheck_1){offerings_value.push("costmize")}
        if(flexCheck.flexCheck_2){offerings_value.push("war")}
        offerings_value = JSON.stringify(offerings_value);

        if(onboardAction === 'update'){
            // console.log({...profileInfo,
            //     ...companyInfo,
            //     ...master_info,
            //     password: updateuserdetails.passowrd,
            //     time_zone: "india",
            //     Offerings: flexCheck,
            //     Role: "",
            //     status: "active"});
            // console.log(flexCheck);
            // const offerings_value = JSON.stringify(flexCheck);
            
            dispatch(customerUpdate({ 
                ...profileInfo,
                ...companyInfo,
                ...master_info,
                password: updateuserdetails.password,
                time_zone: "india",
                Offerings: offerings_value,
                Role: "",
                status: "active"
            }))
            .unwrap()
            .then(value => {
                dispatch(userDetailsUpdateStatus("user_updated"));
                // console.log(value);
                dispatch(onboardActionMethod("create"));
                navigate('/user-mng')
            })
            .catch(err => {
                console.log(err, "err");
            });
        }else{
            // console.log("out");
            //setLoader(true);
            dispatch(customerOnboarding({ 
                ...profileInfo,
                ...companyInfo,
                ...master_info,
                password: "12122",
                time_zone: "india",
                Offerings: offerings_value,
                Role: "",
                status: "active"
            }))
            .unwrap()
            .then(value => {
                console.log(value);
                navigate('/user-mng')

                // console.log(value, "value");
                //setLoader(false);
                // setSuccessInfo(true);
            })
            .catch(err => {
                    console.log(err, "err");
                //setLoader(false);
                // setSuccessInfo(false);
            });
        }
        
        
    }

    const onClickForm = () => {
        props.getNextStepper(required, 2);
        if (!required) {
            OnboardingCustomer();
        }
    }

    const isRequired = () => {
        let arr = Object.keys(flexCheck);
        const isTrue = arr.some((val) => flexCheck[val] === true);
        if (isTrue) {
            setRequired(false);
        } else {
            setRequired(true);
        }
    }

    useEffect(() => {
        isRequired();
    }, [flexCheck]);

    return (
        <MDBValidation>
            <div className='StepperCustomerOffering'>
                <div className='mb-4'>
                    {
                        [1, 2].map(v => (
                            <>
                            {/* <div class="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" class="custom-control-input" name={`flexCheck_${v}`} id={`flexCheck_${v}`} required={required} onChange={(e) => onChange(e)} checked = {v ==1 ? cos_required ? true : '' : war_required ? 'checked' : ''}/>
                                <label class="custom-control-label" for={`flexCheck_${v}`}>{v == 1 ? <>Costmize <MDBIcon onClick={onClickIcon2} className='war-icon' far icon="question-circle" /></> : <>War <MDBIcon onClick={onClickIcon} className='war-icon' far icon="question-circle" /></>}</label>
                            </div> */}
                                <MDBCheckbox name={`flexCheck_${v}`}
                                    id={`flexCheck_${v}`}
                                    required={required}
                                    label={v == 1 ? <>Costmize <MDBIcon onClick={onClickIcon2} className='war-icon' far icon="question-circle" /></> : <>War <MDBIcon onClick={onClickIcon} className='war-icon' far icon="question-circle" /></>}
                                    value={v ==1 ? 'Costmize' : 'War'}
                                    inline
                                    // checked = {selectcloud === 'all' ? 'checked' : ''}
                                    // defaultChecked 
                                    // checked = {v ==1 ? cos_required ? 'checked' : '' : war_required ? 'checked' : ''}
                                    onChange={(e) => onChange(e)}
                                />
                            </>
                        ))
                    }
                    
                </div>
                <MDBBtn type='submit' className='mb-4' ref={ref} style={{display:'none'}} onClick={onClickForm}>submit</MDBBtn>
            </div>
        </MDBValidation>
    )
}

export default forwardRef(StepperCustomerOffering);
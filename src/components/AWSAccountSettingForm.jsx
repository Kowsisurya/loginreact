import { MDBInput, MDBRow, MDBCol, MDBSwitch } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import { useState } from 'react';
import MultipleSelectCheckmarks from './Multiselect';
import TagInput from './properties/Taginput/TagInput';
import { useDispatch, useSelector } from 'react-redux';
import { accountEnvirionmentList } from './action/accountAction';

function AWSAccountSettingForm(props) {
    // console.log(props.type);
    const dispatch = useDispatch();
    const [external_id_gen,setExternalidGen] = useState('');
    const onChange = ({ target: { value, name } }) => {
       
        if (Array.isArray(value))
            value = value.join(",");
        props.onChange(name, value);
    }
    const changeSwitch = (e) => {
        var value;
        if(e.target.checked){
            value="yes";
        }else{
            value="no";
        }
        props.onChange(e.target.name, value);
    }
    useEffect(() => {
        dispatch(accountEnvirionmentList())
        .unwrap()
        .then(({ data }) => {
            console.log(data.listAccountConfigs.items);
            
        })
        .catch(err => {
            console.log(err);
        });
        
    },[])
   

    // console.log(Boolean(props.value.auto_tag_update));
    return (
        <>
            <MDBRow>
                <div className="AWSAccountSettingForm">
                    <MDBRow>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='Company Name' id='form1' type='text' name="company_name" onChange={onChange} value={props.value.company_name} disabled/>
                            </div>
                        </MDBCol>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                        <div className='mb-4'>
                            <MDBInput label='Cloud' id='form1' type='text' name="cloud_type" onChange={onChange} value={props.value.cloud_type} disabled/>
                        </div>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='Account name' id='form1' type='text' name="account_name" onChange={onChange} value={props.value.account_name}/>
                            </div>
                        </MDBCol>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                        <div className='mb-4'>
                            <MDBInput label='Account Id' id='form1' type='text' name="account_id" onChange={onChange} value={props.value.account_id}/>
                        </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='AWSAccountSettingFormultiselect mb-4'>
                                <MultipleSelectCheckmarks multi  event_name="ec2_region_list" name=" EC2 Regions" onChange={onChange} props_value={props.value.ec2_region_list}/>
                            </div>
                        </MDBCol>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4 AWSAccountSettingFormultiselect'>
                                {/* <MultipleSelectCheckmarks name="report_name" event_name="report_name" onChange={onChange} value={props.value.report_name}/> */}

                                <MDBInput label='Report Name' id='report_name' type='text' name="report_name" onChange={onChange} value={props.value.report_name}/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='IAM Role ARN' id='form1' type='text' name="iam_arn_role" onChange={onChange} value={props.value.iam_arn_role}/>
                            </div>
                        </MDBCol>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='Payer Account Id' id='form1' type='text' name="payer_account_id" onChange={onChange} value={props.value.payer_account_id}/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='CUR Bucket Name' id='form1' type='text' name="bucket_name" onChange={onChange} value={props.value.bucket_name}/>
                            </div>
                        </MDBCol>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='Prefix Path' id='form1' type='text' name="prefix_path" onChange={onChange} value={props.value.prefix_path}/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='Environment Tag' id='form1' type='text' name="environment_tag" onChange={onChange} value={props.value.environment_tag}/>
                            </div>
                        </MDBCol>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='Application Tag' id='form1' type='text' name="application_tag" onChange={onChange} value={props.value.application_tag}/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <MDBInput label='External Id' id='external_id' type='text' name="external_id" onChange={onChange} value={props.value.external_id}/>
                            </div>
                        </MDBCol>
                        <MDBCol sm='12' md='6' lg="6" xl="6">
                            <div className='mb-4'>
                                <div className='tag-update-body'>
                                        <label className='form-label' for="environment">Auto Tag Update</label>
                                        <MDBSwitch
                                            defaultChecked={props.value.auto_tag_update === "yes" ? true : false}
                                            id='auto_tag_update' name="auto_tag_update" onChange={(e) => changeSwitch(e)}
                                            className='account-onboarding-switch'   
                                        />
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol sm='12' md='12' lg="12" xl="12">
                            <MDBRow>
                                <MDBCol sm='12' md='6' lg="6" xl="6">
                                    <label className='form-label' for="environment">Environment</label>
                                </MDBCol>
                            </MDBRow>
                            <TagInput placeholder="Press enter to add new environment" input_name="environment" input_id="envirionment" onChange={onChange} props_value={props.value.environment}/>    
                        </MDBCol>
                    </MDBRow>
                    </div>
            </MDBRow>
        </>
    )
}

export default AWSAccountSettingForm;
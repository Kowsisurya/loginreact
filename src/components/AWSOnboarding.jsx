import React, {useEffect, useState} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBBadge,
  MDBTabsPane,
  MDBTabsContent,
  MDBContainer,
  MDBRow,
  MDBTabs,
  MDBTabsItem,
  MDBSwitch,
  MDBTabsLink
} from 'mdb-react-ui-kit';
import AccountOnboardingDropdown from './AccountOnboardingDropdown';
import { ReactComponent as YourSvg } from '../assets/svg/aws-icon.svg';
import Modal from './Modal';
import AWSAccountSettingForm from './AWSAccountSettingForm';
import { ACCOUNT_LIST } from './Graphql';
import client, { client2 } from './apploClient';
import { createAccount, deleteAccount, listAccount, updateAccountDetails, updateAccountStatus, listAccountNew, accountOnboarding } from './action/accountAction';
import { useDispatch, useSelector } from 'react-redux';
import { addAccountListMethod, setSelectedCloud, setSelectedCompany } from './slice/accountSlice';
import { loginUser } from './action/userAction';
import Dropdown from 'react-bootstrap/Dropdown';
import { usermanagerUserList } from './action/userAction';
import Alert from '@mui/material/Alert';
import ConfirmDialog from './properties/ConfirmDialog/ConfirmDialog';

function AWSOnboarding() {
  const dispatch = useDispatch();
  const { accountList, selectedcompany, selectedcloud } = useSelector((state) => state.account);
  const { userInfo } = useSelector((state) => state.user);
  const [flag, setFlag] = useState(false);
  const [updateflag, setUpdateFlag] = useState(false);
  
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState({});
  const [updatevalue, setUpdateValue] = useState({});
  // const [updatestatus, setUpdateStatus] = useState(true);
  const [companylist, setCompanyList] = useState([]);
  const [recordlist, setRecordlist] = useState([]);
  const [userstatus, setUserStatus] = useState(false);
  const [alartcontent, setAlartContent] = useState("");
  const [createdby, setCreatedBy] = useState(userInfo.first_name);
  const [confirmdialogstatus, setConfirmDialogStatus] = useState(false);
  const [detSelecetedUser, setDetSelecetedUser] = useState([]);
  const [accountValidate, setAccountValidate] = useState("validate");
  const [closealert, setCloseAlert] = useState(false);
  const [buttonloader, setButtonLoader] = useState(false);
  const [datachanges, setDataChanges] = useState(true);


  const setCloseModal = () => {
      setFlag(false);
  }
  const setUpdateCloseModal = () => {
    setUpdateFlag(false);
  }
  const onClickSwitch = (e,index, list) => {
    // setChecked(!checked);
    var status_value = 'active';
    if(e.target.checked){
      status_value = 'active';
    }else{
      status_value = 'inactive';
    }
    const account_id = list.account_id;
    const account_name = list.account_name;
    dispatch(updateAccountStatus({account_id,account_name,status_value}))
    .unwrap()
    .then(({ data }) => {
      // setUpdateFlag(false);
      // setUpdateStatus(!updatestatus);
      setUserStatus(true)
      setAlartContent("User Status Updated Successfully Done.");
    })
    .catch(err => {
        console.log(err);
    });
    
  }

  useEffect(() => {
    dispatch(listAccount())
      .unwrap()
      .then(({ data }) => {
        console.log(data);
        if (data.listAccountConfigs.items) {
          const newAccList = data.listAccountConfigs.items?.filter((v, index) => v.cloud_type !== null &&  v.company_name !== null);
          // const newAccList = data.listAccountConfigs.items;
          dispatch(addAccountListMethod(newAccList));
          setRecordlist(newAccList);
        }
      })
      .catch(err => {
        console.log(err.message);
      });

      dispatch(usermanagerUserList())
      .unwrap()
      .then(({ data }) => {
        if (data.listUserConfigs) {
          const listUserConfigs = data.listUserConfigs.items.map(v => v.company_name.toLowerCase());
          dispatch(setSelectedCompany(listUserConfigs[0].toUpperCase()));
          const uniqueArr = new Set([...listUserConfigs]);
          setCompanyList([...uniqueArr]);
        }
      })
      .catch(err => {
        // setError(err);
      });
  }, [datachanges]);

  const onSubmit = () => {
    setButtonLoader(true);
    dispatch(accountOnboarding(value))
    .unwrap()
    .then(({ data }) => {
      // console.log(data.getTask);
      const json_decode = JSON.parse(data.getTask);

      const file_encode = JSON.stringify(json_decode.files)
      setValue(prev => ({
        ...prev,
        files: file_encode
      }));
      setAccountValidate("configure");
      setValue(prev => ({
        ...prev,
        event_type: "configure"
      }))
      if(value.event_type === "configure"){
        setUserStatus(true)
        setAlartContent("Account Added successfully done.");
        setFlag(false);
        setAccountValidate("validate");
        setDataChanges(!datachanges);
      }
      // console.log(json_decode.files);
      setButtonLoader(false);
      
    })
    .catch(err => {
      console.log(err);
      setButtonLoader(false);
      setCloseAlert(true);
    });
    const changeCloseAlert = () => {
      setCloseAlert(false);
    }
    // dispatch(createAccount(value))
    // .unwrap()
    // .then(({ data }) => {
    //   // console.log(data);
    //   if (data) {
    //     dispatch(addAccountListMethod([
    //       data.createAccountConfig,
    //       ...accountList
    //     ]));
    //   }
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    // setFlag(false);
  }

  const onSubmitUpdate = () => {
      dispatch(updateAccountDetails(value))
      .unwrap()
      .then(({ data }) => {
        // console.log(data.updateAccountConfig);
        setUpdateFlag(false);
        // setUpdateStatus(!updatestatus);
        setDataChanges(!datachanges);
        const newAccList = accountList.filter((v, index) => v.account_id !== data.updateAccountConfig.account_id );
        dispatch(addAccountListMethod([
          data.updateAccountConfig,
          ...newAccList
        ]));
        setValue([]);
      })
      .catch(err => {
        console.log(err);
      });
      
  }

  const deleteConfirm = () => {
    const account_id = detSelecetedUser.account_id;
    const account_name = detSelecetedUser.account_name;
    var ind = detSelecetedUser.ind;
    dispatch(deleteAccount({account_id, account_name}))
    .unwrap()
    .then(({ data }) => {
      if (data) {
        const newAccList = accountList.filter((v, index) => index !== ind);
        dispatch(addAccountListMethod([
          ...newAccList
        ]));
        setConfirmDialogStatus(false);
        setAlartContent("Account deleted successfully done");
        setUserStatus(true)
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  const onDelete = (account_name, account_id, ind) => {
    setDetSelecetedUser({
      account_name : account_name,
      account_id : account_id,
      ind : ind
    });
    setConfirmDialogStatus(true);
  }

  const onChange = (name, value) => {
    // console.log(name);
    // console.log(value)
    setValue(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const selecteCompanyName = (companyname) => {
    dispatch(setSelectedCompany(companyname.toUpperCase()));  
  }
  const selectedCloud = (cloud) => {
    dispatch(setSelectedCloud(cloud.toUpperCase()));
  }
  useEffect(() => {
    // if(selectedcompany === 'ALL' && selectedcloud === 'ALL'){
    //   dispatch(addAccountListMethod(recordlist));
    // }else if(selectedcompany !== 'ALL' && selectedcloud === 'ALL'){
    //   const newList = recordlist.filter(list => list.company_name === selectedcompany.toLowerCase());
    //   dispatch(addAccountListMethod(newList));
    // }else if(selectedcompany === 'ALL' && selectedcloud !== 'ALL'){
    //   const newList = recordlist.filter(list => list.cloud_type === selectedcloud.toLowerCase());
    //   dispatch(addAccountListMethod(newList));
    // }else if(selectedcompany !== 'ALL' && selectedcloud !== 'ALL'){
    //   const newList = recordlist.filter(list => list.cloud_type === selectedcloud.toLowerCase() && list.company_name === selectedcompany.toLowerCase());
    //   dispatch(addAccountListMethod(newList));
    // }
    
    const newList = recordlist.filter(list => list.cloud_type === selectedcloud.toLowerCase() && list.company_name === selectedcompany.toLowerCase());
    dispatch(addAccountListMethod(newList));

    setValue(prev => ({
      ...prev,
      company_name: selectedcompany.toLowerCase(),
      cloud_type: selectedcloud.toLowerCase()
    }))

  },[selectedcompany, selectedcloud]);
  const confirmClose = () => {
    setConfirmDialogStatus(false);
    
  }
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
  return (
        <>
        {confirmdialogstatus && <ConfirmDialog confirmClose={confirmClose} confirmDelete={deleteConfirm} />}
      <MDBRow className='AWSOnboardingContent mt-5'>
        <MDBRow>
          <MDBCol xl={12}>
            {userstatus ? <Alert onClose={() => setUserStatus(false)} severity="success" >{alartcontent}</Alert> : null}
          </MDBCol>
          <MDBCol xl={3}>
              <Dropdown className='account-user-dropdown'>
                <Dropdown.Toggle id="dropdown-basic" className='account-user-dropdown-button'>
                  {selectedcompany}
                </Dropdown.Toggle>
                <Dropdown.Menu className='account-dropdown-menu'>
                  {
                    companylist.map((data, index) => 
                      <Dropdown.Item  className='plat_cursor_pointer' onClick={() => selecteCompanyName(data)} key={index}>{data.toUpperCase()}</Dropdown.Item>
                    )
                  }
                </Dropdown.Menu>
              </Dropdown>
          </MDBCol>
          <MDBCol xl={3}>
            <Dropdown className='account-user-dropdown'>
                <Dropdown.Toggle id="dropdown-basic" className='account-user-dropdown-button'>
                  {selectedcloud}
                </Dropdown.Toggle>
                <Dropdown.Menu className='account-dropdown-menu'>
                  <Dropdown.Item  className='plat_cursor_pointer' onClick={() => selectedCloud('AWS')}>AWS</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </MDBCol>
        </MDBRow>
          
         
        <MDBCol xl={12} className='mb-4'>
          <MDBBtn size='lg' className='float-right themeBackgroundColor' onClick={() =>{
             setFlag(true);

            // const random_id = makeid(8);
            const random_id = '944321';
             setValue(prev => ({
              ...prev,
              external_id: random_id
            }))
            setValue(prev => ({
              ...prev,
              files: ""
            }))
             setValue(prev => ({
              ...prev,
              event_type: "validate"
            }))
            setValue(prev => ({
              ...prev,
              account_name: '',
              account_id: '',
              environment: '',
              ec2_region_list: '',
              report_name: '',
              iam_arn_role: '',
              bucket_name: '',
              prefix_path: '',
              environment_tag: '',
              application_tag: '',
              payer_account_id: '',
              auto_tag_update: 'no'
            }));
            setCloseAlert(false);
            }}><MDBIcon fas icon="plus" /> 
            ADD account
          </MDBBtn>
        </MDBCol>
        
          {accountList.map((list, index) => (
            <MDBCol xl={12} className='mb-4'>
            <MDBCard>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol sm="12" xl={2} md={2} lg={2} className='text-center'>
                        <YourSvg/>
                    </MDBCol>
                      <MDBCol sm="12" xl={2} md={2} lg={2}>
                        <MDBRow>
                          <MDBCol sm="12" xl={12} md={12} lg={12}>
                            <div className='d-flex '>
                              <div className='mb-1 label'>Account Name</div>
                            <div className='fw-bold'>{list.account_name}</div>
                          </div>
                          </MDBCol>
                          <MDBCol sm="12" xl={12} md={12} lg={12}>
                            <div className='d-flex'>
                              <div className='mb-1 label'>Account ID</div>
                              <div className='fw-bold'>{list.account_id}</div>
                          </div>
                          </MDBCol>
                          <MDBCol sm="12" xl={12} md={12} lg={12}>
                            <div className='d-flex'>
                              <div className='mb-0 label'>IAM Role ARN</div>
                              <div className='fw-bold'>{list.iam_arn_role}</div>
                          </div>
                          </MDBCol>
                        </MDBRow>
                    </MDBCol>
                      <MDBCol sm="12" xl={4} md={4} lg={4} >
                      <MDBRow>
                          <MDBCol sm="12" xl={12} md={12} lg={12}>
                            <div className='d-flex '>
                              <div className='mb-1 label'>Environment:</div>
                              <div className='fw-bold'>
                                <MDBBadge className='mx-2' color='info' light>
                                  {list.environment}
                                </MDBBadge>
                              </div>
                          </div>
                          </MDBCol>
                          <MDBCol sm="12" xl={12} md={12} lg={12}>
                            <div className='d-flex'>
                              <div className='mb-0 label'>Created by</div>
                              <div className='fw-bold'>{createdby}</div>
                          </div>
                          </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm="12" xl={2} md={2} lg="2" className='text-center'>
                          <MDBRow>
                          <MDBCol sm="3" xl={3} md={12} lg="3" className='text-center'>
                            <MDBSwitch
                              onClick={(e) => onClickSwitch(e, index, list)}
                              defaultChecked={list.status === 'active' ? true : false} 
                            />
                          </MDBCol>
                          {/* <MDBCol sm="6" xl={6} md={12} lg="6" className='text-center'>
                            <MDBBadge pill color={list.status === 'active' ? 'success' : 'danger'} light>
                              {list.status === 'active' ? 'Active' : 'In Active'}
                            </MDBBadge>
                          </MDBCol> */}
                      </MDBRow>
                    </MDBCol>
                    <MDBCol sm="12" xl={2} md={2} lg="2"  className='text-center'>
                        <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                          <MDBIcon fas icon="edit" size='2x' onClick={() => {
                            console.log(list)
                            setUpdateValue(list); 
                            const _environment_tag = list.application_tag ? list.application_tag : '';
                            const _application_tag = list.application_tag ? list.application_tag : '';
                            const _account_name = list.account_name ? list.account_name : '';
                            const _account_id = list.account_id ? list.account_id : '';
                            const _environment = list.environment ? list.environment : '';
                            const _ec2_region_list = list.ec2_region_list ? list.ec2_region_list : '';
                            const _report_name = list.report_name ? list.report_name : '';
                            const _iam_arn_role = list.iam_arn_role ? list.iam_arn_role : '';
                            const _bucket_name = list.bucket_name ? list.bucket_name : '';
                            const _prefix_path = list.prefix_path ? list.prefix_path : '';
                            const _company_name = list.company_name ? list.company_name : '';
                            const _cloud_type = list.cloud_type ? list.cloud_type : '';
                            const _auto_tag_update = list.auto_tag_update ? list.auto_tag_update : '';
                            const _payer_account_id = list.payer_account_id ? list.payer_account_id : '';
                            setValue(prev => ({
                              ...prev,
                              account_name: _account_name,
                              account_id: _account_id,
                              environment: _environment,
                              ec2_region_list: _ec2_region_list,
                              report_name: _report_name,
                              iam_arn_role: _iam_arn_role,
                              bucket_name: _bucket_name,
                              prefix_path: _prefix_path,
                              company_name: _company_name,
                              cloud_type: _cloud_type,
                              environment_tag: _environment_tag,
                              application_tag: _application_tag,
                              payer_account_id: _payer_account_id,
                              auto_tag_update: _auto_tag_update
                            }));
                            setUpdateFlag(true);
                            }}/>
                        </MDBBtn>
                        <MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
                          <MDBIcon onClick={() => onDelete(list.account_name, list.account_id, index)} fas icon="trash-alt" size='2x'/>
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          ))}
      </MDBRow>
      <Modal flag={flag} setCloseModal={setCloseModal} buttonloader={buttonloader} closealert={closealert} submitbuttonstatus="new" onSubmit={onSubmit} accountValidate={accountValidate}  content={<AWSAccountSettingForm onChange={onChange} value={value}  type="new" />}/>
      {/* update code */}
      <Modal flag={updateflag} setCloseModal={setUpdateCloseModal} buttonloader={buttonloader} onSubmit={onSubmitUpdate} accountValidate={accountValidate} submitbuttonstatus="update" content={<AWSAccountSettingForm onChange={onChange} updatevalue={updatevalue} value={value} type="update"/>}/>
        </>
  )
}

export default AWSOnboarding;



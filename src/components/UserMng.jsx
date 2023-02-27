import React, { useEffect, useState } from 'react';
import client from './apploClient';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBSwitch, MDBCheckbox, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem  } from 'mdb-react-ui-kit';
import { LIST_USER_INFO } from './Graphql';
import Avatar from '@mui/material/Avatar';
import BatchWrapper from './BatchWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useSearchParams, useQueryParams, useNavigate } from "react-router-dom";
import { listUsersMethod, onboardActionMethod, profileInfoMethod, updateUsersMethod, userDetailsUpdateStatus } from './slice/userSlice';
import { deleteUser, userStatusUpdate, usermanagerUserList, changeUserPassword } from './action/userAction';
import ConfirmDialog from './properties/ConfirmDialog/ConfirmDialog';
import Alert from '@mui/material/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';

function UserManagement() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [company, setCompanyName] = useSearchParams();
  const { userType, listUsers, userdetailsupdate } = useSelector((state) => state.user);
  const [list, setList] = useState([]);
  const [openBatch, setOpenBatch] = useState(false);
  const [count, setCount] = useState(0);
  const [nav, setNav] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [getCompany, setCompany] = useState('');
  const [confirmdialogstatus, setConfirmDialogStatus] = useState(false);
  const [detSelecetedUser, setDetSelecetedUser] = useState(false);
  const [close, setCloseAsset] = useState(false);
  const [userstatus, setUserStatus] = useState(false);
  const [requiredpassword, setRequiredPassword] = useState(false);
  const [alartcontent, setAlartContent] = useState("");
  const resetpassword = useRef("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onClose = () => {
    setOpenBatch(false);
  }
  // console.log(userdetailsupdate);

  useEffect(() => {
    // console.log("in list");
    var listUserConfigsItems;
    dispatch(usermanagerUserList())
    .unwrap()
    .then(({ data }) => {
      // console.log(data);
        if (data.listUserConfigs) {
          let listUserConfigs = data.listUserConfigs.items.map(v => ({
            ...v,
            checked: false,
          }));
          listUserConfigsItems = data.listUserConfigs.items;
          if (company.get('company')) {
            listUserConfigsItems = data.listUserConfigs.items.filter(v => v.company_name.toLowerCase() === company.get('company'));
          }
          setList(listUserConfigs);
          dispatch(listUsersMethod(listUserConfigsItems));
          dispatch(userDetailsUpdateStatus(""));
        }
      })
      .catch(err => {
        // setError(err);
      });
  }, []);

  const onChangeCheckBox = (e, index) => {
    const newList = list.map((val, ind) => {
      if (index === ind) {
        val.checked = false;
        if (e.target.checked) {
          val.checked = true;
        }
      }

      return val;
    });
    setList(newList);
    const getCheckedCount = newList.filter(val => val.checked).length;
    setOpenBatch(getCheckedCount ? true: false);
    setCount(getCheckedCount);
    setSelectedUser(newList[index])
    dispatch(profileInfoMethod({
      ...newList[index]
    }));
  }

  const onChangeThCheckBox = (e) => {
    const newList = list.map((val, ind) => {
      val.checked = false;
      if (e.target.checked) {
        val.checked = true;
      }
      return val;
    });
    setList(newList);
    const getCheckedCount = newList.filter(val => val.checked).length;
    setOpenBatch(getCheckedCount ? true: false);
    setCount(getCheckedCount);
  }

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  };

  const onClickSignedUpCustomer = () => {
    setNav(true);
    dispatch(onboardActionMethod("create"));
  }

  const setOffer = (name, inx) => {
    const modifyUser = listUsers.map((val, i) => {
      return {
        ...val,
        offer: i === inx ? name: val.offer
      };
    })
    dispatch(listUsersMethod(modifyUser));
  }

  const setRole = (name, inx) => {
    const modifyUser = listUsers.map((val, i) => {
      return {
        ...val,
        role: i === inx ? name: val.role
      };
    })
    dispatch(listUsersMethod(modifyUser));
  }
  const deleteConfirm = (selectedUser) => {
    setConfirmDialogStatus(true);
    setDetSelecetedUser(selectedUser);
  }
  const resetPassword = (selectedUser) => {
    setShow(true);
    setDetSelecetedUser(selectedUser);
  }
  const handleResetPassword = () =>{
    if(resetpassword.current.value){
      const email = detSelecetedUser.email;
      const password = resetpassword.current.value;
      dispatch(changeUserPassword({email,password}))
      .unwrap()
      .then(({ data }) => {
        setShow(false);
        setUserStatus(true)
        setAlartContent("Password Changed Successfully done.");
      })
      .catch(err => {
        console.log(err);
      });
    }else{
      setRequiredPassword(true);
    }
    // setRequiredPassword
  }
  const confirmClose = () => {
    setConfirmDialogStatus(false);
    
  }
  const onDelete = () => {    
    dispatch(deleteUser(detSelecetedUser))
      .unwrap()
      .then(({ data }) => {
        const newUser = listUsers.filter(list => list.email !== detSelecetedUser.email);
        dispatch(listUsersMethod(newUser));
        setConfirmDialogStatus(false);
        setCloseAsset(true);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const groupCompnay = () => {
    const reducerObject = list.reduce((acc, curr) => {
      const company_name = curr['company_name'].toLowerCase();
      if (acc[company_name]) {
          acc[company_name].count += 1; 
      } else {
          acc[company_name] = {
              ...curr,
              count: 1
          }
      }
      return acc;
    }, {});
    const keys = Object.keys(reducerObject);
    const groupedListArray = keys.map(v => reducerObject[v]);
    return groupedListArray;
  }

  const filterCompnay = (name) => {
    setCompany(name);
    const filterList = list.filter( v => v.company_name.toLowerCase() === name);
    console.log(filterList);
    dispatch(listUsersMethod(filterList));
  }
  const updateUser = (val) => {
    dispatch(updateUsersMethod(val));
    dispatch(onboardActionMethod("update"));
    navigate("/register-new-customer");
  }
  const updateUserActiveStatus = (e,email, password, company_name) => {
    var status_value = 'active';
    if(e.target.checked){
      status_value = 'active';
    }else{
      status_value = 'inactive';
    }
    dispatch(userStatusUpdate({status_value, email, password, company_name}))
      .unwrap()
      .then(({ data }) => {
        setUserStatus(true)
        setAlartContent("User Status Updated Successfully Done.");
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className='SignedUpCustomer'>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={(requiredpassword && "requied-password")}>Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="*******"
                autoFocus
                ref={resetpassword}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleResetPassword}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {confirmdialogstatus && <ConfirmDialog confirmClose={confirmClose} confirmDelete={onDelete} />}
      
      {nav && (
          <Navigate to="/register-new-customer" replace={true} />
      )}
      <div className='table-header'>
        <div> <b>Company name </b>: &nbsp;
          <MDBDropdown group>
            <MDBDropdownToggle color='info' className='btn btn-primary'>{!getCompany ? 'All' : getCompany }</MDBDropdownToggle>
            <MDBDropdownMenu>
            {
              groupCompnay().map(v => ({ ...v, company_name: v.company_name.toLowerCase() })).map( v => (
                <MDBDropdownItem link onClick={() => filterCompnay(v.company_name)}>{v.company_name}</MDBDropdownItem>
              ))
            }
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <div>
          <MDBBtn className="mb-4" onClick={onClickSignedUpCustomer}>
          {userType === 'admin' ? 'Add new company' : 'Add new user'}
          </MDBBtn>
        </div>
      </div>
      {close ? <Alert onClose={() => setCloseAsset(false)} severity="success" >User Deleted Successfully Done.</Alert> : null}
      {userstatus ? <Alert onClose={() => setUserStatus(false)} severity="success" >{alartcontent}</Alert> : null}
      <MDBTable align='middle' striped responsive>
        <MDBTableHead>
          <tr>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Offering</th>
          <th scope='col'>Role</th>
          <th scope='col'>Status</th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
        <MDBTableBody>
          { listUsers.map((val,  index) => (
            <tr>
                <td style={{width: "302px"}}>
                  <div className='d-inline-flex align-items-center'>
                    <Avatar style={{ width: '45px', height: '45px' }} {...stringAvatar(`${val.first_name} ${val.last_name}`)} />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{val.first_name}</p>
                    <p className='text-muted mb-0'>{val.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal ms-3'>{val.last_name}</p>
              </td>
              <td>
              <MDBDropdown group>
                <MDBDropdownToggle color='info' className='btn btn-primary'>{val.offer ? val.offer : 'Offering' } </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={() => setOffer('costimize', index)}>Costimize</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => setOffer('war', index)}>War</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              </td>
              <td>
              <MDBDropdown group>
                <MDBDropdownToggle color='info' className='btn btn-primary'>{val.role ? val.role : 'Role' } </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={() => setRole('CTO', index)}>CTO</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => setRole('CXO', index)}>CXO</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => setRole('Developer', index)}>Developer</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              </td>
              <td>
                  {/* <Form.Check 
                    type="switch"
                    id={index}
                    checked={val.status === 'active' ? 'checked' : ''}
                    onChange={(e) => updateUserActiveStatus(e, val.email, val.password)}
                  /> */}
                  {/* {val.status} */}
                  {
                    val.status === 'active' ?
                    <MDBSwitch
                      defaultChecked={true}
                      onChange={(e) => updateUserActiveStatus(e, val.email, val.password, val.company_name)}
                    /> :
                    <>
                      <p className='status-disable'>test</p>
                      <MDBSwitch
                        defaultChecked={false}
                        onChange={(e) => updateUserActiveStatus(e, val.email, val.password, val.company_name)}
                      />
                    </>
                    
                  }
                
              </td>
              <td>
                <MDBIcon fas icon="key" onClick={() => resetPassword(val)}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MDBIcon fas icon="pen" onClick={() => updateUser(val)} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MDBIcon fas icon="trash-alt" onClick={() => deleteConfirm(val)}/>
              </td>
            </tr>
          ))
          }
      </MDBTableBody>
      </MDBTable>
      {/* <div className='table-header'>
        <div> 
          <MDBBtn className="mb-4" onClick={onClickSignedUpCustomer}>
            Back
          </MDBBtn>
        </div>
        <div>
          <MDBBtn className="mb-4" color='info' onClick={onClickSignedUpCustomer}>
            Submit
          </MDBBtn>
        </div>
      </div> */}
      </div>
  );
};

export default UserManagement;
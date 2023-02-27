import React, { useEffect, useState } from 'react';
import client from './apploClient';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBSwitch, MDBCheckbox } from 'mdb-react-ui-kit';
import { LIST_USER_INFO } from './Graphql';
import Avatar from '@mui/material/Avatar';
import BatchWrapper from './BatchWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { listUsersMethod, onboardActionMethod, profileInfoMethod } from './slice/userSlice';

function SignedUpCustomerGroup() {
    const dispatch = useDispatch();
    const navigateFn = useNavigate();
  const { userType, listUsers } = useSelector((state) => state.user);
  const [list, setList] = useState([]);
  const [openBatch, setOpenBatch] = useState(false);
  const [count, setCount] = useState(0);
  const [nav, setNav] = useState(false);
const [selectedUser, setSelectedUser] = useState(null);
const [groupList, setGroupList] = useState([]);

  const onClose = () => {
    setOpenBatch(false);
  }

  useEffect(() => {
    client
      .query({
        query: LIST_USER_INFO,
      })
      .then(({ data }) => {
        if (data.listUserConfigs) {
          const listUserConfigs = data.listUserConfigs.items.map(v => ({
            ...v,
            checked: false
          }));
          setList(listUserConfigs);
          dispatch(listUsersMethod(data.listUserConfigs.items));
        }
      })
      .catch(err => {
        // setError(err);
      });
  }, []);
    
    useEffect(() => {
        const reducerObject = listUsers.reduce((acc, curr) => {
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
        setGroupList(groupedListArray);
    }, [listUsers]);

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
    
  const onClickLink = (name) => {
      navigateFn('/signedup-customer?company='+name);
  }

  return (
    <div className='SignedUpCustomer'>
      {nav && (
          <Navigate to="/register-new-customer" replace={true} />
      )}
      <MDBBtn className="float-right mb-4 themeBackgroundColor" onClick={onClickSignedUpCustomer}>
        {userType === 'admin' ? 'Add new company' : 'Add new user'}
      </MDBBtn>
      <BatchWrapper
        batchSelectedCount={count}
        open={openBatch}
        onClose={onClose}
        selectedUser={ selectedUser}
      />
      <MDBTable align='middle' striped responsive>
        <MDBTableHead>
          <tr>
          <th scope='col'><MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='' onChange={onChangeThCheckBox}/></th>
          <th scope='col'>Company</th>
            {/* <th scope='col'>First & Last Name</th> */}
            <th scope='col'>Count</th>
          <th scope='col'>Status</th>
        </tr>
      </MDBTableHead>
        <MDBTableBody>
          {groupList.map((val,  index) => (
            <tr>
              <td>
                <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' checked={val.checked} onChange={(e) => onChangeCheckBox(e, index)}/>
              </td>
                <td>
                  <a href='javascript:void()' onClick={() => onClickLink(val.company_name)}>{val.company_name}</a>
                </td>
                {/* <td style={{width: "302px"}}>
                    <div className='d-inline-flex align-items-center'>
                        <Avatar style={{ width: '45px', height: '45px' }} {...stringAvatar(`${val.first_name} ${val.last_name}`)} />
                    <div className='ms-3'>
                        <p className='fw-bold mb-1'>{val.first_name} {val.last_name}</p>
                        <p className='text-muted mb-0'>{val.email}</p>
                    </div>
                    </div>
                </td> */}
              <td>
                <p className='fw-normal ms-3'>{val.count}</p>
              </td>
              <td>
                {/* {val.status ? <MDBBadge color='success' pill>
                  {val.status}
                </MDBBadge> : '-'} */}
                <MDBSwitch id='flexSwitchCheckDefault' />
              </td>
            </tr>
          ))}
      </MDBTableBody>
      </MDBTable>
      </div>
  );
};

export default SignedUpCustomerGroup;
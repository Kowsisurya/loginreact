import React, { useEffect, useState } from 'react';
import client from './apploClient';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBSwitch, MDBCheckbox } from 'mdb-react-ui-kit';
import { LIST_USER_INFO } from './Graphql';
import Avatar from '@mui/material/Avatar';
import BatchWrapper from './BatchWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useSearchParams, useQueryParams } from "react-router-dom";
import { listUsersMethod, onboardActionMethod, profileInfoMethod } from './slice/userSlice';

function SignedUpCustomer() {
  const dispatch = useDispatch();
  const [company, setCompanyName] = useSearchParams();
  const { userType, listUsers } = useSelector((state) => state.user);
  const [list, setList] = useState([]);
  const [openBatch, setOpenBatch] = useState(false);
  const [count, setCount] = useState(0);
  const [nav, setNav] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const onClose = () => {
    setOpenBatch(false);
  }

  useEffect(() => {
    let listUserConfigsItems;
    client
      .query({
        query: LIST_USER_INFO,
      })
      .then(({ data }) => {
        if (data.listUserConfigs) {
          let listUserConfigs = data.listUserConfigs.items.map(v => ({
            ...v,
            checked: false
          }));
          listUserConfigsItems = data.listUserConfigs.items;
          if (company.get('company')) {
            listUserConfigsItems = data.listUserConfigs.items.filter(v => v.company_name === company.get('company'));
          }
          setList(listUserConfigs);
          dispatch(listUsersMethod(listUserConfigsItems));
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
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Status</th>
        </tr>
      </MDBTableHead>
        <MDBTableBody>
          {listUsers.map((val,  index) => (
            <tr>
              <td>
                <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' checked={val.checked} onChange={(e) => onChangeCheckBox(e, index)}/>
              </td>
                <td>
                  {val.company_name}
                </td>
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

export default SignedUpCustomer;
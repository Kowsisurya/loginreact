import React, { useState, useEffect } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol
} from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import client from './apploClient';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { LIST_USER_INFO } from './Graphql';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { listUsersMethod, onboardActionMethod, profileInfoMethod, getCompanyName, updateUsersMethod } from './slice/userSlice'
import { usermanagerUserList } from './action/userAction';

function AdminDashboard() {
  const [basicActive, setBasicActive] = useState('tab1');
  const [accounttype, setAccountType] = useState(['register','active','inactive']);
  const dispatch = useDispatch();
  const navigateFn = useNavigate();
  const { userType, listUsers } = useSelector((state) => state.user);
  const [activelist, setActiveList] = useState([]);
  const [inactivelist, setInActiveList] = useState([]);
  const [registerlist, setRegisterList] = useState([]);
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  useEffect(() => {
    // client
      // .query({
      //   query: LIST_USER_INFO,
      // })
      // .then(({ data }) => {
      dispatch(usermanagerUserList())
      .unwrap()
      .then(({ data }) => {
        console.log(data);
        if (data.listUserConfigs) {
          // const listUserConfigs = data.listUserConfigs.items.map(v => v.company_name.toLowerCase());
          // const uniqueArr = new Set([...listUserConfigs]);
          // console.log("fetch");
          // console.log(uniqueArr);
          // dispatch(listUsersMethod([...uniqueArr]));
          dispatch(listUsersMethod(data.listUserConfigs.items));  
        }
      })
      .catch(err => {
        // setError(err);
      });
 // console.log(listUsers);
  }, []);

  useEffect(() => {
    //active list
    const userlist = listUsers?.filter(datas => {
        return datas.status === 'active';
    });
    const listUserConfigs = userlist.map(v => v.company_name.toLowerCase());
    const uniqueArr = new Set([...listUserConfigs]);
    setActiveList([...uniqueArr]);

    //inactivelist
    const userinactivelist = listUsers?.filter(datas => {
        return datas.status === 'inactive' || datas.status === null;
    });
    setInActiveList(userinactivelist);
    //register
    const userregisterlist = listUsers?.filter(datas => {
        return datas.status === 'register';
    });
    // console.log(userregisterlist);
    setRegisterList(userregisterlist);
  },[listUsers])
  const viewCard = (name) => {
    console.log(name)
  }
  const renderTiles = (name) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 200,
                    height: 200,
                },
            }}
            style={{position: "relative"}}
            >
            <Paper sx={{ minWidth: 220 }} elevation={3}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        
                    </Typography>
                    <Typography variant="body2">
                        
                    </Typography>
                    </CardContent>
                    <CardActions className='action-btn' >
                      <div>
                        <Button size="small" onClick={() => {
                          dispatch(getCompanyName(name));
                          // dispatch(getCompanyName('fivestar'));
                           navigateFn("/card")
                           }}>Click Here >></Button>
                        {/* <Button size="small" onClick={viewCard(name)}>Click Here >></Button> */}
                      </div>
                       
                    </CardActions>
            </Paper>
        </Box>
    );
  }

  const renderTilesInactive = (data) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 200,
                    height: 200,
                },
            }}
            style={{position: "relative"}}
            >
            <Paper sx={{ minWidth: 220 }} elevation={3}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        
                    </Typography>
                    <Typography variant="h5" component="div">
                        {data.company_name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        
                    </Typography>
                    <Typography variant="body2">
                        
                    </Typography>
                    </CardContent>
                    <CardActions className='action-btn' >
                      <div>
                        <Button size="small" onClick={() => {
                           dispatch(updateUsersMethod(data));
                           dispatch(onboardActionMethod("update"));
                           navigateFn("/register-new-customer");
                           }}>Click Here >></Button>
                        {/* <Button size="small" onClick={viewCard(name)}>Click Here >></Button> */}
                      </div>
                       
                    </CardActions>
            </Paper>
        </Box>
    );
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol xs="12" sm='12' md='12' lg="10" xl="10">
            <div className='admin-content'>
                <MDBTabs className='mb-3'>
                    <MDBTabsItem>
                      <MDBTabsLink className='plat-dashboard-link' onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                          Active Accounts
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink className='plat-dashboard-link' onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                          InActive Accounts
                      </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                      <MDBTabsLink className='plat-dashboard-link' onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                          Registered Account
                      </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}>
                        <MDBRow>
                        {
                            activelist.map(name => 
                                <MDBCol xs="12" sm='12' md='12' lg="3" xl="3"> {renderTiles(name)} </MDBCol>
                            )
                        }
                        </MDBRow>
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}>
                        <MDBRow>
                        {
                            inactivelist.map(data => 
                                <MDBCol xs="12" sm='12' md='12' lg="3" xl="3"> {renderTilesInactive(data)} </MDBCol>
                            )
                        }
                        </MDBRow>
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab3'}>
                        <MDBRow>
                        {
                            registerlist.map(data => 
                                <MDBCol xs="12" sm='12' md='12' lg="3" xl="3"> {renderTilesInactive(data)} </MDBCol>
                            )
                        }
                        </MDBRow>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </MDBCol>
        <MDBCol xs="12" sm='12' md='12' lg="2" xl="2">
            <div className='admin-content'>
                <MDBBtn onClick={() => { dispatch(onboardActionMethod("create")); navigateFn('/register-new-customer');}}>+ Add new customer</MDBBtn>
            </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AdminDashboard;
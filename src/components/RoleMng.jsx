import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBListGroup, MDBListGroupItem, MDBRipple,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,
  MDBSwitch,
  MDBCol
} from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from "react-router-dom";

function AdminActions() {
  const [basicActive, setBasicActive] = useState('tab1');
  const navigate = useNavigate();

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

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
                    <CardActions className='action-btn'>
                        <Button size="small" onClick={() => null}>Click Here</Button>
                    </CardActions>
            </Paper>
        </Box>
    );
  }

  return (
    <div className='role-mng'>
        <MDBRow>
            <MDBCol xs="12" sm='12' md='12' lg="6" xl="6">
                <div>
                <MDBBtn color='info' className='mb-4'>
                    Role &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </MDBBtn>
                </div>
                <div>
                <MDBDropdown group className='mb-4'>
                    <MDBDropdownToggle color='white'>Master  &nbsp;&nbsp;</MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </div>
                <div>
                <MDBDropdown group className='mb-4'>
                    <MDBDropdownToggle color='white'>CTO  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </div>
                <div>
                <MDBDropdown group className='mb-4'>
                    <MDBDropdownToggle color='white'>CXO  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </div>
                <div>
                <MDBDropdown group className='mb-4'>
                    <MDBDropdownToggle color='white'>DEVELOPER</MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </div>
            </MDBCol>
            <MDBCol xs="12" sm='12' md='12' lg="6" xl="6">
            <div className='mb-4'>
                <MDBBtn color='info'>
                    Offering
                </MDBBtn>
                </div>
            <div>
                <MDBDropdown group className='mb-4'>
                    <MDBDropdownToggle color='white'>COSTIMIZE</MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </div>
                <div>
                <MDBDropdown group className='mb-4'>
                    <MDBDropdownToggle color='white'>WAR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </div>
                <div>
                <MDBDropdown group className='mb-4'>
                    <MDBDropdownToggle color='white'>COSTIMIZE</MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </div>
                <div>
                <MDBDropdown group className='mb-4'>
                    <MDBDropdownToggle color='white'>WAR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </div>
            </MDBCol>
        </MDBRow>
    </div>
  );
}

export default AdminActions;
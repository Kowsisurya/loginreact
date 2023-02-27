import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const navigateFn = useNavigate();
  // const { companyName } = useSelector((state) => state.user);
  // console.log(companyName);

  const { userInfo, offeringlist } = useSelector((state) => state.user);
  const [offeringcount, setOfferingCount] = useState(0)
  const [offering, setOffering] = useState([])
  const [cardlist, setCardList] = React.useState([
    {
      name: "costmize",
      path: "/costimize_dashboard"
    },
    {
      name: "war",
      path: ""
    }
  ]);

  React.useEffect(() => {
    if(offeringlist){
      setOffering(JSON.parse(offeringlist));
      setOfferingCount(offering.length);
    }
    
  }, [])
  

  const onClick = (id) => {
    if (id === 2) {
      window.open("http://localhost:3000/war", "_self");
    }else{
      // window.open("http://localhost:3000/consolidated-view", "_self");
      window.open("http://localhost:3000/CostimizeTab","_self");
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 190,
          height: 200,
        },
      }}
      style={{position: "relative"}}
    >
      {
        offeringcount > 0 ?
        <>
        {
          cardlist.map((data) => 
            {offering.indexOf(data.name) === -1 &&
              <Paper sx={{ minWidth: 275 }} elevation={3}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      
                    </Typography>
                    <Typography variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly. well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigateFn(data.path)}>Click Here</Button>
                  </CardActions>
                </Paper>
            }
          )
        }
          

        </> :
        <>
        <Paper sx={{ minWidth: 275 }} elevation={3}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                
              </Typography>
              <Typography variant="h5" component="div">
                COSTMIZE
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                
              </Typography>
              <Typography variant="body2">
                well meaning and kindly. well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigateFn("/costimize_dashboard")}>Click Here</Button>
            </CardActions>
          </Paper>
        </>
      }
      
    
    </Box>
  );
}
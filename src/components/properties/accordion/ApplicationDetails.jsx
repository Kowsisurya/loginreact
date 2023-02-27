import { Row, Col } from 'react-bootstrap';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ApplicationDetails = (props) => {
    const breadcrumbs = [
        ,
      ];

    return(
        <>
        <Row>
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                    className='plat-breadcrumbs'
                >
                    <Link underline="hover" key="1" color="inherit" href="/">
                        All Environment
                    </Link>,
                    <Link
                    underline="hover"
                    key="2"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                    >
                        Production
                    </Link>,
                    <Link
                    underline="hover"
                    key="2"
                    color="inherit"
                    onClick={() => props.setApplicationViewStatus(false)}
                    >
                        AWS
                    </Link>,
                    <Typography key="3" color="text.primary">
                        ERP
                        <span>(VM - 27, DBaas - 3, Others - 27)</span>
                    </Typography>
                </Breadcrumbs>
            </Stack>
        </Row>
        {/* <p onClick={() => props.setApplicationViewStatus(false)}>back</p> */}
        </>
    )
}
export default ApplicationDetails;
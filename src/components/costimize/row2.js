import { MDBIcon } from 'mdb-react-ui-kit';
import Chart from "./trendChart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { FaArrowsAltH  , FaExpandAlt} from "react-icons/fa";
import './style.css'
function Row2() {

    const current = new Date()
    const date = `${current.getDate()}`
    const year = `${current.getFullYear()}`
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let monthIndex = (new Date().getMonth());
    let monthName = monthNames[monthIndex];

  

    return (
        <>
            <div className="col3">
                <Card
                    style={{
                        width: 224,
                        height: 83,
                        backgroundColor: "aliceblue",
                    }}
                >
                    <CardContent>
                        <Typography className='poppins-font'
                            style={{ fontSize: 12 }}
                            color="black"
                            gutterBottom
                        >
                         <div className='iconsalign'>
                          <FaExpandAlt   className='zoomIconStyle'/>
                          </div>    
                            {monthName} {year}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As of {date} {monthName}
                        </Typography>
                        <Typography className='poppins-font cardnumber'
                            style={{ fontSize: '18px', textAlign: 'center', fontweight: "bold", lineheight: ' 2em !important' }}
                            color="black"
                            gutterBottom
                        >
                            <label className='poppins-font cardnumber'> $14,500</label>
                            &nbsp;&nbsp;
                            <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '9px' }} />
                            <label className='text-danger labelsmallest poppins-font'>4500</label>
                        </Typography>
                       
                    </CardContent>
                </Card>
            </div>

            <div className="col3">
                <Card
                    style={{
                        width: 224,
                        height: 83,
                        backgroundColor: "aliceblue",
                    }}
                >
                    <CardContent>
                        <Typography className='poppins-font'
                            style={{ fontSize: 12 }}
                            color="black"
                            gutterBottom
                        >
                            <div className='iconsaligncenter'>
                          <FaExpandAlt   className='zoomIconStyle'/>
                          </div>   
                            Projected Spend for {monthName} {year}
                        </Typography>
                        <Typography className='poppins-font cardnumber'
                            style={{ fontSize: '18px', textAlign: 'center', fontweight: "bold", lineheight: ' 2em !important' }}
                            color="black"
                            gutterBottom
                        >
                            <label className='poppins-font cardnumber' > $22,300</label>
                            &nbsp;&nbsp;
                            <MDBIcon className='me-1 text-danger' fas icon='caret-up' style={{ fontSize: '9px' }} />
                            <label className='text-danger labelsmallest poppins-font'>6500</label>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="col3">
            <div className='iconsalignright'>
                          <FaExpandAlt   className='zoomIconStyle'/>
                          </div>
                <Chart /></div>
            {/* <div className="col3">
                <Card
                    style={{
                        width: 224,
                        height: 83,
                        backgroundColor: "aliceblue",
                    }}
                >
                    <CardContent>
                    <Chart />
                    </CardContent>
                </Card>
            </div> */}

        </>


    )
}
export default Row2
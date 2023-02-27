import { MDBIcon } from 'mdb-react-ui-kit';
import Chart from "./trendChart";
import './style.css'
function CostimizeRow2() {


    const current = new Date()
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const date = `${current.getDate()}`
    const year = `${current.getFullYear()}`
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let monthIndex = (new Date().getMonth());
    let monthName = monthNames[monthIndex];


    return (
        <>
            <div className="col-3">
                <div class="card" >
                    <div class="card-body">

                        <div class="float-container">
                        {/* <MDBIcon className='blue' fas icon="expand-arrows-alt" /> */}
                            <div class="float-child poppins-font">
                                &nbsp;{monthName} {year}
                            </div>
                            <div class="float-child textright poppins-font">
                                As of {date} {monthName}
                            </div>
                        </div><br />
                        <div className="labelCenter2">
                            <label className='labelmargin'> $ 14,500</label>
                            <label className='text-danger labelsmallest poppins-font'>
                                <MDBIcon className='me-1 text-danger' fas icon='caret-down' />4500</label>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="col-3">
                <div class="card">
                    <div class="card-body">
                        {/* <div class="float-container">
                            <div class="float-child poppins-font"> */}
                                <label className="labelnormal poppins-font"> Projected Spend for {monthName} {year}</label>
                                <br />
                                <div className="labelCenter2">
                                    <label className="labelmargin"> $ 22,300</label>&nbsp;&nbsp;
                                    <label className='text-danger labelsmallest poppins-font'>
                                        <MDBIcon className='me-1 text-danger' fas icon='caret-down' /> &nbsp;&nbsp;6500 </label>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div>
                </div> */}
                <div className="col-3">
                    <div class="card">
                       {/* <div class="card-body">  */}
                            <Chart />
                        {/* </div>  */}
                    </div>
                </div>
                <div className="col-3">
                </div>

            </>


            )
}
            export default CostimizeRow2
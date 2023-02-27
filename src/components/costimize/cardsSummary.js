import Card from "react-bootstrap/Card";
import React from "react";
import {
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function CardSummary() {
    
    const current = new Date()
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const date = `${current.getDate()}`
    const year = `${current.getFullYear()}`


    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthIndex = (new Date().getMonth());
    let monthName = monthNames[monthIndex];


  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {/* <Card.Title style={{ color: "green" }}>GEEKSFORGEEKS</Card.Title> */}
          {/* <Card.Subtitle className="mb-2 text-muted">
            One Stop For all CS subjects
          </Card.Subtitle> */}
          <Card.Text>
           <label className="lableLeft"> Dec {year}</label>
                            <label > &nbsp; &nbsp;  As of {date} {monthName}</label>

                            <br/><br/>
                            <label> $ 14,500</label>&nbsp;&nbsp;&nbsp;&nbsp;
                             <MDBIcon icon="angle-up" className="red" /> &nbsp;4500 
          </Card.Text>
          {/* <Card.Link href="#"> For Students</Card.Link> */}
        </Card.Body>
      </Card>
    </>
  );
}
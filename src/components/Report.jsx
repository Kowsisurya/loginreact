import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { MDBBadge, MDBListGroup, MDBListGroupItem ,MDBBtn} from 'mdb-react-ui-kit';

export default function App() {
  const { warReports:{ reliability, perfExcel, operationalExcel, cos, sustaiability, security} } = useSelector((state) => state.war);
    return (
      <>
        <div className='report-container'>
            <MDBListGroup light numbered style={{ minWidth: '22rem' }} className='reports'>
              <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>Reliability</div>
                </div>
                <MDBBadge pill light>
                  {reliability}
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>Security</div>
                </div>
                <MDBBadge pill light>
                  {security}
                </MDBBadge>
              </MDBListGroupItem>
              <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>Cost Optimization</div>
                </div>
                <MDBBadge pill light>
                  {cos}
                </MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>Performence Optimization</div>
                </div>
                <MDBBadge pill light>
                  {perfExcel}
                </MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>Operational Excellence</div>
                </div>
                <MDBBadge pill light>
                  {operationalExcel}
                </MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>SUSTAINABILITY</div>
                </div>
                <MDBBadge pill light>
                  {sustaiability}
                </MDBBadge>
      </MDBListGroupItem>
      
            </MDBListGroup>
            <div className='report-btn'>
              <MDBBtn className='themeBackgroundColor'>Generate Report</MDBBtn>
            </div>
        </div>
      </>
  );
}
import React, { useState } from 'react';
import Select from 'react-select';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

import { Table } from 'react-bootstrap';
export default function SavingTablesDetails() {

  return (
    <>

      <div className='table-responsive'>
        <table className='borderalign' >
          <thead>
            <tr >


              <th className='poppins-font borderalign' style={{ fontSize: '12px' }} > Application</th>

              <th className='poppins-font borderalign' style={{ fontSize: '12px' }}> Pricing Model</th>

              <th className='poppins-font borderalign ' style={{ fontSize: '12px' }}> Spend</th>
              <th className='poppins-font borderalign ' style={{ fontSize: '12px' }}> Actual savings</th>
              <th className='poppins-font borderalign' style={{ fontSize: '12px' }} > Potential savings</th>
            </tr>


          </thead>
          <tbody>
            <tr>
              <td className='poppins-font borderalign p-3' style={{ fontSize: '12px' }}>ERP</td>

              <td className='poppins-font  borderalign' style={{ fontSize: '12px' }}>On Demand</td>

              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}>$2128 </td>
              <td className='poppins-font borderalign' style={{ fontSize: '12px' }}>$524</td>
              <td className='  poppins-font borderalign' style={{ fontSize: '12px' }}>$512  </td>
            </tr>
            <tr>
              <td className='poppins-font borderalign p-3' style={{ fontSize: '12px' }}>CRM</td>

              <td className='poppins-font  borderalign' style={{ fontSize: '12px' }}>On Demand</td>

              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}>$2128 </td>
              <td className='poppins-font borderalign' style={{ fontSize: '12px' }}>$524</td>
              <td className='  poppins-font borderalign' style={{ fontSize: '12px' }}>$512  </td>
            </tr>
            <tr>
              <td className='poppins-font borderalign p-3' style={{ fontSize: '12px' }}>SRM</td>

              <td className='poppins-font  borderalign' style={{ fontSize: '12px' }}>On Demand</td>

              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}>$2128 </td>
              <td className='poppins-font borderalign' style={{ fontSize: '12px' }}>$524</td>
              <td className='  poppins-font borderalign' style={{ fontSize: '12px' }}>$512  </td>
            </tr>
            <tr>
              <td className='poppins-font borderalign p-3' style={{ fontSize: '12px' }}>Salesforce</td>

              <td className='poppins-font  borderalign' style={{ fontSize: '12px' }}>On Demand</td>

              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}>$2128 </td>
              <td className='poppins-font borderalign' style={{ fontSize: '12px' }}>$524</td>
              <td className='  poppins-font borderalign' style={{ fontSize: '12px' }}>$512  </td>
            </tr>
          </tbody>
        </table>



      </div>

    </>
  );
}
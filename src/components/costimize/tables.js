import { MDBIcon } from 'mdb-react-ui-kit';
import './style.css';

export default function TablesDetails() {

  return (
    <>
       <div className='table-responsive'> 
        {/* <table className='table'> */}
        <table className='borderalign'>
          <thead>
            <tr >

              <th /><th /> <th />
              <th className='poppins-font' style={{ backgroundColor: 'aliceblue', "text-align": "center", fontSize: '12px' }} > &nbsp; VM &nbsp;</th>

              <th /><th /> <th />
              <th className='poppins-font' style={{ backgroundColor: 'aliceblue', "text-align": "center", fontSize: '12px' }}> &nbsp;DBaas &nbsp;</th>

              <th /><th /> <th />
              <th className='poppins-font ' style={{ backgroundColor: 'aliceblue', "text-align": "center", fontSize: '12px' }}> &nbsp; Others &nbsp;</th>

            </tr>


          </thead>
          <tbody>
            <tr>
              <th className='poppins-font borderalign' style={{ fontSize: '12px' }}>Application</th>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <td className='poppins-font tdstyle' style={{ "text-align": "left", fontSize: '12px',fontweight: '600' }}>Count</td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font  borderalign' style={{ "text-align": "left", fontSize: '12px' }}>Spend</td>
              &nbsp;&nbsp;
              <td className='poppins-font' style={{ "text-align": "left", fontSize: '12px' }}>Count</td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font  borderalign' style={{ "text-align": "left", fontSize: '13px' }}>Spend</td>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font' style={{ "text-align": "left", fontSize: '12px' }}>Count</td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font borderalign' style={{ "text-align": "left", fontSize: '12px' }}>Spend</td>
            </tr>

            <tr>
              <th className='poppins-font borderalign' style={{ fontSize: '12px' }}>ERP</th>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font' style={{ fontSize: '12px' }}>106</td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}>$23 <MDBIcon className='me-1 text-danger' fas icon='caret-up' /></td>
              &nbsp;&nbsp;
              <td className='poppins-font' style={{ fontSize: '12px' }}>106</td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='  poppins-font borderalign' style={{ fontSize: '12px' }}>$154  <MDBIcon className='me-1 text-success' fas icon='caret-down' /></td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font ' style={{ fontSize: '12px' }}>106</td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font' style={{ fontSize: '12px' }}>$230 <MDBIcon className='me-1 text-success' fas icon='caret-down' /></td>
            </tr>
            <tr>
              <th className='poppins-font borderalign' style={{ fontSize: '12px' }}>CRM</th>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font' style={{ fontSize: '12px' }}> 100
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}> $100 <MDBIcon className='me-1 text-success' fas icon='caret-down' />

              </td>
              &nbsp;&nbsp;
              <td className='poppins-font' style={{ fontSize: '12px' }}>  100
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}>$350
                <MDBIcon className='me-1 text-danger' fas icon='caret-up' />
                
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font' style={{ fontSize: '12px' }}>
                100
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='r poppins-font' style={{ fontSize: '12px' }}>$100
                <MDBIcon className='me-1 text-danger' fas icon='caret-up' />
                
              </td>

            </tr>
            <tr>
              <th className='poppins-font borderalign' style={{ fontSize: '12px' }}>SRM</th>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font' style={{ fontSize: '12px' }}>218 </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}> $100
                <MDBIcon className='me-1 text-danger' fas icon='caret-up' />
               
              </td> &nbsp;&nbsp;
              <td className='poppins-font ' style={{ fontSize: '12px' }}>
                218
              </td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font  borderalign' style={{ fontSize: '12px' }}> $930
                <MDBIcon className='me-1 text-danger' fas icon='caret-up' />
               
              </td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font' style={{ fontSize: '12px' }}> $218
              </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font' style={{ fontSize: '12px' }}> $550
                <MDBIcon className='me-1 text-success' fas icon='caret-down' />
               
              </td>

            </tr>
            <tr>
              <th className='poppins-font borderalign' style={{ fontSize: '12px' }}>Salesforce</th>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font' style={{ fontSize: '12px' }}> 87
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}>$100
                <MDBIcon className='me-1 text-danger' fas icon='caret-up' />
                
              </td> &nbsp;&nbsp;
              <td className='poppins-font ' style={{ fontSize: '12px' }}>
                87
              </td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font borderalign' style={{ fontSize: '12px' }}> $920
                <MDBIcon className='me-1 text-danger' fas icon='caret-up' />
               
              </td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className='poppins-font ' style={{ fontSize: '12px' }}>
                87
              </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td className=' poppins-font' style={{ fontSize: '12px' }} >$443
                <MDBIcon className='me-1 text-danger' fas icon='caret-up' />
                
              </td>
            </tr>
          </tbody>
        </table>


      </div>

    </>
  );
}
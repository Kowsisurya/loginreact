import React, { useState, useEffect } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
    MDBCol,
    MDBCheckbox,
    MDBBtn,
    MDBTextArea,
    MDBBadge
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';

import SecurityData from './jsonData/SecurityData.json'
import { sendSecurityReport } from './slice/warSlice';

function Security({ activeNextTab }) {
    const dispatch = useDispatch();
    const [verticalActive, setVerticalActive] = useState('tab0');
    const [tabSuccess, setTabSuccess] = useState({});

    const handleVerticalClick = (value) => {
      setTabSuccess(prevtab => {
        if(!value) return prevtab;
        return {
            ...prevtab,
            [`tab${value-1}`]: true
        }
      });
  
      if (value === 10) {
        value = 0;
        activeNextTab('tab3');
      }
      setVerticalActive(`tab${value}`);
    };
  
    useEffect(() => {
      const getSecurityAnsCount = Object.keys(tabSuccess).length;
      dispatch(sendSecurityReport(getSecurityAnsCount));
    }, [tabSuccess]);
  
  const { data } = SecurityData;
    
  return (
    <>
        <MDBRow className='war-design-inner'>
              <MDBRow>
              <h6 className='operational-badge'>
                Operational Excellence
                <MDBBadge className='ms-2'>{Object.keys(tabSuccess).length}/10</MDBBadge>
              </h6>
              </MDBRow>
        <MDBCol xl='3'>
          <MDBTabs className='flex-column flex-sm-column'>
            {
              data.map((topic, index) => (
                <MDBTabsItem className={tabSuccess[`tab${index}`] ? 'success-tab' : ''}>
                  <MDBTabsLink onClick={() => tabSuccess[`tab${index}`] && handleVerticalClick(index)} active={verticalActive === `tab${index}`}>
                    OPS {index+1}. {topic.question}
                  </MDBTabsLink>
                </MDBTabsItem>
              ))
            }
          </MDBTabs>
        </MDBCol>
        <MDBCol size='6' className='mb-4'>
          <MDBTabsContent className='tab-content'>
            {
              data.map((topic, index) => (
                <MDBTabsPane show={verticalActive === `tab${index}`}>
                  {
                    topic.ans.map(ans => (
                      <>
                        <MDBCheckbox name='inlineCheck' id={`inlineCheckbox${index}`} value='option1' label={ans} />
                      </>
                    ))
                  }
                  <MDBTextArea label='Message' id='textAreaExample' rows={4} />
                  <MDBBtn className='me-1 mt-4' onClick={() => handleVerticalClick(index+1)}>
                    Next
                  </MDBBtn>
                </MDBTabsPane>
              ))
            }
          </MDBTabsContent>
          
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default Security;
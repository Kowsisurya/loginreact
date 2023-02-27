import React, {useState} from 'react';
import {
  MDBTabsPane,
  MDBTabsContent,
  MDBContainer,
  MDBRow,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBCol
} from 'mdb-react-ui-kit';
import AWSOnboarding from './AWSOnboarding';

function AccountOnboarding() {
    const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  return (
    <MDBContainer className='AccountOnboarding'>
      <h4 class="mt-5 AccountOnboardingH2">Account onboarding page</h4>
        {/* <MDBRow>
            <MDBTabs pills className='mb-3'>
              <MDBCol xs="12" sm='12' md='12' lg="3" xl="3">
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                    AWS
                    </MDBTabsLink>
                </MDBTabsItem>
              </MDBCol>
              <MDBCol xs="12" sm='12' md='12' lg="3" xl="3">
              <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                  AZURE
                  </MDBTabsLink>
            </MDBTabsItem>
            </MDBCol>
            <MDBCol xs="12" sm='12' md='12' lg="3" xl="3">
              <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                  GCP
                  </MDBTabsLink>
            </MDBTabsItem>
            </MDBCol>
            </MDBTabs>
        </MDBRow> */}
        <MDBRow>
          <MDBTabsContent>
            <MDBTabsPane show={basicActive === 'tab1'}>
                <AWSOnboarding />
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab2'}>
              <div className='coming-soon-body'>
                <h1 className='coming-soon-content'>COMING SOON</h1>
              </div>
                {/* <AWSOnboarding /> */}
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab3'}>
              <div className='coming-soon-body'>
                <h1 className='coming-soon-content'>COMING SOON</h1>
              </div>
                {/* <AWSOnboarding /> */}
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBRow>
      </MDBContainer>
  );
}

export default AccountOnboarding;
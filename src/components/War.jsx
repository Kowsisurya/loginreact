import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import Report from './Report';
import Reliability from './Reliability.jsx';
import Security from './Security';
import CostOptimization from './CostOptimization.jsx';
import PerformenceEfficiency from './PerformenceEfficiency';
import OperationalExcellence from './OperationalExcellence';
import Sustainability from './Sustainability';

function War() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
    
  const activeNextTab = (tab) => {
      setBasicActive(tab);
  }

  return (
    <>
      <h4 className='wartitle'>War</h4>
    <div className='war-design-container'>
      <MDBTabs className='war-design'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Reliability
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Security
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            Cost Optimization
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
            Performance Efficiency
        </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>
            Operational Excellence
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab6')} active={basicActive === 'tab6'}>
            Sustainability
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab7')} active={basicActive === 'tab7'}>
            Reports
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
            <Reliability activeNextTab={activeNextTab} />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
            <Security activeNextTab={activeNextTab} />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}>
          <CostOptimization activeNextTab={activeNextTab} />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab4'}>
          <PerformenceEfficiency activeNextTab={activeNextTab} />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab5'}>
          <OperationalExcellence activeNextTab={activeNextTab} />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab6'}>
          <Sustainability activeNextTab={activeNextTab} />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab7'}>
          <Report />
        </MDBTabsPane>
      </MDBTabsContent>
      </div>
      </>
  );
}

export default War;
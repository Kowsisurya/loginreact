import { Space, Table, Tag } from 'antd';
import css from '@emotion/styled';
import "./newsavingsmodel.css";
import QuickView from '../QuickView';
import Tapmenu from '../Tapmenu';

const SavingsModel = () => {

    const columns = [
       
        {
          title: 'Application',
          dataIndex: 'application',
          key: 'application',
          responsive: ['md',"xs"],
        },
        {
          title: 'Environment',
          dataIndex: 'environment',
          key: 'environment',
          responsive: ['md'],
        },
        {
            title: "Environment Identified Potential Realised Recommendation Details",
            render: (record) => (
              <>
                {record.environment}
                <br />
                {record.identified}
                <br />
                {record.potential}
                <br />
                {record.realised}
                <br />
                {record.recommendation}
                <br />
                {record.details}
              </>
            ),
            responsive: ["xs"]
          },
        {
          title: 'Identified Savings/Month',
          dataIndex: 'identified',
          key: 'identified',
          responsive: ['md'],
        },
        {
          title: 'Potential Savings/Month',
          key: 'potential',
          dataIndex: 'potential',
          responsive: ['md'],
        },
        {
            title: 'Realised Savings/Annum',
            dataIndex: 'realised',
            key: 'realised',
            responsive: ['md'],
        },
        {
            title: 'Recommendation',
            dataIndex: 'recommendation',
            key: 'recommendation',
            responsive: ['md'],
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
            responsive: ['md'],
        },
      ];
      const data = [
        {
          key: '1',
          application: 'Employee Portal',
          environment: 'PRD',
          identified: '$46',
          potential: "$46",
          realised: '$552',
          recommendation: 'Pending',
          details: 'Conversion to RI',
          type:"data"
        },
        {
            key: '2',
            application: 'Employee Portal',
            environment: 'PRD',
            identified: '$46',
            potential: "$46",
            realised: '$552',
            recommendation: 'Pending',
            details: 'Conversion to RI',
            type:"data"
          },
          {
            key: '3',
            application: 'total',
            environment: '',
            identified: '$4336',
            potential: "$436",
            realised: '$5532',
            recommendation: '',
            details: '',
            type:"footer"
          }
      ];
     
      const tableProps = {
      };

    return(
        <>
          <div className='plat-dashboard-body'>
                <div className='plat-dashboard-quickview'>
                    <QuickView/>
                </div>

                <div className='plat-dashboard-tabs'>
                    <Tapmenu  excalname='savings models' type="savingsmodel"/>
                    <div className='plat-full-asset-spend-cover'>
                        <div className='plat-saving-table-body'>
                            <Table 
                                {...tableProps}
                                className="savings_new_table"
                                columns={columns} 
                                dataSource={data} 
                                rowClassName={(record, index) => record.type === 'footer' ? 'savings-table-footer' : ''}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default SavingsModel;
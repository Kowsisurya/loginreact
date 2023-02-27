import { Table } from 'antd';


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
      title: 'Account',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Allocated Budget',
      dataIndex: 'allocated_budget',
      key: 'allocated_budget',
    },
    {
      title: 'Budget Spend',
      dataIndex: 'budget_spend',
      key: 'budget_spend',
    },
    {
      title: 'Month / Year',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Actuals VS. Budget',
      dataIndex: 'actualsbudget',
      key: 'actualsbudget',
      render: (record) => {
            return (
                <>
                    <div className='bar-main-div'>
                        <div class="main-box">
                            <div class="boby-box"> 
                            </div>
                        </div>
                        <span className='bar-per'>{record}%</span>
                    </div>
                </>
            )
        }
    },
    
  ];
  const data = [
    {
      key: '1',
      application: 'Employee Portal',
        environment: 'PRD',
        account: 'PRD',
        allocated_budget: '$5432',
        budget_spend: '$5400',
        date:"02/2023",
        actualsbudget: '99'
    },
    {
        key: '2',
        application: 'Employee Portal',
        environment: 'PRD',
        account: 'PRD',
        allocated_budget: '$5000',
        budget_spend: '$6000',
        date:"02/2023",
        actualsbudget: '120'
      },
      
  ];
 
  const tableProps = {
  };


const ListBudgetPlanning = () => {
    return(
        <>
            <Table 
                {...tableProps}
                className="savings_new_table"
                columns={columns} 
                dataSource={data} 
                pagination={false}
                rowClassName={(record, index) => record.type === 'footer' ? 'budget-table-footer' : ''}
            />
        </>
    )
}

export default ListBudgetPlanning;
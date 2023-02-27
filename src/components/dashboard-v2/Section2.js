import TabsPanel from '../costimize/components/TabsPanel';
import Tab from "../costimize/components/Tab";
import QuickGlance from './QuickGlance';
import { MdOutlineShowChart, MdSavings } from "react-icons/md";
import { BiLineChart, BiDesktop } from "react-icons/bi";
import AssetAndSpend from './AssetAndSpend';
// import SavingsModel from './SavingsModel/SavingModel';
import DashboardTab from './Dashboard&Analysis/dashboardAnalysis';
import SavingsModel from './NewSavingsModel/SavingsModel';
import BudgetPlanning from './BudgetPlanning/BudgetPlanning';
import InstanceRuntime from './InstanceRuntime/InstanceRuntime';
import { Tabs } from 'antd';
import { Tooltip } from 'antd';


const Section2 = () => {
    const quickglanceicon = <iconify-icon icon="carbon:summary-kpi" class='tab-icon-size'></iconify-icon>;
    const assetspend = <iconify-icon icon="fluent-mdl2:fixed-asset-management" class='tab-icon-size'></iconify-icon>;
    const savingmodel = <iconify-icon icon="fluent:savings-24-filled" class='tab-icon-size'></iconify-icon>;
    const dashboardanalysis = <iconify-icon icon="carbon:text-link-analysis" class='tab-icon-size'></iconify-icon>;
    const budget_planning = <iconify-icon icon="ic:twotone-attach-money" class='tab-icon-size'></iconify-icon>;
    const instance_runtime = <iconify-icon icon="ic:outline-access-time-filled" class='tab-icon-size'></iconify-icon>;
    const itemlist = [{
        label: <>
            <Tooltip placement="right" title="Quick Glance">
                <h1> {quickglanceicon} </h1>
            </Tooltip>  
        </>,
        key: 1,
        children: <QuickGlance />,
    },{
        label: <>
            <Tooltip placement="right" title="Assets/Spend">
                <h1> {assetspend} </h1>
            </Tooltip>  
        </>,
        key: 2,
        children: <AssetAndSpend />,
    },{
        label: <>
            <Tooltip placement="right" title="Savings Models">
                <h1> {savingmodel} </h1>
            </Tooltip>  
        </>,
        key: 3,
        children: <SavingsModel />,
    },{
        label: <>
            <Tooltip placement="right" title="Budget Planning">
                <h1> {budget_planning} </h1>
            </Tooltip>  
        </>,
        key: 4,
        children: <BudgetPlanning />,
    },{
        label: <>
            <Tooltip placement="right" title="Instance Runtime">
                <h1> {instance_runtime} </h1>
            </Tooltip>  
        </>,
        key: 5,
        children: <InstanceRuntime />,
    },{
        label: <>
            <Tooltip placement="right" title="Dashboard & Analysis">
                <h1> {dashboardanalysis} </h1>
            </Tooltip>  
        </>,
        key: 6,
        children: <DashboardTab />,
    }];
    return(
        <>
       
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="small"
        tabPosition="left"
        items={itemlist}
      />
            {/* <TabsPanel>
                <Tab className="plat-costimize-dashboard-tab" title="Quick Glance"
                        icon={quickglanceicon}> 
                    <QuickGlance />
                </Tab>
                <Tab className="plat-costimize-dashboard-tab" title="Assets/Spend"
                        icon={assetspend}>
                    <AssetAndSpend />
                </Tab>
                <Tab
                    className="plat-costimize-dashboard-tab"
                    title="Savings Models"
                    icon={savingmodel}>
                        <SavingsModel />
                    
                </Tab>
                <Tab
                    className="plat-costimize-dashboard-tab"
                    title="Budget Planning"
                    icon={budget_planning}>
                        <BudgetPlanning />
                    
                </Tab>
                <Tab 
                    className="plat-costimize-dashboard-tab"
                    icon={instance_runtime} 
                    title="Instance Runtime">
                    <InstanceRuntime  />
                </Tab>
                <Tab 
                    className="plat-costimize-dashboard-tab"
                    icon={dashboardanalysis} 
                    title="Dashboard & Analysis">
                    <DashboardTab />
                </Tab>
            </TabsPanel> */}
        </>
    )
}
export default Section2;
import AccordionDesktopView from "./AccordionDesktopView";
import AccordionMobileView from "./AccordionMobileView";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAssetandSpendList, filterAssetandSpendList } from '../../action/costimizedashboardAction';
import ApplicationDetails from './ApplicationDetails';


const Accordion = (props) => {
    const windowsize = window.innerWidth <= 500;
    
    const { companyName } = useSelector((state) => state.user);
    const { selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, environmentList, applicationList, selecteddb, selectedinfra, selectedos, selectedservices, selectedTopdate, searchapplication } = useSelector((state) => state.constimize);
    const dispatch = useDispatch();
    // const [ allenvironmentdetails, setAllEnvironmentDetails ] = useState(props.allenvironmentdetails);
    // const [ listenvironmentdetails, setListEnvironmentDetails ] = useState(props.listenvironmentdetails);
    // const [ assetspenddata, setAssetSpendData ] = useState(props.assetspenddata);
    const [ searchasdata, setSearchasData ] = useState([]);

    useEffect(() => {
        if(props.searchapplication != ''){
            const listenvironmentfillter = props.assetspenddata.filter(datas => {
                return datas.applications.toLowerCase() === props.searchapplication.toLowerCase();
            });
            //vm
            const environmentvmfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'VM';
            });
            var environmentvm = {type:'VM', count:'-', spend:'-' };
            if(environmentvmfiltered.length > 0){
                environmentvm = {type:'VM', count:environmentvmfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentvmfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }

            //db
            const environmentdbfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'DB';
            });
            var environmentdb = {type:'DB', count:'-', spend:'-' };
            if(environmentdbfiltered.length > 0){
                environmentdb = {type:'DB', count:environmentdbfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentdbfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }
            //others
            const environmentothersfiltered = listenvironmentfillter.filter(datas => {
                return datas.infras === 'Others';
            });
            var environmentothers = {type:'Others', count:'-', spend:'-' };
            if(environmentothersfiltered.length > 0){
                environmentothers = {type:'Others', count:environmentothersfiltered.reduce((a,v) =>  a = +a + +v.count , 0 ), spend: environmentothersfiltered.reduce((a,v) =>  a = +a + +v.spend , 0 ) };
            }   
            setSearchasData([searchapplication,environmentvm,environmentdb,environmentothers]);
        }else{
            setSearchasData([]);
        }

        // console.log(searchasdata);
    },[searchapplication,props]);
    return(
        <>
            <div className='plat-assets-spend-body'>
                {windowsize ? <AccordionMobileView
                allenvironmentdetails = {props.allenvironmentdetails}
                listenvironmentdetails = {props.listenvironmentdetails}
                /> : <AccordionDesktopView
                    allenvironmentdetails = {props.allenvironmentdetails}
                    listenvironmentdetails = {props.listenvironmentdetails}
                    searchasdata = {searchasdata}
                    setApplicationViewStatus = {props.setApplicationViewStatus}
                    setVmViewStatus = {props.setVmViewStatus}
                />}
                {/* <div className="accordion-desktop-view">
                    <AccordionDesktopView />
                </div>
                <div className="accordion-mobile-view">
                    <AccordionMobileView />
                </div> */}
                
            </div>
        </>
        
        
    );
}
export default Accordion;
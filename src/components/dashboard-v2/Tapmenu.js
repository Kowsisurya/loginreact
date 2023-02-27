import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getServicesList, getOSList, getInfraList, getSelectOSList, getSelectInfraList, getSelectedServicesList, getdbList, getSelecteddbList } from "../action/costimizedashboardAction";
import { selectedServicesMethod, selectedOSMethod, selectedInfraMethod, selectedDbMethod } from '../slice/costimizeSlice';
import { useState } from 'react';
import ExcelExport from './Excal/Excelexport';
import { dropDownResult } from "../custom_hook/CustomHook";
import Searchbox from './Searchbox/Searchbox';
import { selectedApplicationMethod } from '../slice/costimizeSlice';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaChevronDown } from "react-icons/fa";
import { VscEllipsis } from "react-icons/vsc";
import { capitalizeFirst, searchMenuList } from '../custom_hook/CustomHook';


const Tapmenu = (props) =>{
    const { selectedEnvironment, selectedAccount, selectedCloud, selectedApplication, selectedTopdate, applicationList, alldropdownlist  } = useSelector((state) => state.constimize);
    const { companyName } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [ serviceslist, setServicesList ] = useState([]);
    const [ oslist, setOSList ] = useState([]);
    const [ infralist, setInfraList ] = useState([]);
    const [ dblist, setdbList ] = useState([]);

    const [ servicesdefaultlist, setServicesDefaultList ] = useState([]);
    const [ osdefaultlist, setOSDefaultList ] = useState([]);
    const [ infradefaultlist, setInfraDefaultList ] = useState([]);
    const [ dbdefaultlist, setdbDefaultList ] = useState([]);

    const [ selectedservices, setSelectedServices ] = useState(['all']);
    const [ selectedos, setSelectedOS ] = useState(['all']);
    const [ selectedinfra, setSelectedInfra ] = useState(['all']);
    const [ selecteddb, setSelectedDB ] = useState(['all']);

    const [datachanges, setDataChanges] = useState(true);
    const [menucount, setMenuCount] = useState({
        service: 0,
        db: 0,
        os: 0,
        infra: 0
    });


    // const list = DownDropDownList();
    //search box
    const [query, setQuery] = useState("");
    const [displayMessage, setDisplayMessage] = useState("");

    useEffect(() => {
        // console.log(selectedservices);
        // console.log(alldropdownlist);
        dispatch(selectedServicesMethod(selectedservices));
        dispatch(selectedOSMethod(selectedos));
        dispatch(selectedInfraMethod(selectedinfra));
        dispatch(selectedDbMethod(selecteddb));

        setMenuCount({
            service: selectedservices.length,
            db: selecteddb.length,
            os: selectedos.length,
            infra: selectedinfra.length
        })

        //filter
        var newdropdownlist = alldropdownlist;
        const filteredlist = alldropdownlist.filter(datas => {
            //dropdown condition
            var checkenvironment = dropDownResult(selectedEnvironment, datas.environment);
            var checkcloud = dropDownResult(selectedCloud, datas.cloud);
            var checkapplication = dropDownResult(selectedApplication, datas.application);
            var checkaccount = dropDownResult(selectedAccount, datas.account_name);
            var checkservice = dropDownResult(selectedservices, datas.service);
            var checkdb = dropDownResult(selecteddb, datas.db);
            var checkos = dropDownResult(selectedos, datas.os);
            var checkinfra = dropDownResult(selectedinfra, datas.infra);
         
            //validation
            const conditionloop = [checkapplication, checkenvironment, checkcloud, checkaccount, checkservice, checkdb, checkos, checkinfra];
            const eval_value = conditionloop.filter(function( element ) {
                return element !== undefined;
            });
            var returnvalue;
            if(eval_value.length == 1){
                returnvalue = eval(eval_value[0]);
            }else if(eval_value.length == 2){
                returnvalue = eval(eval_value[0],eval_value[1]);
            }else if(eval_value.length == 3){
                returnvalue = eval(eval_value[0],eval_value[1],eval_value[2]);
            }else if(eval_value.length == 4){
                returnvalue = eval(eval_value[0],eval_value[1],eval_value[2],eval_value[3]);
            }else if(eval_value.length == 5){
                returnvalue = eval(eval_value[0],eval_value[1],eval_value[2],eval_value[3],eval_value[4]);
            }else if(eval_value.length == 6){
                returnvalue = eval(eval_value[0],eval_value[1],eval_value[2],eval_value[3],eval_value[4],eval_value[5]);
            }else if(eval_value.length == 7){
                returnvalue = eval(eval_value[0],eval_value[1],eval_value[2],eval_value[3],eval_value[4],eval_value[5],eval_value[6]);
            }else if(eval_value.length == 8){
                returnvalue = eval(eval_value[0],eval_value[1],eval_value[2],eval_value[3],eval_value[4],eval_value[5],eval_value[6],eval_value[7]);
            }
            var returncondition;
            if(returnvalue === 1){
                returncondition = true;
            }else if(returnvalue === true){
                returncondition = true;
            }else{
                returncondition = false;
            }
            return returncondition;
        });

        // console.log(filteredlist);

        if(filteredlist.length > 0){
            newdropdownlist = filteredlist;
        }
        // console.log(newdropdownlist);
        //service
        const serviceConfigs = newdropdownlist.map(v => v.service);
        const servicearr = new Set([...serviceConfigs]);
        const serviceshort = [...servicearr].sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
        setServicesList([...serviceshort]);
        setServicesDefaultList([...serviceshort]);

        //db
        const dbConfigsfilter = newdropdownlist.filter(datas => {
            return datas.db !== null && datas.db !== '';
        });
        const dbConfigs = dbConfigsfilter.map(v => v.db);
        const dbarr = new Set([...dbConfigs]);
        const dbshort = [...dbarr].sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
        setdbList([...dbshort]);
        setdbDefaultList([...dbshort]);

        //os
        const osConfigsfilter = newdropdownlist.filter(datas => {
            return datas.os !== null && datas.os !== '';
        });
        const osConfigs = osConfigsfilter.map(v => v.os);
        const osarr = new Set([...osConfigs]);
        const osshort = [...osarr].sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
        setOSList([...osshort]);
        setOSDefaultList([...osshort]);

        //infra
        const infraConfigs = newdropdownlist.map(v => v.infra);
        const infraarr = new Set([...infraConfigs]);
        const infrashort = [...infraarr].sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
        setInfraList([...infrashort]);
        setInfraDefaultList([...infrashort]);

    },[datachanges, selectedAccount, selectedApplication, selectedCloud, selectedEnvironment, selectedTopdate, alldropdownlist]);


    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        if(value === 'all'){
            setSelectedServices(["all"]);
        }else{
            if(checked){
                if(selectedservices.indexOf('all') !== -1){
                    setSelectedServices([...selectedservices.filter((x)=> x !== 'all'), value])
                }else{
                    setSelectedServices([...selectedservices, value]);
                }
            }else{ 
                const result = selectedservices.filter((x)=> x !== value);
                const result_value = result.length > 0 ? result : ['all'];
                setSelectedServices(result_value);
            }
        }
        // if(checked){ 
        //     setSelectedServices(value); 
        //     dispatch(selectedServicesMethod(value));
        // }else{ 
        //     setSelectedServices('all'); 
        //     dispatch(selectedServicesMethod('all'));
        // }
        setDataChanges(!datachanges);
    }
    const handleOSChange = (e) => {
        const { value, checked } = e.target;
        if(value === 'all'){
            setSelectedOS(["all"]);
        }else{
            if(checked){
                if(selectedos.indexOf('all') !== -1){
                    setSelectedOS([...selectedos.filter((x)=> x !== 'all'), value])
                }else{
                    setSelectedOS([...selectedos, value]);
                }
            }else{ 
                const result = selectedos.filter((x)=> x !== value);
                const result_value = result.length > 0 ? result : ['all'];
                setSelectedOS(result_value);
            }
        }


        // if(checked){ 
        //     setSelectedOS(value); 
        //     dispatch(selectedOSMethod(value));
        // }else{ 
        //     setSelectedOS('all'); 
        //     dispatch(selectedOSMethod('all'));
        // }
        setDataChanges(!datachanges);
    }
    const handleInfraChange = (e) => {
        const { value, checked } = e.target;
        if(value === 'all'){
            setSelectedInfra(["all"]);
        }else{
            if(checked){
                if(selectedinfra.indexOf('all') !== -1){
                    setSelectedInfra([...selectedinfra.filter((x)=> x !== 'all'), value])
                }else{
                    setSelectedInfra([...selectedinfra, value]);
                }
            }else{ 
                const result = selectedinfra.filter((x)=> x !== value);
                const result_value = result.length > 0 ? result : ['all'];
                setSelectedInfra(result_value);
            }
        }
        // if(checked){ 
        //     setSelectedInfra(value); 
        //     dispatch(selectedInfraMethod(value));
        // }else{ 
        //     setSelectedInfra('all'); 
        //     dispatch(selectedInfraMethod('all'));
        // }
        setDataChanges(!datachanges);
    }

    const handleDBChange = (e) => {
        const { value, checked } = e.target;
        if(value === 'all'){
            setSelectedDB(["all"]);
        }else{
            if(checked){
                if(selecteddb.indexOf('all') !== -1){
                    setSelectedDB([...selecteddb.filter((x)=> x !== 'all'), value])
                }else{
                    setSelectedDB([...selecteddb, value]);
                }
            }else{ 
                const result = selecteddb.filter((x)=> x !== value);
                const result_value = result.length > 0 ? result : ['all'];
                setSelectedDB(result_value);
            }
        }
        // if(checked){ 
        //     setSelectedDB(value); 
        //     dispatch(selectedDbMethod(value));
        // }else{ 
        //     setSelectedDB('all'); 
        //     dispatch(selectedDbMethod('all'));
        // }
        setDataChanges(!datachanges);
    }
    const clearAllDate = () => {
        setSelectedServices(['all']); 
        setSelectedOS(['all']); 
        setSelectedInfra(['all']); 
        setSelectedDB(['all']); 
        //redux
        dispatch(selectedServicesMethod(['all']));
        dispatch(selectedOSMethod(['all']));
        dispatch(selectedInfraMethod(['all']));
        dispatch(selectedDbMethod(['all']));
    }
    

    return(
        <>
            <Row>
                    <Col lg={8} className="plat-tapmenu-left">
                        <Row>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2 manu-top-icon-head'>
                                <Dropdown className='plat-costimize-dropdown'>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='plat-tap-menu' variant="secondary">
                                     {selectedservices.indexOf("all") !== -1  ? 'All Services' : 'Services'}
                                     <FaChevronDown className='plat-dropdown-downicon' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='plant-dashboard-top-dropdown plat-main-dropdown'>
                                    <Dropdown.ItemText><span className='plat-item-title'>
                                        Service(s)
                                        </span></Dropdown.ItemText>
                                        <input 
                                            type="text" 
                                            className='menu-search-box' 
                                            onKeyUp={(e) => {
                                                searchMenuList(e,setServicesList,servicesdefaultlist);
                                            }}
                                        />
                                        <Dropdown.Item as="button" active>
                                        <input 
                                            type="checkbox" 
                                            id="allser"   
                                            className="plat-item-checkbox" 
                                            name='all'
                                            value='all'
                                            onChange={handleServiceChange}
                                            // checked = {selectedservices === 'all' ? 'checked' : ''}
                                            checked = {selectedservices.indexOf("all") !== -1 ?  'checked' : ''}
                                        /><label htmlFor='allser'></label>
                                        <span className='plat-item-list'>All Services</span>
                                        </Dropdown.Item>
                                        {
                                            serviceslist.map( (serviceslistdis, index) =>
                                                <Dropdown.Item as="button" active key={index}>
                                                    <input 
                                                        type="checkbox" 
                                                        id={serviceslistdis}
                                                        className="plat-item-checkbox" 
                                                        name={serviceslistdis}
                                                        value={serviceslistdis}
                                                        onChange={handleServiceChange}
                                                        // checked = {selectedservices === serviceslistdis.service ? 'checked' : ''}
                                                        checked = {selectedservices.indexOf(serviceslistdis) !== -1 ?  'checked' : ''}
                                                    /><label htmlFor={serviceslistdis}></label>
                                                    <span className='plat-item-list'>{capitalizeFirst(serviceslistdis)}</span>
                                                </Dropdown.Item>
                                            )
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                {selectedservices.indexOf("all") === -1 &&
                                   <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">
                                            {
                                                selectedservices.map((data, index) => 
                                                    <span>{data}<br></br></span>
                                                )
                                            }
                                        </Tooltip>}
                                    >
                                        <div className='manu-top-icon-body-secondmenu'>
                                            <h1 className='manu-top-icon-text'>{menucount.service}</h1>
                                        </div>
                                    </OverlayTrigger>
                                }

                                
                            </Col>
                            {
                                props.dbstatus &&
                                <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2 manu-top-icon-head'>
                                    <Dropdown className='plat-costimize-dropdown'>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className='plat-tap-menu' variant="secondary">
                                        {selecteddb.indexOf("all") !== -1  ? 'All DB' : 'DB'}
                                        <FaChevronDown className='plat-dropdown-downicon' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='plant-dashboard-top-dropdown plat-main-dropdown'>
                                        <Dropdown.ItemText><span className='plat-item-title'>DB</span></Dropdown.ItemText>
                                        <input 
                                            type="text" 
                                            className='menu-search-box' 
                                            onKeyUp={(e) => {
                                                searchMenuList(e,setdbList,dbdefaultlist);
                                            }}
                                        />
                                        <Dropdown.Item as="button" active>
                                        <input 
                                            type="checkbox" 
                                            id="alldb"   
                                            className="plat-item-checkbox" 
                                            name='all'
                                            value='all'
                                            onChange={handleDBChange}
                                            // checked = {selecteddb === 'all' ? 'checked' : ''}
                                            checked = {selecteddb.indexOf("all") !== -1 ?  'checked' : ''}
                                        /><label htmlFor='alldb'></label>
                                        <span className='plat-item-list'>All DB</span>
                                        </Dropdown.Item>
                                        {
                                                dblist.map( (dblistdis, index) =>
                                                    <Dropdown.Item as="button" active key={index}>
                                                        <input 
                                                            type="checkbox" 
                                                            id={dblistdis}
                                                            className="plat-item-checkbox" 
                                                            name={dblistdis}
                                                            value={dblistdis}
                                                            onChange={handleDBChange}
                                                            // checked = {selecteddb === dblistdis.db ? 'checked' : ''}
                                                            checked = {selecteddb.indexOf(dblistdis) !== -1 ?  'checked' : ''}
                                                        /><label htmlFor={dblistdis}></label>
                                                        <span className='plat-item-list'>{dblistdis}</span>
                                                    </Dropdown.Item>
                                                )
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {selecteddb.indexOf("all") === -1 &&
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">
                                                {
                                                    selecteddb.map((data, index) => 
                                                        <span>{data}<br></br></span>
                                                    )
                                                }
                                            </Tooltip>}
                                        >
                                            <div className='manu-top-icon-body-secondmenu'>
                                                <h1 className='manu-top-icon-text'>{menucount.db}</h1>
                                            </div>
                                        </OverlayTrigger>
                                    }

                                
                                </Col>
                            }
                            {
                                props.osstatus && 
                                <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2 manu-top-icon-head'>
                                    <Dropdown className='plat-costimize-dropdown'>
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" className='plat-tap-menu' variant="secondary">
                                        {selectedos.indexOf("all") !== -1  ? 'All OS' : 'OS'}
                                        <FaChevronDown className='plat-dropdown-downicon' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='plant-dashboard-top-dropdown plat-main-dropdown'>
                                        <Dropdown.ItemText><span className='plat-item-title'>
                                        OS</span></Dropdown.ItemText>
                                        <input 
                                            type="text" 
                                            className='menu-search-box' 
                                            onKeyUp={(e) => {
                                                searchMenuList(e,setOSList,osdefaultlist);
                                            }}
                                        />

                                        <Dropdown.Item as="button" active>
                                        <input 
                                            type="checkbox" 
                                            id="allos"   
                                            className="plat-item-checkbox" 
                                            name='all'
                                            value='all'
                                            onChange={handleOSChange}
                                            checked = {selectedos.indexOf("all") !== -1 ?  'checked' : ''}
                                        /><label htmlFor='allos'></label>
                                        <span className='plat-item-list'>All OS</span>
                                        </Dropdown.Item>
                                            {
                                                oslist.map( (oslistdis, index) =>
                                                    <Dropdown.Item as="button" active key={index}>
                                                        <input 
                                                            type="checkbox" 
                                                            id={oslistdis}
                                                            className="plat-item-checkbox" 
                                                            name={oslistdis}
                                                            value={oslistdis}
                                                            onChange={handleOSChange}
                                                            checked = {selectedos.indexOf(oslistdis) !== -1 ?  'checked' : ''}
                                                            
                                                        /><label htmlFor={oslistdis}></label>
                                                        <span className='plat-item-list'>{oslistdis}</span>
                                                    </Dropdown.Item>
                                                )
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {selectedos.indexOf("all") === -1 &&
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={<Tooltip id="button-tooltip-2">
                                                {
                                                    selectedos.map((data, index) => 
                                                        <span>{data}<br></br></span>
                                                    )
                                                }
                                            </Tooltip>}
                                        >
                                            <div className='manu-top-icon-body-secondmenu'>
                                                <h1 className='manu-top-icon-text'>{menucount.os}</h1>
                                            </div>
                                        </OverlayTrigger>
                                    }

                                    
                                </Col>
                            }
                            
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2 manu-top-icon-head'>
                                <Dropdown className='plat-costimize-dropdown'>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" className='plat-tap-menu' variant="secondary">
                                    {selectedinfra.indexOf("all") !== -1  ? 'All Infra' : 'Infra'}
                                    <FaChevronDown className='plat-dropdown-downicon' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='plant-dashboard-top-dropdown plat-main-dropdown'>
                                    <Dropdown.ItemText><span className='plat-item-title'>
                                    Infra</span></Dropdown.ItemText>
                                    <input 
                                        type="text" 
                                        className='menu-search-box' 
                                        onKeyUp={(e) => {
                                            searchMenuList(e,setInfraList,infradefaultlist);
                                        }}
                                    />
                                    <Dropdown.Item as="button" active>
                                    <input 
                                        type="checkbox" 
                                        id="allinfra"   
                                        className="plat-item-checkbox" 
                                        name='all'
                                        value='all'
                                        onChange={handleInfraChange}
                                        // checked = {selectedinfra === 'all' ? 'checked' : ''}
                                        checked = {selectedinfra.indexOf("all") !== -1 ?  'checked' : ''}
                                    /><label htmlFor='allinfra'></label>
                                    <span className='plat-item-list'>All Infra</span>
                                    </Dropdown.Item>
                                    {
                                            infralist.map( (infralistdis, index) =>
                                                <Dropdown.Item as="button" active key={index}>
                                                    <input 
                                                        type="checkbox" 
                                                        id={infralistdis}
                                                        className="plat-item-checkbox" 
                                                        name={infralistdis}
                                                        value={infralistdis}
                                                        onChange={handleInfraChange}
                                                        // checked = {selectedinfra === infralistdis.infra ? 'checked' : ''}
                                                        checked = {selectedinfra.indexOf(infralistdis) !== -1 ?  'checked' : ''}
                                                    /><label htmlFor={infralistdis}></label>
                                                    <span className='plat-item-list'>{infralistdis}</span>
                                                </Dropdown.Item>
                                            )
                                        }
                                    
                                    </Dropdown.Menu>
                                </Dropdown>
                                {selectedinfra.indexOf("all") === -1 &&
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">
                                            {
                                                selectedinfra.map((data, index) => 
                                                    <span>{data}<br></br></span>
                                                )
                                            }
                                        </Tooltip>}
                                    >
                                        <div className='manu-top-icon-body-secondmenu'>
                                            <h1 className='manu-top-icon-text'>{menucount.infra}</h1>
                                        </div>
                                    </OverlayTrigger>
                                }


                                
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                <button className="btnSecondary plat-menu-clear" onClick={clearAllDate}> Clear all context filters </button>
                            </Col>
                        </Row>
                    </Col>
                    {
                        props.type === 'assetandspend' ? 
                        <Col lg={4} className="plat-tapmenu-right">
                            <div className='plat-tapmenu-right-body'>
                                <div className='plat-three-dort-body'>
                                    <Dropdown className='plat-costimize-dropdown'>
                                        <Dropdown.Toggle className='plat-three-dort plat-tap-menu' id="dropdown-button-dark-example1" variant="secondary">
                                            {/* <VscEllipsis className='me-1 pl-2'  /> */}
                                            <iconify-icon icon="bi:three-dots"></iconify-icon>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='plant-dashboard-top-dropdown export-menu-list'>
                                        <Dropdown.ItemText><span className='plat-item-title'>
                                            <ExcelExport excelData={props.excalrecords} fileName={props.excalname} />
                                            </span></Dropdown.ItemText>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='plat-threedort-input-body'>
                                    <input
                                        className="SearchInput"
                                        type="text"
                                        placeholder="Search by app"
                                        onKeyUp={props.searchBoxApplication}
                                    />
                                </div>
                            </div>   
                        </Col> :
                        ''
                    }
                    
                </Row> 
                <Row>
                    <Col lg={9}>
                        <Row>
                            <Col className='mb-2 down-date-short' lg={2}>
                                <h1 className='date-period-title'>
                                    Period
                                </h1>
                            </Col>
                            <Col className='mb-2 down-date-list-short' lg={1}>
                                <div className='date-period-box date-period-box-active'>
                                    <h1 className='date-period-list'>
                                    Current Month
                                    </h1>
                                </div>
                            </Col>
                            <Col className='mb-2 down-date-list-short' lg={1}>
                                <div className='date-period-box'>
                                    <h1 className='date-period-list'>
                                    Last Month
                                    </h1>
                                </div>
                            </Col>
                            <Col className='mb-2 down-date-list-short' lg={1}>
                                <div className='date-period-box'>
                                    <h1 className='date-period-list'>
                                    Last 3 Months
                                    </h1>
                                </div>
                            </Col>
                            <Col className='mb-2 down-date-list-short' lg={1}>
                                <div className='date-period-box'>
                                    <h1 className='date-period-list'>
                                    Last 6 Months
                                    </h1>
                                </div>
                            </Col>
                            <Col className='mb-2 down-date-list-short' lg={1}>
                                <div className='date-period-box'>
                                    <h1 className='date-period-list'>
                                    Last 12 Months
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row> 
        </>
    );
}
export default Tapmenu;
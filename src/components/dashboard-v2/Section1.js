import Dropdown from 'react-bootstrap/Dropdown';
import { MDBIcon } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { React, useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEnvironmentList, getApplicationList, getAccountList, getSelectEnvironmentList, getSelectApplicationList, getSelectAccountList } from "../action/costimizedashboardAction";
import { environmentListMethod, cloudListMethod, applicationListMethod, accountListMethod, selectedEnvironmentMethod, selectedAccountMethod, selectedCloudMethod, selectedApplicationMethod, selectedTopDateMethod, allDropdownList } from '../slice/costimizeSlice';
import DropdownList from './DropdownList';
import { getMonthList } from './Monthlist';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { enableRegisterFlag } from '../slice/userSlice';
import { FaChevronDown } from "react-icons/fa";
import logo from '../../assets/images/company_logo.png';
import { capitalizeFirst, dropDownResult, searchMenuList } from '../custom_hook/CustomHook';

import { dummyMenuList } from '../dummy_records/DummyRecords';

const Section1 = () => {
    //redux
    const { companyName, userInfo } = useSelector((state) => state.user);
    const { alldropdownlist, dummydatastatus, applicationList, environmentList, accountList, cloudList } = useSelector((state) => state.constimize);
    const dispatch = useDispatch();
    const { isRegisterFlag } = useSelector((state) => state.user);
    const handleClose = (event) => {
        dispatch(enableRegisterFlag(false));
      };
    // console.log(userInfo);
    //date
    const current = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
   
    const dufaltdateword = `${monthNames[current.getMonth()]} ${current.getFullYear()}`;
    //top dropdown state list
    const [environmentlist, setEnvironmentList] = useState([]);
    const [applicationlist, setApplicationList] = useState([]);
    const [accountlist, setAccountList] = useState([]);
    const [cloudlist, setCloudList] = useState([]);
    //selected dropdown state
    // const [selectapplication, setSelectApplication] = useState([]);
    // const [selectenvironment, setSelectEnvironment] = useState([]);
    // const [selectaccount, setSelectAccount] = useState([]);
    // const [selectcloud, setSelectCloud] = useState([]);
    const [selectapplication, setSelectApplication] = useState(['all']);
    const [selectenvironment, setSelectEnvironment] = useState(['all']);
    const [selectaccount, setSelectAccount] = useState(['all']);
    const [selectcloud, setSelectCloud] = useState(['all']);
    const [menucount, setMenuCount] = useState({
        environment: 0,
        cloud: 0,
        account: 0,
        application: 0
    });
    const [startDate, setStartDate] = useState(current);
    const [datachanges, setDataChanges] = useState(true);
    //date state
    const [dateword, setDateWord] = useState(dufaltdateword);
    const [selectedstaticdate, setSelectedStaticDate] = useState(`${current.getFullYear()}-${current.getMonth()+1}-01`);
    const [selecteddynamicdate, setSelectedDynamicDate] = useState(`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`);

    const dateChange = () => {
        const currentnew = new Date(startDate);
        setSelectedStaticDate(`${currentnew.getFullYear()}-${currentnew.getMonth()+1}-01`);
        setDateWord(`${monthNames[currentnew.getMonth()]} ${currentnew.getFullYear()}`);
        setSelectedDynamicDate(`${currentnew.getFullYear()}-${currentnew.getMonth()+1}-${currentnew.getDate()}`);
    }
    useEffect(() =>{
        dateChange();
    },[startDate])
    useEffect(() => {  
        if(dummydatastatus){
            const dummyrecords = dummyMenuList();
            if(dummyrecords.newfunctionquery1.length === 0){
                dispatch(enableRegisterFlag(true));
            }
            dispatch(allDropdownList(dummyrecords.newfunctionquery1));
        }else{
            dispatch(getEnvironmentList({companyName, selectedstaticdate}))
            .unwrap()
            .then(({ data }) => {
    
                // console.log("menu list");
                // console.log(data);
                if(data.newfunctionquery1.length === 0){
                    dispatch(enableRegisterFlag(true));
                }
                dispatch(allDropdownList(data.newfunctionquery1));
                // dispatch(environmentListMethod(data.distinctenvironment));
                // setEnvironmentList(data.distinctenvironment);
            })
            .catch(err => {
            console.log(err.message);
            });
        }
       
    },[ companyName, selectedstaticdate])

    const handleMultiMonthChange = (data) => {
        // console.log(data);
        var date_list = [];
        if(data === '3month'){
            for (let index = 0; index < 3; index++) {
                var currentdate = new Date();
                const month_2_current = new Date(currentdate.getFullYear(),currentdate.getMonth()-index,1);
                date_list.push([`${month_2_current.getFullYear()}-${month_2_current.getMonth()+1}-01`]);
            }
            setSelectedStaticDate(date_list.toString());
            setDateWord("Last 3 Months");
        }else if(data === '6month'){
            for (let index = 0; index < 6; index++) {
                var currentdate = new Date();
                const month_2_current = new Date(currentdate.getFullYear(),currentdate.getMonth()-index,1);
                date_list.push([`${month_2_current.getFullYear()}-${month_2_current.getMonth()+1}-01`]);
            }
            setSelectedStaticDate(date_list.toString());
            setDateWord("Last 6 Months");
        }else if(data === 'lastyear'){
            for (let index = 0; index < 12; index++) {
                var currentdate = new Date();
                const month_2_current = new Date(currentdate.getFullYear(),currentdate.getMonth()-index,1);
                date_list.push([`${month_2_current.getFullYear()}-${month_2_current.getMonth()+1}-01`]);
            }
            setSelectedStaticDate(date_list.toString());
            setDateWord("Last Year");
        }else if(data === '7days'){
            for (var i=0; i<7; i++) {
                var d = new Date();
                d.setDate(d.getDate() - i);
                date_list.push([formatDate(d)])
            }
            setSelectedStaticDate(date_list.toString());
            setDateWord("Last 7 Days");
        }else{
            dateChange();
        }
        // console.log(date_list.toString());

    }
    function formatDate(date){
        var dd = date.getDate();
        var mm = date.getMonth()+1;
        var yyyy = date.getFullYear();
        if(dd<10) {dd='0'+dd}
        if(mm<10) {mm='0'+mm}
        date = yyyy+'-'+mm+'-'+dd;
        return date
     }
    useEffect(() => {
        dispatch(selectedTopDateMethod(selectedstaticdate));
    },[selectedstaticdate]);
    //drop down
    useEffect(() => {
        // dispatch(selectedTopDateMethod(selectedstaticdate));
        dispatch(selectedEnvironmentMethod(selectenvironment));
        dispatch(selectedAccountMethod(selectaccount));
        dispatch(selectedCloudMethod(selectcloud));
        dispatch(selectedApplicationMethod(selectapplication));
        setMenuCount({
            environment: selectenvironment.length,
            cloud: selectcloud.length,
            account: selectaccount.length,
            application: selectapplication.length
        })

        //environment
        const environmentConfigs = alldropdownlist.map(v => v.environment);
        const environmentarr = new Set([...environmentConfigs]);
        const environshort = [...environmentarr].sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
        dispatch(environmentListMethod([...environshort]));
        setEnvironmentList([...environshort]);
        
        //cloud
        const cloudConfigs = alldropdownlist.map(v => v.cloud);
        const cloudarr = new Set([...cloudConfigs]);
        const cloudshort = [...cloudarr].sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
        dispatch(cloudListMethod([...cloudshort]));
        setCloudList([...cloudshort]);

        //filter
        var newdropdownlist = alldropdownlist;
        const filteredlist = alldropdownlist.filter(datas => {
            //dropdown condition
            var checkenvironment = dropDownResult(selectenvironment, datas.environment);
            var checkcloud = dropDownResult(selectcloud, datas.cloud);
            var checkapplication = dropDownResult(selectapplication, datas.application);
            var checkaccount = dropDownResult(selectaccount, datas.account_name);
            

            //validation
            const conditionloop = [checkapplication, checkenvironment, checkcloud, checkaccount];
            const eval_value = conditionloop.filter(function( element ) {
                return element !== undefined;
            });
            var returnvalue;
            if(eval_value.length === 1){
                returnvalue = eval(eval_value[0]);
            }else if(eval_value.length === 2){
                returnvalue = eval(eval_value[0],eval_value[1]);
            }else if(eval_value.length === 3){
                returnvalue = eval(eval_value[0],eval_value[1],eval_value[2]);
            }else if(eval_value.length === 4){
                returnvalue = eval(eval_value[0],eval_value[1],eval_value[2],eval_value[3]);
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
        if(filteredlist.length > 0){
            newdropdownlist = filteredlist;
        }
        // console.log(newdropdownlist);
        //account
        const accountConfigs = newdropdownlist.map(v => v.account_name);
        const accountarr = new Set([...accountConfigs]);
        const accountshort = [...accountarr].sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
        dispatch(accountListMethod([...accountshort]));
        setAccountList([...accountshort]);

        //application
        const applicationConfigs = newdropdownlist.map(v => v.application);
        const applicationarr = new Set([...applicationConfigs]);
        const applicationshort = [...applicationarr].sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
        dispatch(applicationListMethod([...applicationshort]));
        setApplicationList([...applicationshort]);

    },[datachanges, selectedstaticdate, alldropdownlist])
    

    const handleEnvironmentChange = (e) => {
        const { value, checked } = e.target;
        console.log("environment");
        console.log(value);
        if(value === 'all'){
            
            setSelectEnvironment(["all"]);
        }else{
            if(checked){
                if(selectenvironment.indexOf('all') !== -1){
                    setSelectEnvironment([...selectenvironment.filter((x)=> x !== 'all'), value])
                }else{
                    setSelectEnvironment([...selectenvironment, value]);
                }
                // setSelectEnvironment(value);
            }else{ 
                const result = selectenvironment.filter((x)=> x !== value);
                const result_value = result.length > 0 ? result : ['all'];
                setSelectEnvironment(result_value);
                // setSelectEnvironment("all");
            }
        }
        setDataChanges(!datachanges);
    };
    const handleaccountChange = (e) => {
        const { value, checked } = e.target; 
        if(value === 'all'){
            setSelectAccount(["all"]);
        }else{
            if(checked){
                if(selectaccount.indexOf('all') !== -1){
                    setSelectAccount([...selectaccount.filter((x)=> x !== 'all'), value])
                }else{
                    setSelectAccount([...selectaccount, value]);
                }
            }else{ 
                const result = selectaccount.filter((x)=> x !== value);
                const result_value = result.length > 0 ? result : ['all'];
                setSelectAccount(result_value);
            }
        }
        setDataChanges(!datachanges);


        // const { value, checked } = e.target;
        // if(checked){ 
        //     // setSelectAccount([...selectaccount, value])
        //     setSelectAccount(value);
        // }else{ 
        //     // setSelectAccount(selectaccount.filter((x)=> x !== value))
        //     setSelectAccount('all');
        // }
    }
    const handleCloudChange = (e) => {
        
        const { value, checked } = e.target;
        console.log("cloud");
        console.log(value);
        if(value === 'all'){
            setSelectCloud(["all"]);
        }else{
            if(checked){
                if(selectcloud.indexOf('all') !== -1){
                    setSelectCloud([...selectcloud.filter((x)=> x !== 'all'), value])
                }else{
                    setSelectCloud([...selectcloud, value]);
                }
            }else{ 
                const result = selectcloud.filter((x)=> x !== value);
                const result_value = result.length > 0 ? result : ['all'];
                setSelectCloud(result_value);
            }
        }


        // if(checked){ 
        //     // setSelectCloud([...selectcloud, value])
        //     setSelectCloud(value);
        // }else{ 
        //     // setSelectCloud(selectcloud.filter((x)=> x !== value))
        //     setSelectCloud('all');
        // }
        setDataChanges(!datachanges);
    }
    const handleapplicationChange = (e) => {
        const { value, checked } = e.target;

        if(value === 'all'){
            setSelectApplication(["all"]);
        }else{
            if(checked){
                if(selectapplication.indexOf('all') !== -1){
                    setSelectApplication([...selectapplication.filter((x)=> x !== 'all'), value])
                }else{
                    setSelectApplication([...selectapplication, value]);
                }
            }else{ 
                const result = selectapplication.filter((x)=> x !== value);
                const result_value = result.length > 0 ? result : ['all'];
                setSelectApplication(result_value);
            }
        }


        // if(checked){ 
        //     // setSelectApplication([...selectapplication, value])
        //     setSelectApplication(value);
        // }else{ 
        //     // setSelectApplication(selectapplication.filter((x)=> x !== value))
        //     setSelectApplication('all');
        // }
        setDataChanges(!datachanges);
    }
    const clearAllDate = () => {
        setSelectEnvironment(["all"]);
        setSelectAccount(["all"]);
        setSelectCloud(["all"]);
        setSelectApplication(["all"]);
        // setSelectEnvironment('all');
        // setSelectAccount('all');
        // setSelectCloud('all');
        // setSelectApplication('all');
        
        setStartDate(new Date());

        var currentdate = new Date();
        const month_2_current = new Date(currentdate.getFullYear(),currentdate.getMonth(),currentdate.getDate());
        const month_2_current_new = `${month_2_current.getFullYear()}-${month_2_current.getMonth()+1}-01`;
        // console.log(month_2_current_new);



        dispatch(selectedTopDateMethod(month_2_current_new));
        dispatch(selectedEnvironmentMethod(["all"]));
        dispatch(selectedAccountMethod(["all"]));
        dispatch(selectedCloudMethod(["all"]));
        dispatch(selectedApplicationMethod(["all"]));

        // dispatch(selectedEnvironmentMethod('all'));
        // dispatch(selectedAccountMethod('all'));
        // dispatch(selectedCloudMethod('all'));
        // dispatch(selectedApplicationMethod('all'));
        setDataChanges(!datachanges);
    }
    
  

    return(
        <>
        { isRegisterFlag ? <Snackbar open={true} autoHideDuration={10000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Records not get ready yet.
            </Alert>
        </Snackbar>: "" }
            <div>
                <Row>
                    <Col lg={10} md={9} className="costimize-body-menu">
                        <Row>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2 manu-top-icon-head'>
                                <Dropdown className='plat-costimize-dropdown' >
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='plat-menu-default-value'>
                                    {selectenvironment.indexOf("all") !== -1  ? 'All Environments' : 'Environment'}
                                    <FaChevronDown className='plat-dropdown-downicon' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='plant-dashboard-top-dropdown plat-main-dropdown'>
                                    <Dropdown.ItemText><span className='plat-item-title'>
                                        Environment(s)
                                        </span></Dropdown.ItemText>
                                        <input 
                                            type="text" 
                                            className='menu-search-box' 
                                            onKeyUp={(e) => {
                                                searchMenuList(e,setEnvironmentList,environmentList);
                                            }}
                                        />
                                        { environmentlist ?
                                            <DropdownList 
                                                environmentlist={environmentlist} 
                                                selectenvironment={selectenvironment} 
                                                handleEnvironmentChange={handleEnvironmentChange}
                                                alltitle="All Environments"
                                                
                                            /> : ''
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                {selectenvironment.indexOf("all") === -1 &&
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">
                                            {
                                                selectenvironment.map((data, index) => 
                                                    <span>{data}<br></br></span>
                                                )
                                            }
                                        </Tooltip>}
                                    >
                                        <div className='manu-top-icon-body'>
                                            <h1 className='manu-top-icon-text'>{menucount.environment}</h1>
                                        </div>
                                    </OverlayTrigger>
                                } 
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2 manu-top-icon-head'>
                                <Dropdown className='plat-costimize-dropdown'>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='plat-menu-default-value'>
                                    {selectcloud.indexOf("all") !== -1  ? 'All Clouds' : 'Cloud'}
                                    <FaChevronDown className='plat-dropdown-downicon' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='plant-dashboard-top-dropdown plat-main-dropdown'>
                                    <Dropdown.ItemText><span className='plat-item-title'> 
                                    
                                    Cloud(s)</span></Dropdown.ItemText>
                                    <input 
                                        type="text" 
                                        className='menu-search-box' 
                                        onKeyUp={(e) => {
                                            searchMenuList(e,setCloudList,cloudList);
                                        }}
                                    />
                                    
                                    <Dropdown.Item as="button" active>
                                        <input 
                                            type="checkbox" 
                                            id="allcloud"   
                                            className="plat-item-checkbox" 
                                            name='all'
                                            value='all'
                                            onChange={handleCloudChange}
                                            // checked = {selectcloud === 'all' ? 'checked' : ''}
                                            checked = {selectcloud.indexOf("all") !== -1 ?  'checked' : ''}
                                        /><label htmlFor='allcloud'></label>
                                        <span className='plat-item-list'>All Clouds</span>
                                    </Dropdown.Item>
                                        {/* { cloudlist ?
                                            <DropdownList 
                                                environmentlist={cloudlist} 
                                                selectenvironment={selectcloud} 
                                                handleEnvironmentChange={handleCloudChange}
                                                alltitle="All Clouds"
                                            /> : ''
                                        } */}

                                    {
                                        cloudlist.map((cloudlistdis) => 
                                            <Dropdown.Item as="button" active>
                                                <input 
                                                    type="checkbox" 
                                                    id={cloudlistdis}   
                                                    className="plat-item-checkbox" 
                                                    name={cloudlistdis}
                                                    value={cloudlistdis}
                                                    onChange={handleCloudChange}
                                                    // checked = {selectcloud === cloudlistdis ? 'checked' : ''}
                                                    checked = {selectcloud.indexOf(cloudlistdis) !== -1 ?  'checked' : ''}
                                                /><label htmlFor={cloudlistdis}></label>
                                                <span className='plat-item-list'>{cloudlistdis.toUpperCase()}</span>
                                            </Dropdown.Item>
                                        )
                                    }
                                    
                                    </Dropdown.Menu>
                                </Dropdown>
                                {selectcloud.indexOf("all") === -1 &&
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">
                                            {
                                                selectcloud.map((data, index) => 
                                                    <span>{data}<br></br></span>
                                                )
                                            }
                                        </Tooltip>}
                                    >
                                        <div className='manu-top-icon-body'>
                                            <h1 className='manu-top-icon-text'>{menucount.cloud}</h1>
                                        </div>
                                    </OverlayTrigger>
                                }
                                
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2 manu-top-icon-head'>
                                <Dropdown className='plat-costimize-dropdown'>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='plat-menu-default-value'>
                                   {selectaccount.indexOf("all") !== -1  ? 'All Accounts' : 'Accounts'}
                                    <FaChevronDown className='plat-dropdown-downicon' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='plant-dashboard-top-dropdown plat-main-dropdown'>
                                    <Dropdown.ItemText><span className='plat-item-title'>
                                    Account(s)
                                    </span></Dropdown.ItemText>
                                    <input 
                                        type="text" 
                                        className='menu-search-box' 
                                        onKeyUp={(e) => {
                                            searchMenuList(e,setAccountList,accountList);
                                        }}
                                    />
                                    <Dropdown.Item as="button" active>
                                    <input 
                                        type="checkbox" 
                                        id="allaccount"   
                                        className="plat-item-checkbox" 
                                        name='all'
                                        value='all'
                                        onChange={handleaccountChange}
                                        // checked = {selectaccount === 'all' ? 'checked' : ''}
                                        checked = {selectaccount.indexOf("all") !== -1 ?  'checked' : ''}
                                    /><label htmlFor='allaccount'></label>
                                    <span className='plat-item-list'>All Accounts</span>
                                    </Dropdown.Item>
                                    {
                                       accountlist.indexOf("Untagged") !== -1 &&
                                        <Dropdown.Item as="button" active>
                                            <input 
                                                type="checkbox" 
                                                id="Untagged"  
                                                className="plat-item-checkbox" 
                                                name="Untagged"
                                                value="Untagged"
                                                onChange={handleaccountChange}
                                                checked = {selectaccount.indexOf("Untagged") !== -1 ?  'checked' : ''}
                                            /><label htmlFor="Untagged"></label>
                                            <span className='plat-item-list text-danger'>--{capitalizeFirst("Untagged")}--</span>
                                        </Dropdown.Item>
                                    }
                                    {
                                        accountlist.map((accountlistdis) => 
                                            accountlistdis !== 'Untagged' &&
                                                <Dropdown.Item as="button" active>
                                                    <input 
                                                        type="checkbox" 
                                                        id={accountlistdis}   
                                                        className="plat-item-checkbox" 
                                                        name={accountlistdis}
                                                        value={accountlistdis}
                                                        onChange={handleaccountChange}
                                                        // checked = {selectaccount === accountlistdis ? 'checked' : ''}
                                                        checked = {selectaccount.indexOf(accountlistdis) !== -1 ?  'checked' : ''}
                                                    /><label htmlFor={accountlistdis}></label>
                                                    <span className='plat-item-list'>{capitalizeFirst(accountlistdis)}</span>
                                                </Dropdown.Item>
                                        )
                                    }
                                    </Dropdown.Menu>
                                </Dropdown>
                                {selectaccount.indexOf("all") === -1 &&
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">
                                            {
                                                selectaccount.map((data, index) => 
                                                    <span>{data}<br></br></span>
                                                )
                                            }
                                        </Tooltip>}
                                    >
                                        <div className='manu-top-icon-body'>
                                            <h1 className='manu-top-icon-text'>{menucount.account}</h1>
                                        </div>
                                    </OverlayTrigger>
                                }

                                
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2 manu-top-icon-head'>
                                <Dropdown className='plat-costimize-dropdown'>
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='plat-menu-default-value'>
                                   {selectapplication.indexOf("all") !== -1  ? 'All Applications' : 'Applications'}
                                   <FaChevronDown className='plat-dropdown-downicon' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='plant-dashboard-top-dropdown plat-main-dropdown'>
                                        <Dropdown.ItemText><span className='plat-item-title'>
                                            
                                            Application(s)</span></Dropdown.ItemText>
                                        <input 
                                            type="text" 
                                            className='menu-search-box' 
                                            onKeyUp={(e) => {
                                                console.log(e.target.value);
                                                searchMenuList(e,setApplicationList,applicationList);
                                            }}
                                        />
                                        <Dropdown.Item as="button" active>
                                        <input 
                                            type="checkbox" 
                                            id="allapplication"   
                                            className="plat-item-checkbox" 
                                            name='all'
                                            value='all'
                                            onChange={handleapplicationChange}
                                            // checked = {selectapplication === 'all' ? 'checked' : ''}
                                            checked = {selectapplication.indexOf("all") !== -1 ?  'checked' : ''}
                                        /><label htmlFor='allapplication'></label>
                                        <span className='plat-item-list'>All Applications</span>
                                        </Dropdown.Item>

                                        {
                                       applicationlist.indexOf("Untagged") !== -1 &&
                                        <Dropdown.Item as="button" active>
                                                <input 
                                                    type="checkbox" 
                                                    id="Untagged"
                                                    className="plat-item-checkbox" 
                                                    name="Untagged"
                                                    value="Untagged"
                                                    onChange={handleapplicationChange}
                                                    checked = {selectapplication.indexOf("Untagged") !== -1 ?  'checked' : ''}
                                                    // checked = {selectapplication === applicationlistdis ? 'checked' : ''}
                                                /><label htmlFor="Untagged"></label>
                                                <span className='plat-item-list text-danger'>--{capitalizeFirst("Untagged")}--</span>
                                            </Dropdown.Item>
                                        }

                                        {
                                            applicationlist.map( (applicationlistdis) =>
                                                applicationlistdis !== 'Untagged' &&
                                                    <Dropdown.Item as="button" active>
                                                        <input 
                                                            type="checkbox" 
                                                            id={applicationlistdis}
                                                            className="plat-item-checkbox" 
                                                            name={applicationlistdis}
                                                            value={applicationlistdis}
                                                            onChange={handleapplicationChange}
                                                            checked = {selectapplication.indexOf(applicationlistdis) !== -1 ?  'checked' : ''}
                                                            // checked = {selectapplication === applicationlistdis ? 'checked' : ''}
                                                        /><label htmlFor={applicationlistdis}></label>
                                                        <span className='plat-item-list'>{capitalizeFirst(applicationlistdis)}</span>
                                                    </Dropdown.Item>
                                            )
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                {selectapplication.indexOf("all") === -1 &&
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">
                                            {
                                                selectapplication.map((data, index) => 
                                                    <span>{data}<br></br></span>
                                                )
                                            }
                                        </Tooltip>}
                                    >
                                        <div className='manu-top-icon-body'>
                                            <h1 className='manu-top-icon-text'>{menucount.application}</h1>
                                        </div>
                                    </OverlayTrigger>
                                }   
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                <Dropdown className='plat-costimize-dropdown' id="date-main-show">
                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='plat-menu-default-value top-menu-date'>
                                    {dateword}
                                    <FaChevronDown className='plat-dropdown-downicon plat-dropdown-downicon-date' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='plant-dashboard-top-dropdown' id="data-show">
                                        <Dropdown.ItemText>
                                            <span className='plat-item-title plat-single-date'>Month&nbsp;&nbsp;:&nbsp;&nbsp;  
                                                    <DatePicker  
                                                            selected={startDate}
                                                            onChange={(date) => {
                                                                setStartDate(date)
                                                                var element = document.getElementById("data-show");
                                                                element.classList.remove("show");
                                                                var element2 = document.getElementById("date-main-show");
                                                                element2.classList.remove("show");
                                                                // $(".top-menu-date").attr("aria-expanded","false");
                                                                // document.getElementsByClassName('dropdown-button-dark-example1-date').setAttribute('aria-expanded', 'false');
                                                                
                                                            }}
                                                            dateFormat="MMMM/yyyy"
                                                            showMonthYearPicker
                                                        />   
                                                    <MDBIcon className='plat-icon-cal' fas icon="calendar-alt" />  
                                            </span>
                                        </Dropdown.ItemText>
                                        <Dropdown.Item as="button" active onClick={() => {handleMultiMonthChange("7days")}}>
                                            <span className='plat-item-list menu-month-list' >Last 7 Days</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="button" active onClick={() => {handleMultiMonthChange("3month")}}>
                                            <span className='plat-item-list menu-month-list' >Last 3 months</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="button" active onClick={() => {handleMultiMonthChange("6month")}}>
                                            <span className='plat-item-list menu-month-list'>Last 6 months</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="button" active onClick={() => {handleMultiMonthChange("lastyear")}}>
                                            <span className='plat-item-list menu-month-list'>Last year</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col lg="auto" md="auto" sm="auto" xs="auto" className='mb-2'>
                                <button className="btnSecondary plat-menu-clear" onClick={clearAllDate}> Clear all global filters
 </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2} md={3} className="costimize-body-logo">
                        {/* {userInfo.company_logo ? <img className='costimize_company_logo' src={userInfo.company_logo}/>: ''}  */}
                        <img className='costimize_company_logo' src={logo}/>
                    </Col>
                </Row>  
            </div>
        </>
    );
}

export default Section1;
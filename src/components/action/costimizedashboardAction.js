import { createAsyncThunk } from '@reduxjs/toolkit';
import client from './client/dashbaordapploClient';
import client_new from './client/dashboardapplonewClinet';

import { ENVIRONMENT_LIST, APPLICATIONS_LIST, ACCOUNT_LIST, SELECTED_ENVIRONMENT_LIST, SELECTED_APPLICATION_LIST, SELECTED_ACCOUNT_LIST, SERVICES_LIST, OS_LIST, INFRA_LIST, OS_SELECTED_LIST, INFRA_SELECTED_LIST, ASSET_AND_SPEND_LIST, SUMMARY_DASHBOARD, UNTAGGEDRESOURCES_DASHBOARD, TOTAL_SPEND_TRAND_DASHBOARD, CHART_MONTH_SPEND_DASHBOARD, ALL_SAVING_MODEL_DASHBOARD, APPLICATION_CHART_SPEND_DASHBOARD, FILTER_SAVING_MODEL_DASHBOARD, SERVICES_SELECTED_LIST, DB_LIST, DB_SELECTED_LIST, FILTER_ASSET_SPEND_DASHBOARD, ASSET_SUMMARY_DASHBOARD,CREDIT_CHART, PROJECTED_SPEND } from './graphql/CostimizeDashboardGraphql';



export const getEnvironmentList = createAsyncThunk(
    // action type string
    'environment/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        const companyname = data.companyName;
        const month = data.selectedstaticdate;
        try {
            const envList = await client_new
                .query({
                    query: ENVIRONMENT_LIST,
                    variables: {
                        company_name:companyname,
                        month: month
                    }
                });
            return envList;
        } catch (error) {
            console.log(error);
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getApplicationList = createAsyncThunk(
    // action type string
    'application/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        const companyname = data.companyName;
        try {
            const appList = await client
                .query({
                    query: APPLICATIONS_LIST,
                    variables: {
                        company_name:companyname,
                    }
                });
            return appList;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getAccountList = createAsyncThunk(
    // action type string
    'account/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        const companyname = data.companyName;
        try {
            const accList = await client
                .query({
                    query: ACCOUNT_LIST,
                    variables: {
                        company_name:companyname,
                    }
                });
            return accList;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getSelectEnvironmentList = createAsyncThunk(
    // action type string
    'environment/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const envList = await client
                .query({
                    query: SELECTED_ENVIRONMENT_LIST,
                    variables: {
                        account_name: data.selectaccount,
                        application: data.selectapplication,
                        month: data.selectedstaticdate,
                        company_name:data.companyName,
                        cloud: data.selectcloud
                    }
                });
            return envList;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getSelectApplicationList = createAsyncThunk(
    // action type string
    'apllication/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const appList = await client
                .query({
                    query: SELECTED_APPLICATION_LIST,
                    variables: {
                        account_name: data.selectaccount,
                        environment: data.selectenvironment,
                        month: data.selectedstaticdate,
                        company_name:data.companyName,
                        cloud: data.selectcloud
                    }
                });
            return appList;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getSelectAccountList = createAsyncThunk(
    // action type string
    'account/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        
        try {
            const appList = await client
                .query({
                    query: SELECTED_ACCOUNT_LIST,
                    variables: {
                        application: data.selectapplication,
                        environment: data.selectenvironment,
                        month: data.selectedstaticdate,
                        company_name:data.companyName,
                        cloud: data.selectcloud
                    }
                });
            return appList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getServicesList = createAsyncThunk(
    // action type string
    'services/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const serList = await client
                .query({
                    query: SERVICES_LIST,
                    variables: {
                        company_name:data.companyName,
                    }
                });
            return serList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getOSList = createAsyncThunk(
    // action type string
    'os/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const osList = await client
                .query({
                    query: OS_LIST,
                    variables: {
                        company_name:data.companyName,
                    }
                });
            return osList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getInfraList = createAsyncThunk(
    // action type string
    'infra/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const infraList = await client
                .query({
                    query: INFRA_LIST,
                    variables: {
                        company_name:data.companyName,
                    }
                });
            return infraList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getSelectOSList = createAsyncThunk(
    // action type string
    'os/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const osList = await client
                .query({
                    query: OS_SELECTED_LIST,
                    variables: {
                        account_name: data.selectedAccount,
                        application: data.selectedApplication,
                        cloud: data.selectedCloud,
                        company_name: data.companyName,
                        environment: data.selectedEnvironment,
                        Infra: data.selectedinfra,
                        month: data.selectedTopdate,
                        service: data.selectedservices,

                    }
                });
            return osList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getSelectInfraList = createAsyncThunk(
    // action type string
    'infra/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const infraList = await client
                .query({
                    query: INFRA_SELECTED_LIST,
                    variables: {
                        account_name: data.selectedAccount,
                        application: data.selectedApplication,
                        cloud: data.selectedCloud,
                        company_name: data.companyName,
                        environment: data.selectedEnvironment,
                        month: data.selectedTopdate,
                        service: data.selectedservices,
                        operating_system: data.selectedos,
                    }
                });
            return infraList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getSelectedServicesList = createAsyncThunk(
    // action type string
    'infra/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const infraList = await client
                .query({
                    query: SERVICES_SELECTED_LIST,
                    variables: {
                        account_name: data.selectedAccount,
                        application: data.selectedApplication,
                        cloud: data.selectedCloud,
                        company_name: data.companyName,
                        environment: data.selectedEnvironment,
                        month: data.selectedTopdate,
                        infra: data.selectedinfra,
                        db: '',
                        os: data.selectedos,
                    }
                });
            return infraList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const getdbList = createAsyncThunk(
    // action type string
    'infra/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const list = await client
                .query({
                    query: DB_LIST,
                    variables: {
                        company_name:data.companyName,
                    }
                });
            return list;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const getSelecteddbList = createAsyncThunk(
    // action type string
    'infra/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const infraList = await client
                .query({
                    query: DB_SELECTED_LIST,
                    variables: {
                        account_name: data.selectedAccount,
                        application: data.selectedApplication,
                        cloud: data.selectedCloud,
                        company_name: data.companyName,
                        environment: data.selectedEnvironment,
                        month: data.selectedTopdate,
                        infra: data.selectedinfra,
                        service: data.selectedservices,
                    }
                });
            return infraList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);



export const getAssetandSpendList = createAsyncThunk(
    // action type string
    'assetandspend/list',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client
                .query({
                    query: ASSET_AND_SPEND_LIST,
                    variables: {
                        company_name:data.companyName,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const getAllSummaryDashboard = createAsyncThunk(
    // action type string
    'dashboard/summarydashboard',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client_new
                .query({
                    query: SUMMARY_DASHBOARD,
                    variables: {
                        company_name:data.companyName,
                        month:data.selectedTopdate_new,
                        environment: data.apivalue.environment,
                        cloud: data.apivalue.cloud,
                        account: data.apivalue.account,
                        application: data.apivalue.application,
                        service: data.apivalue.services,
                        db: data.apivalue.db,
                        os: data.apivalue.os,
                        infra: data.apivalue.infra,
                    } 
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const getProjectedSpend = createAsyncThunk(
    // action type string
    'dashboard/projectedspend',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client_new
                .query({
                    query: PROJECTED_SPEND,
                    variables: {
                        company_name:data.companyName,
                        month:data.projected_date,
                        account: data.apivalue.account,
                    } 
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);



export const getCreditChart = createAsyncThunk(
    // action type string
    'dashboard/summarydashboard',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client_new
                .query({
                    query: CREDIT_CHART,
                    variables: {
                        company_name:data.companyName,
                        month:data.selectedTopdate_new,
                        environment: data.apivalue.environment,
                        cloud: data.apivalue.cloud,
                        account: data.apivalue.account,
                        application: data.apivalue.application,
                        service: data.apivalue.services,
                        db: data.apivalue.db,
                        os: data.apivalue.os,
                        infra: data.apivalue.infra,
                    } 
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);



export const getUntaggedResources = createAsyncThunk(
    // action type string
    'dashboard/untaggedresources',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client_new
                .query({
                    query: UNTAGGEDRESOURCES_DASHBOARD,
                    variables: {
                        company_name:data.companyName,
                        month:data.selectedTopdate,
                        environment: data.apivalue.environment,
                        cloud: data.apivalue.cloud,
                        account: data.apivalue.account,
                        application: data.apivalue.application,
                        service: data.apivalue.services,
                        db: data.apivalue.db,
                        os: data.apivalue.os,
                        infra: data.apivalue.infra,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const chartTotalSpendTrend = createAsyncThunk(
    // action type string
    'dashboard/totalspendtrand',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client
                .query({
                    query: TOTAL_SPEND_TRAND_DASHBOARD,
                    variables: {
                        company_name : data.companyName,
                        month : data.selectedTopdate,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const chartMonthSpend = createAsyncThunk(
    // action type string
    'dashboard/totalspendtrand',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client_new
                .query({
                    query: CHART_MONTH_SPEND_DASHBOARD,
                    variables: {
                        company_name:data.companyName,
                        month:data.makeDate,
                        environment: data.apivalue.environment,
                        cloud: data.apivalue.cloud,
                        account: data.apivalue.account,
                        application: data.apivalue.application,
                        service: data.apivalue.services,
                        db: data.apivalue.db,
                        os: data.apivalue.os,
                        infra: data.apivalue.infra,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const getSavingModel = createAsyncThunk(
    // action type string
    'dashboard/savingmodel',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const list = await client
                .query({
                    query: ALL_SAVING_MODEL_DASHBOARD,
                    variables: {
                        company_name : data.companyName
                    }
                });
            return list;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const spendChartMonthApplicationSpend = createAsyncThunk(
    // action type string
    'dashboard/applicationspendtrandchart',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client_new
                .query({
                    query: APPLICATION_CHART_SPEND_DASHBOARD,
                    variables: {
                        company_name:data.companyName,
                        month:data.makeDate,
                        environment: data.apivalue.environment,
                        cloud: data.apivalue.cloud,
                        account: data.apivalue.account,
                        application: data.apivalue.application,
                        service: data.apivalue.services,
                        db: data.apivalue.db,
                        os: data.apivalue.os,
                        infra: data.apivalue.infra,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const chartMonthApplicationSpend = createAsyncThunk(
    // action type string
    'dashboard/applicationspendtrand',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client
                .query({
                    query: APPLICATION_CHART_SPEND_DASHBOARD,
                    variables: {
                        company_name : data.companyName,
                        month : data.makeDate,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);



export const filterSavingModel = createAsyncThunk(
    // action type string
    'dashboard/filtersavingmodel',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client_new
                .query({
                    query: FILTER_SAVING_MODEL_DASHBOARD,
                    variables: {
                        company_name:data.companyName,
                        month:data.selectedTopdate,
                        environment: data.apivalue.environment,
                        cloud: data.apivalue.cloud,
                        account_name: data.apivalue.account,
                        application: data.apivalue.application,
                        service: data.apivalue.services,
                        db: data.apivalue.db,
                        os: data.apivalue.os,
                        infra: data.apivalue.infra,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const filterAssetandSpendList = createAsyncThunk(
    // action type string
    'dashboard/filterassetspend',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client_new
                .query({
                    query: FILTER_ASSET_SPEND_DASHBOARD,
                    variables: {
                        company_name:data.companyName,
                        month:data.selectedTopdate,
                        environment: data.apivalue.environment,
                        cloud: data.apivalue.cloud,
                        account_name: data.apivalue.account,
                        application: data.apivalue.application,
                        service: data.apivalue.services,
                        db: data.apivalue.db,
                        os: data.apivalue.os,
                        infra: data.apivalue.infra,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getAssetSummaryData = createAsyncThunk(
    // action type string
    'dashboard/assetsummary',
    // callback function
    async ( data , { rejectWithValue }) => {
        try {
            const aasList = await client
                .query({
                    query: ASSET_SUMMARY_DASHBOARD,
                    variables: {
                        company_name:data.companyName,
                        month:data.selectedTopdate,
                        environment: data.apivalue.environment,
                        cloud: data.apivalue.cloud,
                        account: data.apivalue.account,
                        application: data.apivalue.application,
                        service: data.apivalue.services,
                        db: data.apivalue.db,
                        os: data.apivalue.os,
                        infra: data.apivalue.infra,
                    }
                });
            return aasList;
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);





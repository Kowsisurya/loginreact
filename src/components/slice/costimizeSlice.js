// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    environmentList: [],
    applicationList:[],
    accountList:[],
    cloudList:[],
    selectedEnvironment:['all'],
    selectedAccount:['all'],
    selectedCloud:['all'],
    selectedApplication:['all'],
    selectedTopdate:'',
    selectedservices:['all'],
    selectedos:['all'],
    selectedinfra:['all'],
    selecteddb:['all'],
    spendtrandschartdata:[],
    spendtrandschartmonth:[],
    searchapplication:'',
    alldropdownlist:[],
    dummydatastatus: false
    
}

const costimizeSlice = createSlice({
    name: 'costimize',
    initialState,
    reducers: {
        environmentListMethod: (state, { payload }) => {
            state.environmentList = payload;
        },
        cloudListMethod:(state, { payload }) => {
            state.cloudList = payload;
        },
        applicationListMethod: (state, { payload }) => {
            state.applicationList = payload;
        },
        accountListMethod: (state, { payload }) => {
            state.accountList = payload;
        },
        selectedEnvironmentMethod: (state, { payload }) => {
            state.selectedEnvironment = payload;
        },
        selectedAccountMethod: (state, { payload }) => {
            state.selectedAccount = payload;
        },
        selectedCloudMethod: (state, { payload }) => {
            state.selectedCloud = payload;
        },
        selectedApplicationMethod: (state, { payload }) => {
            state.selectedApplication = payload;
        },
        selectedTopDateMethod: (state, { payload }) => {
            state.selectedTopdate = payload;
        },
        selectedServicesMethod: (state, { payload }) => {
            state.selectedservices = payload;
        },
        selectedOSMethod: (state, { payload }) => {
            state.selectedos = payload;
        },
        selectedInfraMethod: (state, { payload }) => {
            state.selectedinfra = payload;
        },
        spendTrandChartData: (state, { payload }) => {
            state.spendtrandschartdata = payload;
        },
        spendTrandChartMonth: (state, { payload }) => {
            state.spendtrandschartmonth = payload;
        },
        selectedDbMethod: (state, { payload }) => {
            state.selecteddb = payload;
        },
        searchApplication: (state, { payload }) => {
            state.searchapplication = payload;
        },
        allDropdownList: (state, { payload }) => {
            state.alldropdownlist = payload;
        },
        setDummyDataStatus: (state, { payload }) => {
            state.dummydatastatus = payload;
        },
    },
    extraReducers: {
    },
})

export default costimizeSlice.reducer;
export const { environmentListMethod, applicationListMethod, accountListMethod, selectedEnvironmentMethod, selectedAccountMethod, selectedCloudMethod, selectedApplicationMethod, selectedTopDateMethod, selectedServicesMethod, selectedOSMethod, selectedInfraMethod, spendTrandChartData, spendTrandChartMonth, selectedDbMethod, searchApplication, allDropdownList, setDummyDataStatus, cloudListMethod } = costimizeSlice.actions;
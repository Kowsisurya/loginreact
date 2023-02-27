// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser } from '../action/userAction'

const initialState = {
  isRegisterFlag: false,
  onboardAction: "update",
  userType: "user",
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  profileInfo: {
    first_name: '',
    last_name: '',
    email: '',
    company_name: '',
    contact_no: '',
  },
  companyInfo: {
    company_name: '',
    company_headquaters: '',
    address_information: '',
    state: '',
    country: '',
    company_mail_id: '',
    company_contact_no:''
  },
  master_info: {
    master_first_name: '',
    master_last_name: '',
    master_email: '',
    master_contact_no: '',
  },
  offeringInfo: {
      
  },
  listUsers: [],
  companyName: '',
  updateuserdetails:{},
  userdetailsupdate:'',
  offeringlist: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        profileInfoMethod: (state, {payload}) => {
            state.profileInfo = payload;
        },
        companyInfoMethod: (state, {payload}) => {
            state.companyInfo = payload;
        },
        masterInfoMethod: (state, {payload}) => {
            state.master_info = payload;
        },
        offeringInfoMethod: (state, {payload}) => {
            state.offeringInfo = payload;
        },
        setUserType: (state, {payload}) => {
            state.userType = payload.type;
        },
        userInfoMethod: (state, { payload }) => {
            state.userInfo = payload;
        },
        onboardActionMethod: (state, {payload}) => {
            state.onboardAction = payload;
        },
        listUsersMethod: (state, {payload}) => {
            state.listUsers = payload;
        },
        enableRegisterFlag: (state, {payload}) => {
            state.isRegisterFlag = payload;
        },
        getCompanyName: (state, {payload}) =>{
            state.companyName = payload;
        },
        updateUsersMethod: (state, {payload}) =>{
            state.updateuserdetails = payload;
        },
        userDetailsUpdateStatus: (state, {payload}) =>{
            state.userdetailsupdate = payload;
        },
        getOfferingsList: (state, {payload}) =>{
            state.offeringlist = payload;
        },
    },
    extraReducers: {
    [registerUser.pending]: (state) => {
        state.loading = true
        state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
    },
    [registerUser.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
    },
    [loginUser.pending]: (state) => {
        state.loading = true
        state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
        state.userToken = payload.userToken
    },
    [loginUser.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
    },
  },
})

export default userSlice.reducer;
export const { profileInfoMethod, companyInfoMethod, masterInfoMethod, offeringInfoMethod, setUserType, userInfoMethod, onboardActionMethod, listUsersMethod, enableRegisterFlag, getCompanyName, updateUsersMethod, userDetailsUpdateStatus, getOfferingsList } = userSlice.actions;
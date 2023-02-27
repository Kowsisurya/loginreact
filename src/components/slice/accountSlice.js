// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser } from '../action/userAction'

const initialState = {
    accountList: [],
    selectedcompany:'',
    selectedcloud:'AWS'
}

const accountSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addAccountListMethod: (state, { payload }) => {
            state.accountList = payload;
        },
        setSelectedCloud: (state, { payload }) => {
            state.selectedcloud = payload;
        },
        setSelectedCompany: (state, { payload }) => {
            state.selectedcompany = payload;
        },
    },
    extraReducers: {
    },
})

export default accountSlice.reducer;
export const { addAccountListMethod, setSelectedCloud, setSelectedCompany } = accountSlice.actions;
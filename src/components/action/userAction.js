// userAction.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import client from '../apploClient';
import { CREATE_USER_INFO, LOGIN_USER, CREATE_CUSTOMER_ONBOARDING, DELETE_USER, GET_USER_DETAILS, UPDATE_CUSTOMER_ONBOARDING, UPDATE_USER_STATUS, USERMANAGER_LIST, CHANGE_USER_PASSWORD } from '../Graphql';

export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async ({ firstName, email, password, companyName, phoneNo, lastName }, { rejectWithValue }) => {
        try {
            const createUser = await client
                .mutate({
                    mutation: CREATE_USER_INFO,
                    variables: {
                        createuserconfiginput: {
                            email,
                            first_name: firstName,
                            last_name: lastName,
                            contact_no: phoneNo,
                            password,
                            company_name: companyName,
                            status:'register'
                        }
                    }
                });
            return createUser;
        } catch (error) {
            console.log(error);
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);


export const loginUser = createAsyncThunk(
    // action type string
    'user/login',
    // callback function
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const loginUser = await client
                .query({
                    query: LOGIN_USER,
                    variables: {
                        email: username,
                        password,
                    }
                });
            return loginUser;
        } catch (error) {
            console.log(error);
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);


export const getUserDetails = createAsyncThunk(
    // action type string
    'user/details',
    // callback function
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const details = await client
                .query({
                    query: GET_USER_DETAILS,
                    variables: {
                        email: username,
                        password,
                    }
                });
            return details;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);





export const customerOnboarding = createAsyncThunk(
    // action type string
    'user/customerOnboarding',
    // callback function
    async (
        {
            email,
            first_name,
            last_name,
            contact_no,
            company_name,
            company_mail_id,
            company_headquaters,
            company_contact_no,
            address_information,
            state,
            country,
            master_email,
            master_first_name,
            master_last_name,
            master_contact_no,
            password,
            time_zone,
            Offerings,
            Role,
            status
        }, { rejectWithValue }) => {
        try {
            const onboardCustomer = await client
                .mutate({
                    mutation: CREATE_CUSTOMER_ONBOARDING,
                    variables: {
                        email,
                        first_name,
                        last_name,
                        contact_no,
                        company_name,
                        company_mail_id,
                        company_headquaters,
                        company_contact_no,
                        address_information,
                        state,
                        country,
                        master_email,
                        master_first_name,
                        master_last_name,
                        master_contact_no,
                        password,
                        time_zone,
                        Offerings,
                        Role,
                        status
                    }
                });
            return onboardCustomer;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);

export const customerUpdate = createAsyncThunk(
    // action type string
    'user/customerupdate',
    // callback function
    async (
        {
            email,
            first_name,
            last_name,
            contact_no,
            company_name,
            company_mail_id,
            company_headquaters,
            company_contact_no,
            address_information,
            state,
            country,
            master_email,
            master_first_name,
            master_last_name,
            master_contact_no,
            password,
            time_zone,
            Offerings,
            Role,
            status
        }, { rejectWithValue }) => {
        try {
            const onboardCustomer = await client
                .mutate({
                    mutation: UPDATE_CUSTOMER_ONBOARDING,
                    variables: {
                        email,
                        first_name,
                        last_name,
                        contact_no,
                        company_name,
                        company_mail_id,
                        company_headquaters,
                        company_contact_no,
                        address_information,
                        state,
                        country,
                        master_email,
                        master_first_name,
                        master_last_name,
                        master_contact_no,
                        password,
                        time_zone,
                        Offerings,
                        Role,
                        status
                    }
                });
            return onboardCustomer;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);


export const deleteUser = createAsyncThunk(
    // action type string
    'user/delete',
    // callback function
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const createUser = await client
                .mutate({
                    mutation: DELETE_USER,
                    variables: {
                        email,
                        password,
                    }
                });
            return createUser;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);


export const changeUserPassword = createAsyncThunk(
    // action type string
    'user/changepassword',
    // callback function
    async ({ email, password }, { rejectWithValue }) => {
        console.log(email);
        console.log(password);
        try {
            const createUser = await client
                .mutate({
                    mutation: CHANGE_USER_PASSWORD,
                    variables: {
                        email,
                        password,
                    }
                });
            return createUser;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);

export const userStatusUpdate = createAsyncThunk(
    // action type string
    'user/status_update',
    // callback function
    async ({ status_value, email, password, company_name }, { rejectWithValue }) => {
        
        try {
            const createUser = await client
                .mutate({
                    mutation: UPDATE_USER_STATUS,
                    variables: {
                        email,
                        password,
                        status_value,
                        company_name
                    }
                });
            return createUser;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);

export const usermanagerUserList = createAsyncThunk(
    // action type string
    'user/listuser',
    // callback function
    async (data, { rejectWithValue }) => {
        try {
            const createUser = await client
                .mutate({
                    mutation: USERMANAGER_LIST
                });
            return createUser;
        } catch (error) {
            console.log(error);
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);



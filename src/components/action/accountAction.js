// userAction.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import client, { client2 } from '../apploClient';
import { ACCOUNT_LIST, CREATE_ACCOUNT, DELETE_ACCOUNT, ACCOUNT_UPDATE, ACCOUNT_STATUS_UPDATE, ACCOUNT_LIST_NEW, ACCOUNT_ENVIRIONMENT_LIST, ACCOUNT_ONBOARDING, ACCOUNT_ONBOARDING_INSERT } from '../Graphql';

export const listAccount = createAsyncThunk(
    // action type string
    'account/list',
    // callback function
    async (data, { rejectWithValue }) => {
        try {
            const accList = await client
                .query({
                    query: ACCOUNT_LIST,
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

export const listAccountNew = createAsyncThunk(
    // action type string
    'account/new_list',
    // callback function
    async ({}, { rejectWithValue }) => {
        try {
            const accList = await client
                .query({
                    query: ACCOUNT_LIST_NEW,
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



export const accountOnboarding = createAsyncThunk(
    // action type string
    'account/create',
    // callback function
    async ({  account_id, account_name, bucket_name, iam_arn_role, prefix_path, report_name, environment, status, cloud_type, company_name, ec2_region_list, environment_tag, application_tag, payer_account_id, auto_tag_update,event_type,external_id,files }, { rejectWithValue }) => {
        // console.log({  account_id, account_name, bucket_name, iam_arn_role, prefix_path, report_name, environment, status, cloud_type, company_name, ec2_region_list, environment_tag, application_tag, payer_account_id, auto_tag_update,event_type, files });
        console.log(event_type);
        var query;
        if(event_type === "validate"){
            query = ACCOUNT_ONBOARDING;
        }else{
            query = ACCOUNT_ONBOARDING_INSERT;
        }
        try {
            const account = await client
                .mutate({
                    mutation: query,
                    variables: {
                            account_id,
                            account_name,
                            bucket_name,
                            iam_arn_role,
                            prefix_path,
                            report_name,
                            environment,
                            status:"active",
                            cloud_type,
                            company_name,
                            ec2_region_list,
                            environment_tag,
                            application_tag,
                            payer_account_id,
                            auto_tag_update,
                            event_type,
                            external_id,
                            files
                    }
                });
            return account;
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

export const createAccount = createAsyncThunk(
    // action type string
    'account/create',
    // callback function
    async ({  account_id, account_name, bucket_name, iam_arn_role, prefix_path, report_name, environment, status, cloud_type, company_name, ec2_region_list, environment_tag, application_tag, payer_account_id, auto_tag_update }, { rejectWithValue }) => {
        try {
            const account = await client
                .mutate({
                    mutation: CREATE_ACCOUNT,
                    variables: {
                        createaccountconfiginput: {
                            account_id,
                            account_name,
                            bucket_name,
                            iam_arn_role,
                            prefix_path,
                            report_name,
                            environment,
                            status:"active",
                            cloud_type,
                            company_name,
                            ec2_region_list,
                            environment_tag,
                            application_tag,
                            payer_account_id,
                            auto_tag_update
                        }
                    }
                });
            return account;
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

export const deleteAccount = createAsyncThunk(
    // action type string
    'account/delete',
    // callback function
    async ({  account_id, account_name }, { rejectWithValue }) => {
        try {
            const account = await client
                .mutate({
                    mutation: DELETE_ACCOUNT,
                    variables: {
                        account_id,
                        account_name,
                    }
                });
            return account;
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

export const updateAccountDetails = createAsyncThunk(
    // action type string
    'account/update',
    // callback function
    async (data, { rejectWithValue }) => {
        // console.log(data);
        try {
            const account = await client
                .mutate({
                    mutation: ACCOUNT_UPDATE,
                    variables: {
                        account_id: data.account_id,
                        account_name: data.account_name,
                        bucket_name: data.bucket_name,
                        environment: data.environment,
                        iam_arn_role: data.iam_arn_role,
                        prefix_path: data.prefix_path,
                        report_name: data.report_name,
                        ec2_region_list: data.ec2_region_list,
                        environment_tag: data.environment_tag,
                        application_tag: data.application_tag,
                        payer_account_id: data.payer_account_id,
                        auto_tag_update: data.auto_tag_update
                    }
                });
            return account;
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


export const updateAccountStatus = createAsyncThunk(
    // action type string
    'account/status_update',
    // callback function
    async (data, { rejectWithValue }) => {
        // console.log(data);
        try {
            const account = await client
                .mutate({
                    mutation: ACCOUNT_STATUS_UPDATE,
                    variables: {
                        account_id: data.account_id,
                        account_name: data.account_name,
                        status: data.status_value
                    }
                });
            return account;
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

export const accountEnvirionmentList = createAsyncThunk(
    // action type string
    'account/envirionment_list',
    // callback function
    async (data, { rejectWithValue }) => {
        // console.log(data);
        try {
            const account = await client
                .mutate({
                    mutation: ACCOUNT_ENVIRIONMENT_LIST,
                    variables: {
                    }
                });
            return account;
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








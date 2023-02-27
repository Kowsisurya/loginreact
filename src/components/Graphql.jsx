import { gql } from '@apollo/client';

const CREATE_USER_INFO = gql`
  mutation createUserInfo($createuserconfiginput: CreateUserConfigInput!) {
    createUserConfig(
      input: $createuserconfiginput
    ) {
      email
      first_name
      last_name
      contact_no
      company_name
      password
      status
    }
  }
`;
const ACCOUNT_ONBOARDING = gql`query MyQuery($account_id: String!, $account_name: String!, $bucket_name: String!,  $prefix_path: String!, $report_name: String!, $environment: String!, $cloud_type: String!, $company_name: String!, $ec2_region_list: String!, $environment_tag: String!, $application_tag: String!, $payer_account_id: String!, $auto_tag_update: String!, $event_type: String!, $external_id: String!, $iam_arn_role: String!) {
  getTask(account_name: $account_name, bucket_name: $bucket_name, external_id: $external_id, iam_arn_role: $iam_arn_role, prefix_path: $prefix_path, report_name: $report_name, application_name_column: $application_tag, auto_tag_update: $auto_tag_update, cloud_platform: $cloud_type, ec2_regions_list: $ec2_region_list, customer: $company_name, environment_tag: $environment_tag, environment:$environment, payer_account_id: $payer_account_id, usage_account_id: $account_id, event_type: $event_type, files: "")
}`;

const ACCOUNT_ONBOARDING_INSERT = gql`query MyQuery($account_id: String!, $account_name: String!, $bucket_name: String!,  $prefix_path: String!, $report_name: String!, $environment: String!, $cloud_type: String!, $company_name: String!, $ec2_region_list: String!, $environment_tag: String!, $application_tag: String!, $payer_account_id: String!, $auto_tag_update: String!, $event_type: String!, $external_id: String!, $iam_arn_role: String!, $files: String!) {
  getTask(account_name: $account_name, bucket_name: $bucket_name, external_id: $external_id, iam_arn_role: $iam_arn_role, prefix_path: $prefix_path, report_name: $report_name, application_name_column: $application_tag, auto_tag_update: $auto_tag_update, cloud_platform: $cloud_type, ec2_regions_list: $ec2_region_list, customer: $company_name, environment_tag: $environment_tag, environment:$environment, payer_account_id: $payer_account_id, usage_account_id: $account_id, event_type: $event_type, files: $files)
}`;

// const ACCOUNT_ONBOARDING = gql`query MyQuery($account_id: String!, $account_name: String!, $bucket_name: String!, $iam_arn_role: String!, $ec2_region_list: String!, $report_name: String!, $payer_account_id: String!, $prefix_path: String!, $environment_tag: String!, $environment: String!, $application_tag: String!, $external_id: String!,){
//   getTask(account_name: $account_name, bucket_name: $bucket_name, external_id: $external_id, iam_arn_role: $iam_arn_role, prefix_path: $prefix_path, report_name: $report_name, application_name_column: $application_tag, auto_tag_update: "yes", cloud_platform: "aws", ec2_regions_list: $ec2_region_list, customer: "war", environment_tag: $environment_tag, environment:$environment, payer_account_id: $payer_account_id, usage_account_id: $account_id, event_type: "validate", files: "")
// }`;



const CREATE_ACCOUNT = gql`
  mutation createAccountConfig($createaccountconfiginput: CreateAccountConfigInput!) {
    createAccountConfig(
      input: $createaccountconfiginput
    ) {
      account_id
      account_name
      bucket_name
      iam_arn_role
      report_name
      environment
      prefix_path
      cloud_type
      company_name
      ec2_region_list
      environment_tag
      application_tag
      payer_account_id
      auto_tag_update
    }
  }
`;

const LOGIN_USER = gql`
    query listUserConfigs($email:String!, $password: String!) {
      getUserConfig(email: $email, password: $password) {
            email
            password
            first_name
            last_name
            Role
            company_name
            status
            company_logo
            Offerings
        }
    }
`;
// const LOGIN_USER = gql`query MyQuery($email:String!, $password: String!) 
// { listUserConfigs(filter: 
//   {email: {contains: $email}, 
//   password: {contains: $password}
// }) { 
//   items { 
//     email
//     first_name
//     last_name
//     Role
//     company_name
//     status
//     company_logo
//     Offerings
//   } 
// }}`;

const GET_USER_DETAILS = gql`query getUserConfig($email:String!, $password: String!) {
  getUserConfig(email: $email, password: $password) {
      email
      password
      first_name
      last_name
      contact_no
      company_name
      company_mail_id
      company_headquaters
      company_contact_no
      address_information
      state
      country
      master_email
      master_first_name
      master_last_name
      master_contact_no
      status
      Offerings
    }
}`;

const LIST_USER_INFO = gql`
    query listUserConfigs {
      listUserConfigs {
        items {
            email
            password
            first_name
            last_name
            contact_no
            company_name
            company_mail_id
            company_headquaters
            company_contact_no
            address_information
            state
            country
            master_email
            master_first_name
            master_last_name
            master_contact_no
            status
        }
        }
    }  
`;

const CREATE_CUSTOMER_ONBOARDING = gql`
  mutation createUserConfig (
      $email: String!, 
      $first_name: String!, 
      $last_name: String!, 
      $contact_no: String!, 
      $password: String!, 
      $company_name: String!, 
      $company_headquaters: String!, 
      $company_mail_id: String!, 
      $company_contact_no: String!, 
      $address_information: String!, 
      $state: String!, 
      $country: String!, 
      $time_zone: String!, 
      $master_email: String!, 
      $master_first_name: String!, 
      $master_last_name: String!, 
      $master_contact_no: String!,
      $Offerings: String!,
      $Role: String!,
      $status: String!) {
      updateUserConfig(input: {
        email: $email, 
        first_name: $first_name, 
        last_name: $last_name, 
        contact_no: $contact_no, 
        password: $password, 
        company_name: $company_name, 
        company_headquaters: $company_headquaters, 
        company_mail_id: $company_mail_id, 
        company_contact_no: $company_contact_no, 
        address_information: $address_information, 
        state: $state, 
        country: $country, 
        time_zone: $time_zone, 
        master_email: $master_email, 
        master_first_name: $master_first_name, 
        master_last_name: $master_last_name, 
        master_contact_no: $master_contact_no,
        Offerings: $Offerings,
        Role: $Role,
        status: $status
    }) {
      first_name
      last_name
      contact_no
      company_name
      company_headquaters
      company_mail_id
      company_contact_no
      address_information
      state
      country
      master_email
      master_first_name
      master_last_name
      master_contact_no
      time_zone
    }
  }
`;

const UPDATE_CUSTOMER_ONBOARDING = gql`
mutation MyMutation(
  $email: String!, 
  $first_name: String!, 
  $last_name: String!, 
  $contact_no: String!, 
  $password: String!, 
  $company_name: String!, 
  $company_headquaters: String!, 
  $company_mail_id: String!, 
  $company_contact_no: String!, 
  $address_information: String!, 
  $state: String!, 
  $country: String!, 
  $time_zone: String!, 
  $master_email: String!, 
  $master_first_name: String!, 
  $master_last_name: String!, 
  $master_contact_no: String!,
  $Offerings: String!,
  $Role: String!,
  $status: String!) {
  updateUserConfig(input: {email: $email, 
    first_name: $first_name, 
    last_name: $last_name, 
    contact_no: $contact_no, 
    password: $password, 
    company_name: $company_name, 
    company_headquaters: $company_headquaters, 
    company_mail_id: $company_mail_id, 
    company_contact_no: $company_contact_no, 
    address_information: $address_information, 
    state: $state, 
    country: $country, 
    time_zone: $time_zone, 
    master_email: $master_email, 
    master_first_name: $master_first_name, 
    master_last_name: $master_last_name, 
    master_contact_no: $master_contact_no,
    Offerings: $Offerings,
    Role: $Role,
    status: $status}) {
    email
    first_name
    last_name
    contact_no
    company_name
    company_mail_id
    company_headquaters
    company_contact_no
    address_information
    state
    country
    time_zone
    master_email
    master_first_name
    master_last_name
    master_contact_no
    status
    Role
    Offerings
  }
}`;


const ACCOUNT_LIST = gql`
    query listAccountConfigs {
      listAccountConfigs {
        items {
          account_id
          account_name
          bucket_name
          iam_arn_role
          prefix_path
          report_name
          environment
          status
          cloud_type
          company_name
          ec2_region_list
          environment_tag 
          application_tag
          payer_account_id
          auto_tag_update
        }
      }
    }
`;

const ACCOUNT_LIST_NEW = gql`
query listAccountConfigs {
  listAccountConfigs {
    items {
      account_id
      account_name
      bucket_name
      iam_arn_role
      prefix_path
      report_name
      environment
      status
      cloud_type
      company_name
    }
  }
}`;

const DELETE_ACCOUNT = gql`
  mutation deleteAccountConfig($account_id: String!, $account_name: String!) {
    deleteAccountConfig(
      input: {
        account_id: $account_id,
        account_name: $account_name
      } 
    ) {
      account_id
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUserConfig($email: String!, $password: String!) {
    deleteUserConfig(
      input: {
        email: $email,
        password: $password
      } 
    ) {
      email
      first_name
    }
  }
`;

const UPDATE_USER_STATUS = gql`mutation MyMutation($email: String!,$password: String!,$status_value: String!, $company_name: String!) {
  updateUserConfig(input: {email: $email, password: $password, status:$status_value, company_name: $company_name}) {
    email
    first_name
    last_name
    contact_no
    company_name
    company_mail_id
    company_headquaters
    company_contact_no
    address_information
    state
    country
    time_zone
    master_email
    master_first_name
    master_last_name
    master_contact_no
    status
    Role
    Offerings
  }
}`;


const CHANGE_USER_PASSWORD = gql`mutation MyMutation($email: String!,$password: String!) {
  updateUserConfig(input: {email: $email, password: $password}) {
    email
  }
}`;

const USERMANAGER_LIST = gql`query MyQuery {
  listUserConfigs {
    items {
      email
      password
      first_name
      last_name
      contact_no
      company_name
      company_headquaters
      company_mail_id
      company_contact_no
      address_information
      state
      country
      time_zone
      master_email
      master_first_name
      master_last_name
      master_contact_no
      status
      Role
      Offerings
    }
  }
}`;

const ACCOUNT_UPDATE = gql`mutation MyMutation($account_id: String!,$account_name: String!,$bucket_name: String!,$environment: String!,$iam_arn_role: String!,$prefix_path: String!,$report_name: String!,$ec2_region_list: String!,$environment_tag: String!,$application_tag: String!,$payer_account_id: String!,$auto_tag_update: String!) {
  updateAccountConfig(input: {account_id: $account_id, account_name: $account_name, bucket_name: $bucket_name, environment: $environment, iam_arn_role: $iam_arn_role, prefix_path: $prefix_path, report_name: $report_name, ec2_region_list: $ec2_region_list,environment_tag: $environment_tag, application_tag: $application_tag, payer_account_id: $payer_account_id, auto_tag_update: $auto_tag_update}) {
    account_id
    account_name
    cloud_type
    bucket_name
    environment
    iam_arn_role
    prefix_path
    report_name
    status
    ec2_region_list
    environment_tag
    application_tag
    payer_account_id
    auto_tag_update
  }
}`;

const ACCOUNT_STATUS_UPDATE = gql`mutation MyMutation($account_id: String!,$account_name: String!,$status: String!) {
  updateAccountConfig(input: {account_id: $account_id, account_name: $account_name, status: $status}) {
    account_id
    account_name
    status
  }
}`;

const ACCOUNT_ENVIRIONMENT_LIST = gql`query MyQuery {
  listAccountConfigs {
    items {
      environment
    }
  }
}`;

export { CREATE_USER_INFO, LOGIN_USER, LIST_USER_INFO, CREATE_CUSTOMER_ONBOARDING, ACCOUNT_LIST, CREATE_ACCOUNT, DELETE_ACCOUNT, DELETE_USER, GET_USER_DETAILS, UPDATE_CUSTOMER_ONBOARDING, UPDATE_USER_STATUS, USERMANAGER_LIST, ACCOUNT_UPDATE, CHANGE_USER_PASSWORD, ACCOUNT_STATUS_UPDATE, ACCOUNT_LIST_NEW, ACCOUNT_ENVIRIONMENT_LIST, ACCOUNT_ONBOARDING, ACCOUNT_ONBOARDING_INSERT };
import { gql } from '@apollo/client';


// const ENVIRONMENT_LIST = gql`query MyQuery($company_name: String!) {
//     distinctenvironment(company_name: $company_name) {
//       environment
//     }
//   }`;

const ENVIRONMENT_LIST = gql`query MyQuery($company_name: String!,$month: String!) {
  newfunctionquery1(company_name: $company_name, month: $month) {
    account_name
    application
    cloud
    environment
    db
    infra
    os
    service
  }
}`;

const APPLICATIONS_LIST = gql`query MyQuery($company_name: String!) {
    distinctapplication(company_name: $company_name) {
        application
    }
    }`;

const ACCOUNT_LIST = gql`query MyQuery($company_name: String!) {
    distinctaccount(company_name: $company_name) {
      account_name
    }
  }`;

const SELECTED_ENVIRONMENT_LIST = gql`query MyQuery($account_name: String!,$application: String!,$month: String!,$company_name: String!, $cloud: String!) {
    listenvironment(account_name: $account_name, application: $application, company_name: $company_name, month: $month, cloud: $cloud) {
      environment
    }
  }`;

const SELECTED_APPLICATION_LIST = gql`query MyQuery($account_name: String!,$environment: String!,$month: String!,$company_name: String!, $cloud: String!) {
    listapplication(account_name: $account_name, company_name: $company_name, environment: $environment, month: $month, cloud: $cloud) {
      application
    }
  }`;

const SELECTED_ACCOUNT_LIST = gql`query MyQuery($application: String!,$environment: String!,$month: String!,$company_name: String!, $cloud: String!) {
    listaccount(application: $application, company_name: $company_name, environment: $environment, month: $month, cloud: $cloud) {
      account_name
    }
  }`;

const SERVICES_LIST = gql`query MyQuery($company_name: String!) {
    distinctService(company_name: $company_name) {
      service
    }
  }`;

const OS_LIST = gql`query MyQuery($company_name: String!) {
    distinctOs(company_name: $company_name) {
      operating_system
    }
  }`;

const INFRA_LIST = gql`query MyQuery($company_name: String!) {
    distinctInfra(company_name: $company_name) {
      infra
    }
  }`;

const DB_LIST = gql`query MyQuery($company_name: String!) {
  distinctDB(company_name: $company_name) {
    db
  }
}
`;

const DB_SELECTED_LIST = gql`query MyQuery($account_name: String!,$application: String!, $cloud: String!, $company_name: String!,$environment: String!,$month: String!, $service: String!, $infra: String!) {
  DBdropdown(account_name: $account_name, application: $application, cloud: $cloud, company_name: $company_name, environment: $environment, infra: $infra, month: $month, service: $service) {
    db
  }
}`;


const OS_SELECTED_LIST = gql`query MyQuery($account_name: String!,$application: String!, $cloud: String!,$company_name: String!,$environment: String!,$Infra: String!,$month: String!,$service: String!) {
    OSdropdown(account_name: $account_name, application: $application, cloud: $cloud, company_name: $company_name, environment: $environment, Infra: $Infra, month: $month, service: $service) {
      operating_system
    }
  }`;

const INFRA_SELECTED_LIST = gql`query MyQuery($account_name: String!,$application: String!, $cloud: String!, $company_name: String!,$environment: String!,$month: String!,$service: String!, $operating_system: String!) {
    Infradropdown(account_name: $account_name, application: $application, cloud: $cloud, company_name: $company_name, environment: $environment, month: $month, service: $service, operating_system: $operating_system) {
      infra
    }
  }
  `;
const SERVICES_SELECTED_LIST = gql`query MyQuery($account_name: String!,$application: String!, $cloud: String!, $company_name: String!,$environment: String!,$month: String!,$db: String!, $os: String!, $infra: String!) {
  servicedropdown(account_name: $account_name, application: $application, cloud: $cloud, company_name: $company_name, environment: $environment, infra: $infra, month: $month, os: $os, db: $db) {
    service
  }
}`;

const ASSET_AND_SPEND_LIST = gql`query MyQuery($company_name: String!) {
  allassetspend(company_name: $company_name) {
    account_name
    cloud
    application
    environment
    month
    service
    os
    infra
    count
    spend
  }
}
`;

const SUMMARY_DASHBOARD_OLD = gql`query MyQuery($company_name: String!, $month: String!) {
  allsummaryapi(company_name: $company_name, month: $month) {
    report_month
    actual_spend
    projected_spend
    actual_spend_diff
    projected_spend_diff
  }
}`;

const SUMMARY_DASHBOARD = gql`query MyQuery($account: String!,$application: String!,$cloud: String!,$environment: String!,$month: String!,$company_name: String!, $db: String!,$infra: String!, $os: String!, $service: String!) {
  newfunctionquery3(account_name: $account, application: $application, cloud: $cloud, company_name: $company_name, db: $db, environment: $environment, infra: $infra, month: $month, os: $os, service: $service) {
    reportmonth
    spend
    projected_spend
    actualspend_previous_month_dif
    projectedspend_previous_month_diff
  }
}`;

const CREDIT_CHART = gql`query MyQuery($account: String!,$application: String!,$cloud: String!,$environment: String!,$month: String!,$company_name: String!, $db: String!,$infra: String!, $os: String!, $service: String!) {
  newfunctionquery4(account_name: $account, application: $application, cloud: $cloud, company_name: $company_name, db: $db, environment: $environment, infra: $infra, month: $month, os: $os, service: $service) {
    reportmonth
    spend
  }
}`;

const UNTAGGEDRESOURCES_DASHBOARD = gql`query MyQuery($account: String!,$application: String!,$cloud: String!,$environment: String!,$month: String!,$company_name: String!, $db: String!,$infra: String!, $os: String!, $service: String!) {
  newfunctionquery2(account_name: $account, application: $application, cloud: $cloud, company_name: $company_name, db: $db, environment: $environment, infra: $infra, month: $month, os: $os, service: $service) {
    count_untagged_resource
    tagging_details
    services
  }
}`;

const TOTAL_SPEND_TRAND_DASHBOARD = gql`query MyQuery($company_name: String!, $month: String!) {
  monthwisedata(company_name: $company_name, month: $month) {
    month
    spend
  }
}`;

const CHART_MONTH_SPEND_DASHBOARD = gql`query MyQuery($account: String!,$application: String!, $cloud: String!, $company_name: String!,$environment: String!,$month: String!,$db: String!, $os: String!, $infra: String!, $service: String!) {
  newfunctionquery(account_name: $account, application: $application, cloud: $cloud, company_name: $company_name, db: $db, environment: $environment, infra: $infra, month: $month, os: $os, service: $service) {
    environments
    spend
  }
}`;

const ALL_SAVING_MODEL_DASHBOARD = gql`query MyQuery($company_name: String!)  {
  allsavingsview(company_name: $company_name) {
    actual_savings
    application
    environment
    potential_savings
    pricing_model
    spend
    account_name
  }
}`;

const APPLICATION_CHART_SPEND_DASHBOARD = gql`query MyQuery($account: String!,$application: String!,$cloud: String!,$environment: String!,$month: String!,$company_name: String!, $db: String!,$infra: String!, $os: String!, $service: String!) {
  newfunctionquery(account_name: $account, application: $application, cloud: $cloud, company_name: $company_name, db: $db, environment: $environment, infra: $infra, month: $month, os: $os, service: $service) {
    applications
    spend
  }
}`;

const FILTER_SAVING_MODEL_DASHBOARD_OLD = gql`query MyQuery($account_name: String!,$application: String!,$cloud: String!,$environment: String!,$month: String!,$company_name: String!) {
  SavingmodeldetailApi(account_name: $account_name, application: $application, cloud: $cloud, company_name: $company_name, environment: $environment, month: $month) {
    account_name
    actual_savings
    application
    environment
    potential_savings
    pricing_model
    spend
  }
}
`;

const FILTER_SAVING_MODEL_DASHBOARD = gql`query MyQuery($account_name: String!,$application: String!,$cloud: String!,$environment: String!,$month: String!,$company_name: String!, $db: String!,$infra: String!, $os: String!, $service: String!) {
  newfunctionquery6(account_name: $account_name, application: $application, cloud: $cloud, company_name: $company_name, db: $db, environment: $environment, infra: $infra, month: $month, os: $os, service: $service) {
    account_names
    applications
    environments
    actual_savings
    potential_savings
    spend
    pricing_model
  }
}`;

const FILTER_ASSET_SPEND_DASHBOARD = gql`query MyQuery($account_name: String!,$application: String!,$cloud: String!,$environment: String!,$month: String!,$company_name: String!, $db: String!,$infra: String!, $os: String!, $service: String!) {
  newfunctionquery(account_name: $account_name, application: $application, cloud: $cloud, company_name: ,$company_name, db: $db, environment: $environment, infra: $infra, month: $month, os: $os, service: $service) {
    account_names
    applications
    environments
    all_cloud
    count
    reportmonth
    services
    dbaas
    operating_system
    infras
    spend
  }
}`;

const ASSET_SUMMARY_DASHBOARD = gql`query MyQuery($account_name: String!,$application: String!,$cloud: String!,$environment: String!,$month: String!,$company_name: String!, $service: String!) {
  quickglancetable(account_name: $account_name, application: $application, cloud: $cloud, company_name: ,$company_name, environment: $environment, month: $month, service: $service) {
    asset_type
    core
    count
    ram
    storage
  }
}`;

const PROJECTED_SPEND = gql`query MyQuery($account: String!,$month: String!,$company_name: String!) {
  newfunctionquery8(account_name: $account, company_name: $company_name, month: $month) {
    account_names
    projected_spend
    reportmonth
  }
}`;

export { ENVIRONMENT_LIST, APPLICATIONS_LIST, ACCOUNT_LIST, SELECTED_ENVIRONMENT_LIST, SELECTED_APPLICATION_LIST, SELECTED_ACCOUNT_LIST, SERVICES_LIST, OS_LIST, INFRA_LIST, OS_SELECTED_LIST, INFRA_SELECTED_LIST, ASSET_AND_SPEND_LIST, SUMMARY_DASHBOARD, UNTAGGEDRESOURCES_DASHBOARD, TOTAL_SPEND_TRAND_DASHBOARD, CHART_MONTH_SPEND_DASHBOARD, ALL_SAVING_MODEL_DASHBOARD, APPLICATION_CHART_SPEND_DASHBOARD, FILTER_SAVING_MODEL_DASHBOARD, SERVICES_SELECTED_LIST, DB_LIST, DB_SELECTED_LIST, FILTER_ASSET_SPEND_DASHBOARD, ASSET_SUMMARY_DASHBOARD, CREDIT_CHART, PROJECTED_SPEND };
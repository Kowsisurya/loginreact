import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SignedUpCustomer from './components/SignedUpCustomer';
import StepperData from './components/StepperData';
import AccountOnboarding from './components/AccountOnboarding';
import Chart from './components/Chart';
import War from './components/War';
import Footer from './components/Footer';
import AdminPanel from './components/admin/Index';
import BasicCard from './components/Card';
import Signup from './components/Signup';
import Signin from './components/Signin';
import SignedUpCustomerGroup from './components/SignedUpCustomerGroup';
import Consolidated from './components/Consolidated';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import AdminActions from './components/AdminActions';
import UserManagement from './components/UserMng';
import RoleMng from './components/RoleMng';
import AccountOffering from './components/Accountoffering';
import AllAWS from './components/All-aws';
import AllAZure from './components/All-azure';
import ForgotPassword from './components/ForgotPassword';
import CostimizeTab from './components/costimize/costimizeTab';
// import CostimizeAssestsTab from './components/costimize/costimizeAssetstab'; 

import "@fontsource/poppins";
import Form from "./components/redirect/Form";
import Table from "./components/redirect/Table";
import Profile from "./components/redirect/profile";


  
import Dashboardv2 from "./components/dashboard-v2/Dashboardv2";
import Header from "./components/header/Header";
// import Header from './components/Header';
import Signgroup from "./components/signup/Signgroup";

import { useDispatch, useSelector } from 'react-redux';


const router = [

  {
    path: "/",
    element: (
      <Signin />
    ),
  },
  {
    path: "signedup-customer",
    element: <SignedUpCustomer />,
  },
  {
    path: "signedup-customer-group",
    element: <SignedUpCustomerGroup />,
  },
  {
    path: "register-new-customer",
    element: <StepperData />,
  },
  {
    path: "account-onboarding",
    element: <AccountOnboarding />,
  },
  {
    path: "chart",
    element: <Chart />,
  },
  {
    path: "war",
    element: <War />,
  },
  {
    path: "admin",
    element: <AdminPanel />,
  },
  {
    path: "card",
    element: <BasicCard />,
  },
  {
    path: "consolidated-view",
    element: <Consolidated />,
  },
  {
    path: "admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "admin-actions",
    element: <AdminActions />,
  },
  {
    path: "user-mng",
    element: <UserManagement />,
  },
  {
    path: "role-mng",
    element: <RoleMng />,
  },
  {
    path: "account-offering",
    element: <AccountOffering />,
  },
  {
    path: "admin-user-mng",
    element: <UserManagement />,
  },
  {
    path: "all-aws",
    element: <AllAWS />,
  },
  {
    path: "all-azure",
    element: <AllAZure />,
  },
  {
    path: "all-azure",
    element: <Consolidated />,
  },
  {
    path: "forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "costimizeAssests",
    element: <CostimizeTab />,
  },
  {
    path: "costimize_dashboard",
    element: <Dashboardv2 />,
  }
];

function App() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            {/* <Route path="/" element={<profile />} /> */}

            <Route path="/" element={<Signgroup page_type='signin' />} />
            <Route path="/" element={<Signgroup page_type='signup' />} />
            <Route path="/Form" element={<Form/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/Table" element={<Table/>}/>
            
              


            

            {userInfo.first_name && (
              router.map(val =>
                <Route
                  path={val.path}
                  key={val.path}
                  element={val.element}
                />
              )
            )}
            <Route path="*" element={<Navigate replace to="/signin" />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState, Fragment } from "react";
import Form from "./Form";
import Table from "./Table";
import file from "./file.css";

// import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';


function Profile() {

  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    profile: "",
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { name: "", email: "", profile: "" };
      setFormObject(isEmpty);
    }
  };
  const navigate = useNavigate();
  const onAddClick = () => {

    navigate("/form", { state: { onValChange: onValChange, formObject: formObject, onFormSubmit: onFormSubmit } })
  }
  return (


    <>
    <div className="addbtn">
      <button className="btn btn-info col px-md-5 add"onClick = {() => navigate('/form')}> Add</button></div>
      <div className="mt-5">
        <Table tableData={tableData} />
      </div>

    </>
    

  );
}
export default Profile; 

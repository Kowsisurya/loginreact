import React, { useState } from "react";
// function Form() {
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "./profile";
import file from "./file.css";

import { Container } from 'react-bootstrap'
function Form(){

  const [text,settext] = useState();  
  const [text1,settext1] = useState();  
  const [text2,settext2] = useState();  
  const [error,setError]=useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [profileError, setProfileError] = useState('');

  const doc =() =>{     
    var myName = document.getElementById("myName").value
    console.log(myName);
    settext(myName)

    


  }

  const mail =() =>{     
    var myEmail = document.getElementById("myEmail").value
    console.log(myEmail);
    settext1(myEmail)
  }
  const model =() =>{     
    var profile = document.getElementById("profile").value
    console.log(profile);
    settext2(profile)
  }
  const result =(e) =>{  
   
    e.preventDefault() 
    var output={'Name':text,'email':text1,'profile':text2}
  
    console.log(output)

    if(text.length ===0 || text === "undefined"){
      setError(true);
      return;
    } 
    else{
      setError(false);
      
    }  
    //console.log('email:',text1)
    //console.log('profile:',text2)
  }
  let navigate = useNavigate() 
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  //   if (event.target.value.length === 0) {
  //     setNameError('Please enter your name');
  //   } else {
  //     setNameError('');
  //   }
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (name.length === 0) {
  //     setNameError('Please enter your name');
  //   } else {
  //     // Handle form submission
  //   }
  // };
  const validateForm = () => {
    let isValid = true;
  
    if (!name) {
      setNameError('Please enter your name');
      isValid = false;
    } else {
      setNameError('');
    }
  
    if (!email) {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    if (!profile) {
      setProfileError('Please enter your profile');
      isValid = false;
    } else {
      setProfileError('');
    }
  
    return isValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission
    }
  };
  





     
    return (
      <Container fluid mw="50">
      <div class="container col-md-auto border bg-light  ">
      <div class="row justify-content-md-center form">
      
      <form onSubmit={handleSubmit}>

      <div className="row mb-4">
        <div className="mb-3">Name
          <input
            type="text"
            className="form-control"
            id="myName"
            placeholder="Name"
            // onChange={onValChange}
            // value={formObject.name}
            name="myName"
            onClick={doc}
            required="required"
            value={name}
            onChange={(e) => setName(e.target.value)}
            //onChange={handleNameChange}
    
          />
        </div>

        <br />
        <div className="mb-3">Email
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            id="myEmail"
            // onChange={onValChange}
            // value={formObject.email}
            name="myEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            onClick={mail}
            required="required"
          />
        </div>
        <div className="mb-3">Profile model
          <input
            type="text"
            className="form-control"
            placeholder="Profile"
            id="profile"
            // onChange={onValChange}
            // value={formObject.profile}
            name="profile"
            onClick={model}
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            required="required"
          />
        </div>
        <div className="d-grid d-flex">
          <input
            type="submit"
            //onClick={onFormSubmit}
            className="btn btn-success"
            onClick={result}
          />
       
        <button type="button" class="btn  btn-secondary back" onClick={() => navigate(-1)}>Back</button>
        </div>
              { nameError && <span style={{ color: 'red' }}>{nameError}</span> }
              { emailError && <span style={{ color: 'red' }}>{emailError}</span> }
              { profileError && <span style={{ color: 'red' }}>{profileError}</span> }
                
        
          
      </div>
      </form>
      </div>
      </div>
      </Container>

      
      
    );
    
  }
  export default Form;

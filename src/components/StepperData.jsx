import React, { Component } from 'react';
import Stepper from 'react-stepper-horizontal';
import StepperAdminUserForm from './StepperAdminUserForm';
import StepperCompanyInfoForm from './StepperCompanyInfoForm';
import StepperProfileInfoForm from './StepperProfileInfoForm';
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import StepperCustomerOffering from './StepperCustomerOffering';
import Alert from '@mui/material/Alert';
import { connect } from 'react-redux';
import { profileInfoMethod } from './slice/userSlice';
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

class StepperData extends Component {
  constructor(props) {
    super(props);
    let steps;
    if (props.userType === 'Admin') {
      steps = [{
        title: 'Profile information',
        href: 'http://example1.com',
        onClick: (e) => {
        },
        className: "themeBackgroundColor"
      },
      {
        title: 'Offering',
        href: 'http://example3.com',
        onClick: (e) => {
        }
      }
      ]
    } else {
      // steps = [{
      //   title: 'Profile information',
      //   href: 'http://example1.com',
      //   onClick: (e) => {
      //     e.preventDefault()
      //   },
      //     className: "themeBackgroundColor"
      //   }, {
      //     title: 'Company Info',
      //     href: 'http://example2.com',
      //     onClick: (e) => {
      //       e.preventDefault()
      //     }
      //   }, {
      //     title:'Master user',
      //     href: 'http://example3.com',
      //     onClick: (e) => {
      //       e.preventDefault()
      //     }
      //   },
      //   {
      //     title: 'Customer Offering',
      //     href: 'http://example3.com',
      //     onClick: (e) => {
      //       e.preventDefault()
      //     }
      //   }
      // ]
      steps = [{
        title: 'Profile information',
        href: 'http://example1.com',
        onClick: (e) => {
          e.preventDefault()
        },
          className: "themeBackgroundColor"
        }, {
          title: 'Company Info',
          href: 'http://example2.com',
          onClick: (e) => {
            e.preventDefault()
          }
        }, 
        {
          title: 'Customer Offering',
          href: 'http://example3.com',
          onClick: (e) => {
            e.preventDefault()
          }
        }
      ]
    }

    this.state = {
      steps,
      currentStep: 0,
      formError: false,
      openAlert: false
    };
    this.ref = React.createRef();
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }

  onClickNext() {
    this.ref.current.click();
  }

  onClickBack() {
    const { currentStep } = this.state;
    // this.props.navigate(-1);
    if (currentStep === 0) {
      return <BackButton />;
      
    };
    if (this.props.userType === 'Admin') {
      this.setState(prevState => ({
        ...prevState,
        currentStep: 0,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        currentStep: prevState.currentStep - 1,
      }));
    }
  }

  setCloseAsset = () => {
    this.setState({ openAlert: false });
  }

  getNextStepper = (error, stage) => {
    const { currentStep } = this.state;
    if (stage === 3 && !error) {
      this.setState({ openAlert: true });
    }
    if (currentStep === 3 || error) return;
    
    if (this.props.userType === 'Admin') { 
      this.setState(prevState => ({
        ...prevState,
        currentStep: 3,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        currentStep: prevState.currentStep + 1,
      }));
    }
  }

  // getContent(currentStep) {
  //   if (!currentStep)
  //     return <StepperProfileInfoForm ref={this.ref} getNextStepper={this.getNextStepper}/>
  //   else if (currentStep === 1)
  //     return <StepperCompanyInfoForm ref={this.ref} getNextStepper={this.getNextStepper} />
  //   else if (currentStep === 2)
  //     return <StepperAdminUserForm ref={this.ref} getNextStepper={this.getNextStepper} />
  //   else
  //     return <StepperCustomerOffering ref={this.ref} getNextStepper={this.getNextStepper} />;
  // }

  getContent(currentStep) {
    if (!currentStep)
      return <StepperProfileInfoForm ref={this.ref} getNextStepper={this.getNextStepper}/>
    else if (currentStep === 1)
      return <StepperCompanyInfoForm ref={this.ref} getNextStepper={this.getNextStepper} />
    else
      return <StepperCustomerOffering ref={this.ref} getNextStepper={this.getNextStepper} />;
  }

  render() {
    const { steps, currentStep, openAlert } = this.state;

    return (
      <MDBContainer>
        <div className='StepperData'>
          {openAlert ? <Alert onClose={() => this.setCloseAsset(false)} severity="success" > Company is onboarded Successfully!</Alert>: null}
          <div className="mb-4 stepper-container">
            <Stepper steps={ steps } activeStep={ currentStep } className="themeBackgroundColor"/>
          </div>
          {this.getContent(currentStep)}
          <div className='actions'>
            {
              currentStep !== 0 &&
              <MDBBtn onClick={ this.onClickBack } className='themeBackgroundColor'>Back</MDBBtn>  
            }
            
            <MDBBtn className='themeBackgroundColor' onClick={() => this.onClickNext(currentStep)}>{currentStep === 2 || currentStep > 2 ? (this.props.onboardAction==='update' ? "Update" :'Register') : "Next"}</MDBBtn>
          </div>
          
          
        </div>
      </MDBContainer>
    );
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps);
  return {
    profileInfoMethod: (data) => dispatch(profileInfoMethod()),
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.user.userType,
    onboardAction: state.user.onboardAction,
    profileInfo: state.user.profileInfo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepperData);
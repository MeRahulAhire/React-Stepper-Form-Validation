import React, { Component } from 'react'
import UserDetail from './userDetail'
import Credential from './credential'
import ProfileDetail from './profileDetail'
import CollegeDetail from './collegeDetail'
import blankUser from '../assets/blank_user.webp'
import phoneIcon from '../assets/phone_icon.png'
import ReviewForm from './reviewForm'


export class Registration extends Component {
  
      state = {
      step: 3,
      CollegeName: '',
      Branch: '',
      YearOfAdmission: '',
  
      FirstName: '',
      LastName: '',
      Gender: '',
      DOB:'',
  
      Email:'',
      CountryFlag:phoneIcon,
      CountryCode:'',
      Phone:'',
      Username:'',
      Password:'',
      
      ProfilePic:blankUser,
      ImageLoc:'',
      Description:''
    };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  CollegeNameHandler = (e) => {
    this.setState({CollegeName: this.state.location})
    const app = this;
		function initAutocomplete() {
			var input = document.getElementById('pac-input');
			var searchBox = new window.google.maps.places.SearchBox(input);
			searchBox.addListener('places_changed', function() {
				app.setState({ CollegeName: document.getElementById('pac-input').value });
			});
		}
		initAutocomplete();

  }
  countryFlagHandler = () =>{
			const select = document.querySelector('#country');
			this.setState({
				CountryFlag: `https://flagpedia.net/data/flags/h80/${select.selectedOptions[0].dataset.countrycode.toLowerCase()}.webp`
			});
  }
  profileImageHandler = (e) => {
    this.setState({ImageLoc: e.target.value})
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({ProfilePic: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  descriptionHandler = e => {
    this.setState({Description : e.target.value})
  }
  render() {
        const { step } = this.state;
        const {  Branch, CollegeName, YearOfAdmission, FirstName, LastName, Gender, DOB, Email, Phone, CountryFlag, CountryCode, Username, Password, ProfilePic, ImageLoc, Description } = this.state;
        const values = { Branch, CollegeName, YearOfAdmission, FirstName, LastName, Gender, DOB, Email, Phone, CountryFlag, CountryCode, Username, Password, ProfilePic, ImageLoc, Description };
        switch(step){
          case 1:
            return(
              <CollegeDetail
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              CollegeNameHandler={this.CollegeNameHandler}
              values={values}
                />
            )
          case 2:
            return(
              <UserDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
                />
            )  
            case 3:
              return(
                <Credential
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                countryFlagHandler={this.countryFlagHandler}
                values={values}
                />
                
              )
              case 4:
            return(
              <ProfileDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              profileImageHandler={this.profileImageHandler}
              descriptionHandler={this.descriptionHandler}
              values={values}
              />
            )
              case 5:
              return(
                  <ReviewForm
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  values={values}
              />
              )   
            // case 6: return(
            //   <h1 style={{backgroundColor:'black', color:'white', height:'100vh'}}>Thanks for Submitting but we are under Contruction</h1>
            // )
            default:
            return(
              <CollegeDetail
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
                />
            )

        }
        
  }
}

export default Registration
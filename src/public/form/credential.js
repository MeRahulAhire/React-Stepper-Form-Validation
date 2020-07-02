import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import CountrySelect from './lib-component/countrySelect';
import './styles/credential.css';
export class credential extends Component {
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	continue = (e) => {
		const email = document.getElementById('email')
		const country = document.getElementById('country')
		const tel = document.getElementById('tel')
		const username = document.getElementById('username')
		const password = document.getElementById('password')
		const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		const emailError = document.getElementById('email-error')
		// const usernameRegex = /^[a-z0-9_-]{3,15}$/
		const strongPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/
		if(email.value === ''){
			email.style.boxShadow = '0px 0px 15px 0px red'
		}
		else if(!emailRegex.test(email.value)){
			emailError.style.display = 'block'
		} 
		
		if(country.value === ''){
			country.style.boxShadow = '0px 0px 15px 0px red'
		}
		if(tel.value === ''){
			tel.style.boxShadow = '0px 0px 15px 0px red'
		}
		if(username.value === ''){
			username.style.boxShadow = '0px 0px 15px 0px red'
		}
		if(password.value === ''){
			password.style.boxShadow = '0px 0px 15px 0px red'
		}
		else if (!strongPassword.test(password.value)){
			document.getElementById('password-error').style.display = 'block'
		}
		else{
			e.preventDefault();
			this.props.nextStep();
		}
	};

	

	render() {
		const { values, handleChange, countryFlagHandler } = this.props;
		const credentialErrorReset = () =>{
			const email = document.getElementById('email')
		const country = document.getElementById('country')
		const tel = document.getElementById('tel')
		const username = document.getElementById('username')
		const password = document.getElementById('password')
		const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		const emailError = document.getElementById('email-error')
		// const usernameRegex = /^[a-z0-9_-]{3,15}$/
		const strongPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/
		if(email.value !== ''){
			email.style.boxShadow = ''
		}
		else if(emailRegex.test(email.value)){
			emailError.style.display = 'none'
		} 
		
		if(country.value !== ''){
			country.style.boxShadow = ''
		}
		if(tel.value !== ''){
			tel.style.boxShadow = ''
		}
		if(username.value !== ''){
			username.style.boxShadow = ''
		}
		if(password.value !== ''){
			password.style.boxShadow = ''
		}
		else if (strongPassword.test(password.value)){
			document.getElementById('password-error').style.display = 'none'
		}
		}
		return (
			<div>
				<Topbar />
				<div className="signup-bg">
					<div className="signup-container" onChange={credentialErrorReset} >
						<button onClick={this.back} className="col-form-prev">
							<i className="fa fa-chevron-left" />
						</button>
						<div className="user-detail email">
							Email:
							<div id="email-error">Enter Valid Email Address</div>
							<input
								type="email"
								id="email"
								placeholder="your-email@example.com"
								onChange={handleChange('Email')}
								defaultValue={values.Email}
							/>
						</div>
						<div className="phone">
							Phone:
							<CountrySelect
								values={values}
								handleChange={handleChange}
								countryFlagHandler={countryFlagHandler}
							/>
						</div>
						<div className="user-detail username">
							Username:
							
							<input
								type="text"
								placeholder="Create your Unique username"
								id="username"
								onChange={handleChange('Username')}
								defaultValue={values.Username}
							/>
						</div>
						<div className="user-detail password">
							Password:
							<div id="password-error">Enter strong password</div>
							<input
								type="password"
								id="password"
								placeholder="Create password for CFM"
								onChange={handleChange('Password')}
								defaultValue={values.Password}
							/>
						</div>
						<div className="btn-next">
							<button onClick={this.continue} className="col-form-next">
								<i className="fa fa-chevron-right" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default credential;

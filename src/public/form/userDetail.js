import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import './styles/collegeDetail.css';
export class userDetail extends Component {
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	continue = (e) => {
		const FirstName = document.getElementById('firstName');
		const LastName = document.getElementById('LastName');
		const gender = document.getElementById('gender');
		const birth = document.getElementById('birth');

		if (FirstName.value === '') {
			FirstName.style.boxShadow = '0px 0px 15px 0px red';
		}
		if (LastName.value === '') {
			LastName.style.boxShadow = '0px 0px 15px 0px red';
		}
		if (gender.value === '') {
			gender.style.boxShadow = '0px 0px 15px 0px red';
		} else if (gender.value !== 'Male' && gender.value !== 'Female') {
			alert('enter only provided valid gender option');
		}

		if (birth.value === '') {
			birth.style.boxShadow = '0px 0px 15px 0px red';
		} else {
			e.preventDefault();
			this.props.nextStep();
		}
	};

	render() {
		const { values, handleChange } = this.props;
		const userErrorReset = () => {
			const FirstName = document.getElementById('firstName');
			const LastName = document.getElementById('LastName');
			const gender = document.getElementById('gender');
			const birth = document.getElementById('birth');

			if (FirstName.value !== '') {
				FirstName.style.boxShadow = '';
			}
			if (LastName.value !== '') {
				LastName.style.boxShadow = '';
			}
			if (gender.value !== '') {
				gender.style.boxShadow = '';
			}

			if (birth.value !== '') {
				birth.style.boxShadow = '';
			}
		};
		return (
			<div>
				<Topbar />
				<div className="signup-bg col">
					<div className="signup-container" onChange={userErrorReset} >
						<button onClick={this.back} className="col-form-prev">
							<i className="fa fa-chevron-left" />
						</button>
						<div className="user-detail firstName">
							First Name:
							<input
								style={{ textTransform: 'capitalize' }}
								type="text"
								id="firstName"
								placeholder="Enter your First Name"
								onChange={handleChange('FirstName')}
								defaultValue={values.FirstName}
							/>
						</div>
						<div className="user-detail lastName">
							Last Name:
							<input
								style={{ textTransform: 'capitalize' }}
								type="text"
								id="LastName"
								placeholder="Enter your Last Name"
								onChange={handleChange('LastName')}
								defaultValue={values.LastName}
							/>
						</div>
						<div className="user-detail gender">
							Gender:
							<select
								onChange={handleChange('Gender')}
								defaultValue={values.Gender}
								className="gender-select"
								name=""
								id="gender"
							>
								<option value="" hidden>
									Select your Gender
								</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div className="user-detail dateOfBirth">
							Date of Birth:
							<input
								className="dob"
								type="date"
								id="birth"
								placeholder="When did you Born?"
								onChange={handleChange('DOB')}
								defaultValue={values.DOB}
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

export default userDetail;

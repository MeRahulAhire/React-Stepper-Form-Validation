import React, { Component } from 'react';
import './styles/reviewForm.css';
import Topbar from './lib-component/topbar';

export class reviewForm extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const {
			values: {
				CollegeName,
				Branch,
				YearOfAdmission,

				FirstName,
				LastName,
				Gender,
				DOB,

				Email,
				CountryCode,
				Phone,
				Username,

				ProfilePic,
				Description
			}
		} = this.props;
		const phoneNumber = CountryCode + Phone
		return (
			<div className="page">
				<Topbar />
				<div className="review-page">
					<div className="review-check-container">
						<div className="review-banner">Review Your Details</div>
						<div className="details">
							<div className="image-review-container">
								<div className="img-holder">
									<img src={ProfilePic} alt="" className="review-profile-img" />
								</div>
							</div>
							<div className="personal-detail">
								<div className="value-container">
									<span>First Name</span>
									<div className="value-holder">
										{FirstName}
									</div>
								</div>
								<div className="value-container">
									<span>Last Name</span>
									<div className="value-holder">
										{LastName}
									</div>
								</div>
							</div>
							<div className="personal-detail">
								<div className="value-container">
									<span>Gender</span>
									<div className="value-holder">
										{Gender}
									</div>
								</div>
								<div className="value-container">
									<span>Date of Birth</span>
									<div className="value-holder">
										{DOB}
									</div>
								</div>
							</div>
							<div className="personal-detail-long">
								<div className="textarea-container">
									<span>Your College</span>
									<div className="text-holder">
										{CollegeName}
									</div>
								</div>
							</div>
							<div className="personal-detail">
								<div className="value-container">
									<span>Branch</span>
									<div className="value-holder">
										{Branch}
									</div>
								</div>
								<div className="value-container">
									<span>Year of Admission</span>
									<div className="value-holder">
										{YearOfAdmission}
									</div>
								</div>
							</div>
							<div className="personal-detail-long">
								<div className="textarea-container">
									<span>Email</span>
									<div className="text-holder">
										{Email}
									</div>
								</div>
							</div>
							<div className="personal-detail">
								<div className="value-container">
									<span>Phone Number</span>
									<div className="value-holder">
										{phoneNumber}
									</div>
								</div>
								<div className="value-container">
									<span>Username</span>
									<div className="value-holder">
										{Username}
									</div>
								</div>
							</div>
							<div className="personal-detail-long">
								<div className="textarea-container">
									<span>Your Description</span>
									<div className="text-holder">
										{Description}
									</div>
								</div>
							</div>
							{/* <div className="seperater"></div> */}
							<hr style={{marginTop:'1rem'}} />
							<p className="message">
								For your personal safety we haven't displayed your password here. Make Sure you have
								choosen a appropriate, strong and a rememberable Password
							</p><hr/>
							<p className="message signup">
								By Signing up, you naturally agree to privacy policies and t&c
							</p>
						</div>
						<div className="review-action">
							<button onClick={this.back} className="goBack">
								Go Back
							</button>
							<button className="reg-submit">
								Get Onboard
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default reviewForm;

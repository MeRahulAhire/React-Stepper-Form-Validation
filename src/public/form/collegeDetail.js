import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import './styles/collegeDetail.css';
export class collegeDetail extends Component {
	continue = (e) => {
		const collegeInput = document.getElementById('college-input');
		const branch = document.getElementById('branch');
		const yoa = document.getElementById('yoa');
		const yoaError = document.getElementById('yoa-error');

		if (collegeInput.value === '') {
			collegeInput.style.boxShadow = '0px 0px 15px 0px red';
		}
		if (branch.value === '') {
			branch.style.boxShadow = '0px 0px 15px 0px red';
		}
		if (yoa.value === '') {
			yoa.style.boxShadow = '0px 0px 15px 0px red';
		} 
		else if(isNaN(yoa.value)){
			yoaError.style.display = 'block'
			yoaError.innerHTML = 'Please enter only valid number'
		}
		else if (yoa.value < 2015){
			yoaError.style.display = 'block'
			yoaError.innerHTML = 'Sorry you are too old'
		}
		else if (yoa.value > new Date().getFullYear()){
			yoaError.style.display = 'block'
			yoaError.innerHTML = 'enter current year'
		}
		else {
			e.preventDefault();
			this.props.nextStep();
		}
	};
	render() {
		const colResetError = () => {
			const collegeInput = document.getElementById('college-input');
			const branch = document.getElementById('branch');
			const yoa = document.getElementById('yoa');
			const yoaError = document.getElementById('yoa-error');

			if (collegeInput.value !== '') {
				collegeInput.style.boxShadow = '';
			}
			if (branch.value !== '') {
				branch.style.boxShadow = '';
			}
			if (yoa.value !== '') {
				yoa.style.boxShadow = '';
			}
			 if (yoa.value >= 2015){
				yoaError.style.display = 'none'
				
			}
			 if (yoa.value <= new Date().getFullYear()){
				yoaError.style.display = 'none'
				
			}

		};

		const { values, handleChange } = this.props;

		return (
			<div>
				<Topbar />
				<div className="signup-bg col">
					<div className="signup-container" onChange={colResetError} >
						<div className="college-heading">Register With CFM</div>
						<div className="college-search ">
							Select Your College:
							<div className="user-detail">
								<input id="college-input" placeholder="search your college" />
							</div>
						</div>
						<div className="user-detail branch">
							Type your Branch:
							<input
								type="text"
								id="branch"
								placeholder="CS,Mech,Civil,BCA,Medical,etc"
								onChange={handleChange('Branch')}
								defaultValue={values.Branch}
							/>
						</div>
						<div className="user-detail year-of-admission">
							Year of Admission?:
							<div id="yoa-error"></div>
							<input
								type="number"
								id="yoa"
								placeholder="2017,2018 or 2020?"
								onChange={handleChange('YearOfAdmission')}
								defaultValue={values.YearOfAdmission}
							/>
						</div>
						<div className="btn-next">
							<button className="col-form-next" onClick={this.continue}>
								<i className="fa fa-chevron-right" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default collegeDetail;

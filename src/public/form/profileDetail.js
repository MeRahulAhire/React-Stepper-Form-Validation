import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import './styles/profileDetail.css';

export class profileDetail extends Component {
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	continue = (e) => {
		const inpFile = document.getElementById('inpFile')
		const imgRegex = /([/|.|\w|\s])*\.(?:jpg|gif|png|bmp)/
		if(inpFile.value === ''){
			alert('add profile pic')
		}
		else if(!imgRegex.test(inpFile.value)){
			alert('only select images of valid format')
		}
		else{
			e.preventDefault();
			this.props.nextStep();
		}
		
	};

	render() {
		const { values, profileImageHandler, descriptionHandler } = this.props;
		return (
			<div>
				<Topbar />
				<div className="signup-bg">
					<div className="signup-container profile-detail">
						<button onClick={this.back} className="col-form-prev">
							<i className="fa fa-chevron-left" />
						</button>
						<div className="profile-pic">
							Add your Profile Picture:
							<div className="add-picture">
								<div className="image-preview">
									<img
										src={values.ProfilePic}
										alt=""
										className="image-preview__image"
										id="profileImg"
									/>
								</div>
								<input
									type="file"
									name="inpFile"
									id="inpFile"
									accept="image/*"
									onChange={profileImageHandler}
								/>
								<div className="label-holder">
									<label className="image-upload" htmlFor="inpFile">
										<i className="material-icons">add_photo_alternate</i>
										Choose your Photo
									</label>
								</div>
							</div>
						</div>
						<div className="description">
							Describe Yourself <br />
							<textarea
								maxLength="200"
								placeholder="Descibe yourself the best as possible under 200 character"
								onChange={descriptionHandler}
								defaultValue={values.Description}
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

export default profileDetail;

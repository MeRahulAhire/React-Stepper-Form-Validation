export const collegeDetailValidation = (e) => {
    const pacInput = document.getElementById('pac-input');
		const branch = document.getElementById('branch');
		const yoa = document.getElementById('yoa');
		const yoaError = document.getElementById('yoa-error');
		const collegeFormatErr = document.getElementById('college-format');
		const commaRegex = /[,]/;
		if (pacInput.value === '' && branch.value === '' && yoa.value === '') {
			pacInput.style.boxShadow = '0px 0px 15px 0px red';
			branch.style.boxShadow = '0px 0px 15px 0px red';
			yoa.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} else if (pacInput.value === '') {
			pacInput.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} else if (!commaRegex.test(pacInput.value)) {
			collegeFormatErr.style.display = 'block';
			navigator.vibrate(100);
		} else if (branch.value === '') {
			branch.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} else if (yoa.value === '') {
			yoa.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} else if (yoa.value < 2015) {
			yoaError.style.display = 'block';
			navigator.vibrate(100);
		} else if (yoa.value > new Date().getFullYear()) {
			yoaError.style.display = 'block';
			yoaError.innerHTML = 'Please enter current valid year';
			navigator.vibrate(100);
		} else if (isNaN(yoa.value)) {
			yoaError.style.display = 'block';
			yoaError.innerHTML = 'Please only enter numbers';
		} 
		else {
			e.preventDefault();
			this.props.nextStep();
		}
}

export const colErrorReset = () => {
	const pacInput = document.getElementById('pac-input');
	const branch = document.getElementById('branch');
	const yoa = document.getElementById('yoa');
	const yoaError = document.getElementById('yoa-error');
	const collegeFormatErr = document.getElementById('college-format');
	const commaRegex = /,/;
	if (pacInput.value !== '') {
		pacInput.style.boxShadow = '';
	} else if (commaRegex.test(pacInput.value)) {
		collegeFormatErr.style.display = 'none';
	}
	if (branch.value !== '') {
		branch.style.boxShadow = '';
	}
	if (yoa.value !== '') {
		yoa.style.boxShadow = '';
	} 
	 if (yoa.value >= 2015) {
		yoaError.style.display = 'none';
	}  if (yoa.value <= new Date().getFullYear()) {
		yoaError.style.display = 'none';
	}
};
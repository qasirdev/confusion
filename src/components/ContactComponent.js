import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

function Contact(props) {

	const [contactForm, setContactFrom] = useState({
		firstname: '',
		lastname: '',
		telnum: '',
		email: '',
		agree: false,
		contactType: 'Tel.',
		message: '',
		touched: {
			firstname: false,
			lastname: false,
			telnum: false,
			email: false
		}
	});

	function validate(firstname, lastname, telnum, email) {
		const errors = {
			firstname: '',
			lastname: '',
			telnum: '',
			email: ''
		};
		if(contactForm.touched.firstname && firstname.length < 3) {
			errors.firstname = 'First Name should be >= 3 characters';
		} else if (contactForm.touched.firstname && firstname.length > 10) {
			errors.firstname = 'First Name should be <= 10 characters';
		}

		if(contactForm.touched.lastname && firstname.lastname < 3) {
			errors.lastname = 'Last Name should be >= 3 characters';
		} else if (contactForm.touched.lastname && lastname.length > 10) {
			errors.lastname = 'Last Name should be <= 10 characters';
		}

		const reg = /^\d+$/;
		if(contactForm.touched.telnum && !reg.test(telnum)) {
			errors.lastname = 'Last Name should be >= 3 characters';
		}
		if(contactForm.touched.email && email.split('').filter(x => x === '@').length !== 1) {
			errors.email = 'Email should contain a @';
		}

		return errors;
	}
	function handleBlur(field) {
		// setContactFrom({
		// 	...contactForm.touched[field] , [field]: true
		// });
	};
	function handleInputChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		setContactFrom({
			...contactForm , [name]: value
		});
	};

	function handleSubmit(e) {
		console.log('Current State is: ' + JSON.stringify(contactForm));
		alert('Current state is: ' + JSON.stringify(contactForm));
		e.preventDefault();
	};

	const errors = validate(contactForm.firstname, contactForm.lastname, contactForm.telnum, contactForm.email);

	return (
		<div className="container">
			<div className="row row-content">
				<div className="col-12">
				<h3>Location Information</h3>
				</div>
				<div className="col-12 col-sm-4 offset-sm-1">
					<h5>Our Address</h5>
					<address>
						121, Victoria Street<br />
						Hornchurch<br />
						LONDON<br />
						<i className="fa fa-phone"></i>: +44 27555555<br />
						<i className="fa fa-fax"></i>: +44 27555555<br />
						<i className="fa fa-envelope"></i>: <a href="mailto:confusion@dummy.net">confusion@dummy.net</a>
					</address>
				</div>
				<div className="col-12 col-sm-6 offset-sm-1">
					<h5>Map of our Location</h5>
				</div>
				<div className="col-12 col-sm-11 offset-sm-1">
					<div className="btn-group" role="group">
						<a role="button" className="btn btn-primary" href="tel:+44 27555555"><i className="fa fa-phone"></i> Call</a>
						<a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
						<a role="button" className="btn btn-success" href="mailto:confusion@dummy.net"><i className="fa fa-envelope-o"></i> Email</a>
					</div>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
						<h3>Send us your Feedback</h3>
				</div>
				<div className="col-12 col-md-9">
					<Form onSubmit={handleSubmit}>
						<FormGroup row>
							<Label htmlFor="firstname" md={2}>First Name</Label>
							<Col md={10}>
								<Input type="text" id="firstname" name="firstname"
									placeholder="First Name"
									value={contactForm.firstname}
									valid={errors.firstname === ''}
									invalid={errors.firstname !== ''}
									onBlur={handleBlur('firstname')}
									onChange={handleInputChange} />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="lastname" md={2}>Last Name</Label>
							<Col md={10}>
								<Input type="text" id="lastname" name="lastname"
									placeholder="Last Name"
									value={contactForm.lastname}
									valid={errors.lastname === ''}
									invalid={errors.lastname !== ''}
									onBlur={handleBlur('lastname')}
									onChange={handleInputChange} />
							</Col>                        
						</FormGroup>
						<FormGroup row>
						<Label htmlFor="telnum" md={2}>Contact Tel.</Label>
							<Col md={10}>
								<Input type="tel" id="telnum" name="telnum"
									placeholder="Tel. number"
									value={contactForm.telnum}
									valid={errors.telnum === ''}
									invalid={errors.telnum !== ''}
									onBlur={handleBlur('telnum')}
									onChange={handleInputChange} />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="email" md={2}>Email</Label>
							<Col md={10}>
								<Input type="email" id="email" name="email"
									placeholder="Email"
									value={contactForm.email}
									valid={errors.email === ''}
									invalid={errors.email !== ''}
									onBlur={handleBlur('email')}
									onChange={handleInputChange} />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{size: 6, offset: 2}}>
								<FormGroup check>
									<Label check>
									<Input type="checkbox"
											name="agree"
											checked={contactForm.agree}
											onChange={handleInputChange} />
										<strong>May we contact you?</strong>
									</Label>
								</FormGroup>
							</Col>
							<Col md={{size: 3, offset: 1}}>
								<Input type="select" name="contactType"
										value={contactForm.contactType}
										onChange={handleInputChange}>
									<option>Tel.</option>
									<option>Email</option>
								</Input>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="message" md={2}>Your Feedback</Label>
							<Col md={10}>
								<Input type="textarea" id="message" name="message"
									rows="12"
									value={contactForm.message}
									onChange={handleInputChange}></Input>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col md={{size: 10, offset: 2}}>
								<Button type="submit" color="primary">
									Send Feedback
								</Button>
							</Col>
						</FormGroup>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Contact;

import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavOpen: false
		};
	}
	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}
	render() {

		return (
			<>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick= {this.toggleNav} />
						<NavbarBrand className="mr-auto" href="\">
							<img src="assets/images/logo.png" height="30" width="41"
								alt="This is confusion." />
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fa-lg">
											Home
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/aboutus">
											<span className="fa fa-info fa-lg">About Us</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/menu">
											<span className="fa fa-list fa-lg"> Menu</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contactus">
											<span className="fa fa-address-card fa-lg"> Contact Us</span>
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>restaurants confusion</h1>
								<p>We take inspiration from the world besst cusine.</p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</>
		);
	}
}

export default Header;

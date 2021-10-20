import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {
	render() {
		return (
			<>
				<Navbar dark >
					<div className="container">
						<NavbarBrand href="\">This is confusion.</NavbarBrand>
					</div>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Ristorent confusion</h1>
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

import React, { useState, useEffect } from 'react';
import { CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Card, Breadcrumb, BreadcrumbItem} from "reactstrap"
import { Link	} from 'react-router-dom';

function Menu(props) {

	useEffect(() => {
		console.log("mount it");
		console.log(props);
	});

	function RenderMenuItem({dish, onClick}) {
		return(
			<Card>
				<Link to={`/menu/${dish.id}`} >
					<CardImg width="100%"  src={dish.image} alt={dish.name} />
					<CardImgOverlay>
						<CardTitle >{dish.name}</CardTitle>
					</CardImgOverlay>
				</Link>
			</Card>
		);
	}
	
	function RenderDish(dishId) {
		const dish = props.dishes.filter((dish)=> dish.id === dishId)[0];
		if(dish) {
			return(
				<Card>
					<CardImg width="100%"  src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle >{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			<div>This is empty</div>
		}
	}

	const menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-5 m-1">
				<RenderMenuItem dish={dish} />
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/home'>Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active >Menu</BreadcrumbItem>
				</Breadcrumb>
				<div className="row">
					<h3>Menu</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				{menu}
			</div>
			<div className="row">
				{RenderDish(props.selectedDish)}
			</div>
		</div>
	);
}

export default Menu;

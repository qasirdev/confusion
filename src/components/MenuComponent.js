import React, { useState, useEffect } from 'react';
import { CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Card} from "reactstrap"

function Menu(props) {

	useEffect(() => {
		console.log("mount it");
		console.log(props);
	});
	
	function renderDish(dishId) {
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
				<Card onClick={()=> props.onClick(dish.id)}>
					<CardImg width="100%"  src={dish.image} alt={dish.name} />
					<CardImgOverlay>
						<CardTitle >{dish.name}</CardTitle>
					</CardImgOverlay>
				</Card>
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">
				{menu}
			</div>
			<div className="row">
				{renderDish(props.selectedDish)}
			</div>
		</div>
	);
}

export default Menu;

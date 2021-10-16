import React, { useState } from 'react';
import { CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Card} from "reactstrap"

function Menu(props) {

	const [selectedDish, setSelectedDish] = useState(null);

	function onDishSelect(dish) {
		setSelectedDish(dish);
	};

	function renderDish(dish) {
		if(dish !== null) {
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
				<Card onClick={()=> onDishSelect(dish)}>
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
				{renderDish(selectedDish)}
			</div>
		</div>
	);
}

export default Menu;

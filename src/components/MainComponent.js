import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { useState } from 'react';
import Home from './HomeComponent';
import {Switch , Route, Redirect} from 'react-router-dom'
import Contact from './ContactComponent';

function Main() {

	const [restaurantRequest, setRestaurant] = useState({
    dishes: DISHES,
    comments: COMMENTS,
		leaders: LEADERS,
		promotions: PROMOTIONS
  });

	const { dishes, comments, leaders, promotions} = restaurantRequest;
	
	const HomePage = () => {
		return(
			<Home 
				dish={dishes.filter((dish) => dish.featured)[0]}
				promotion={promotions.filter((promo) => promo.featured)[0]}
				leader={leaders.filter((leader) => leader.featured)[0]}
			/>
		);
	}

	function DishWithId({match}) {
		return(
			<div>
				<h1>Name: {dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]['name']}</h1>
			</div>
		);
	}

  return (
    <div>
			<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
					<Route path="/menu/:dishId" component={DishWithId} />
					<Route path="/contactus" component={Contact} />
					<Redirect to="/home" />
				</Switch>
			<Footer />
    </div>
  );
}

export default Main;

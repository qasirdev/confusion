import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'
import { useState } from 'react';
import Home from './HomeComponent';
import {Switch , Route, Redirect} from 'react-router-dom'

function Main() {
  const [dishes, setDishes] = useState(DISHES);

	const HomePage = () => {
		return(
			<Home />
		);
	}
  return (
    <div>
			<Header />
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
					<Redirect to="/home" />
				</Switch>
			<Footer />
    </div>
  );
}

export default Main;

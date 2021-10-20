import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'
import { useState } from 'react';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish,setSelectedDish] = useState(null);

  function onDishSelect(dishId) {
    setSelectedDish(dishId);
	};

  return (
    <div>
			<Header />
      <Menu dishes= {dishes}
				selectedDish= {selectedDish}
				onClick={(dishId)=> onDishSelect(dishId)}
			/>
			<Footer />
    </div>
  );
}

export default Main;

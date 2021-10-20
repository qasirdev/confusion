import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import { useState } from 'react';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish,setSelectedDish] = useState(null);

  function onDishSelect(dishId) {
    setSelectedDish(dishId);
	};

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="\">This is confusion.</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes= {dishes}
				selectedDish= {selectedDish}
				onClick={(dishId)=> onDishSelect(dishId)}
			/>
    </div>
  );
}

export default Main;

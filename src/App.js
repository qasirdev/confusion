import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes'
import { useState } from 'react';

function App() {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="\">This is confusion.</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes= {dishes}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes'
import { useState } from 'react';

function App() {
  const state = {
    dishes: DISHES
  };
  // const [] = useState()
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="\">This is confusion.</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes= {state.dishes}/>
    </div>
  );
}

export default App;

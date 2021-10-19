import { Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { useState } from 'react';

function App() {
  // const [dishes, setDishes] = useState(DISHES);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;

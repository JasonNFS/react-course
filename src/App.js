import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <NavbarBrand href='/' > My React App</NavbarBrand>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;

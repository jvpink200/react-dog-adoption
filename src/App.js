import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import Dogcarousel from './components/CarouselComponent';
import BuyItems from './components/ThingsToBuyComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Aero Swift Adoption</NavbarBrand>
            <NavLink href="#home" color="faded" light>Home</NavLink>
          </div>
        </Navbar>
        <Dogcarousel />
        <BuyItems />
      </div>
    );
  }
}

export default App;

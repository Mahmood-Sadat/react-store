import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductList } from './components/ProductList';
import { Navbar } from './components/Navbar';
import { Default } from './components/Default';
import { Details } from './components/Details';
import { Cart } from './components/Cart';
import { Modal } from './components/Modal';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal></Modal>
    </React.Fragment>
    
  );
}

export default App;

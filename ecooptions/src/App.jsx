import React from 'react';
import './App.css'
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Bundle from './components/bundle/Bundle';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/Footer';

function App() {

  return (
    <Router>
      <Menu/>

      <Switch>
        <Route path='/about'>
          <About/>
        </Route>

        <Route path='/shop'>
          <Shop/>
        </Route>

        <Route path='/bundle'>
          <Bundle/>
        </Route>

        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App

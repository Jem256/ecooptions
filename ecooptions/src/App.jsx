import React from 'react';
import './App.css'
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact'
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/Footer';
import { useStateValue } from "./StateProvider";

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

        <Route path='/contact'>
          <Contact/>
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

import React from 'react';
import './App.css'
import Menu from './components/menu/Menu';
import About from './components/about/About';
// import Bundle from './components/bundle/Bundle'
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>

        <Route path='/about'>
          <About/>
        </Route>

        <Route path='/shop'>
          <Shop/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

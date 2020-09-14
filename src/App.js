import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import firstpage from '../src/components/Firstpage';
import secondpage from '../src/components/Secondpage';
import thirdpage from '../src/components/Thirdpage';
import fourthpage from '../src/components/Fourthpage';

class App extends Component{
  render(){ 
  return (
    <Router>
      <Switch>
      <Route exact path='/page1' component={firstpage}></Route>
      <Route exact path='/page2' component={secondpage}></Route>
      <Route exact path='/page3' component={thirdpage}></Route>
      <Route exact path='/page4' component={fourthpage}></Route>
      </Switch>
      </Router>
  );
}
}

export default App;

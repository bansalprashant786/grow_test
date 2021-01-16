import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomePage from './Home'
import StatePage from './State';

function Home(){
  return(
    <div>
      Home
    </div>
  )
}

function Stateroute(){
  return(
    <div>
      state
    </div>
  )
}


class App extends Component {
  state ={
    data: {},
  }
  componentDidMount(){
    fetch('https://api.covid19india.org/v4/min/data.min.json')
    .then(data => data.json())
    .then(data=> this.setState({data}));
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <HomePage {...props} data={this.state.data}  />} />
          <Route exact path='/state/:id' component={(props) => <StatePage data={this.state.data} {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;

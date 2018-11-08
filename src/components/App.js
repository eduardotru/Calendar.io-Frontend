import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Calendar from './Calendar';
import Friends from './Friends';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';
import Menu from './Menu';
import Nav from './Nav';
import NotFound from './NotFound'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      id: 1
    };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  login(id) {
    this.setState({
      loggedIn: true,
      id: id
    });
  }

  logout() {
    this.setState({
      loggedIn: false,
      id: this.state.id
    });
  }

  render() {
    if(this.state.loggedIn) {
      return (
        <div>
          <Menu performLogout={this.logout}/>
          <div className="container">
            <Switch>
              <Route exact path="/" render={props => <Calendar id={this.state.id} /> } />
              <Route path="/calendar" render={props => <Calendar id={this.state.id} /> } />
              <Route path="/profile" render={props => <Profile id={this.state.id} /> } />
              <Route path="/friends" render={props => <Friends id={this.state.id} /> } />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/" render={props => (
                <Home performLogin={this.login}/>
              )} />
              <Route path="/home" render={props => (
                <Home performLogin={this.login}/>
              )} />
              <Route path="/register" render={props => (
                <Register performLogin={this.login}/>
              )} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      );
    }
  }
}

export default App;

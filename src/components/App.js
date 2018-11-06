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
      id: 0
    };
    this.logout = this.logout.bind(this);
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
          <Menu />
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/profile" component={Profile} />
            <Route path="/friends" component={Friends} />
            <Route component={NotFound} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;

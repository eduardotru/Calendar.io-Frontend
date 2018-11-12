import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Calendar from './Calendar';
import Friends from './Friends';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';
import Menu from './Menu';
import Nav from './Nav';
import AddEvent from './AddEvent';
import FriendProfile from './FriendProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      id: 0
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
      let params = new URLSearchParams(window.location.search);

      return (
        <div>
          <Menu performLogout={this.logout}/>
          <div className="container">
            <Switch>
              <Route exact path="/" render={props => <Calendar id={this.state.id} /> } />
              <Route path="/calendar" render={props => <Calendar id={this.state.id} friendView={false}/> } />
              <Route path="/profile" render={props => <Profile id={this.state.id} /> } />
              <Route path="/friends" render={props => <Friends id={this.state.id} /> } />
              <Route path="/newEvent" render={props => <AddEvent id={this.state.id} /> } />
              <Route path="/friendProfile" render={props => <FriendProfile id={params.get("friendId")} />} />
              <Route render={props => <Calendar id={this.state.id} /> } />
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
              <Route render={props => (
                <Home performLogin={this.login}/>
              )} />
            </Switch>
          </div>
        </div>
      );
    }
  }
}

export default App;

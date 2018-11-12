import React, { Component } from 'react';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { getFriends, addFriend, findUsers, getUser } from '../requests';

export default class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      users: []
    }
    this.addFriend = this.addFriend.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.getFriends();
  }

  getFriends() {
    getFriends(this.props.id).then((ids) => {
      let promises = ids.map((id) => {
        return getUser(id.friend_id);
      });
      Promise.all(promises).then((friends) => {
        console.log(friends);
        if(friends) {
          this.setState({
            friends: friends,
            users: this.state.users
          });
        }
      });
    });
  }

  addFriend(id) {
    addFriend(this.props.id, id).then((added) => {
      if(added) {
        this.getFriends();
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Error adding friend!',
        });
      }
    });
  }

  handleSearch(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      console.log(e.target.value);
      findUsers(this.props.id, e.target.value).then((users) => {
        if(users) {
          this.setState({
            friends: this.state.friends,
            users: users
          });
        }
      });
    }
  }

  render() {
    let userCards = this.state.users.map((friend) =>
      <FriendCard
        key={friend.id}
        id={friend.id}
        firstName={friend.firstname}
        lastName={friend.lastname}
        email={friend.email}
        username={friend.username}
        addFriend={this.addFriend}
        friend={false}
      />
    );
    let friendCards = this.state.friends.map((friend) =>
      <FriendCard
        key={friend.id}
        id={friend.id}
        firstName={friend.firstname}
        lastName={friend.lastname}
        email={friend.email}
        username={friend.username}
        addFriend={this.addFriend}
        friend={true}
      />
    );
    return (
      <div>
        <div>
          <h3>Search Friends</h3>
          <nav>
            <div className="nav-wrapper deep-purple lighten-3">
              <form>
                <div className="input-field">
                  <input id="search" type="search" required onKeyPress={e => this.handleSearch(e)}/>
                  <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
          <br/>
          <div className="row">
            {userCards}
          </div>
        </div>
        <div>
          <h3>My Friends</h3>
          <div className="row">
            {friendCards}
          </div>
        </div>
      </div>
    );
  }
}

class FriendCard extends Component {
  render() {
    if(this.props.friend) {
      return (
        <div className="card hoverable grey lighten-3 col s12 m6 l4">
          <div className="card-title col s12">
            {this.props.firstName} {this.props.lastName}
          </div>
          <div className="card-content col s12">
            <p>{this.props.email}</p>
            <p>{this.props.username}</p>
          </div>
          <div className="card-action col s12">
            <Link to={'/friendProfile?friendId=' + this.props.id}
              className="btn-flat deep-purple-text"
            >
              View Friend<i className="material-icons left">person</i>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card hoverable grey lighten-3 col s12 m6 l4">
          <div className="card-title col s12">
            {this.props.firstName} {this.props.lastName}
          </div>
          <div className="card-content col s12">
            <p>{this.props.email}</p>
            <p>{this.props.username}</p>
          </div>
          <div className="card-action col s12">
            <button
              className="btn-flat deep-purple-text"
              onClick={(e) => {this.props.addFriend(this.props.id);}}
            >
              Add Friend<i className="material-icons left">person_add</i>
            </button>
          </div>
        </div>
      );
    }
  }
}

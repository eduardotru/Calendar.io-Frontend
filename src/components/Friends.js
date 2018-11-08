import React, { Component } from 'react';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    //TODO: Get friends from database

    this.state = {
      friends: [
        {
          id: 0,
          firstName: 'Esteban',
          lastName: 'Arocha',
          email: 'stv@stv.com',
          username: 'stv',
        },
        {
          id: 0,
          firstName: 'Esteban',
          lastName: 'Arocha',
          email: 'stv@stv.com',
          username: 'stv',
        },{
          id: 0,
          firstName: 'Esteban',
          lastName: 'Arocha',
          email: 'stv@stv.com',
          username: 'stv',
        },{
          id: 0,
          firstName: 'Esteban',
          lastName: 'Arocha',
          email: 'stv@stv.com',
          username: 'stv',
        },{
          id: 0,
          firstName: 'Esteban',
          lastName: 'Arocha',
          email: 'stv@stv.com',
          username: 'stv',
        }
      ]
    }
    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(id) {
    //TODO: add friend
  }

  render() {
    let friendCards = this.state.friends.map((friend) =>
      <FriendCard
        id={friend.id}
        firstName={friend.firstName}
        lastName={friend.lastName}
        email={friend.email}
        username={friend.username}
        addFriend={this.addFriend}
      />
    );
    return (
      <div>
        <h3>Friends</h3>
        <nav>
          <div className="nav-wrapper deep-purple lighten-3">
            <form>
              <div className="input-field">
                <input id="search" type="search" required/>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <br/>
        <div className="row">
          {friendCards}
        </div>
      </div>
    );
  }
}

class FriendCard extends Component {
  render() {
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

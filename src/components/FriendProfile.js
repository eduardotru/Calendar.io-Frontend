import React, { Component } from 'react';

import { getUser } from '../requests'
import Calendar from './Calendar';

export default class FriendProfile extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.id;

    this.state = {
      info: {},
      edit: false,
      changes: {}
    };

    this.getUser();
  }

  getUser() {
    getUser(this.id).then((info) => {
      if(info) {
        console.log(info);
        let changes = Object.create(info);
        this.setState({
          info: info,
          edit: false,
          changes: changes
        });
      }
    });
  }

  render() {
    return (
      <div className="row center-align">
        <div className="col s12">
          <h2>{this.state.info.firstname} {this.state.info.lastname}</h2>
        </div>
        <div className="col s12">
          <h4>Username: {this.state.info.username}</h4>
        </div>
        <div className="col s12">
          <h4>Email: {this.state.info.email}</h4>
        </div>
        <div className="col s12">
          <h4>Phone: {this.state.info.phone}</h4>
        </div>
        <Calendar id={this.props.id} friendView={true}/>
      </div>
    );
  }
}

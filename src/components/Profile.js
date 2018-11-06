import React, { Component } from 'react';

import TextInput from './common/TextInput';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    //TODO: Get profile from database

    this.state = {
      info: {
        firstName: 'Eduardo',
        lastName: 'Trujillo',
        username: 'edytr',
        email: 'ed@ed.com',
        phone: '1234567'
      },
      edit: false,
      changes: {
        firstName: 'Eduardo',
        lastName: 'Trujillo',
        username: 'edytr',
        email: 'ed@ed.com',
        phone: '1234567'
      }
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  toggleEdit() {
    let oldChanges = Object.create(this.state.info);
    this.setState({
      info: this.state.info,
      edit: !this.state.edit,
      changes: oldChanges
    });
  }

  handleInput(e, attr) {
    let changes = this.state.changes;
    changes[attr] = e.target.value;
    this.setState({
      info: this.state.info,
      edit: this.state.edit,
      changes: changes
    });
  }

  saveChanges() {
    //TODO: Save the changes in the database

    let newChanges = Object.create(this.state.changes);

    this.setState({
      info: newChanges,
      edit: !this.state.edit,
      changes: this.state.changes
    });
  }

  render() {
    if(this.state.edit) {
      return (
        <div className="row center-align">
          <div className="col s12">
            <h2>{this.state.info.username}</h2>
          </div>
          <div className="col s12">
            <TextInput
              name="First Name"
              value={this.state.changes.firstName}
              onChange={(e) => {this.handleInput(e, "firstName");} }
            />
          </div>
          <div className="col s12">
            <TextInput
              name="Last Name"
              value={this.state.changes.lastName}
              onChange={(e) => {this.handleInput(e, "lastName");} }
            />
          </div>
          <div className="col s12">
            <TextInput
              name="Email"
              value={this.state.changes.email}
              onChange={(e) => {this.handleInput(e, "email");} }
            />
          </div>
          <div className="col s12">
            <TextInput
              name="Phone"
              value={this.state.changes.phone}
              onChange={(e) => {this.handleInput(e, "phone");} }
            />
          </div>
          <div className="col s12">
            <div className="row">
              <div className="col s6 right-align">
                <button className="waves-effect waves-light btn" onClick={this.saveChanges}>
                  Save<i className="material-icons left">save</i>
                </button>
              </div>
              <div className="col s6 left-align">
                <button className="waves-effect waves-light btn red" onClick={this.toggleEdit}>
                  Cancel<i className="material-icons left">cancel</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row center-align">
          <div className="col s12">
            <h2>{this.state.info.firstName} {this.state.info.lastName}</h2>
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
          <button className="waves-effect waves-light btn" onClick={this.toggleEdit}>
            Edit <i className="material-icons left">edit</i>
          </button>
        </div>
      );
    }
  }
}

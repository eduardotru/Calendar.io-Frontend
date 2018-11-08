import React, { Component } from 'react';

import TextInput from './common/TextInput';
import PasswordInput from './common/PasswordInput';
import { getUser, updateUser } from '../requests'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.id = 1;

    this.state = {
      info: {},
      edit: false,
      changes: {}
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveChanges = this.saveChanges.bind(this);

    getUser(this.id).then((info) => {
      if(info) {
        let changes = Object.create(info);
        this.setState({
          info: info,
          edit: false,
          changes: changes
        });
      }
    });
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
    updateUser(this.id, this.state.changes.username, this.state.changes.firstname, this.state.changes.lastname,
      this.state.changes.email, this.state.changes.phone, this.state.changes.password
    ).then((response) => {
      if(response) {
        let newChanges = Object.create(this.state.changes);

        this.setState({
          info: newChanges,
          edit: !this.state.edit,
          changes: this.state.changes
        });
      }
    });
  }

  render() {
    if(this.state.edit) {
      return (
        <div className="row center-align">
          <div className="col s12">
            <h2>{this.state.info.username}</h2>
          </div>
          <div className="col s12 l6">
            <TextInput
              name="First Name"
              value={this.state.changes.firstname}
              onChange={(e) => {this.handleInput(e, "firstname");} }
            />
          </div>
          <div className="col s12 l6">
            <TextInput
              name="Last Name"
              value={this.state.changes.lastname}
              onChange={(e) => {this.handleInput(e, "lastname");} }
            />
          </div>
          <div className="col s12 l6">
            <TextInput
              name="Email"
              value={this.state.changes.email}
              onChange={(e) => {this.handleInput(e, "email");} }
            />
          </div>
          <div className="col s12 l6">
            <TextInput
              name="Phone"
              value={this.state.changes.phone}
              onChange={(e) => {this.handleInput(e, "phone");} }
            />
          </div>
          <div className="col s12 l6">
            <PasswordInput
              name="Password"
              value={this.state.changes.password}
              onChange={(e) => {this.handleInput(e, "password");} }
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
          <button className="waves-effect waves-light btn" onClick={this.toggleEdit}>
            Edit <i className="material-icons left">edit</i>
          </button>
        </div>
      );
    }
  }
}

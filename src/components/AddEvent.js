import React, { Component } from 'react';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import TextInput from './common/TextInput';
import { addEvent } from '../requests';

export default class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      date: '',
      time: '',
      duration: ''
    };

    this.createEvent = this.createEvent.bind(this);
  }

  handleInput(e, attr) {
    let state = this.state;
    state[attr] = e.target.value;
    this.setState({
      name: state.name,
      date: state.date,
      time: state.time,
      duration: state.duration
    });
  }

  createEvent() {
    if(this.state.name &&
      this.state.date &&
      this.state.time &&
      this.state.duration
    ) {
      addEvent(this.props.id,
        this.state.date + ' ' + this.state.time,
        this.state.duration,
        false
      ).then((added) => {
        if(added) {

        } else {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'There was a problem while creating the event!',
          });
        }
      });
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please fill the form completely!',
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 center">
            <h3>New event</h3>
          </div>
        </div>
        <div className="row">
          <TextInput
            name="Event Name"
            value={this.state.name}
            onChange={e => this.handleInput(e, "name")}
          />
        </div>
        <div className="row">
          <div className="col s12 m6">
            <input
              id="date"
              type="date"
              value={this.state.date}
              onChange={e => this.handleInput(e, "date")}
            />
            <label htmlFor="date">Due Date</label>
          </div>
          <div className="col s12 m6">
            <input
              id="time"
              type="time"
              value={this.state.time}
              onChange={e => this.handleInput(e, "time")}
            />
            <label htmlFor="time">Due Time</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <input
              id="duration"
              type="number"
              value={this.state.duration}
              onChange={e => this.handleInput(e, "duration")}
            />
            <label htmlFor="duration">Duration in hours</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12 center">
            <p>
              <Link
                to="/calendar"
                className="waves-effect waves-light btn deep-purple lighten-3"
                onClick={this.createEvent}
              >Create</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getEvents } from '../requests';
import TextInput from './common/TextInput';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.getEvents();
  }

  getEvents() {
    getEvents(this.props.id).then((events) => {
      this.setState({
        events: events
      });
      console.log(events);
    });
  }

  render() {
    let events = this.state.events.map((event) =>
      <Event
        name="No name yet"
        dueDate={event.dueDate}
        duration={event.duration}
      />
    );
    return (
      <div>
        <h3>Calendar</h3>
        {events}
        <div className="fixed-action-btn">
          <Link to="./newEvent" className="btn-floating btn-large deep-purple lighten-3">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

class Event extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.dueDate}</p>
        <p>{this.props.duration}</p>
      </div>
    );
  }
}

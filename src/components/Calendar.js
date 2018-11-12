import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';

import { getEvents, deleteEvent } from '../requests';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      shouldReload: true
    }
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  getEvents() {
    getEvents(this.props.id).then((events) => {
      this.setState({
        events: events,
        shouldReload: false
      });
    });
  }

  deleteEvent(id) {
    deleteEvent(this.props.id, id).then((deleted) => {
      if(deleted) {
        this.getEvents();
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'There was a problem while completing the event!',
        });
      }
    })
  }

  render() {
    if(this.state.shouldReload) {
      this.getEvents();
    }
    let events = this.state.events.map((event, index) =>
      <Event
        key={index}
        id={event.id}
        name="No name yet"
        dueDate={event.dueDate}
        duration={event.duration}
        onDelete={this.deleteEvent}
        friendView={this.props.friendView}
      />
    );
    if(events.length === 0) {
      events = <h1 className="deep-purple-text text-lighten-3">There are no events in your calendar!</h1>
    }
    if(this.props.friendView) {
      return (
        <div>
          <h3>Calendar</h3>
          {events}
        </div>
      );
    } else {
      return (
        <div>
          <h3>Calendar</h3>
          {events}
          <div className="fixed-action-btn">
            <Link to="./newEvent"
              className="btn-floating btn-large deep-purple lighten-3"
              onClick={() => this.setState({events: this.state.events, shouldReload: true})}
            >
              <i className="large material-icons">add</i>
            </Link>
          </div>
        </div>
      );
    }
  }
}

class Event extends Component {
  render() {
    if(this.props.friendView) {
      return (
        <div className="card hoverable grey lighten-3 col s12">
          <div className="card-title col s12">
            <p>{this.props.name}</p>
          </div>
          <div className="card-content col s12 m6">
            <div className="row">
              <div className="col s12 m6">
                <p>{this.props.dueDate}<i className="material-icons left">calendar_today</i></p>
              </div>
              <div className="col s12 m6">
                <p>{this.props.duration} hours<i className="material-icons left">timelapse</i></p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card hoverable grey lighten-3 col s12">
          <div className="card-title col s12">
            <p>{this.props.name}</p>
          </div>
          <div className="card-content col s12 m6">
            <div className="row">
              <div className="col s12 m6">
                <p>{this.props.dueDate}<i className="material-icons left">calendar_today</i></p>
              </div>
              <div className="col s12 m6">
                <p>{this.props.duration} hours<i className="material-icons left">timelapse</i></p>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn-flat deep-purple-text"
              onClick={(e) => {this.props.onDelete(this.props.id);}}
            >
              Complete event<i className="material-icons left">done</i>
            </button>
          </div>
        </div>
      );
    }
  }
}

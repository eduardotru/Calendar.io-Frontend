import React, { Component } from 'react';
import swal from 'sweetalert2';

import { Link } from 'react-router-dom';

import TextInput from './common/TextInput';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEvent: {
        name: '',
        duration: '',
        endDate: '',
        endTime: '',
        isStatic: false,
      }
    };
  }

  render() {
    return (
      <div>
        <p>Calendar</p>
        <div className="fixed-action-btn">
          <Link to="./newEvent" className="btn-floating btn-large deep-purple lighten-3">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

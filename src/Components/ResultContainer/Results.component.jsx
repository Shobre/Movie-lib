import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
  render() {
    return <div className="Results"> {this.props.children} </div>;
  }
}

export default Results;
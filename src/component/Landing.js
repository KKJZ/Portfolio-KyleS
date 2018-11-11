import React, { Component } from 'react';
import {setHome} from '../actions/navbar';

class Landing extends Component {
  componentWillMount() {
    this.props.landing(setHome);
  }
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Landing
          </h1>
          <h2 className="subtitle">
            Subtitle
          </h2>
        </div>
      </div>
    )
  }
}

export default Landing;
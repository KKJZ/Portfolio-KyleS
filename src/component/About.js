import React, { Component } from 'react';
import {setAbout} from '../actions/navbar';

class About extends Component {
  componentWillMount() {
    this.props.about(setAbout);
  }
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            About
          </h1>
          <h2 className="subtitle">
            Subtitle
          </h2>
        </div>
      </div>
    )
  }
}

export default About;
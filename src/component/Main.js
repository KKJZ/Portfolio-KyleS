import React, { Component } from 'react';
import {setProjects} from '../actions/navbar';

class Main extends Component {
  componentWillMount() {
    this.props.projects(setProjects);
  }
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Main
          </h1>
          <h2 className="subtitle">
            Subtitle
          </h2>
        </div>
      </div>
    )
  }
}

export default Main;
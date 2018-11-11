import React, { Component } from 'react';
import "./index.css"
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
            Hey, I'm Kyle Stockmann
          </h1>
            <img className="profileIcon" src="https://preview.ibb.co/cyTdoV/me.jpg" alt="pic of Kyle Stockmann" border="0" />
          <h2 className="subtitle">
            Fullstack Developer/ Professional Shyguy
          </h2>
          <h2 className="subtitle">
            Currently looking to build my coding knowledge.
          </h2>
        </div>
      </div>
    )
  }
}

export default Landing;
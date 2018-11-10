import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setHome, setProjects, setAbout} from '../actions/navbar';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: this.props.active
    }
  this.homeClick = this.homeClick.bind(this);
  this.projectClick = this.projectClick.bind(this);
  this.aboutClick = this.aboutClick.bind(this);
  };

  homeClick() {
    this.props.onNavClick(setHome);
  };

  projectClick() {
    this.props.onNavClick(setProjects);
  };

  aboutClick() {
    this.props.onNavClick(setAbout);
  };
  render(){
    return (
    <div className="hero-head">
        <header className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a onClick={this.homeClick} className="navbar-item is-active">
                  Home
                </a>
                <a onClick={this.projectClick} className="navbar-item">
                  Projects
                </a>
                <a onClick={this.aboutClick} className="navbar-item">
                  About me
                </a>
                <span className="navbar-item">
                  <a href="https://github.com/KKJZ" target="_blank" className="button is-success is-inverted">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>My Github</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Navbar;
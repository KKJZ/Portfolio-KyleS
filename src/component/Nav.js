import React, { Component } from 'react';
import {setHome, setProjects, setAbout, HOME, PROJECTS, ABOUT} from '../actions/navbar';

class Navbar extends Component {
  constructor(props){
    super(props);
  this.homeClick = this.homeClick.bind(this);
  this.projectClick = this.projectClick.bind(this);
  this.aboutClick = this.aboutClick.bind(this);
  this.burgerClick = this.burgerClick.bind(this);
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

  burgerClick() {
    this.props.onBurgerClick(!this.props.burger);
  };
  render(){
    let homeClasses;
    let projectsClasses;
    let aboutClasses;
    //nav bar active status
    switch(this.props.active){
      case HOME:
        homeClasses = "navbar-item is-active";
        projectsClasses = "navbar-item";
        aboutClasses = "navbar-item";
        break;

      case PROJECTS:
        homeClasses = "navbar-item";
        projectsClasses ="navbar-item is-active";
        aboutClasses = "navbar-item";
        break;

      case ABOUT:
        homeClasses = "navbar-item";
        projectsClasses = "navbar-item";
        aboutClasses = "navbar-item is-active";
        break;

      default: 
        homeClasses = "navbar-item is-active";
        projectsClasses = "navbar-item";
        aboutClasses = "navbar-item";
    }
    let navBurgerClasses;
    let navMenuClases;
    //nav bar burger menu
    switch(this.props.burger) {
      case true:
        navBurgerClasses = "navbar-burger burger is-active";
        navMenuClases = "navbar-menu is-active";
        break;

      case false:
        navBurgerClasses = "navbar-burger burger";
        navMenuClases = "navbar-menu";
        break;
      default:
        navBurgerClasses = "navbar-burger burger";
        navMenuClases = "navbar-menu";
    }
    return (
    <div className="hero-head">
        <header className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span
              onClick={this.burgerClick}
              className={navBurgerClasses}
              data-target="navbarMenuHeroC">
                <span aria-hidden={!this.props.burger}></span>
                <span aria-hidden={!this.props.burger}></span>
                <span aria-hidden={!this.props.burger}></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" className={navMenuClases}>
              <div className="navbar-end">
                <a href="/" onClick={this.homeClick} className={homeClasses}>
                  Home
                </a>
                <a href="/projects" onClick={this.projectClick} className={projectsClasses}>
                  Projects
                </a>
                <a href="/about" onClick={this.aboutClick} className={aboutClasses}>
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
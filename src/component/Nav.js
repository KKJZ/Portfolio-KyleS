import React, { Component } from 'react';
import {setHome, setProjects, setAbout, HOME, PROJECTS, ABOUT} from '../actions/navbar';
import {BrowserRouter as Link} from 'react-router-dom';

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
        homeClasses = "navbar-item home is-active";
        projectsClasses = "navbar-item projects";
        aboutClasses = "navbar-item about";
        break;

      case PROJECTS:
        homeClasses = "navbar-item home";
        projectsClasses ="navbar-item projects is-active";
        aboutClasses = "navbar-item about";
        break;

      case ABOUT:
        homeClasses = "navbar-item home";
        projectsClasses = "navbar-item projects";
        aboutClasses = "navbar-item about is-active";
        break;

      default: 
        homeClasses = "navbar-item home is-active";
        projectsClasses = "navbar-item projects";
        aboutClasses = "navbar-item about";
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
              <Link to="/">
                <a 
                href="/"
                onClick={this.homeClick} 
                className={homeClasses}>
                  Home
                </a>
                </Link>
                <Link to="/projects">
                <a 
                href="/projects"
                onClick={this.projectClick} 
                className={projectsClasses}>
                  Projects
                </a>
                </Link>
                <Link to="/about">
                <a 
                href="/about"
                onClick={this.aboutClick} 
                className={aboutClasses}>
                  About me
                </a>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Navbar;
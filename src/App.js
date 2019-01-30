import React, { Component } from 'react';
import logo from './logo.svg';
import {AboutMe} from './Components/AboutMe';
import {hideBoxes, showBoxes} from './async';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.onTransitionEndAbout = this.onTransitionEndAbout.bind(this);
    this.onTransitionEndProject = this.onTransitionEndProject.bind(this);
    this.onTransitionEndContact = this.onTransitionEndContact.bind(this);
    this.setAboutState = this.setAboutState.bind(this);
    this.state = {
      aboutContent: false,
      projectContent: false,
      contactContent: false,
      tick: 1
    }
  }

  setAboutState(bool) {
    this.setState({aboutContent: bool});
  }

  setProjectState(bool) {
    this.setState({projectContent: bool});
  }
  setContactState(bool) {
    this.setState({contactContent: bool});
  }

  setTick(int) {
    this.setState({tick: ++int});
  }

  handleAboutClick(e) {
    let element = e.target;
    let arrayChild = [...e.target.parentElement.childNodes];
    if(element.tagName === "H2"){
      element = element.parentElement;
      arrayChild = [...e.target.parentElement.parentElement.childNodes];
    }
    if(this.content === true) {
      showBoxes("about");
    }
    hideBoxes(element, arrayChild);
  }

  handleProjectClick(e) {
    let element = e.target;
    let arrayChild = [...e.target.parentElement.childNodes];
    if(element.tagName === "H2"){
      element = element.parentElement;
      arrayChild = [...e.target.parentElement.parentElement.childNodes];
    }
    if(this.content === true) {
      showBoxes("project");
    }
    hideBoxes(element, arrayChild);
  }

  handleContactClick(e) {
    let element = e.target;
    let arrayChild = [...e.target.parentElement.childNodes];
    if(element.tagName === "H2"){
      element = element.parentElement;
      arrayChild = [...e.target.parentElement.parentElement.childNodes];
    }
    if(this.content === true) {
      showBoxes("contact");
    }
    hideBoxes(element, arrayChild);
  }

  onTransitionEndAbout(e) {
      this.setTick(this.state.tick);
      console.log(this.state.tick)
      if(0 !== this.state.tick % 2){
        console.log('setting state');
        this.setAboutState(!(this.state.aboutContent));
      }
  }

  onTransitionEndProject(e) {
    //start here
  }

  onTransitionEndContact(e) {
    //start here
  }
  render() {
    return (
      <div className="App">
      <h1 className="title">Kyle Stockmann</h1>
      <h2 className="subtitle">Full-Stack Developer</h2>
        <div className="container">
          <div id="0" className="outside"></div>
          <AboutMe 
          onClick={this.handleAboutClick} 
          onTransitionEnd={this.onTransitionEndAbout} 
          content={this.state.aboutContent}
          setAboutState={this.setAboutState}
          />
          <div id="2" className="box"></div>
          <div id="3" className="outside"></div>
          <div id="4" className="outside"></div>
          <div id="5" className="box"></div>
          <div id="6" className="box"
          onClick={e => this.handleProjectClick}
          >
          <h2>Projects:</h2>
          </div>
          <div id="7" className="outside"></div>
          <div id="8" className="outside"></div>
          <div id="9" className="box"
          onClick={e => this.handleContactClick}
          >
            <h2>Contact me:</h2>
          </div>
          <div id ="10" className="box"></div>
          <div id="11" className="outside"></div>
        </div>
      </div>
    );
  }
}

export default App;

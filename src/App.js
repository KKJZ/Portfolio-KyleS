import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleAboutClick(e) {
    let element = e.target;
    let arrayChild = [...e.target.parentElement.childNodes];
    console.log(arrayChild);
    element.classList.toggle('active');
    arrayChild.forEach(child => {
      if (element.id !== child.id){
        child.classList.toggle('in-active');
      }
    })
  }

  render() {
    return (
      <div className="App">
      <h1 className="title">Kyle Stockmann</h1>
      <h2 className="subtitle">Full-Stack Developer</h2>
        <div className="container">
          <div id="1" className="outside"></div>
          <div id="2" className="box"
          onClick={e=> this.handleAboutClick(e)}
          ></div>
          <div id="3" className="outside"></div>
          <div id="4" className="outside"></div>
          <div id="5" className="box"
          onClick={e => this.handleProjectsClick(e)}></div>
          <div id="6" className="outside"></div>
          <div id="7" className="outside"></div>
          <div id="8" className="box"
          onClick={e => this.handleContactClick(e)}
          ></div>
          <div id="9" className="outside"></div>
        </div>
      </div>
    );
  }
}

export default App;

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
            My Projects
          </h1>
          <div className="columns">
            <div className="column">
              <h2 className="subtitle">League of Legends Recent players</h2>
              <a href="https://ibb.co/iXznFA" target="_blank" rel="noopener noreferrer"><img className="project" src="https://preview.ibb.co/d8uMaA/LOL.jpg" alt="league" border="0" /></a>
              <a className="button is-dark" href="https://github.com/KKJZ/League-Recent-Players" target="_blank" rel="noopener noreferrer">GitHub Repo</a><br/>
              <a className="live button is-light" href='https://kkjz.github.io/League-Recent-Players/Welcome.html' target="_blank" rel="noopener noreferrer">Live App</a>
              <p>Built with:</p>
              <ul>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
              </ul>
            </div>
            <div className="column">
              <h2 className="subtitle">Bartenders Blackbook</h2>
              <a href="https://ibb.co/gYPyNq" target="_blank" rel="noopener noreferrer"><img className="project" src="https://preview.ibb.co/f1oQ2q/drink.jpg" alt="drink" border="0" /></a>
              <a className="button is-dark" href="https://github.com/KKJZ/Bartenders_Blackbooks" target="_blank" rel="noopener noreferrer">GitHub Repo</a><br />
              <a className="live button is-light" href='https://kkjz.github.io/Bartenders_Blackbooks/Public/Landing.html' target="_blank" rel="noopener noreferrer">Live App</a>
              <p>Built with:</p>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT</li>
              </ul>
            </div>
            <div className="column">
              <h2 className="subtitle">Personal Publication</h2>
              <a href="https://ibb.co/fwzvHf" target="_blank" rel="noopener noreferrer"><img className="project" src="https://preview.ibb.co/dGfPA0/NewEntry.jpg" alt="NewEntry" border="0" /></a>
              <a className="button is-dark" href="https://github.com/KKJZ/Journal_React" target="_blank" rel="noopener noreferrer">React Repo</a>
              <a className="express button is-dark" href="https://github.com/KKJZ/Journal_Backend" target="_blank" rel="noopener noreferrer">Node Repo</a><br />
              <a className="live button is-light" href='https://personalpublication.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live App</a>
              <p>Built with:</p>
              <ul>
                <li>React</li>
                <li>React-Router</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
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
              <p>Built with:</p>
              <ul>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
              </ul>
              <a href="https://ibb.co/iXznFA" target="_blank" rel="noopener noreferrer"><img className="project" src="https://preview.ibb.co/d8uMaA/LOL.jpg" alt="league" border="0" /></a>
              <a className="button is-dark" href="https://github.com/KKJZ/League-Recent-Players" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <div className="column">
              <h2 className="subtitle">Bartenders Blackbook</h2>
              <p>Built with:</p>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT(json web token)</li>
              </ul>
              <a href="https://ibb.co/gYPyNq" target="_blank" rel="noopener noreferrer"><img className="project" src="https://preview.ibb.co/f1oQ2q/drink.jpg" alt="drink" border="0" /></a>
              <a className="button is-dark" href="https://github.com/KKJZ/Bartenders_Blackbooks" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
            <div className="column">
              <h2 className="subtitle">Personal Publication</h2>
              <p>Built with:</p>
              <ul>
                <li>React</li>
                <li>React-Router</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT(json web token)</li>
              </ul>
              <a href="https://ibb.co/fwzvHf" target="_blank" rel="noopener noreferrer"><img className="project" src="https://preview.ibb.co/dGfPA0/NewEntry.jpg" alt="NewEntry" border="0" /></a>
              <a className="button is-dark" href="https://github.com/KKJZ/Journal_React" target="_blank" rel="noopener noreferrer">React Repo</a> <br />
              <a className="express button is-dark" href="https://github.com/KKJZ/Journal_Backend" target="_blank" rel="noopener noreferrer">Express.js Repo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
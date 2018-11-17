import React, { Component } from 'react';
import {setAbout} from '../actions/navbar';

class About extends Component {
  componentWillMount() {
    this.props.about(setAbout);
  }
  render() {
    return (
      <div className="hero-body">
        <div className="container about has-text-centered">
          <h1 className="title">
            About me:
          </h1>
          <img className="aboutPic" src="https://preview.ibb.co/cyTdoV/me.jpg" alt="pic of Kyle Stockmann"/>
          <section className="subtitle">
            <p className="about">Born and raised in the Pacific Northwest; I have always enjoyed, biking, hiking, and longboarding but my real passion has always been computers.
            From the first time I played on a computer I had a drive to learn more about them.</p>
            <p className="about">This curiosity bloomed when I hit high school and start taking programming classes, as well as working with the IT department to keep the school computers maintained.
            From there I began learning as much as I could about writing code, going as far as reading up on w3schools.com to learn the basics of HTML, CSS, and Javascript.
            Upon graduating from high school I building my own computer with my graduation money.</p>
            <p className="about">After high school I took a few years off and started working in the food industry.  Now that I have savings and time I decided to not go the traditional college route and looked into fullstack development programs.
            I ended up at Thinkful because they were one of the only programs that would work around my work schedule. Thanks to Thinkful, not only do I get to expand my knowledge, but I finally get to turn my passion for computers into a career.</p>
          </section>
        </div>
      </div>
    )
  }
}

export default About;
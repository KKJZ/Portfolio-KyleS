import React, { Component } from 'react';
import {setAbout} from '../actions/navbar';

class About extends Component {
  componentWillMount() {
    this.props.about(setAbout);
  }
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            About me:
          </h1>
          <h2 className="subtitle">
            Born and raised in the Pacific Northwest; I have always enjoyed, biking, hiking, and longboarding but my real passion has always been computers.<br />
            From the first time I played on a computer I had a drive to learn more about them.<br />
            This couriousity bloomed when I hit high school and start taking programming classes, as well as working with the IT department to keep the school computers maintained.
            From there I began learning as much as I could about writing code, going as far as reading up on w3schools.com to learn the basics of HTML, CSS, and Javascript.
            Upon graduating from high school I building my own computer with my graduation money.<br />
            After high school I took a few years off and started working in the food industry.  Now that I have savings and time I decieded to not go the traditional college route and looked into coding bootcamps.
            I ended up at Thinkful because they were one of the only bootcamps that would work around my work schedule. Thanks to Thinkful, not only do I get to expand my knowledge, but I finally get to turn my passion for computers into a career.
          </h2>
        </div>
      </div>
    )
  }
}

export default About;
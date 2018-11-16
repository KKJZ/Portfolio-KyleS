import React, { Component } from 'react';

class Footer extends Component {
  //EMAIL, GITHUB, ANGELSLIST, and LINKDIN
  render() {
    return (
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li><a href="https://github.com/KKJZ" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                Github</a></li>
              <li><a href="mailto:kyle_stockmann@yahoo.com?Subject=Hello" target="_top">
                <span className="icon">
                  <i className="fab fa-yahoo"></i>
                </span>
                Email</a></li>
              <li><a href="https://www.linkedin.com/in/kyle-stockmann-694a94166/" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <i className="fab fa-linkedin"></i>
                </span>
                Linkedin</a></li>
              <li><a href="https://angel.co/kyle-stockmann" target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <i className="fab fa-angellist"></i>
                </span>
              Angel List</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Footer;
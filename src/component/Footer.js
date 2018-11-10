import React, { Component } from 'react';

class Footer extends Component {
  //EMAIL, GITHUB, ANGELSLIST, and LINKDIN
  render() {
    return (
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li><a>
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                Github</a></li>
              <li><a>
                <span className="icon">
                  <i className="fab fa-yahoo"></i>
                </span>
                Email</a></li>
              <li><a>
                <span className="icon">
                  <i className="fab fa-linkedin"></i>
                </span>
                Linkedin</a></li>
              <li><a>
                <span className="icon">
                  <i className="fab fa-angellist"></i>
                </span>
              Angel List</a></li>
              <li><a>Components</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Footer;
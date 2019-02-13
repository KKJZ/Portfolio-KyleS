import React, {Component} from "react";
import '../css/sticky.css';

class Nav extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="hero-head sticky">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item" href="#Home">
                        <h1 className="title">Kyle Stockmann</h1>
                      </a>
                      {/* Set this to display block */}
                      {/* Set this to is-active for X */}
                      {/* Burger Classes: navbar-burger burger  */}
                      <span className={this.props.isYOffset ? "navbar-burger burger scrollBurger" : "navbar-burger burger"} data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    {/* Set this to is-active for menu dropdown */}
                    {/* Set this to display none for burger */}
                    <div id="navbarMenuHeroA" className="navbar-menu">
                      <div className="navbar-end">
                        {/* Set this to is-active for selected */}
                        <a className="navbar-item is-active" href="#Home">
                          Home
                        </a>
                        <a className="navbar-item" href="#About">
                          About Me
                        </a>
                        <a className="navbar-item" href="#Projects">
                          Projects
                        </a>
                        <a className="navbar-item" href="#Contact">
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
            </div>
        )
    }
}

export default Nav;
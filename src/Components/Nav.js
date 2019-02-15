import React, {Component} from "react";
import {connect} from "react-redux";
import {openBurger, closeBurger} from "../actions/burger";
import '../css/sticky.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.burgerClick = this.burgerClick.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    burgerClick() {
        if (this.props.isMenuOpen === true){
            this.props.dispatch(closeBurger())
        }else {
            this.props.dispatch(openBurger())
        }
    }

    changePage() {
        this.props.dispatch(closeBurger());
    }

    render() {
        console.log(this.props);
        return (
            <div className="hero-head sticky">
                <nav className="navbar">
                  <div className="container">
                    <div className="navbar-brand">
                      <a className="navbar-item" href="#Home" onClick={this.changePage}>
                        <h1 className="title">Kyle Stockmann</h1>
                      </a>
                      {/* Set this to display block */}
                      {/* Set this to is-active for X */}
                      {/* Burger Classes: navbar-burger burger  */}
                      <span className={
                          this.props.isYOffset 
                            ? this.props.isMenuOpen 
                                ? "navbar-burger burger scrollBurger is-active"
                                : "navbar-burger burger scrollBurger"
                            : this.props.isMenuOpen 
                                ? "navbar-burger burger is-active"
                                : "navbar-burger burger"} 
                        data-target="navbarMenuHeroA"
                        onClick={this.burgerClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                    {/* Set this to is-active for menu dropdown */}
                    {/* Set this to display none for burger */}
                    <div id="navbarMenuHeroA" className={
                        this.props.isYOffset 
                            ? this.props.isMenuOpen 
                                ? "navbar-menu is-active"
                                : "navbar-menu hidden"
                            : this.props.isMenuOpen 
                                ? "navbar-menu is-active"
                                : "navbar-menu"}>
                      <div className="navbar-end">
                        {/* Set this to is-active for selected */}
                        <a className="navbar-item" href="#Home" onClick={this.changePage}>
                          Home
                        </a>
                        <a className="navbar-item" href="#About" onClick={this.changePage}>
                          About Me
                        </a>
                        <a className="navbar-item" href="#Projects" onClick={this.changePage}>
                          Projects
                        </a>
                        <a className="navbar-item" href="#Contact" onClick={this.changePage}>
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

const mapStateToProps = state => ({
    isMenuOpen: state.burgerMenu.isMenuOpen,
    isYOffset: state.burgerMenu.isYOffset,
})

export default connect(mapStateToProps)(Nav);
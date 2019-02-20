import React, {Component} from "react";
import {connect} from "react-redux";
import "./css/bulma.css";
import {setBurger} from "./actions/burger";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";



// fullscreen hero like original profolio
// can acutally use that as a good start
// on scroll the bottom slides up or down accordingly
// transitions for the inner content
// background?? forest?? park?? me?? change every screen??
// green screen photos and edit them in gimp??
// manga scroll animation
class App extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        let offsetY = window.scrollY;
        if(offsetY !== 0) {
            this.props.dispatch(setBurger(true));
        }else {
            this.props.dispatch(setBurger(false));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this);
    }

    render(){
        return (
        <section className="hero is-light is-bold">
            <Nav burger={this.props}/>

            <Home />
            
            <About />

            <Projects />

            <Contact onSubmit={this.handleSubmit}/>

            <Footer />
        </section>
        )
    }
}

const mapStateToProps = state => ({
    isMenuOpen: state.burgerMenu.isMenuOpen,
    isYOffset: state.burgerMenu.isYOffset,
})

export default connect(mapStateToProps)(App);
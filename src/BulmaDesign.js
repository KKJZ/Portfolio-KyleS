import React, {Component} from "react";
import {connect} from "react-redux";
import "./css/bulma.css";
import {setBurger} from "./actions/burger";
import {setName, setSubject, setEmail, setContent} from './actions/form';
import {findProject} from "./actions/project"
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
        this.handleScroll = this.handleScroll.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProjectsClick = this.handleProjectsClick.bind(this);
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

    handleProjectsClick(e) {
        const target = e.target.className.split(" ")[0];
        findProject(this.props.project, target, this.props.dispatch)
    }

    handleSubmit(e) {
        const API = process.env.API || "http://localhost:3000";
        e.preventDefault();
        const body = this.props.form;
        console.log(body);
        fetch(`${API}/test`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        })
        .then(res => console.log(res))
        .then(() => console.log('CAME BACK'))
        
    }

    handleInputChange(e) {
        const value = e.target.value;
        const field = e.target.name;
        switch(field){
            case "name":
                this.props.dispatch(setName(value));
                break;
            case "subject":
                this.props.dispatch(setSubject(value));
                break;
            case "email":
                this.props.dispatch(setEmail(value));
                break;
            case "content":
                this.props.dispatch(setContent(value));
                break;
            default:
                return ;
        }
    }

    render(){
        return (
        <section className="hero is-light is-bold">
            <Nav burger={this.props}/>

            <Home />
            
            <About />

            <Projects Click={this.handleProjectsClick} current={this.props.project} />

            <Contact onSubmit={this.handleSubmit} Change={this.handleInputChange}/>

            <Footer />
        </section>
        )
    }
}

const mapStateToProps = state => ({
    isMenuOpen: state.burgerMenu.isMenuOpen,
    isYOffset: state.burgerMenu.isYOffset,
    form: {
        name: state.form.name,
        subject: state.form.subject,
        email: state.form.email,
        content: state.form.content
    },
    project: state.project.currentProject
})

export default connect(mapStateToProps)(App);
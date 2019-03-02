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
<<<<<<< HEAD
        const API = process.env.API || "http://localhost:3000";
=======
        const API = "http://localhost:3000";
>>>>>>> c8db0105f6d5ca92ab4a471b616199273e3df73f
        e.preventDefault();
        // this is the info that needs to be sent
        const body = this.props.form;
<<<<<<< HEAD
        console.log(body);
        fetch(`${API}/test`, {
=======
        // the form element
        const form = e.target;
        fetch(`${API}/send`, {
>>>>>>> c8db0105f6d5ca92ab4a471b616199273e3df73f
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
<<<<<<< HEAD
            body: body
        })
        .then(res => console.log(res))
        .then(() => console.log('CAME BACK'))
        
=======
            body: JSON.stringify(body)
        }).then(() => {
            const card = form.parentElement;
            const envelope = form.parentElement.parentElement;
            const envelopeTop = document.querySelector('.envelope-top');
            const sent = document.querySelector('.sent');
            form[0].classList.add('hidden');
            form[1].classList.add('hidden');
            envelope.classList.remove('active');
            card.style.zIndex = 0;
            card.style.height = "180px";
            setTimeout(function(){
                envelopeTop.classList.remove('active');
                sent.classList.remove('hidden');
            }, 1000);
        })
        .catch(error => {
            console.error(error);
            const card = form.parentElement;
            const envelope = form.parentElement.parentElement;
            const envelopeTop = document.querySelector('.envelope-top');
            const errorMail = document.querySelector('.error-mail');
            form[0].classList.add('hidden');
            form[1].classList.add('hidden');
            envelope.classList.remove('active');
            card.style.zIndex = 0;
            card.style.height = "180px";
            setTimeout(function(){
                envelopeTop.classList.remove('active');
                errorMail.classList.remove('hidden');
            }, 1000);
        })
>>>>>>> c8db0105f6d5ca92ab4a471b616199273e3df73f
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
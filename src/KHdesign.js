import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./css/bulma.css";
import "./css/mystyles.css";
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "home",
            isMobile: false,
            width: 0,
            height: 0 
        }
        this.setScroll = this.setScroll.bind(this);
        this.setActive = this.setActive.bind(this);
    }
    
    componentDidMount() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        console.log(width, height);
        this.setState({
            width,
            height
        })
        document.getElementById("root").addEventListener('scroll', this.setScroll);
    }

    componentWillUnmount() {
        document.getElementById('root').removeEventListener('scroll', this.setScroll);
    }

    setActive(active) {
        console.log('setting state')
        this.setState({
            active
        })
    }

    setScroll(e) {
        console.log(e);
    }

    render() {
        const screen = {
            width: this.state.width,
            height: this.state.height
        }
        return (
        <Router>
            <div className="columns" style={screen}>
                <Sidebar onClick={this.setActive} isMobile={this.state.isMobile} Active={this.state.active} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
            </div>
        </Router>
        )
    }
}

export default App;
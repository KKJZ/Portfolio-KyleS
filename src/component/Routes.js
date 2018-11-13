import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {setBurger} from '../actions/navbar';
import Navbar from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import Main from './Main';
import About from './About';

export class Routes extends Component {
	constructor(props){
		super(props);
		this.handleNavClick = this.handleNavClick.bind(this);
		this.handleBurgerClick = this.handleBurgerClick.bind(this);
		this.about = this.about.bind(this);
		this.projects = this.projects.bind(this);
		this.landing = this.landing.bind(this);
	}
	handleNavClick(item) {
		this.props.dispatch(item());
	};
	handleBurgerClick(item) {
		this.props.dispatch(setBurger(item));
	}
	about (route) {
		this.props.dispatch(route());
	}

	projects(route) {
		this.props.dispatch(route());
	}

	landing(route) {
		this.props.dispatch(route());
	}

	render(){
		return (
			<section className="hero is-success is-fullheight">
			<Navbar
			active={this.props.active}
			burger={this.props.burger}
			onBurgerClick={this.handleBurgerClick}
			onNavClick={this.handleNavClick} />
				<Router>
					<Switch>
						<Route 
						exact 
						path="/about" 
						render={(props) => <About {...props} about={this.about} />}
						/>

						<Route 
						exact 
						path="/projects" 
						render={(props) => <Main {...props} projects={this.projects} />}
						/>

						<Route
						path="/"
						render={(props) => <Landing {...props} landing={this.landing} />} 
						/>

						<Redirect to="/" from="*" />
					</Switch>
				</Router>
			<Footer />
			</section>
		)
	}
}

const mapStateToProps = state => ({
	active: state.navbar.active,
	burger: state.navbar.burger
});
export default connect(mapStateToProps)(Routes);
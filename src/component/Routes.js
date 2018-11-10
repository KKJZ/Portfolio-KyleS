import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from './Nav';
import Footer from './Footer';
import Landing from './Landing';
import Main from './Main';
import About from './About';

export class Routes extends Component {
	constructor(props){
		super(props);
		this.handleNavClick = this.handleNavClick.bind(this);
	}
	handleNavClick(item) {
		console.log(this);
		this.props.dispatch(item());
	};

	render(){
		console.log(this);
		return (
			<section className="hero is-success is-fullheight">
			<Navbar active={this.props.active} onNavClick={this.handleNavClick} />
				<Router>
					<Switch>
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Main} />
						<Route path="/" component={Landing} />
						<Redirect to="/" from="*" />
					</Switch>
				</Router>
			<Footer />
			</section>
		)
	}
}

const mapStateToProps = state => ({
	active: state.navbar.active
});
export default connect(mapStateToProps)(Routes);
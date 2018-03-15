import React, { Component } from "react";
import API from "../../utils/API";
import "./navBar.css";
import FunkyTom from "../../files/funkyTom.jpeg";

class NavBar extends Component {
	state = {
		loggedIn: "",
		userName: "",
		password: "",
	}

	

	componentDidMount() {
		API.loggedIn(true).then(res => 
			this.setState({
				loggedIn: res.data[0].loggedin, 
				userName: res.data[0].userName, 
				password: res.data[0].password})
			).catch(err => console.log(err));
	};

	logOut = () =>{
  	API.logOut({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(() => console.log("Logged Out"))
        .catch(err => console.log(err));
        

  	};

  	

	render(){

		// window.onunload = () => {
		// 	this.logOut();
		// }
		
		if(this.state.loggedIn === true){
			return(
				<nav className="navbar navStyle">
		  <div className=" container-fluid">
		    <div className="navbar-header">
		      <a className="textHead navbar-brand" href="#">Rhythm Section</a>
		    </div>
		    <ul className="nav navbar-nav">
		      <li className="active"><a className="text" href="/">Home</a></li>
		      <li className="dropdown">
		        <a className="text dropdown-toggle" data-toggle="dropdown" href="#">Songs
		        <span className="caret"></span></a>
		        <ul className="dropdown-menu">
		          <li className="text"><a href="/game">Funky Tom</a></li>
		          <li className="text"><a href="/instructions">Funky Tom Instructions</a></li>
		          <li className="text"><a href="/game">New Song 1</a></li>
		          <li className="text"><a href="/game">New Song 2</a></li>
		        </ul>
		      </li>
		      <li className="dropdown">
		        <a className="dropdown-toggle text" data-toggle="dropdown" href="#">Exercises/Examples
		        <span className="caret"></span></a>
		        <ul className="dropdown-menu">
		          <li><a className="text" href="/exercise">Rhythm 101</a></li>
		          <li className="text"><a href="/whole">Whole</a></li>
		          <li className="text"><a href="/half">Half</a></li>
		          <li className="text"><a href="/quarter">Quarter</a></li>
		          <li className="text"><a href="/eighth">Eighth</a></li>
		          <li className="text"><a href="/onoff">On And Off The Beat</a></li>
		          <li className="text"><a href="/funkytomex">Funky Tom Exercise</a></li>
		        </ul>
		      </li>
		      <li><a className="text" href="/logout">Logout</a></li>
		      <li><a className="text" href="/stats">Stats</a></li>
		    </ul>
		    <h3 id="userName" className="nav navbar-nav navbar-right text">Hello {this.state.userName}</h3>
		    <img id="tomNav" className="img-responsive nav navbar-nav navbar-right animated flip" src={FunkyTom} />
		  </div>
		</nav>
		);
		
		}else{
	return(
		<nav className="navStyle navbar">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="textHead navbar-brand" href="#">Rhythm Section</a>
		    </div>
		    <ul className="nav navbar-nav">
		      <li className="active"><a className="text" href="/">Home</a></li>
		      <li className="dropdown">
		        <a className="text dropdown-toggle" data-toggle="dropdown" href="#">Songs
		        <span className="caret"></span></a>
		        <ul className="dropdown-menu">
		          <li className="text"><a href="/game">Funky Tom</a></li>
		           <li className="text"><a href="/instructions">Funky Tom Instructions</a></li>
		          <li className="text"><a href="/game">New Song 1</a></li>
		          <li className="text"><a href="/game">New Song 2</a></li>
		        </ul>
		      </li>
		      <li className="dropdown">
		        <a className="dropdown-toggle text" data-toggle="dropdown" href="#">Exercises/Examples
		        <span className="caret"></span></a>
		        <ul className="dropdown-menu">
		          <li className="text"><a href="/exercise">Rhythm 101</a></li>
		          <li className="text"><a href="/whole">Whole</a></li>
		          <li className="text"><a href="/half">Half</a></li>
		          <li className="text"><a href="/quarter">Quarter</a></li>
		          <li className="text"><a href="/eighth">Eighth</a></li>
		          <li className="text"><a href="/onoff">On And Off The Beat</a></li>
		          <li className="text"><a href="/funkytomex">Funky Tom Exercise</a></li>
		        </ul>
		      </li>
		      <li><a className="text" href="/login">Login</a></li>
		      <li><a className="text" href="/signup">Signup</a></li>
		    </ul>
		  </div>
		</nav>
);
};
};
};

export default NavBar;
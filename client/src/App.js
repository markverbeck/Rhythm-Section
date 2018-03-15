import React, { Component } from 'react';
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Game from "./pages/Game";
import Instructions from "./pages/Instructions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stats from "./pages/Stats";
import Whole from "./pages/WholeNote";
import Half from "./pages/HalfNote";
import Quarter from "./pages/QuarterNote";
import Eighth from "./pages/EighthNote";
import OnOff from "./pages/OnOff";
import FunkyTomEx from "./pages/FunkyTomEx";
import LogOut from "./pages/LogOut";
import API from "./utils/API";


class App extends Component {
  state = {
    loggedIn: "",
    userName: "",
    password: "",
  };

  

  componentDidMount() {
    API.loggedIn(true).then(res => 
      this.setState({
        loggedIn: res.data[0].loggedin, userName: res.data[0].userName, password: res.data[0].password})
      ).catch(err => console.log(err));
    
  };
  // componentWillUnmount (){
  //   window.onunload = () => {
  //     this.logOut();
  //   }
  // };

  logOut = () =>{
    API.logOut({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(() => console.log("Logged Out"))
        .catch(err => console.log(err));
        

    };
render(){

  return(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/exercise" component={Exercise} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/instructions" component={Instructions} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/stats" component={Stats} />
      <Route exact path="/whole" component={Whole} />
      <Route exact path="/half" component={Half} />
      <Route exact path="/quarter" component={Quarter} />
      <Route exact path="/eighth" component={Eighth} />
      <Route exact path="/onoff" component={OnOff} />
      <Route exact path="/funkytomex" component={FunkyTomEx} />
      <Route exact path="/logout" component={LogOut} />
    </Switch>
  </Router>
  );
}
}


export default App;

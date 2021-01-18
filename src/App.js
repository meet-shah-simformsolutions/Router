import React ,{Component} from 'react';
import './App.css';

import {BrowserRouter as Router,NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';


const User = (params) =>{
  return(<h1>Welcome user {params.username}</h1>)
}
class App extends Component {
  state={
      loggedIn:false
  }

  loggedHandle = () =>{
    this.setState(prevState =>({
      loggedIn:!prevState.loggedIn
    }))
  }
  
  render() {
    return(
    <Router>
    <div className="App">
      <NavLink to="/" exact activeStyle={{color:"red"}}>Home</NavLink><br/>
      <NavLink to="/about" exact activeStyle={{color:"red"}}>About</NavLink><br/>
      <NavLink to="/user/meet" exact activeStyle={{color:"red"}}>User</NavLink><br/>
      <input type="button" onClick={this.loggedHandle.bind(this)} value={this.state.loggedIn ? "logout" : "login"}/>
      <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
               return location.pathname.startsWith('/user') ? 'Are you sure?' : true
             }}
          />
      <Route path="/" exact strict render={
        () =>{
          return(<h1>Home Page</h1>)
      }} />
      <Route path="/about"  exact strict render={
        () =>{
          return(<h1>About Page</h1>)
      }} />
      <Route path="/user/:username"  exact strict render={
        ({match}) =>(
          this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
        )
      } />
    </div>
    </Router>)
  };
}

export default App;

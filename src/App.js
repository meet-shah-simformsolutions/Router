import React ,{Component, Profiler} from 'react';
import './App.css';
import ClickCounter from "./components/clickCounter"
import HoverCount from "./components/hoverCount"
import Counter from "./components/counter"
import {BrowserRouter as Router,NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import "./style.css"
import  FocusInput  from "./refexample/focusInput";
import  FrwRef  from "./forwardref/FrwRef";


const User = (params) =>{
  return(<h1>Welcome user {params.username}</h1>)
}
class App extends Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef()
    this.cbref = null
    this.setcbref  = ele =>{
      this.cbref = ele
    }
    this.state = {
      loggedIn:false
  }
  }
  state={
      loggedIn:false
  }

  loggedHandle = () =>{
    this.setState(prevState =>({
      loggedIn:!prevState.loggedIn
    }))
  }

  callBackFunction = (id,phase,actualDuration,baseDuration,startTime,commitTime,interaction) =>{
      console.log("id: "+ id + " phase: " + phase)
      console.log("actualDuration :"+ actualDuration + " baseDuration :" + baseDuration)
      console.log("startTime: "+startTime+ " commitTime: "+ commitTime )
  }
  componentDidMount(){
    // this.inputRef.current.focus()             {/*when we use react.createref method */}
    if(this.cbref){
    this.cbref.focus()
    }
  }
  clickhandler = () =>{
    // let name = this.inputRef.current.value; {/*when we use react.createref method */}
    let name = this.cbref.value
    alert(`Name: ${name}`)
  }
  render() {
    return(
      
    <Router>
      
    <div className="App">
    <label>*** Render Props Example ***</label><br></br><br></br>
        <Counter
          render={(count,increment)=>
            (<ClickCounter count={count} increment={increment}/>)
          }
          />
          <Counter
          render={(count,increment)=>
            (<HoverCount count={count} increment={increment} />)}
          />
          <label>*** Ref Example ***</label><br></br><br></br>
          <label>*** Using CreateRef method ***</label><br></br>
          <label>Enter Your Name<input type="text" ref={this.inputRef} /></label><br></br><br></br>
          <label>*** Using Callback Ref ***</label><br></br>
          <label>Enter Your Name<input type="text" ref={this.setcbref} /></label>
          <br></br>
          <button onClick={this.clickhandler}>Get Name</button>    
          <br></br>
          <br></br>
          <FocusInput/><br></br>
          <FrwRef/><br></br>
          <label>*** Router Example***</label><br></br>
      <NavLink to="/" exact activeStyle={{color:"red"}}>Home</NavLink><br/>
      <NavLink to="/about" exact activeStyle={{color:"red"}}>About</NavLink><br/>
      <Profiler id="uname_1" onRender={this.callBackFunction}>
      <NavLink to="/user/meet" exact activeStyle={{color:"red"}}>User</NavLink><br/>
      </Profiler>
      <Profiler id="uname_2" onRender={this.callBackFunction}>
      <NavLink to="/user/smit" exact activeStyle={{color:"red"}}>User</NavLink><br/>
      </Profiler>
      <Profiler id="button" onRender={this.callBackFunction}>
      <input type="button" onClick={this.loggedHandle.bind(this)} value={this.state.loggedIn ? "logout" : "login"}/>
      </Profiler>
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
    
    </Router>
    
    )
  };
}

export default App;

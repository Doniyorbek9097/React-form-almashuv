import React from "react";
import "./style.css";
import SginUp from "./outh/SginUp"
import SginIn from "./outh/SginIn"
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"",
      fullName:"",
      sginIn:true
    }
  }

AppHandler = () => {
  this.setState(prevState => ({sginIn: !prevState.sginIn }))
}

render(){
  const {sginIn} = this.state;
  return(
    <div>
     <h1>Sgin {sginIn ? "In" : "Up" }</h1>
    {sginIn? <SginUp/>:<SginIn/>}
    <button onClick={this.AppHandler}>Sgin {sginIn ? `In` : `Up` }</button>
    </div>
  )
}

}

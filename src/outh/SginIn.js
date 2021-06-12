import React from "react";


export default class SginIn extends React.Component{

render(){
  return(
     <div>
   
   <form action="" onClick={(e) => e.preventDefault()}>
   <p>
   <input type="text" placeholder="password"/>
   </p>
    <p>
   <input type="text" placeholder="@email"/>
   </p>
  
   </form>
   
   </div>
  )
}

}
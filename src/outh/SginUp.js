import React from "react";


export default class SginUp extends React.Component{

render(){
  return(
   <div>
   
   
   <form action="" onClick={(e) => e.preventDefault()}>
   <p>
   <input type="text" placeholder="firstName"/>
   </p>
   <p>
   <input type="text" placeholder="lastName"/>
   </p>
   <p>
   <input type="text" placeholder="password"/>
   </p>
    <p>
   <input type="text" placeholder="@email"/>
   </p>
      <button>SginUp</button>
      <br/>
   </form>
   
   </div>
  )
}

}
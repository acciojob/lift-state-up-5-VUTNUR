import React,{useState} from "react";


const Child=({value})=>{
      function change(e){
        e.preventDefault();
        e.target.style.display="none"
        value(true)
      }
    return (
        <div className="child">
                <form onSubmit={change}>
                <label>UserName:
                <input type="text"/>
                </label>
                <label>Password:
                <input type="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
           
        </div>
    )
}
export default Child;
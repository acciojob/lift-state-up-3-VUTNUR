import React,{useState} from "react";

const Child1=({value1})=>{
      function add1(e){
          value1(e.target.value)
        //   console.log(e.target.value)
      }
    return (
        <div className="child1">
            <h3>Child Component 1</h3>
            <button onClick={add1} value="Option 1">Option 1</button>
        </div>
    )
}
export default Child1;
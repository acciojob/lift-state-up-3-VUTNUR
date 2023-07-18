import React,{useState} from "react";
const Child2=({value2})=>{
    function add2(e){
         value2(e.target.value)
        //  console.log("iam in 2")
    }
    return (
        <div className="child2">
            <h3>Child Component 2</h3>
            <button onClick={add2} value="Option 2">Option 2</button>
        </div>
    )
}
export default Child2;
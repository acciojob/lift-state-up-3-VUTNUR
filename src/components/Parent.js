import React,{useState} from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"
const Parent=()=>{
    let [selectedOption, setSelectedOption]=useState("")
    return (
        <div className="parent">
           <h1>Parent Component</h1>
            <Child1 value1={setSelectedOption}/>
            <Child2 value2={setSelectedOption}/>
            <p>Selected Option:{selectedOption}</p>
        </div>
    )
}
export default Parent;
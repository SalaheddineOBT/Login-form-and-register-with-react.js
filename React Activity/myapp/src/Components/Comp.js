import React,{Component} from "react";

export default class Comp extends Component{
    render(){
        const i="{";
        const j="}"
        return(
            <div className="title">
                <h1>{i} Login For More {j}</h1>
            </div>
        )
    }
}
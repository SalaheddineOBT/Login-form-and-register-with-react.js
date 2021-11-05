import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class NavBar extends Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><NavLink to="/Login">Login</NavLink></li>
                        <li><NavLink to="/Register">Register</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;
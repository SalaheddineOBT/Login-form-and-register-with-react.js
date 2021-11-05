import React, { Component }  from 'react';
import {useState} from "react";

import "./Login.css";

function LoginPage({logining,errored}){

		const users={
			username:'',
            email:'',
			password:''
		};
		
		const [formVal,setVal]=useState(users);
		const [formErr,setErr]=useState({});
		
		const hundlChange=(e) =>{
			const {name,value}=e.target;
		    setVal({...formVal,[name]:value});
		}
		
        const Validation = (values) => {
			const error={};
			if(!values.username){
				error.username="User Name is Required !!";
			}
			if(!values.password){
				error.password="Password is Required !!";
			}
			return error;
		}
		const hundlSubmit=(e) => {
			e.preventDefault();
			setErr(Validation(formVal));
            
            if(Object.keys(formErr).length===0){
                logining(formVal);
            }
		}
		


        return(
		
            <div className="Log">
                {(errored!="") ? (<h1 className="err">{errored}</h1>) : null }
                <form onSubmit={hundlSubmit}>
			        <table>
                    <tbody>
                        <tr>
                            <th colSpan="3" className="titl">
                                <h1>Login Page</h1>
                            </th>
                        </tr>
                        <tr>
                            <td><label>User Name :</label></td>
                            <td>
                                <input type="email" name="username" value={formVal.username} placeholder="Enter Your User Name" onChange={hundlChange} />
                            </td>
                            <td><span></span></td>
                        </tr>
                        <tr>
                            <td className="ts"></td>
                            <td colSpan="2" className="ts">
                                <span>{formErr.username}</span>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Password :</label></td>
                            <td>
                                <input type="password" name="password" value={formVal.password}  placeholder="Enter Your Password" onChange={hundlChange} />
                            </td>
                            <td><span></span></td>
                        </tr>
                        <tr>
                            <td className="ts"></td>
                            <td colSpan="2" className="ts">
                                <span>{formErr.password}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdi" colSpan="3">
                                <button>Login</button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </form>
            </div>
        )
}

export default LoginPage;
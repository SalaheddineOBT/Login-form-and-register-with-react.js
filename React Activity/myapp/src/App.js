import React, {useState } from "react";
import NavBar from "./Components/Nav/Nav";
import LoginPage from "./Components/Login/Login";
import RegisterPage from "./Components/Register/Register";
import { BrowserRouter , Route } from 'react-router-dom';
import usr from "./data.json";
import md5 from 'md5';
import Comp from "./Components/Comp";
import Home from "./Components/Home/Home";
import "./App.css";

function App(){

    let user={
			username:'',
			password:'',
      email:''
		};

    const [formVal,setVal]=useState(user);
		const [formErr,setErr]=useState("");

    const lgout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('UserName')
        localStorage.clear();
        setVal({
          username:"",
          password:"",
          email:''
        });
        setErr("");
    }

    var em='';
    const logining=(dt)=>{
      if(dt.username!="" && dt.password!=""){
        var v=false;
        const p=usr.users.length;
        for(let i=0;i<p;i++){
          if(dt.username==usr.users[i].email && md5(dt.password)==usr.users[i].password){
            v=true;
            em=usr.users[i].username;
            localStorage.setItem("UserName",em);
          }
        }
        if(v){
          setVal({
            username:dt.username,
            password:dt.username,
            email:em
          });
        }else{
          setVal({
            username:"",
            password:"",
            email:''
          });
          setErr("User Name Or Password Is Incorrect !!!!");
        }
      }
    }

    return(
      <BrowserRouter>
        {(formVal.username =="" && formVal.password =="")?(
          <div className="App">
            <NavBar />
            <div className="app2">
                <Route  path="/Login" render={()=>
                (
                  <LoginPage logining={logining} errored={formErr} />
                )} /> 
                <Route path="/Register" component={RegisterPage} />
                <Route exact path="/" component={Comp} />
            </div>
          </div>
        ):(
           <Home logout={lgout} />
        )
        }
        </BrowserRouter>
    )
  }

export default App;

import React, {useState } from "react";
import NavBar from "./Components/Nav/Nav";
import LoginPage from "./Components/Login/Login";
import RegisterPage from "./Components/Register/Register";
import "./App.css";
import { BrowserRouter , Route } from 'react-router-dom';
import usr from "./data.json";


function App(){

    let user={
			username:'',
			password:'',
      email:''
		};

    const d=new Date();

    const [formVal,setVal]=useState(user);
		const [formErr,setErr]=useState("");

    const lgout=(e)=>{
        e.preventDefault();
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
        let i;
        for(i=0;i<p;i++){
          if(dt.username==usr.users[i].email && dt.password==usr.users[i].password){
            v=true;
            em=usr.users[i].username
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
          setErr("User Not Existe !!!!");
        }
      }
    }

    return(
      <BrowserRouter>
        {(formVal.username =="" && formVal.password =="")?(
          <div className="App">
            <NavBar />
            <div className="app2">
                <Route exact path="/Login" render={()=>
                (
                  <LoginPage logining={logining} errored={formErr} />
                )} /> 
                <Route path="/Register" component={RegisterPage} />
            </div>
          </div>
        ):(
           <div>
              <div className="contain">
                  <h1>Welcome {formVal.email} </h1>
                  <a onClick={lgout} href="/Login">Logout</a>
              </div>
              <footer>&copy; 2020 - {d.getFullYear()} | Salaheddine</footer>
          </div>
        )
        }
        </BrowserRouter>
    )
  }

export default App;

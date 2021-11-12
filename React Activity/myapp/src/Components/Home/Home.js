import React,{Component} from "react";

export default class Home extends Component{
    render(){
    const d=new Date();
        return(
            <div>
              <div className="contain">
                  <h1>Welcome <span className="usr">{localStorage.getItem('UserName')}</span> </h1>
                  <a onClick={()=>this.props.lgout()} href="/login" >Logout</a>
              </div>
              <footer>&copy; 2020 - {d.getFullYear()} | Salaheddine</footer>
          </div>
        )
    }
}
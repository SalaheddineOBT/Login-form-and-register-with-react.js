import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./index.css";

class Index extends Component{
  render(){
    return(
      <div className="Index">
        <App />
      </div>
    )
  }
}

ReactDOM.render(<Index />,document.getElementById('root'));
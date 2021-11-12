import React,{useState} from "react";
import "./Register.css";
import usr from "../../data.json";
import axios from "axios";
import md5 from "md5";

function RegisterPage(){

		const users={
			username:"",
			email:"",
			password:"",
			confirmer:""
		};

        const user1={
            id:0,
			username:"",
			email:"",
			password:"",
		};

		const [formValues,setValues ]=useState(users);
		const [formError,setError]=useState({});
        const [fov,setforv]=useState(user1);
		
		const hundlChange=(e) =>{
            
			const {name,value}=e.target;
			setValues({...formValues,[name]:value});
            setforv(
                {
                    id:usr.users[usr.users.length-1].id+1,
                    username:formValues.username,
                    email:formValues.email,
                    password:md5(formValues.password)
                }
            );
		}
		
		const hundlSubmit=(e) => {
			e.preventDefault();
			setError(Validation(formValues));
            if(Object.keys(formError).length===0){
                if(fov.username!="" && fov.password!="" && fov.email!=""){
                    axios.post("http://localhost:300/users/",fov)
                    .then(alert("Success Register ."));
                }
            }
		}
		
		const Validation = (values) => {
			const error={};
			
			const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
			
			if(!values.email){
				error.email="email is Required !!";
			}else if(!emailRegex.test(values.email)){
				error.email="email Forma is incorrect !!";
			}
			
			if(!values.username){
				error.username="User Name is Required !!";
			}
			
			if(!values.confirmer){
				error.confirmer="Confirme Password is Required !!";
			}else if(values.confirmer != values.password){
				error.confirmer = "Confirme Password is incorrect !!";
			}
			
			if(!values.password){
				error.password="Password is Required !!";
			}
			return error;
		}

        return(
		
            <div>
                <div className="Reg">
                <form onSubmit={hundlSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <th colSpan="3" className="titl">
                                <h1>Register Page</h1>
                            </th>
                        </tr>
                        <tr>
                            <td><label>User Name :</label></td>
                            <td>
                                <input type="text" name="username" value={formValues.username} placeholder="Enter Your User Name" onChange={hundlChange} />
                            </td>
                            <td>
                                <span></span>
                            </td>
                        </tr>
						<tr>
                            <td className="ts"></td>
                            <td colSpan="2" className="ts">
                                <span>{formError.username}</span>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Email :</label></td>
                            <td>
                                <input type="email" name="email" value={formValues.email} placeholder="Enter Your Email" onChange={hundlChange} />
                            </td>
                            <td>
                                <span></span>
                            </td>
                        </tr>
						<tr>
                            <td className="ts"></td>
                            <td colSpan="2" className="ts">
                                <span>{formError.email}</span>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Password :</label></td>
                            <td>
                                <input type="password" name="password" value={formValues.password} placeholder="Enter Your Password" onChange={hundlChange} />
                            </td>
                            <td><span></span></td>
                        </tr>
						<tr>
                            <td className="ts"></td>
                            <td colSpan="2" className="ts">
                                <span>{formError.password}</span>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Confirmer Password :</label></td>
                            <td>
                                <input type="password" name="confirmer" value={formValues.confirmer} placeholder="Confirme Your Password" onChange={hundlChange} />
                            </td>
                            <td>
                                <span></span>
                            </td>
                        </tr>
						<tr>
                            <td className="ts"></td>
                            <td colSpan="2" className="ts">
                                <span>{formError.confirmer}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdi1" colSpan="3">
                                <button>Register</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            </div>
        )
}

export default RegisterPage;
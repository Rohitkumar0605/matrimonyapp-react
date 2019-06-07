import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import swal from 'sweetalert';
import login from '../assets/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formdata: {
            loginName : "",
            password: ""
        }
        }
      }
    
      login=(event)=>{
        event.preventDefault();
          const {formdata}=this.state;
        //   console.log(this.state.logindata, this.state.logindata[0],this.state.logindata[1])
          return new Promise((resolve, reject) => {
            axios.post('http://10.117.189.210:8090/app/login',formdata).then(function (response) {
              resolve(response);
            }).catch(function (error) {
              reject(error);
            });
          }); 
      }
  loginHandler = (event)=>{
    const {formdata}=this.state;
    formdata[event.target.name]=event.target.value;
    this.setState({formdata});
    console.log(this.state.formdata, "name");
  }
   render() {
    return (
      <div className="login ">
          <h1 align="center" color="white">Matrimonal Login Form</h1>
          <form className='container'>
              <div className="form-group">
                  <label>User Name:</label>
                  <input type="text" className="form-control mb-2"  placeholder="User Name" name="loginName" onChange={this.loginHandler}/>
              </div>
              <div className="form-group">
                  <label>Last Name:</label>
                  <input type="password" className="form-control mb-2"  placeholder="Password" name="password" onChange={this.loginHandler}/>
              </div> 
              <div>
                  <button onClick={this.login}>Login</button>
                  <button type='reset'>Reset</button>
              </div>
          </form>
      </div>
    )
  }
}
export default Login;


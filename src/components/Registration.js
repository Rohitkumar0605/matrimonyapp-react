import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import swal from 'sweetalert';
import register from '../assets/register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regdata: {
            firstNameDto : "",
            lastNameDto : "",
            genderDto:"",
            ageDto:"",
            salaryDto:"",
            casteDto:"",
            religioPreferenceDto:"",
            openToManyDto:"",
            emailIdDto:"",
            mobileDto:"",
            dobDto:""
        }
        }
      }
    
      register=(event)=>{
        event.preventDefault();
          const {regdata}=this.state;
        //   console.log(this.state.logindata, this.state.logindata[0],this.state.logindata[1])
          return new Promise((resolve, reject) => {
            axios.post('http://10.117.189.210:8090/app/createProfile',regdata).then(function (response) {
              resolve(response);
            }).catch(function (error) {
              reject(error);
            });
          }); 
      }
  regHandler = (event)=>{
    const {regdata}=this.state;
    regdata[event.target.name]=event.target.value;
    this.setState({regdata});
    console.log(this.state.regdata, "name");
  }
   render() {
    return (
      <div className="reg ">
          <div className="container">
              <h1 align="center">Matrimonal Registration Form</h1>
  <form >
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="firstNameDto" placeholder="First Name" onChange={this.regHandler}/>

    <label for="lname">Last Name:</label>
    <input type="text" id="lname" name="lastNameDto" placeholder="Last name.."onChange={this.regHandler}/>
    
    <label for="lname">Age:</label>
    <input type="text" id="lname" name="ageDto" placeholder="Age.." onChange={this.regHandler}/> 

        <div className="form-group">
                  <label> Gender:</label>
                  <select class="form-control" name="genderDto" onChange={this.regHandler} >
                      <option name="genderDto" onChange={this.regHandler}>Male</option>
                      <option name="genderDto" onChange={this.regHandler}>Female</option>
                      <option name="genderDto" onChange={this.regHandler}>Others</option>
                  </select>
              </div> 

    <label for="lname">Salary:</label>
    <input className="form-control mb-2" type="number" id="lname" name="salaryDto" placeholder="salary" onChange={this.regHandler}/> 

    <label for="lname">caste:</label>
    <input className="form-control mb-2" type="text" id="lname" name="casteDto" placeholder="caste" onChange={this.regHandler}/> 
    
    <label for="lname">Mobile.No:</label>
    <input className="form-control mb-2" type="number" id="lname" name="mobileDto" placeholder="contact Number" onChange={this.regHandler}/> 
    
    <label for="lname">Email Id:</label>
    <input className="form-control mb-2" type="email" id="lname" name="emailIdDto" placeholder="Email id" onChange={this.regHandler}/>

    <div className="form-group">
                  <label> Religion Preferences:</label>
                  <select class="form-control" name="religioPreferenceDto" onChange={this.regHandler} >
                      <option name="religioPreferenceDto" onChange={this.regHandler}>As per My Religion</option>
                      <option name="religioPreferenceDto" onChange={this.regHandler}>Any Religion</option>
                  </select>
              </div> 
    <div className="form-group">
                  <label> Open To Many:</label>
                  <select class="form-control" name="openToManyDto" onChange={this.regHandler} >
                      <option name="openToManyDto" onChange={this.regHandler}>yes</option>
                      <option name="openToManyDto" onChange={this.regHandler}>No</option>
                  </select>
              </div> 

     <label  for="lname">DOB:</label>
    <input className="form-control mb-2" type="date" id="lname" name="dobDto" placeholder="enter DOB" onChange={this.regHandler}/>

   <br/> <button onClick={this.register}>Register</button>
  </form>
</div>

      </div>
    )
  }
}
export default Register;


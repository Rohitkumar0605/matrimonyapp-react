import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import accept from '../assets/accept.png';
import decline from '../assets/decline.png';
import menu from '../assets/menu.png';
import list from '../assets/list.css';
class Listof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      profileId:props.match.params.profileIdParam,
      mat:{
        profileId:props.match.params.profileIdParam,
        actionProfileId:66,
        actionProfileName:"diana",
        action:"intrest"

    }
     
    }
  }
  componentDidMount() {
    const {profileId}=this.state;
    this.getData().then(response => {
      console.log(response.data[0].profileId)
      this.setState({ list: response.data });
      this.setState({ actionProfileId: response.data[0].profileId });
      this.setState({ actionProfileName: response.data[0].firstName });
      // console.log(this.state.list)
      // console.log(this.state.actionProfileId);
      // console.log(this.state.actionProfileName);
    });
  }
  accept=()=>{
    const{mat}=this.state;
    this.setState({ action : "interest" });
    console.log(mat,"mat");
    return new Promise((resolve, reject) => {
      axios.put(`http://10.117.189.210:9090/app/updateInterest`,mat).then(function (response) {
        resolve(response);
        
      }).catch(function (error) {
        reject(error);
      });
    });
  }
  
  getData = () => {
    const {profileId}=this.state;
    return new Promise((resolve, reject) => {
      axios.get(`http://10.117.189.210:9090/app/getFilteredProfile/${profileId}`).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
  list=()=>{
    const{profileId}=this.state;
    this.props.history.push('/listof/' + profileId);
  }
  intrestedlist=()=>{
    const{profileId}=this.state;
    this.props.history.push('/intrested/' + profileId);
  }
  acceptedlist=()=>{
    const{profileId}=this.state;
    this.props.history.push('/accepted/' + profileId);
  }
  rejectedlist=()=>{
    const{profileId}=this.state;
    this.props.history.push('/rejected/' + profileId);
  }
   render() {
     console.log(this.state.actionProfileId)
     console.log(this.state.actionProfileName)
     console.log(this.state.mat);
    return(
      <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light" >
       <Link to="/details"><img src={menu} width="40px" height="40px"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <b><i><button onClick={this.list} className="btn btn-link" to="/list">Profiles List</button></i></b>
      </li>
      <li className="nav-item">
      <b><i><button onClick={this.intrestedlist} className="btn btn-link" to="/list">Intrested profiles</button></i></b>
      </li>
      <li className="nav-item">
      <b><i><button onClick={this.acceptedlist} className="btn btn-link" to="/list">Accepted profiles</button></i></b>
      </li>
     <li className="nav-item">
     <b><i><button onClick={this.rejectedlist} className="btn btn-link" >Rejected profiles</button></i></b>
      </li>
      <button className="btn btn-link"><Link to="/dashboard">Logout</Link></button>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
          <table className="table list">
            <thead>
              <tr><td>Profile id</td><td>First Name</td><td>Age</td><td>Salary</td><td>Caste</td></tr>
            </thead>
      <tbody>
          {
          this.state.list.map((item, i) => {
                                return (
                                    <tr key={i}>
                                       <td>{item.profileId}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.caste}</td>
                                        <td><button type="button" onClick={this.accept}><img width="50px" height="50px" src={accept}/></button></td>
                                    </tr>
                                    
                                )
                            })
                        }
         </tbody>
         </table>                                  
                  </div>
    )
  }
}
export default Listof;


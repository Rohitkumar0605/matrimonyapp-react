import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import accept from '../assets/accept.png';
import decline from '../assets/decline.png';
import list from '../assets/list.css';
class Listof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      profileId:props.match.params.profileIdParam
     
    }
  }
  componentDidMount() {
    const {profileId}=this.state;
      console.log(profileId)
    this.getData().then(response => {
      this.setState({ list: response.data });
      console.log(this.state.list)
    });
  }
  getData = () => {
    const {profileId}=this.state;
    return new Promise((resolve, reject) => {
      axios.get(`http://10.117.189.210:8090/app/getFilteredProfile/${profileId}`).then(function (response) {
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
    return(
      <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">Navbar</a>
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
                                        <td><button type="button"><img width="50px" height="50px" src={accept}/></button></td>
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


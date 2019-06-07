import React,{Component} from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Nav extends Component{
  // list=()=>{
  //   this.props.history.push('/listof/' + profileId);
  // }
  // intrestedlist=()=>{
  //   this.props.history.push('/accepted/' + profileId);
  // }
  // acceptedlist=()=>{
  //   this.props.history.push('/intrested/' + profileId);
  // }
  // rejectedlist=()=>{
  //   this.props.history.push('/rejected/' + profileId);
  // }
    render(){
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
            </div>
        )
    }
}
export default Nav;
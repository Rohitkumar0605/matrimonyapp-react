import React,{Component} from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
class Nav extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/list">Profiles List</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/list">Intrested profiles</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/list">Intrested profiles</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/list">Rejected profiles</Link>
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
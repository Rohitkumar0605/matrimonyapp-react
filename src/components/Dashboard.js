import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import dashboard from '../assets/dashboard.css';
import connect from '../assets/connect.png';
import interact from '../assets/interact.png';
import signup from '../assets/signup.png';
class Dashboard extends Component {
render() {
    return (
    <div className="dash">
        <div>
       <img margin-left="100px" style={{height: '50px'}}  src="https://img2.shaadi.com/assests/2016/images/home-logo.png"/>
   </div> 
   <div >
       <button className="btn1 bm"><Link to='/'>help</Link></button>
       <button className="btn2 bm"><Link to='/login'>Login</Link></button>
        </div>
        <div>
            <h1 className="text">world's No.1 Matrimonal Service</h1>
            <h3 className="subtext">Search By Community,Profession</h3>
        </div>
        <div><button className="bt"><Link to='/register'>Let's Begin</Link></button></div>
        <div>
            <h1 className="tx">Find someOne Special</h1>
           <span> <Link to='/register'><img className="icon1" width="100px" height="100px" src={signup} alt='signup'/></Link>
           <Link to='/login'><img className="icon2" width="90px" height="100px" src={connect} alt='connect'/></Link>
           <img className="icon3" width="100px" height="100px" src={interact} alt='interact'/></span>
           <span><h3 className="icon1" >Signup</h3>
           <h3 className="ictx">connect</h3>
           <h3 className="ictx1" margin-top="10px">interact</h3></span>

        </div>
  </div> 
    );
  }
}

export default Dashboard;

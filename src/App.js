import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Registration from './components/Registration';
import Nav from './components/Nav';
import Listof from './components/Listof';
import Accepted from './components/Accepted';
import Rejected from './components/Rejected';
import Intrested from './components/Intrested';

class App extends Component {
  render(){
    return (
      <div>
      <BrowserRouter>
      <div>
            <Switch>
               <Route path='/' component={Dashboard} exact />
               <Route path='/dashboard' component={Dashboard}/>
               <Route path='/listof/:profileIdParam' component={Listof}/>
               <Route path='/login' component={Login}/>
               <Route path='/register' component={Registration}/>
               <Route path="/accepted/:profileIdParam" component={Accepted}/>
               <Route path="/intrested/:profileIdParam" component={Intrested}/>
               <Route path="/rejected/:profileIdParam" component={Rejected}/>
               <Route path='/nav' component={Nav}/>
            </Switch>
         </div>
      </BrowserRouter>
   </div>
  );
}
}
export default App;

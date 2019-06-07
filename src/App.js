import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Registration from './components/Registration';
import Nav from './components/Nav';

class App extends Component {
  render(){
    return (
      <div>
      <BrowserRouter>
      <div>
            <Switch>
               <Route path='/' component={Dashboard} exact />
               <Route path='/dashboard' component={Dashboard}/>
               <Route path='/login' component={Login}/>
               <Route path='/register' component={Registration}/>
               <Route path='/nav' component={Nav}/>
            </Switch>
         </div>
      </BrowserRouter>
   </div>
  );
}
}
export default App;

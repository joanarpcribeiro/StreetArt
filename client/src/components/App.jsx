import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import AddCountry from './pages/AddCountry';
import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import Navbar from '../MainNavbar';
import List from './pages/List';
import StreetArtDetail from './pages/StreetArtDetail';

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     countries: []
  //   }
  // }

  // handleLogoutClick(e) {
  //   api.logout()
  // }

  render() {
    return (
      <div className="App">
       <header className="App-header">
         <Navbar/>
         {/* <NavLink to="/" exact>Home</NavLink> */}
         {/* <NavLink to="/list">List of Street Arts</NavLink> */}
         {/* <NavLink to="/map">Add country</NavLink>
         <NavLink to="/secret">New Street Art</NavLink> */}
         {/* {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
         {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
         {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>} */}
       </header>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/list" component={List} />
         <Route path="/map" component={AddCountry} />
         <Route path="/new-street-art" component={Secret} />
         <Route path="/street-art-detail" component={StreetArtDetail} />
         <Route path="/signup" component={Signup} />
         <Route path="/login" component={Login} />
         <Route render={() => <h2>404</h2>} />
       </Switch>
     </div>
    );
  }
}
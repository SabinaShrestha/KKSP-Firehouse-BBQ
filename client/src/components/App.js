import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import PlaceOrder from './PlaceOrder';
import Checkout from './Checkout';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' component={Menu} />
            <ProtectedRoute exact path='/order' component={PlaceOrder} />
            <ProtectedRoute exact path='/checkout' component={Checkout} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;

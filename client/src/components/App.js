import React, { Componenet } from 'react';
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
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Segment } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <Segment style={styles.background}>
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
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: '#000000',
  },
}
export default App;

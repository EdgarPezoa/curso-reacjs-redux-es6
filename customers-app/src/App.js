import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Containers
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={ HomeContainer } />
        <Route exact path='/customers' component={ CustomersContainer } />
        <Switch>
          <Route path='/customer/new' component={ NewCustomerContainer } />
          <Route path='/customer/:dni' render={ props => <CustomerContainer {...props} dni={ props.match.params.dni } />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

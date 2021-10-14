import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';

import Navigation from './components/Navigation';
import Dashboard from './screens/Dashboard';
import OrderList from './screens/OrderList';
import CustomersList from './screens/CustomersList';
import Messages from './screens/Messages';
import Settings from './screens/Settings';



function App() {

  const [isToggle, setIsToggle] = useState(null);
  const handleToggle = () => {
    if (isToggle == null) {
      setIsToggle('active');
    } else {
      setIsToggle(null);
    }
  }


  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navigation toggle={isToggle}  />
          <div className={`main ${isToggle}`}>
            <div className="topbar">
              <div className="toggle" onClick={handleToggle}>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div className="search">
                <label>
                  <input type="text" placeholder="Search here" />
                  <FontAwesomeIcon icon={faSearch}/>
                </label>
              </div>
              <div className="user">
                <img src="./images/user.jpg"/>
              </div>
            </div>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/orders' component={OrderList} />
              <Route path='/customers' component={CustomersList} />
              <Route path='/messages' component={Messages} />
              <Route path='/settings' component={Settings} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

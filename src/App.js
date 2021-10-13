import logo from './logo.svg';
import Navigation from './components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation />
        <div class="main">
          <div class="topbar">
            <div class="toggle">
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
        </div>
      </div>
    </div>
  );
}

export default App;

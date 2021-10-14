import { React, useState } from 'react';
import jsonData from './data/jsonData';
import Navigation from './components/Navigation';
import StatisticCard from './components/StatisticCard';
import RecentOrders from './components/RecentOrders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faComment, faDollarSign, faEye, faMoneyBill, faMoneyBillAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';


function App() {

  const [isToggle, setIsToggle] = useState(null);
  
  const [orders, setOrders] = useState(jsonData.orders);
  const [customers, setCustomers] = useState(jsonData.customers);

  const handleToggle = () => {
    if (isToggle == null) {
      setIsToggle('active');
    } else {
      setIsToggle(null);
    }
  }


  return (
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
          <div className="cardBox">
            <StatisticCard numbers="1,504" title="Daily Views" icon={<FontAwesomeIcon icon={faEye} />} />
            <StatisticCard numbers="80" title="Sales" icon={<FontAwesomeIcon icon={faCartPlus} />} />
            <StatisticCard numbers="124" title="Comments" icon={<FontAwesomeIcon icon={faComment} />} />
            <StatisticCard numbers="$7854" title="Earnings" icon={<FontAwesomeIcon icon={faMoneyBillAlt} />} />
          </div>
          <div className="details">
            <div className="recentOrders">
              <div className="cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" className="btn">View All</a>
              </div>
              <RecentOrders orders={orders}/>
            </div>
            <div className="recentCustomers">
              <div className="cardHeader">
                <h2>Recent Customers</h2>
              </div>
              <table>
                {customers.map((item) => {
                  return (
                    <tr>
                      <td width="60px">
                        <div className="imgBox"><img src={`./images/${item.avatar}`} /></div>
                      </td>
                      <td><h4>{item.name}<br /><span>{item.city}</span></h4></td>
                    </tr>
                  )
                  })
                }
                  
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

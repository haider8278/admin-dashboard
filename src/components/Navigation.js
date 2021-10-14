import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCog, faComment, faHome, faSignOutAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({toggle}) => {
    console.log(toggle);
    return (
        <div className={`navigation ${toggle}`}>
            <ul>
                <li>
                    <a href="/">
                        <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                        <span className="title">Haider8278</span>
                    </a>
                </li>
                <li>
                    <NavLink to="/" activeClassName="selected">
                        <span className="icon"><FontAwesomeIcon icon={faHome} /></span>
                        <span className="title">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/customers" activeClassName="selected">
                        <span className="icon"><FontAwesomeIcon icon={faUsers} /></span>
                        <span className="title">Customers</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders" activeClassName="selected">
                        <span className="icon"><FontAwesomeIcon icon={faCartPlus} /></span>
                        <span className="title">Orders</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages" activeClassName="selected">
                        <span className="icon"><FontAwesomeIcon icon={faComment} /></span>
                        <span className="title">Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName="selected">
                        <span className="icon"><FontAwesomeIcon icon={faCog} /></span>
                        <span className="title">Settings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signout" activeClassName="selected">
                        <span className="icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
                        <span className="title">Signout</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;


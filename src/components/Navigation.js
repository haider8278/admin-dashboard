import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faComment, faHome, faQuestion, faSignOutAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({toggle}) => {
    console.log(toggle);
    return (
        <div className={`navigation ${toggle}`}>
            <ul>
                <li>
                    <a href="#">
                        <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                        <span className="title">Haider8278</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><FontAwesomeIcon icon={faHome} /></span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><FontAwesomeIcon icon={faUsers} /></span>
                        <span className="title">Customers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><FontAwesomeIcon icon={faComment} /></span>
                        <span className="title">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><FontAwesomeIcon icon={faQuestion} /></span>
                        <span className="title">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><FontAwesomeIcon icon={faCog} /></span>
                        <span className="title">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
                        <span className="title">Signout</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;


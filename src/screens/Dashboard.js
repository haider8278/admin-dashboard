import { React, useState } from 'react';
import jsonData from '../data/jsonData';
import StatisticCard from '../components/StatisticCard';
import RecentOrders from '../components/RecentOrders';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faComment,faEye, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

const Dashboard = function () {
    const [orders, setOrders] = useState(jsonData.orders);
    const [customers, setCustomers] = useState(jsonData.customers);
    return (
        <>
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
                    <RecentOrders orders={orders} />
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
        </>
    )
}

export default Dashboard;
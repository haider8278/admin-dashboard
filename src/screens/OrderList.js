import { React,useState } from 'react';
import jsonData from '../data/jsonData';
import RecentOrders from '../components/RecentOrders';


const OrderList = function () {
    const [orders, setOrders] = useState(jsonData.orders);
    const [customers, setCustomers] = useState(jsonData.customers);
    return (
        
        <div className="details full-width">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Orders List</h2>
                </div>
                <RecentOrders orders={orders} />
            </div>
        </div>
    )
}

export default OrderList;
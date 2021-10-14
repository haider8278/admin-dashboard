//import { React } from 'react';

const RecentOrders = function ({ orders }) {
    const myOrders = orders.map((item, index) => {
        return (<tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.payment}</td>
            <td><span className={`status ${item.status}`}>{item.status.toUpperCase()}</span></td>
        </tr>)
    })

    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                {myOrders}
            </tbody>
        </table>
    )
}

export default RecentOrders;
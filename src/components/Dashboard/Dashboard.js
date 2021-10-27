import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const email = 'hero@gmail.com';

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <h3>Welcome to dashboard <br /> {orders[0]?.email}</h3>
            <p>Your Orders : {orders.length}</p>

            <div className='product-container'>
                {
                    orders.map(order =>
                        // console.log(order)
                        <div key={order._id} style={{ backgroundColor: 'goldenrod', padding: '20px', borderRadius: '10px' }}>
                            <h3>Product: {order?.productName}</h3>
                            <p>Price: {order?.price}</p>
                            <p>quantity: {order?.quantity}</p>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default Dashboard;
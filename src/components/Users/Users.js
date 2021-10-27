import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Users.css';

const Users = () => {
    const [products, setProducts] = useState([]);
    // get data from database
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if (proceed) {
            fetch(`http://localhost:5000/products/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('delete success');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
                    }

                });
        }



    }

    return (
        <div>
            <h2>All Products : {products.length}</h2>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    >

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Users;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    // get data from database
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleted])

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
                        // const remaining = products.filter(product => product._id !== id);
                        // setProducts(remaining)
                        setIsDeleted(true);
                    }
                    else {
                        setIsDeleted(false)
                    }
                });
        }

    }

    // handle buy product
    const handleBuy = (index) => {
        const buyProducts = products[index];
        buyProducts.email = 'hero@gmail.com'
        console.log(buyProducts);
        axios.post('http://localhost:5000/buyProducts', buyProducts)
            .then(res => {
                if (res.data.insertedId) {
                    alert('place order success');
                }
            })

    }

    return (
        <div>
            <h2>All Products : {products.length}</h2>
            <div className='product-container'>
                {
                    products.map((product, index) => <Product
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                        handleBuy={handleBuy}
                        index={index}
                    >

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;
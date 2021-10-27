import React from 'react';

const Product = (props) => {
    const { handleDelete } = props;
    const { productName, price, quantity, _id } = props.product;

    return (
        <div style={{ backgroundColor: 'goldenrod', padding: '20px', borderRadius: '10px' }}>
            <h3>Product: {productName}</h3>
            <p>Price: {price}</p>
            <p>quantity: {quantity}</p>

            <button >update</button>
            <button onClick={() => handleDelete(_id)}>delete</button>
        </div>
    );
};

export default Product;
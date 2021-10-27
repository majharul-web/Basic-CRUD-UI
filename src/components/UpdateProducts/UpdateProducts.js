import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateProducts = () => {
    const { id } = useParams();

    const [products, setProducts] = useState({});

    // get single products

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // hookform
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:5000/products/update/${id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            // .then()

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update product')
                }
            })
    }

    return (
        <div className='addUser'>
            <h3>Update {products?.productName}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={products?.productName} {...register("productName")} />
                <input defaultValue={products?.price} type="number" {...register("price")} />
                <input defaultValue={products?.quantity} type="number" {...register("quantity")} />
                <input type="submit" value='update' />
            </form>

        </div>
    );
};

export default UpdateProducts;
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddUser.css';

const AddUser = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('product insert success');
                    reset();
                }

            })
    }

    return (
        <div className='addUser'>
            <h2>Please Add Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("productName")} placeholder='enter your product' />
                <input type="number" {...register("price")} placeholder='price' />
                <input type="number" {...register("quantity")} placeholder='quantity' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddUser;
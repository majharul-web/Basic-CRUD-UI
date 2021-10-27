import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Implement Basic CRUD</h2>
            <Link to='products'>
                <button>See Products</button>
            </Link>
        </div>
    );
};

export default Home;
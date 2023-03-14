import React, { useEffect } from 'react';
import axios from 'axios';
import classes from './Home.module.scss';

const Home = () => {
    useEffect(() => {
        axios
            .get('http://localhost:8081/api/users/')
            .then((response) => console.log(response.data))
            .catch((error) => console.error(error));
    }, []);

    return <div>Home</div>;
};

export default Home;

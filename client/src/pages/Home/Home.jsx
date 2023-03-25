import React from 'react';
import Chart from '../../components/Chart/BarChart/Chart';
import PieChart from '../../components/Chart/PieChart/PieChart';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// import * as userServices from '../../utils/apiServices/userServices';
import classes from './Home.module.scss';

const Home = () => {
    return (
        <div>
            <Chart />
            <PieChart />
        </div>
    );
};

export default Home;

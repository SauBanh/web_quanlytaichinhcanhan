import React from 'react';
import Chart from '../../components/Chart/BarChart/Chart';
import PieChart from '../../components/Chart/PieChart/PieChart';
import Wrapper from '../../components/Wrapper/Wrapper';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// import * as userServices from '../../utils/apiServices/userServices';

const Home = () => {
    return (
        <Wrapper>
            <div className={cx('warrper')}>
                <div>
                    <h3>Biểu đồ thu nhập</h3>
                    <Chart />
                </div>
                <div>
                    <h3>Thống kê phần trăm chi tiêu</h3>
                    <PieChart />
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;

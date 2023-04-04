import React, { useState, useEffect } from 'react';
import Chart from '../../components/Chart/BarChart/Chart';
import Cookies from 'js-cookie';
import * as statistical from '../../utils/apiServices/statistical';

import RadarChart from '../../components/Chart/RadarChart/RadarChart';
import LineChartt from '../../components/Chart/LineChart/LineChartt';
import Wrapper from '../../components/Wrapper/Wrapper';

import Grid from '@mui/material/Grid';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Home = () => {
    const [top7Revenue, setTop7Revenue] = useState([]);
    const [sumSpending, setSumSpending] = useState([]);

    const token = Cookies.get('token');

    useEffect(() => {
        const getapiSumSpending = async () => {
            const result = await statistical.getCalcSpeding(token);
            if (result.status === 200) {
                const chartApi = result.data.data.map((item) => {
                    return {
                        // id: item.idr,
                        name: item.category,
                        value: Number(item.value),
                    };
                });
                await setSumSpending(chartApi);
            } else if (result.status === 403) {
                console.log('token hết hạn');
            }
        };

        getapiSumSpending();

        const getapiTop7Revenue = async () => {
            const result = await statistical.getTop7Revenue(token);
            if (result.status === 200) {
                const chartTop7 = result.data.data.map((item) => {
                    return {
                        name: item.name,
                        value: item.value,
                    };
                });
                setTop7Revenue(chartTop7);
            } else if (result.status === 403) {
                console.log('token hết hạn');
            }
        };
        getapiTop7Revenue();
    }, []);
    return (
        <div className={cx('warrper')}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Wrapper>
                        <div>
                            <h3>Biểu đồ thu nhập</h3>
                            <Chart data={top7Revenue} />
                        </div>
                    </Wrapper>
                </Grid>
                <Grid item xs={12}>
                    <Wrapper>
                        <div>
                            <h3>Biểu đồ chi tiêu</h3>
                            <LineChartt data={sumSpending} />
                        </div>
                    </Wrapper>
                </Grid>
                {/* <Grid item xs={5}>
                    <Wrapper>
                        <div>
                            <h3>Biểu đồ chi tiêu</h3>
                            <RadarChart data={sumSpending} />
                        </div>
                    </Wrapper>
                </Grid> */}
            </Grid>
        </div>
    );
};

export default Home;

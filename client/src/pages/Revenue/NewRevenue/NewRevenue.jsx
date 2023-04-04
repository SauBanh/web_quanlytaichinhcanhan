import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import Wrapper from '../../../components/Wrapper/Wrapper';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as revenueServices from '../../../utils/apiServices/revenueServices';

import classNames from 'classnames/bind';
import styles from './NewRevenue.module.scss';

const cx = classNames.bind(styles);

const NewRevenue = () => {
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const schema = yup.object().shape({
        value: yup
            .number()
            .typeError('Tiền phải là số')
            .positive('Tiền phải là số dương')
            .min(10000, 'Tiền phải trên 10000')
            .transform((value, originalValue) => (originalValue.trim() === '' ? null : value))
            .required('Vui lòng nhập Tiền'),
        name: yup.string().required('Vui lòng nhập loại doanh thu'),
        desc: yup.string().required('Vui lòng nhập mô tả chi tiết'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        let date = new Date();
        const postRevenue = async () => {
            const currentUser = user.id;
            const result = await revenueServices.postRevenue(
                {
                    id: currentUser,
                    adddate: date,
                    ...data,
                },
                token,
            );
            if (result.status === 200) {
                console.log('thêm thành công');
            }
        };
        await postRevenue();
        navigate('/revenues');
    };

    return (
        <div className={cx('warpper')}>
            <Wrapper>
                <div className={cx('container')}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Typography variant="h5" component="h1" gutterBottom>
                                    Thêm doanh thu
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/revenues">
                                    <Tooltip arrow title="Quay lại revenue">
                                        <Button
                                            style={{ float: 'right' }}
                                            variant="contained"
                                            startIcon={<ArrowBackIcon />}
                                        >
                                            Back
                                        </Button>
                                    </Tooltip>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={cx('boxinputRevenue')}>
                                    <label>Loại doanh thu</label>
                                    <input {...register('name', { required: true })} />
                                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={cx('boxinputRevenue')}>
                                    <label>Số tiền</label>
                                    <input type="number" {...register('value', { min: 1 }, { required: true })} />
                                    {errors.value && <p style={{ color: 'red' }}>{errors.value.message}</p>}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={cx('boxinputRevenue')}>
                                    <label>Mô tả chi tiết</label>
                                    <input {...register('desc', { required: true })} />
                                    {errors.desc && <p style={{ color: 'red' }}>{errors.desc.message}</p>}
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Tooltip arrow title="Thêm mới revenue">
                                    <input className={cx('btnSubmit')} type="submit" value="Thêm mới" />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={12}>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        width: '100%',
                                    }}
                                    to="/revenues"
                                >
                                    <Tooltip arrow title="Hủy thêm revenue">
                                        <Button
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                fontWeight: '600',
                                                fontSize: '15px',
                                            }}
                                            variant="contained"
                                            color="error"
                                        >
                                            Hủy
                                        </Button>
                                    </Tooltip>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Wrapper>
        </div>
    );
};

export default NewRevenue;

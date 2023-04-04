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

import * as spendingServices from '../../../utils/apiServices/spendingServices';

import classNames from 'classnames/bind';
import styles from './NewSpending.module.scss';

const cx = classNames.bind(styles);

const cates = [
    {
        idcc: 1,
        name: 'Sinh hoạt',
    },
    {
        idcc: 2,
        name: 'Ăn uống',
    },
    {
        idcc: 3,
        name: 'Giải trí',
    },
    {
        idcc: 4,
        name: 'Mua sắm',
    },
    {
        idcc: 5,
        name: 'Du lịch',
    },
    {
        idcc: 6,
        name: 'Giáo dục',
    },
    {
        idcc: 7,
        name: 'Vật nuôi',
    },
    {
        idcc: 8,
        name: 'Thể thao',
    },
    {
        idcc: 9,
        name: 'Khác',
    },
];

const NewSpending = () => {
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
        idc: yup
            .number()
            .transform((idc, originalValue) => (originalValue.trim() === '' ? null : idc))
            .required('Vui lòng chọn một doanh mục chi tiêu'),
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
            const result = await spendingServices.postSpending(
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
        navigate('/spendings');
    };

    return (
        <div className={cx('warpper')}>
            <Wrapper>
                <div className={cx('container')}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Typography variant="h5" component="h1" gutterBottom>
                                    Thêm chi tiêu
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/spendings">
                                    <Tooltip arrow title="Quay lại spending">
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
                                    <label>Loại chi tiêu</label>
                                    <input {...register('name', { required: true })} />
                                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className={cx('boxinputRevenue')}>
                                    <label>Số tiền</label>
                                    <input type="number" {...register('value', { min: 1 }, { required: true })} />
                                    {errors.value && <p style={{ color: 'red' }}>{errors.value.message}</p>}
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <div className={cx('boxinputRevenue')}>
                                    <label>Danh mục</label>
                                    <select
                                        style={{
                                            fontSize: '20px',
                                            height: '44.8px',
                                            padding: '10px',
                                            borderRadius: '5px',
                                        }}
                                        {...register('idc', { required: true })}
                                        id="idc"
                                        name="idc"
                                    >
                                        <option value="">-- Chọn tùy chọn --</option>
                                        {cates.map((cate) => (
                                            <option key={cate.idcc} value={cate.idcc}>
                                                {cate.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.idc && <p style={{ color: 'red' }}>{errors.idc.message}</p>}
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
                                <Tooltip arrow title="Thêm mới spending">
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
                                    to="/spendings"
                                >
                                    <Tooltip arrow title="Hủy thêm spending">
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

export default NewSpending;

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import * as spendingServices from '../../utils/apiServices/spendingServices';

import SpedingTable from '../../components/Table/SpedingTable/SpedingTable';

import Wrapper from '../../components/Wrapper/Wrapper';

import styles from './Spending.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Spending = () => {
    const [isAdd, setisAdd] = useState(false);
    const [valueSelect, setValueSelect] = useState(1);
    const [dataspending, setDataSpending] = useState([]);
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [desc, setDesc] = useState('');
    const token = Cookies.get('token');
    useEffect(() => {
        const getapiRevenue = async () => {
            const result = await spendingServices.getSpending(token);
            if (result.status === 200) {
                console.log('thêm thành công');
                setDataSpending(result.data.spendings);
            } else if (result.status === 403) {
                console.log('token hết hạn');
            }
        };
        getapiRevenue();
    }, []);

    const data = [
        {
            ids: 1,
            idc: 1,
            name: 'test',
            value: 1110,
            adddate: '2023-03-25',
            description: '123test',
        },
        {
            ids: 1,
            idc: 3,
            name: 'test',
            value: 1110,
            adddate: '2023-03-25',
            description: '123test',
        },
        {
            ids: 1,
            idc: 3,
            name: 'test',
            value: 1110,
            adddate: '2023-03-25',
            description: '123test',
        },
        {
            ids: 1,
            idc: 2,
            name: 'test',
            value: 1110,
            adddate: '2023-03-25',
            description: '123test',
        },
        {
            ids: 1,
            idc: 2,
            name: 'test',
            value: 1110,
            adddate: '2023-03-25',
            description: '123test',
        },
        {
            ids: 1,
            idc: 1,
            name: 'test',
            value: 1110,
            adddate: '2023-03-25',
            description: '123test',
        },
        {
            ids: 1,
            idc: 3,
            name: 'test',
            value: 1110,
            adddate: '2023-03-25',
            description: '123test',
        },
    ];
    const categorys = [
        {
            idc: 1,
            name: 'Giải trí',
        },
        {
            idc: 2,
            name: 'Ăn uống',
        },
        {
            idc: 3,
            name: 'Sức khỏe',
        },
        {
            idc: 4,
            name: 'Mua sắm',
        },
        {
            idc: 5,
            name: 'Sinh hoạt',
        },
    ];
    const handleChangeSelect = (event) => {
        setValueSelect(event.target.value);
        console.log(valueSelect);
    };
    const handleAdd = (e) => {
        e.preventDefault();
        const test = {
            title: title,
            value: value,
            desc: desc,
            valueSelect: Number(valueSelect),
        };
        console.log(test);
    };
    const renderAddChiTieu = () => (
        <div className={cx('formadd')}>
            <Wrapper>
                <form onSubmit={handleAdd}>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="Loại doanh thu"
                        required
                    />
                    <select value={valueSelect} onChange={handleChangeSelect}>
                        {categorys.map((category) => (
                            <option key={category.name} value={category.idc}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        placeholder="Số tiền"
                        min="1"
                        required
                    />
                    <input
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        placeholder="Chi tiết"
                        required
                    />
                    <button onClick={handleAdd}>Thêm</button>
                    <button onClick={() => setisAdd(!isAdd)}>Hủy</button>
                </form>
            </Wrapper>
        </div>
    );
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h2>Doanh thu hàng tháng</h2>
                    <button onClick={() => setisAdd(!isAdd)}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                        <span>Thêm</span>
                    </button>
                </div>
                {isAdd && renderAddChiTieu()}
                <Wrapper>
                    {dataspending.length === 0 ? (
                        <p>Chưa tạo doanh thu tháng này</p>
                    ) : (
                        <SpedingTable dataFake={dataspending} />
                    )}
                </Wrapper>
            </div>
        </div>
    );
};

export default Spending;

import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (path, token) => {
    const response = await request.get(path, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const post = async (path, data) => {
    const response = await request.post(path, data);
    return response;
};

export const postToken = async (path, data, token) => {
    const response = await request.post(path, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const remove = async (path, token) => {
    const response = await request.delete(path, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const put = async (path, data, token) => {
    const response = await request.put(path, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export default request;

import * as request from '../request';

export const postSpending = async (payload, token) => {
    try {
        const res = await request.postToken('/spending/', payload, token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getSpendings = async (token) => {
    try {
        const res = await request.get('/spending/', token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getSpending = async (token, id) => {
    try {
        const res = await request.get(`/spending/${id}`, token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const delSpending = async (idr, currentUser, token) => {
    try {
        const path = `/spending/${idr}/${currentUser}`;
        const res = await request.remove(path, token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const putSpending = async (idr, currentUser, data, token) => {
    try {
        const path = `/spending/${idr}/${currentUser}`;
        const res = await request.put(path, data, token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

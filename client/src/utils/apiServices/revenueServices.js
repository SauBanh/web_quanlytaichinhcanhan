import * as request from '../request';

export const postRevenue = async (payload, token) => {
    try {
        const res = await request.postToken('/revenue/', payload, token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getRevenue = async (token) => {
    try {
        const res = await request.get('/revenue/', token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const delRevenue = async (idr, currentUser, token) => {
    try {
        const path = `/revenue/${idr}?uid=${currentUser}`;
        const res = await request.remove(path, token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const putRevenue = async (idr, currentUser, data, token) => {
    try {
        const path = `/revenue/${idr}?uid=${currentUser}`;
        const res = await request.put(path, data, token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

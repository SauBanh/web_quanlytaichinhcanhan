import * as request from '../request';

export const postRevenue = async (payload, token) => {
    try {
        const res = await request.postToken('/revenue/', payload, token);
        return res.data;
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

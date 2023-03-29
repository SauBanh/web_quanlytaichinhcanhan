import * as request from '../request';

export const getTop7 = async (token) => {
    try {
        const res = await request.get('/revenue/calc', token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

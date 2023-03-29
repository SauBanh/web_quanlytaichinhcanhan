import * as request from '../request';

export const getSpending = async (token) => {
    try {
        const res = await request.get('/spending/', token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

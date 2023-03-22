import * as request from '../request';

export const register = async (payload) => {
    try {
        const res = await request.post('/auth/register', payload);
        return res.data.token;
    } catch (error) {
        console.log(error);
    }
};

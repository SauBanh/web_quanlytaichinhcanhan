import * as request from '../request';

export const token = async (payload) => {
    try {
        const res = await request.post('/auth/authenticate', payload);
        return res;
    } catch (error) {
        console.log(error);
    }
};

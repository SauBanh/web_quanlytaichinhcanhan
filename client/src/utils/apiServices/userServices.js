import * as request from '../request';

export const currentUser = async (payload) => {
    try {
        const res = await request.get('/users/user', payload);
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

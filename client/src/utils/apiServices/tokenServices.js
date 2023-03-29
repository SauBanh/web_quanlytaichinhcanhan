import * as request from '../request';

export const token = async (payload) => {
    try {
        const res = await request.post('/auth/authenticate', payload);
        return res;
    } catch (error) {
        if (error.response.status) {
            alert('Tài khoản hoặc mật khẩu không đúng');
        }
        console.log(error);
    }
};

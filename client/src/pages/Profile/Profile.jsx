import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Profile = () => {
    const token = Cookies.get('token');
    if (!token) {
        return <Navigate to="/login" />;
    } else {
        return <div>Profile</div>;
    }
};

export default Profile;

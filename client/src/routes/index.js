import Home from '../pages/Home/Home';
import Accumulate from '../pages/Accumulate/Accumulate';
import Revenue from '../pages/Revenue/Revenue';
import Spending from '../pages/Spending/Spending';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Edit from '../pages/Edit/Edit';
import Add from '../pages/Add/Add';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/accumulate', component: Accumulate },
    { path: '/revenue', component: Revenue },
    { path: '/spending', component: Spending },
    { path: '/revenue/edit', component: Edit },
    { path: '/revenue/add', component: Add },
    { path: '/profile', component: Profile, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/ForgotPassword', component: ForgotPassword, layout: null },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };

import Home from '../pages/Home/Home';
import Accumulate from '../pages/Accumulate/Accumulate';
import Revenue from '../pages/Revenue/Revenue';
import Spending from '../pages/Spending/Spending';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import NotFound from '../pages/NotFound/NotFound';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/accumulate', component: Accumulate },
    { path: '/revenue', component: Revenue },
    { path: '/spending', component: Spending },
    { path: '/404', component: Profile, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/ForgotPassword', component: ForgotPassword, layout: null },
    { path: '/NotFound', component: NotFound, layout: null },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };

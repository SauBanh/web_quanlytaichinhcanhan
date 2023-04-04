import Home from '../pages/Home/Home';
import Accumulate from '../pages/Accumulate/Accumulate';
import Revenue from '../pages/Revenue/Revenue';
import Spending from '../pages/Spending/Spending';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import NotFound from '../pages/NotFound/NotFound';
import EditRevenue from '../pages/Revenue/EditRevenue/EditRevenue';
import EditSpending from '../pages/Spending/EditSpending/EditSpending';
import NewRevenue from '../pages/Revenue/NewRevenue/NewRevenue';
import NewSpending from '../pages/Spending/NewSpending/NewSpending';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/accumulate', component: Accumulate },
    { path: '/revenues', component: Revenue },
    { path: '/revenues/add', component: NewRevenue },
    { path: '/revenues/edit/:revenueID', component: EditRevenue },
    { path: '/spendings', component: Spending },
    { path: '/spendings/add', component: NewSpending },
    { path: '/spendings/edit/:spendingID', component: EditSpending },
    { path: '/404', component: NotFound, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/ForgotPassword', component: ForgotPassword, layout: null },
    { path: '/NotFound', component: NotFound, layout: null },
];

export { publicRoutes };

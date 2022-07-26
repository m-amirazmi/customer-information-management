import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export const routes = [
	{
		path: '/',
		element: Dashboard,
		isProtected: true,
	},
	{
		path: '/customers',
		element: Customers,
		isProtected: true,
	},
	{
		path: '/login',
		element: Login,
		isProtected: false,
	},
];

import { useState } from 'react';
import { routes } from './utils/routes';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

export default function App() {
	const [user, setUser] = useState<boolean>(true);

	const renderRoutes = routes.map((route) => {
		if (route.isProtected) return <Route path={route.path} element={user ? <Layout>{<route.element />}</Layout> : <Navigate to="/login" />} />;
		return <Route path={route.path} element={<Layout>{<route.element />}</Layout>} />;
	});

	return (
		<BrowserRouter>
			<Routes>{renderRoutes}</Routes>
		</BrowserRouter>
	);
}

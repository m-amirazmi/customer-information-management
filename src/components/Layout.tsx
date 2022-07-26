import { useLocation } from 'react-router-dom';
import LayoutAuth from './LayoutAuth';
import LayoutMain from './LayoutMain';

export default function Layout({ children }: any) {
	const { pathname } = useLocation();

	if (pathname === '/login') return <LayoutAuth>{children}</LayoutAuth>;
	return <LayoutMain>{children}</LayoutMain>;
}

import { logout } from '@/lib/user/logout';

export default function Logout({ children }: { children: React.ReactNode }) {
	return <div onClick={logout}>{children}</div>;
}

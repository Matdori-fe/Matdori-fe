'use client';

import Link from 'next/link';

// TODO: 코드 정리
export default function CustomLink({ href, children }) {
	return (
		<Link
			href={href}
			onClick={() => {
				sessionStorage.setItem('modal', `${window.scrollY}`);
			}}
		>
			{children}
		</Link>
	);
}

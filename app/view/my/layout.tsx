'use client';

import Header from '@/components/Header/Header';
import { getNickname } from '@/utils/nickname/getNickname';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header title={`${getNickname()}님`} right='roundButton' />
			<div>{children}</div>
		</div>
	);
}

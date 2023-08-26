'use client';

import Link from 'next/link';
import Text from '../Text/Text';

export default function ChangeableItem({
	title,
	subTitle,
	href,
}: {
	title: string;
	subTitle?: string;
	href: string;
}) {
	return (
		<div className='flex justify-between'>
			<div className='flex flex-col'>
				<Text size='sm' fontWeight='semibold'>
					{title}
				</Text>
				{subTitle && (
					<Text size='xs' color='darkGray' className='mt-[6px]'>
						{subTitle}
					</Text>
				)}
			</div>

			<Link href={href} className='h-fit'>
				<Text color='80' fontWeight='semibold'>
					변경
				</Text>
			</Link>
		</div>
	);
}

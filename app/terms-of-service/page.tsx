import HorizonBar from '@/components/HorizonBar/HorizonBar';
import Text from '@/components/Text/Text';
import SmallTitle from '@/components/Title/SmallTitle';

export default async function TermsOfPage() {
	const data = await getServiceRule();

	return (
		<div className='w-full'>
			{data.map(({ title, contents }: { title: string; contents: string }) => (
				<div className='w-full [&>*]:mb-[14px]'>
					<SmallTitle>{title}</SmallTitle>
					<Text size='xs' color='gray'>
						{contents}
					</Text>
					<HorizonBar />
				</div>
			))}
		</div>
	);
}

const getServiceRule = async () => {
	const result = await fetch(
		`${process.env.NEXT_PUBLIC_API}/terms-of-service`,
		{ cache: 'no-store' }
	);

	const data = await result.json();
	return data.result;
};

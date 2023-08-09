import HorizonBar from '@/components/HorizonBar/HorizonBar';
import Text from '@/components/Text/Text';
import SmallTitle from '@/components/Title/SmallTitle';
import Agrees from './Agrees';

// TODO: api 호출해서 약관 내용 받아오기
export default async function Registration() {
	const data = await getServiceRule();

	return (
		<div className='w-full [&>*]:mb-[14px]'>
			{data.map((rule) => (
				<>
					<SmallTitle>{rule.title}</SmallTitle>
					<Text>{rule.contents}</Text>
					<HorizonBar />
				</>
			))}
			{data.map((rule) => (
				<>
					<SmallTitle>{rule.title}</SmallTitle>
					<Text>{rule.contents}</Text>
					<HorizonBar />
				</>
			))}
			{data.map((rule) => (
				<>
					<SmallTitle>{rule.title}</SmallTitle>
					<Text>{rule.contents}</Text>
					<HorizonBar />
				</>
			))}
			<Agrees />
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

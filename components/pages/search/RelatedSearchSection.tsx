import RelatedSearchItem from './RelatedSearchItem';

export default function RelatedSearchSection() {
	const a = ['떡볶이', '떡볶이 가게', '떡볶이집', '죠스 떡볶이'];

	return (
		<div>
			{a.map((name, i) => (
				<RelatedSearchItem name={name} key={i} id={i} />
			))}
		</div>
	);
}

// TODO: 검색 결과 받아오기

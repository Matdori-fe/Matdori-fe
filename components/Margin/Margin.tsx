interface MarginProps {
	height?: number;
	width?: number;
}

type Size = {
	[key: number]: string;
};

const HeightMargin: Size = {
	0: '',
	2: 'mb-2',
	4: 'mb-4',
	6: 'mb-6',
	8: 'mb-8',
	10: 'mb-10',
};

const WidthMargin: Size = {
	0: '',
	2: 'mr-2',
	4: 'mr-4',
	6: 'mr-6',
	8: 'mr-8',
	10: 'mr-10',
};

export default function Margin({ height = 0, width = 0 }: MarginProps) {
	return <div className={`${HeightMargin[height]} ${WidthMargin[width]}`} />;
}

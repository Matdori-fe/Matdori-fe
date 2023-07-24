interface TextProps {
	size?: 'xxs' | 'xs' | 'sm' | 'base' | 'lg'; // 9, 12, 14, 16, 18
	color?: string;
	fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
	children: React.ReactNode;
}

type Type = {
	[key: string]: string;
};

type ColorType = {
	[key: number]: string;
	[key: string]: string;
};

const Size: Type = {
	xxs: 'text-xxs',
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
};

const Color: ColorType = {
	100: 'text-100',
	80: 'text-80',
	30: 'text-30',
	10: 'text-10',
	black: 'text-black',
	white: 'text-white',
	gray: 'text-gray',
	lightGray: 'text-lightGray',
	darkGray: 'text-darkGray',
	blue: 'text-blue',
};

const FontWeight: Type = {
	normal: 'font-normal',
	medium: 'font-medium',
	semibold: 'font-semibold',
	bold: 'font-bold',
};

export default function Text({
	size = 'base',
	color = 'black',
	fontWeight = 'normal',
	children,
}: TextProps) {
	return (
		<p className={`${Size[size]} ${Color[color]} ${FontWeight[fontWeight]}`}>
			{children}
		</p>
	);
}

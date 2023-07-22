import tw from 'tailwind-styled-components';

interface TextProps {
	size?: 'xxs' | 'xs' | 'sm' | 'base' | 'lg'; // 9, 12, 14, 16, 18
	color?: string;
	fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
	children: React.ReactNode;
}

type SizeType = {
	[key: string]: string;
};

const Size: SizeType = {
	xxs: 'text-xxs',
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
};

export default function Text({
	size = 'base',
	color = 'black',
	fontWeight = 'normal',
	children,
}: TextProps) {
	return (
		<StyledText size={size} color={color} fontWeight={fontWeight}>
			{children}
		</StyledText>
	);
}

const StyledText = tw.p`
  ${(p: TextProps) => p.size && Size[p.size]}
`;

import type { FC } from 'react';

interface ButtonProps {
	name: string;
	className: string;
}

const Button = ({ name, className }: ButtonProps) => {
	return (
		<button
			className={`p-2 rounded-lg shadow-lg hover:shadow font-bold ${className}`}
		>
			{name}
		</button>
	);
};

export default Button;

// import tw from 'tailwind-styled-components';

// const StyledButton = tw.button`
//   bg-100
//   text-xl
// `;

// export default function Button() {
// 	return <StyledButton>hi</StyledButton>;
// }

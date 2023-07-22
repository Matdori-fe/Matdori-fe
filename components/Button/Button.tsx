import tw from 'tailwind-styled-components';

const StyledButton = tw.button`
  bg-100
  text-xl
`;

export default function Button() {
	return <StyledButton>hi</StyledButton>;
}

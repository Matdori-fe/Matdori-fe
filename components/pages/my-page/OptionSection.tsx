import Text from '@/components/Text/Text';

import OptionItem from './OptionItem';
import ShareFriend from './ShareFriend/ShareFriend';

// REFACTOR: 굳이 href 방식이 아닌 다른 방식으로 해도될 것 같음. 불필요한 페이지가 만들어지기 때문임

const optionList: IOption[] = [
	'notice',
	'qna',
	'invite',
	'termsOfService',
	'privacyPolicy',
	'logout',
	'version',
];

export type IOption =
	| 'notice'
	| 'qna'
	| 'invite'
	| 'termsOfService'
	| 'privacyPolicy'
	| 'logout'
	| 'version';

export default function OptionSection() {
	return (
		<>
			{optionList.map((variant) => (
				<OptionItem variant={variant} key={variant} />
			))}
		</>
	);
}

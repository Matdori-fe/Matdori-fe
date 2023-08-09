// const testF = async () => {
// 	const resp = await axios.post(
// 		'https://www.diving-fish.com/api/maimaidxprober/login',
// 		{
// 			username: 'i',
// 			password: 'jjjdfasdf',
// 		}
// 	);

// 	console.log(resp);
// 	const token = resp.headers['set-cookie'][0];
// 	console.log(token);
// 	const cookiePayload = token.slice(0, token.indexOf(';'));
// };
type PasswordValidationType = 'invalidForm' | 'valid' | undefined;
type RePasswordValidationType = 'notMatch' | 'valid' | undefined;

export interface Validation {
	password: PasswordValidationType;
	rePassword: RePasswordValidationType;
}

type Variant = 'valid' | 'invalid';

interface ValidationNotification {
	password: {
		invalidForm: {
			variant: Variant;
			label: string;
		};
		valid: {
			variant: Variant;
			label: string;
		};
	};
	rePassword: {
		notMatch: {
			variant: Variant;
			label: string;
		};
		valid: {
			variant: Variant;
			label: string;
		};
	};
}

export const validationNotification: ValidationNotification = {
	password: {
		invalidForm: {
			variant: 'invalid',
			label: '영어 + 숫자 + 특수문자 포함 8~16자를 입력해주세요.',
		},
		valid: {
			variant: 'valid',
			label: '사용 가능한 비밀번호입니다.',
		},
	},
	rePassword: {
		notMatch: {
			variant: 'invalid',
			label: '입력하신 비밀번호와 동일하게 입력해주세요.',
		},
		valid: {
			variant: 'valid',
			label: '비밀번호가 일치합니다.',
		},
	},
};

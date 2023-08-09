type EmailValidationType =
	| 'duplication'
	| 'invalidForm'
	| 'valid'
	| 'empty'
	| undefined;
type CodeValidationType = 'timeOver' | 'invalidCode' | 'valid' | undefined;

export interface Validation {
	email: EmailValidationType;
	code: CodeValidationType;
}

type Variant = 'valid' | 'invalid';

interface ValidationNotification {
	email: {
		duplication: {
			variant: Variant;
			label: string;
		};
		invalidForm: {
			variant: Variant;
			label: string;
		};
		valid: {
			variant: Variant;
			label: string;
		};
		empty: {
			variant: Variant;
			label: string;
		};
	};
	code: {
		timeOver: {
			variant: Variant;
			label: string;
		};
		invalidCode: {
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
	email: {
		duplication: {
			variant: 'invalid',
			label: '이미 가입된 이메일입니다.',
		},
		invalidForm: {
			variant: 'invalid',
			label: '@inha.ac.kr 또는 @inha.edu 메일 형식을 사용해주세요.',
		},
		valid: {
			variant: 'valid',
			label: '사용 가능한 이메일입니다.',
		},
		empty: {
			variant: 'invalid',
			label: '이메일을 입력해주세요.',
		},
	},
	code: {
		timeOver: {
			variant: 'invalid',
			label: '인증번호가 만료되었습니다. 다시 요청해주세요.',
		},
		invalidCode: {
			variant: 'invalid',
			label: '올바른 인증번호를 입력해주세요.',
		},
		valid: {
			variant: 'valid',
			label: '인증되었습니다.',
		},
	},
};

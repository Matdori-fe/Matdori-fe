export type Variant = 'valid' | 'invalid';

export type INicknameValidationKey =
	| 'duplication'
	| 'badWord'
	| 'min'
	| 'max'
	| 'valid';

// 키의 타입 제한
type INicknameValidation = {
	[key in INicknameValidationKey]: {
		variant: Variant;
		label: string;
	};
};

export const nicknameErrorMessage: INicknameValidation = {
	duplication: {
		variant: 'invalid',
		label: '이미 사용중인 닉네임입니다.',
	},
	badWord: {
		variant: 'invalid',
		label: '닉네임에는 비속어를 포함할 수 없습니다.',
	},
	min: {
		variant: 'invalid',
		label: '닉네임은 최소 2글자 이상이어야 합니다.',
	},
	max: {
		variant: 'invalid',
		label: '닉네임은 최대 50글자 이하여야 합니다.',
	},
	valid: {
		variant: 'valid',
		label: '사용 가능한 닉네임입니다.',
	},
};

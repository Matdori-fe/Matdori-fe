import { INicknameValidationKey } from '@/app/edit-my-profile/nickname/nicknameErrorMessage';
import { Dispatch, SetStateAction } from 'react';
import { isDuplication } from '../../lib/nickname/isDuplication';
import { isIncludeBadWord } from '../isIncludeBadWord';

export async function nicknameValidationFn(
	nickname: string,
	setValidation: Dispatch<SetStateAction<INicknameValidationKey>>
) {
	if (nickname.length < 2) setValidation('min');
	else if (nickname.length > 50) setValidation('max');
	else if (await isDuplication(nickname)) setValidation('duplication');
	else if (isIncludeBadWord(nickname)) setValidation('badWord');
	else setValidation('valid');
}

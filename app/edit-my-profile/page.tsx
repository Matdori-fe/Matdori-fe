'use client';

import ChangeableItem from '@/components/ChangeableItem/ChangeableItem';
import Text from '@/components/Text/Text';
import { getUserEmail } from '@/utils/email/getUserEmail';
import { getNickname } from '@/utils/nickname/getNickname';

export default function EditMyProfile() {
	return (
		<div className='flex flex-col gap-[26px]'>
			<div className='flex flex-col'>
				<Text size='sm' fontWeight='semibold'>
					이메일
				</Text>
				<Text size='xs' color='darkGray' className='mt-[6px]'>
					{getUserEmail()}
				</Text>
			</div>
			<ChangeableItem
				title='닉네임'
				subTitle={getNickname()}
				href='/edit-my-profile/nickname'
			/>
			<ChangeableItem title='비밀번호' href='/edit-my-profile/password' />
		</div>
	);
}

// TODO: 로컬에 저장해둔 닉네임 가져오기

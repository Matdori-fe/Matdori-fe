'use client';

import { useRecoilState, useRecoilValue } from 'recoil';
import Text from '../Text/Text';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { SelectTabAtom, SelectTabVariant } from '@/atoms/SelectTabAtom';
=======
import { SelectTabAtom, SelectTabVariant } from '@/atoms/SelectTabAtom';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
>>>>>>> aac5371 ([MATDORI-60] feat:Jokbo Detail 페이지 생성)

interface SelectBarProps {
	variant: SelectTabVariant;
}

const Underline = styled(motion.div)<{
	listLength: number;
	layoutId: string;
	className: string;
}>`
	@media (min-width: 412px) {
		width: calc(412px / ${({ listLength }) => listLength});
	}
`;

export default function SelectTab() {
<<<<<<< HEAD
	const router = useRouter();
	const searchParams = useSearchParams();
	const tab = searchParams.get('tab') as SelectTabVariant;
	const section = searchParams.get('section');
=======
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') as SelectTabVariant;
  const section = searchParams.get('section');
>>>>>>> aac5371 ([MATDORI-60] feat:Jokbo Detail 페이지 생성)

	// FIXME: ~ 형식의 인수는 어쩌고
	const sectionList = useRecoilValue(SelectTabAtom(tab));

<<<<<<< HEAD
	console.log(tab, section);
	return (
		<div className='sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray'>
			<ul className='flex'>
				{sectionList.map(({ id, name }) => (
					<li
						key={id}
						className='relative flex justify-center grow'
						onClick={() => router.replace(`?tab=${tab}&section=${id}`)}
					>
						<Text
							size='sm'
							fontWeight='bold'
							color={section === id ? '100' : 'gray'}
						>
							{name}
							<div></div>
						</Text>
						{section === id && (
							<Underline
								listLength={sectionList.length}
								layoutId='underline'
								className='absolute border-b-[2px] border-100 top-[34px] w-full'
							/>
						)}
					</li>
				))}
			</ul>
		</div>
	);
=======
  console.log(tab, section);
  return (
    <div className="sm:w-[412px] w-full border-b-[2px] py-[13px] border-gray">
      <ul className="flex">
        {sectionList.map(({ id, name }) => (
          <li
            key={id}
            className="relative flex justify-center grow"
            onClick={() => router.push(`?tab=${tab}&section=${id}`)}
          >
            <Text
              size="sm"
              fontWeight="bold"
              color={section === id ? '100' : 'gray'}
            >
              {name}
              <div></div>
            </Text>
            {section === id && (
              <Underline
                listLength={sectionList.length}
                layoutId="underline"
                className="absolute border-b-[2px] border-100 top-[34px] w-full"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
>>>>>>> aac5371 ([MATDORI-60] feat:Jokbo Detail 페이지 생성)
}

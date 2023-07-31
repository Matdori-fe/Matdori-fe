'use client';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { RecoilRoot } from 'recoil';
import Review from '@/components/Review/Review';
import Input from '@/components/Input/Input';
import BigTitle from '@/components/Title/BigTitle';
import SmallTitle from '@/components/Title/SmallTitle';

import Button from '@/components/Button/Button';
import Text from '@/components/Text/Text';
import Header from '@/components/Header/Header';
import RoundButton from '@/components/RoundButton/RoundButton';
import Background from '@/components/Background/Background';
import Modal from '@/components/Modal/ModalLayout';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import SortModal from '@/components/Modal/SortModal';
import ShopModal from '@/components/Modal/ShopModal';
import MenuModal from '@/components/Modal/MenuModal';

type Props = {
	searchParams: Record<string, string> | null | undefined;
};

const Home = ({ searchParams }: Props) => {
	const showModal = searchParams?.modal;

	return (
		<div>
			<Header
				right='roundButton'
				title={showModal ? 'true' : 'false'}
				left='back'
			/>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>

			<Text>hi</Text>
			<Text>hi</Text>
			<Button label='hi' variant='active' href='/?modal=true' />
			<Link scroll={false} href='/?modal=true'>
				OPEN MODAL, LINK
			</Link>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			{/* <button onClick={() => 'hi'}>hi</button> */}
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>
			<Text>hi</Text>

			<MenuModal showModal={showModal} href='/' />
		</div>
	);
};

export default Home;

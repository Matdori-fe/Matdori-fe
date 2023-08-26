'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSection = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, // 자동 캐러셀
		autoplaySpeed: 4000,
		draggable: true,
		arrows: false,
	};

	const arr = [1, 2, 3, 4, 5];

	return (
		<div className='absolute left-0 top-[60px] w-full [&+*]:mt-[2px]'>
			<Slider {...settings} dotsClass='test-css'>
				{arr.map((i) => (
					<div className='w-full h-[211px] bg-10'>{i}</div>
				))}
			</Slider>
		</div>
	);
};
export default CarouselSection;

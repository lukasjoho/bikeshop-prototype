import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './General';
import styled from 'styled-components';
const Section = styled.section`
	padding: 12rem 0;
	background: white;
	h2 {
		text-align: center;
		font-size: 3rem;
	}
`;
SwiperCore.use([Navigation]);
const MediaSlider = () => {
	const slides = [
		{
			title: 'Mini Suzu Bell',
			image:
				'https://bonvelo.de/media/image/53/a4/ab/Fahrradklingel-Mini-Suzu_NeoBlack_Main589b255ccdd65_200x200@2x.jpg',
			price: '18.90',
		},
		{
			title: 'Blackburn LED Set',
			image:
				'https://bonvelo.de/media/image/2a/4e/da/7064533_Local_Combo_20LuxFront_5Rear589c74c25b7ef_200x200@2x.jpg',
			price: '34.90',
		},
		{
			title: 'Airstick SL Minipump',
			image:
				'https://bonvelo.de/media/image/88/ca/bd/353101001-Blackburn-AirStikSL-black-silver-detail_200x200@2x.jpg',
			price: '19.90',
		},
		{
			title: 'Floor Pump Piston 1',
			image:
				'https://bonvelo.de/media/image/b9/a5/08/3530561-PISTON1_FLOOR_PUMP_HERO_BLACK_200x200@2x.jpg',
			price: '34.90',
		},
		{
			title: 'Mudguard Fendor-Bendor',
			image:
				'https://bonvelo.de/media/image/8a/f3/71/AS-Big-BLK-new-01_200x200@2x.jpg',
			price: '14.90',
		},
	];

	return (
		<Section>
			<Container>
				<h2>Top up your bike game</h2>
				<Swiper
					loop={true}
					spaceBetween={20}
					slidesPerView={5}
					centeredSlides={true}
					className='mediaslider'
					navigation={{
						nextEl: '.next',
						prevEl: '.prev',
					}}
				>
					{/* <div className='overlay'></div> */}
					{slides.map((slide, index) => (
						<SwiperSlide key={slide.title} className='mediaslide'>
							<div className='image-container'>
								<img src={slide.image} alt='' />
							</div>
							<div className='slide-description'>
								<h3>{slide.title}</h3>
								<p>{slide.price}€</p>
							</div>
						</SwiperSlide>
					))}
					<div className='button-container'>
						<button className='prev'>
							<img src='icon-slider-arrow.svg' alt='' />
						</button>
						<button className='next'>
							<img src='icon-slider-arrow.svg' alt='' />
						</button>
					</div>
				</Swiper>
			</Container>
		</Section>
	);
};
export default MediaSlider;

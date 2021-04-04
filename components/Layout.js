import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'components/General';
import ColorBar from './ColorBar';
import Header from './Header';
import Sizes from './Sizes';
import Prize from './Prize';
import Button from './Button';
import Counter from './Counter';
import Sidebar from './Sidebar';
import Specifications from './Specifications';
import { motion, AnimatePresence } from 'framer-motion';
import SwiperCore, { Navigation } from 'swiper';
import Accordion from './Accordion';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer';
import MediaSlider from './MediaSlider';
const Info = styled.div`
	text-align: right;
`;
const Title = styled(motion.h2)`
	font-size: 5rem;
	font-weight: 700;
	line-height: 1;
`;
const Tagline = styled(motion.p)`
	margin-bottom: 3rem;
	line-height: 2;
	color: #5d5d5d;
`;

const White = styled.section`
	background: white;
`;
const Section = styled.div`
	height: calc(100vh - 13rem);
	padding-top: 3rem;
	box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.5);
`;
const Fat = styled.h1`
	text-align: center;
	font-size: 30rem;
	position: absolute;
	width: 100%;
	color: #f0f0f0;
	z-index: -1;
	top: 0%;
	text-transform: uppercase;
	line-height: 1;
`;
const Bike = styled.div`
	display: flex;
	align-items: flex-end;
	transition: 0.3s ease;
	&.small {
		transform: scale(0.8);
		opacity: 0.75;
	}
`;
const Line = styled(motion.div)`
	height: 0.8rem;
	width: 10rem;
	background: ${(props) => props.theme[props.color]};
	margin: 1.5rem 0;
	border-radius: 0.2rem;
`;
const ColBike = styled.div`
	width: 60%;
	padding: 0 3rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	left: 6rem;
`;
const ColInfo = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;
	padding: 0 3rem;
`;
const Icons = styled.ul`
	display: flex;
	list-style-type: none;
	padding: 0;
	width: 100%;
	justify-content: flex-end;
	margin-top: auto;
	padding-bottom: 6rem;
	li {
		margin-left: 1rem;
	}
`;
const SlideImage = styled(motion.div)`
	width: 10rem;
	height: 10rem;
	overflow: hidden;
	border-radius: 1.2rem;
	box-shadow: 0px 15px 20px -10px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	/* transition: 0.3s ease;
	&:hover {
		transform: scale(1.1);
	} */
	img {
		width: 100%;
	}
`;
const SliderWrapper = styled.div`
	display: flex;
	width: 85%;
	margin: 0 auto;
	z-index: 999;
	transition: 0.3s ease;
	margin-top: 2rem;
	&.small {
		transform: scale(1.1);
	}
	.bikeslider {
		.bikeslide {
			/* background: orange; */
			width: 10rem;
			display: flex;
			justify-content: center;
			padding: 6rem 0 6rem;
			transition: 0.3s ease;
			&:hover {
				transform: scale(1.1);
			}
		}
	}
`;
const SliderButton = styled.button`
	all: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 6rem;
	flex-shrink: 0;
	align-self: center;
	img {
		transform: rotate(180deg);
	}
	&.next {
		img {
			transform: rotate(0deg);
		}
	}
`;

const Modal = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.25);
	z-index: 900;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s ease;
	cursor: pointer;
	.content {
		width: 40rem;
		height: 40rem;
		border-radius: 1.5rem;
		overflow: hidden;
		box-shadow: 0px 30px 60px -20px rgba(0, 0, 0, 0.3);
		position: relative;
		top: -6rem;
		transform: translateY(-25%);
		img {
			width: 100%;
		}
	}
`;
const Buttons = styled.div`
	display: flex;
	& > *:last-child {
		margin-left: 1.5rem;
	}
`;
const Payment = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s ease;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: #d8d8d9;
	font-size: 1.4rem;
	text-transform: uppercase;
	cursor: pointer;
	.content {
		position: relative;
		padding: 3rem 3rem 1.5rem 3rem;
		width: 48rem;
		background: rgba(50, 50, 50, 1);
		/* backdrop-filter: blur(10px); */
		border: 1px solid #555555;
		border-radius: 1.5rem;
		overflow: hidden;
		box-shadow: 0px 30px 60px -20px rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		align-items: stretch;
		.header {
			border-bottom: 1px solid #464646;
			display: flex;
			justify-content: space-between;
			padding-bottom: 2rem;
			button {
				all: unset;
				width: 6rem;
				height: 2rem;
				background: #656565;
				color: #d8d8d9;
				border-radius: 5px;
				padding: 0.25rem 0.5rem;
				display: flex;
				justify-content: center;
				align-items: center;
				text-transform: capitalize;
				font-size: 1.2rem;
				box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
				line-height: 0.1rem;
			}
		}
		.row {
			padding: 1.5rem 0;
			border-bottom: 1px solid #464646;
			display: flex;
			justify-content: flex-end;
			.inner {
				display: flex;
				justify-content: space-between;
				width: 80%;
				.pre {
					position: absolute;
					transform: translateX(calc(-100% - 1.5rem));
					color: #9b9b9b;
				}
				.left {
					display: flex;
					align-items: center;
					img {
						margin-right: 1.5rem;
						width: 4.5rem;
						transform: scale(1.1);
					}
					.text {
						p {
						}
					}
				}
				.right {
					display: flex;
					align-items: right;
					font-size: 2.2rem;
				}
			}
		}
		video {
			padding-top: 2rem;
			width: 160px;
			align-self: center;
		}
	}
`;
const Layout = ({ children, color, book }) => {
	const [show, setShow] = useState(false);
	const [content, setContent] = useState('');
	const handleShow = (content) => {
		setShow(true);
		setContent(content);
		console.log(content);
	};
	const handleClose = () => {
		console.log('close clicked');
		setShow(false);
	};
	const [count, setCount] = useState(1);
	const handleCount = (operation) => {
		if (operation == 'minus') {
			setCount(Math.max(1, count - 1));
		} else {
			setCount(count + 1);
		}

		console.log(operation);
	};
	const [payment, setPayment] = useState(false);

	const handlePayment = () => {
		setPayment(true);
		const vid = () => vidRef.current.play();
		setTimeout(vid, 100);
		setTimeout(() => setPayment(false), 4500);
	};
	const vidRef = useRef(null);
	return (
		<div>
			<Header />
			<AnimatePresence exitBeforeEnter>
				{payment && (
					<Payment>
						<motion.div
							className='content'
							key={content}
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 0, opacity: 0 }}
						>
							<div className='header'>
								<img src='icon-apple-pay-white.svg' alt='' width='60px' />
								<button>Cancel</button>
							</div>
							<div className='row'>
								<div className='inner'>
									<span className='pre'>Card</span>
									<div className='left'>
										<img src='image-tomorrow.jpg' alt='' />
										<div className='text'>
											<p>Tomorrow Card</p>
											<p>(&bull;&bull;&bull;&bull; 1234)</p>
										</div>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='inner'>
									<div className='left'>Pay Blizz Velvet Green</div>
									<div className='right' onClick={() => vidRef.current.play()}>
										349€
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='inner'>
									<span className='pre'>SHIPPING</span>
									<div className='left'>
										<div className='text'>
											<p>Lukas Hoppe</p>
											<p>Fantasy street 1</p>
											<p>12345 Haitabu</p>
										</div>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='inner'>
									<span className='pre'>method</span>
									<div className='left'>
										<div className='text'>
											<p>1-2 business days</p>
										</div>
									</div>
								</div>
							</div>
							<video ref={vidRef} src='video-payment-success.mp4' />
						</motion.div>
					</Payment>
				)}
			</AnimatePresence>
			{show && (
				<Modal onClick={() => handleClose()}>
					<AnimatePresence exitBeforeEnter>
						<motion.div
							className='content'
							key={content}
							initial={{ y: 0, x: '-50%', opacity: 0 }}
							animate={{ y: 0, x: 0, opacity: 1 }}
							exit={{ y: 0, x: '50%', opacity: 0 }}
						>
							<img src={content} alt='' />
						</motion.div>
					</AnimatePresence>
				</Modal>
			)}

			<Section>
				<Container>
					<Sidebar />

					<Row>
						<ColBike>
							<Bike className={show && 'small'}>{children}</Bike>
							<SliderWrapper className={show && 'small'}>
								<SliderButton>
									<img src='icon-slider-arrow.svg' alt='' />
								</SliderButton>
								<Swiper
									loop={true}
									spaceBetween={0}
									slidesPerView={4}
									centeredSlides={false}
									className='bikeslider'
								>
									{book.items.map((item) => (
										<SwiperSlide
											className='bikeslide'
											onClick={() => handleShow(item)}
										>
											<AnimatePresence exitBeforeEnter>
												<SlideImage
													key={color}
													initial={{ scale: 0.95, opacity: 0 }}
													animate={{ scale: 1, opacity: 1 }}
													exit={{ scale: 0.95, opacity: 0 }}
													transition={{ delay: 0.05 }}
												>
													<img src={item} alt='' />
												</SlideImage>
											</AnimatePresence>
										</SwiperSlide>
									))}
								</Swiper>
								<SliderButton className='next'>
									<img src='icon-slider-arrow.svg' alt='' />
								</SliderButton>
							</SliderWrapper>
						</ColBike>
						<ColInfo>
							<AnimatePresence exitBeforeEnter>
								<Title
									key={color}
									initial={{ y: -20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: 20, opacity: 0 }}
									transition={{ delay: 0.1 }}
								>
									{book.title}
								</Title>
							</AnimatePresence>
							<AnimatePresence exitBeforeEnter>
								<Line
									color={color}
									key={color}
									initial={{ width: 0, opacity: 0 }}
									animate={{ width: 100, opacity: 1 }}
									exit={{ width: 0, opacity: 0 }}
								/>
							</AnimatePresence>
							<AnimatePresence exitBeforeEnter>
								<Tagline
									key={color}
									initial={{ y: -10, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: 10, opacity: 0 }}
									transition={{ delay: 0.15 }}
								>
									{book.tagline}
								</Tagline>
							</AnimatePresence>
							<Sizes />
							<Counter handleCount={handleCount} count={count} />

							<Prize count={count} prize='389' />
							<Buttons>
								<Button icon handlePayment={handlePayment} />
								<Button text='Add To Cart' handlePayment={handlePayment} />
							</Buttons>
							<Icons>
								<li>
									<img src='icon-chat.svg' />
								</li>
								<li>
									<img src='icon-share.svg' />
								</li>
								<li>
									<img src='icon-save.svg' />
								</li>
							</Icons>
						</ColInfo>
					</Row>
					<Fat>Blizz</Fat>
				</Container>
			</Section>
			<White>
				<Container>
					<Accordion color={color} />
				</Container>
			</White>
			<Specifications />
			<MediaSlider />
			<Footer />
		</div>
	);
};

export default Layout;

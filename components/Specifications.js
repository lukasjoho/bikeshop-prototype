import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'components/General';
const Header = styled.div`
	background: #1a1a1a;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 6rem 0 0;
	span {
		font-weight: 300;
		margin-bottom: 0.5rem;
	}
	h2 {
		padding-bottom: 4rem;
		font-size: 4rem;
	}
`;
const Section = styled.section``;
const Body = styled.div`
	background: #ebebeb;
	padding: 12rem 0;
`;
const SpecRow = styled.div`
	display: flex;
	margin: auto;
	justify-content: center;
	> img {
	}
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: flex-start;
	width: 80%;
	margin-left: auto;
	padding-top: 9rem;
	h3 {
		margin-bottom: 2rem;
	}
	p {
		line-height: 2;
		color: #5d5d5d;
	}
`;
const Buttons = styled.div`
	display: flex;
	align-items: flex-end;
	height: 6rem;

	button {
		all: unset;
		background: #ebebeb;
		height: 5rem;
		padding: 0 4rem;
		color: #1a1a1a;
		border-top-right-radius: 0.8rem;
		border-top-left-radius: 0.8rem;
		margin: 0 0.5rem;
		font-weight: 500;
		opacity: 0.7;
		transition: 0.3s ease;
		cursor: pointer;
		&.active {
			opacity: 1;
			height: 6rem;
		}
	}
`;
const Specifications = () => {
	const [page, setPage] = useState('highlights');
	const handleClick = (e) => {
		setPage(e.target.id);
		console.log(page);
	};
	return (
		<Section>
			<Header>
				<span>Blizz Velvet Green</span>
				<h2>Specifications</h2>
				<Buttons>
					<button
						className={page == 'highlights' && 'active'}
						id='highlights'
						onClick={(e) => handleClick(e)}
					>
						Highlights
					</button>
					<button
						id='sizing'
						className={page == 'sizing' && 'active'}
						onClick={(e) => handleClick(e)}
					>
						Sizing
					</button>

					<button
						id='specs'
						className={page == 'specs' && 'active'}
						onClick={(e) => handleClick(e)}
					>
						Specs
					</button>
				</Buttons>
			</Header>
			<Body>
				<Container>
					{page == 'highlights' && (
						<SpecRow>
							<Col>
								<img src='image-bike-details-red.png' alt='' width='100%' />
							</Col>
							<Col>
								<Info>
									<h3>Promax dual-pivot caliper brakes</h3>
									<p>
										compact design, made of forged , sturdy, aluminium. All our
										bikes already have front and rear brakes mounted
									</p>
								</Info>
							</Col>
						</SpecRow>
					)}
					{page == 'sizing' && (
						<SpecRow>
							<img src='image-sizing.jpg' alt='' width='90%' />
						</SpecRow>
					)}
					{page == 'specs' && (
						<SpecRow>
							<img src='image-specs.jpg' alt='' width='90%' />
						</SpecRow>
					)}
				</Container>
			</Body>
		</Section>
	);
};

export default Specifications;

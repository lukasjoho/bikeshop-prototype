import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
const StyledColor = styled.div`
	width: 3rem;
	height: 3rem;
	background: ${(props) => props.theme[props.color]};
	border-radius: 1rem;
	margin-bottom: 2.4rem;
	position: relative;
	z-index: 1;
	&.scale {
	}
	cursor: pointer;
	.active {
		position: absolute;
		top: calc(0px);
		left: calc(0px);
		width: 100%;
		height: 100%;
		.block {
			position: absolute;
			left: -2px;
			top: -2px;
			width: 100%;
			height: 100%;
			border-radius: 1rem;

			border: 2px solid ${(props) => props.theme[props.color]};
			transform: scale(1.5);
		}
	}
	/* &:after {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		width: 100%;
		height: 100%;
		border: 1px solid ${(props) => props.theme[props.color]};
		border-radius: 1rem;

		transform: scale(1);
		z-index: -1;
	}
	&:hover {
		&:before {
			transform: scale(1.5);
		}
	}
	&.active {
		transform: scale(1.5);
		&:after {
			transform: scale(1.2);
		}
		&:before {
			transform: scale(1);
		}
	} */
`;
const Color = ({ color, path }) => {
	const router = useRouter();
	console.log(router.asPath);
	const active = router.asPath == path;

	return (
		<StyledColor color={color} className={active && 'scale'}>
			{active && (
				<motion.div layoutId='outline' className='active'>
					<div className='block'></div>
				</motion.div>
			)}
		</StyledColor>
	);
};
const StyledBar = styled.div`
	margin-top: 2rem;
`;
const ColorBar = () => {
	return (
		<StyledBar>
			<Link href='/blizz-rocking-lobster'>
				<a>
					<Color color='lobster' path='/blizz-rocking-lobster' />
				</a>
			</Link>
			<Link href='/blizz-into-the-blue'>
				<a>
					<Color color='intotheblue' path='/blizz-into-the-blue' />
				</a>
			</Link>
			<Link href='/blizz-velvet-green'>
				<a>
					<Color color='velvetgreen' path='/blizz-velvet-green' />
				</a>
			</Link>
			<Color color='yellow' />
			<Color color='gold' />
			<Color color='red' />
			<Color color='gray' />
		</StyledBar>
	);
};

export default ColorBar;

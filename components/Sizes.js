import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSizes = styled.ul`
	display: flex;
	justify-content: flex-end;
	list-style-type: none;
	padding: 0;
	margin-bottom: 3rem;
	position: relative;

	> * {
		position: relative;
		background: white;
		text-align: center;
		padding: 2rem 2rem;
		border-radius: 1rem;
		margin-left: 2rem;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
		border: 1px solid #f2f2f2;
		transition: 0.3s ease;
		p {
			pointer-events: none;
		}
		&:hover {
			transform: scale(1.05) rotate(5deg) translate3d(0.5rem, -0.5rem, 0);
		}
		&.active {
			transition: 0.3s ease;
			border: 1px solid #1a1a1a;
		}

		&.click {
		}
		> * {
			&:first-child {
				margin-bottom: 2rem;
			}
		}
		div {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 1rem;
			height: 1rem;
			background: green;
			transform: translate3d(25%, 25%, 0);
			border-radius: 100%;
			border: 3px solid #f5f5f5;
			pointer-events: none;
		}
	}
	li {
		/* &:before {
			content: '';
			border-radius: 1rem;

			position: absolute;
			top: -2px;
			left: -2px;
			width: 100%;
			height: 100%;
			border: 2px solid #1a1a1a;
		} */
	}
`;
const Size = ({ size, text, instock, handleSelected, selected }) => {
	return (
		<li
			id={size}
			onClick={(e) => handleSelected(e)}
			className={selected == size && 'active'}
		>
			<p>{size}</p>
			<p>{text}</p>
			<div></div>
		</li>
	);
};
const Sizes = () => {
	const [selected, setSelected] = useState(null);
	const handleSelected = (e) => {
		setSelected(e.target.id);
	};
	return (
		<StyledSizes>
			<Size
				size='S'
				text='50cm'
				instock={1}
				handleSelected={handleSelected}
				selected={selected}
			/>
			<Size
				size='M'
				text='53cm'
				instock={1}
				handleSelected={handleSelected}
				selected={selected}
			/>
			<Size
				size='L'
				text='56cm'
				instock={1}
				handleSelected={handleSelected}
				selected={selected}
			/>
			<Size
				size='XL'
				text='59cm'
				instock={1}
				handleSelected={handleSelected}
				selected={selected}
			/>
		</StyledSizes>
	);
};

export default Sizes;

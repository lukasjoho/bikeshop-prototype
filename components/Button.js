import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
	background: ${(props) => props.theme.blackUI};
	border: none;
	color: white;
	padding: 0rem 5rem;
	height: 6rem;
	border-radius: 0.6rem;
	font-weight: 700;
	font-size: inherit;
	box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.35);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s ease;
	outline: none;
	cursor: pointer;
	&:hover {
		transform: translateY(-0.25rem);
		box-shadow: 0px 15px 30px -5px rgba(0, 0, 0, 0.5);
	}
	&.icon {
		background: white;
		padding: 0rem 2rem;
		box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.15);
		border: 2px solid #1a1a1a;
		&:hover {
			transform: translateY(-0.25rem);
			box-shadow: 0px 15px 30px -5px rgba(0, 0, 0, 0.3);
		}
		img {
			height: 2.5rem;
		}
	}
`;
const Button = ({ text, icon, handlePayment }) => {
	return (
		<StyledButton className={icon && 'icon'} onClick={() => handlePayment()}>
			{icon ? <img src='icon-apple-pay.svg' /> : text}
		</StyledButton>
	);
};

export default Button;

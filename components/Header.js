import React from 'react';
import styled from 'styled-components';
const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 10rem;
	position: relative;
	z-index: 1000;
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
`;
const Nav = styled.nav`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	justify-self: flex-start;
	ul {
		display: flex;
		margin-left: 2rem;
		li {
			padding: 0 4rem;
			font-weight: 700;
			opacity: 0.25;
			color: ${(props) => props.theme.blackUI};
			&.active {
				opacity: 1;
			}
			&:hover {
				opacity: 1;
			}
		}
	}
`;
const Icons = styled.div`
	margin-left: auto;
	margin-right: 3.5rem;
	ul {
		display: flex;
		li {
			margin-left: 1rem;
		}
	}
`;
const Header = () => {
	return (
		<StyledHeader>
			<img src='icon-brand.svg' alt='' />
			<Nav>
				<ul>
					<li className='active'>Bikes</li>
					<li>Accessoires</li>
					<li>Wear</li>
					<li>Blog</li>
					<li>FAQ</li>
					<li>Testride</li>
				</ul>
			</Nav>
			<Icons>
				<ul>
					<li>
						<img src='icon-heart.svg' alt='' />
					</li>
					<li>
						<img src='icon-user.svg' alt='' />
					</li>

					<li>
						<img src='icon-cart.svg' alt='' />
					</li>
				</ul>
			</Icons>
		</StyledHeader>
	);
};

export default Header;

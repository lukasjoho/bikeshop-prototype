import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'components/General';

const StyledFooter = styled.footer`
	background: #1a1a1a;
	color: white;
	padding: 6rem 0;
`;
const Column = styled.ul`
	list-style-type: none;
	padding: 0;
	li {
		opacity: 0.75;
		line-height: 2;
		&:first-child {
			font-weight: 500;
			color: white;
			opacity: 1;
		}
	}
`;
const FooterRow = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Bonvelo = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<FooterRow>
					<Column>
						<li>Company</li>
						<li>Bikes</li>
						<li>Accessories</li>
						<li>Wear</li>
						<li>Blog</li>
						<li>FAQ</li>
						<li>Testride</li>
					</Column>
					<Column>
						<li>Contact</li>
						<li>support@bonvelo.de</li>

						<li>Contact Form</li>
						<li>+494089712642</li>
						<li>Stahltwiete 21a - 22761 Hamburg</li>
					</Column>

					<Column>
						<li>Resources</li>
						<li>Privacy & terms</li>
						<li>Cookie settings</li>
					</Column>
					<Column>
						<li>Payments</li>
						<li>
							<img
								src='icon-payments.svg'
								alt=''
								width='300px'
								style={{ marginTop: '1rem' }}
							/>
						</li>
					</Column>
				</FooterRow>
				<Row>
					<Bonvelo>
						<img src='icon-brand-white.svg' alt='' />
					</Bonvelo>
				</Row>
			</Container>
		</StyledFooter>
	);
};

export default Footer;

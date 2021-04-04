import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
const Header = styled(motion.header)`
	background: #1a1a1a;
	border-radius: 10px;
	cursor: pointer;
	height: 40px;
	margin-bottom: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.6rem;
	font-weight: 700;
	height: 8rem;
	width: 50rem;
	&:hover {
		background: rgba(26, 26, 26, 0.5);
	}
`;
const AccordionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	margin: auto;
	padding: 12rem 0 8rem;
`;
const AccordionColumn = styled.div`
	width: 50rem;

	padding: 0 4rem;
	margin-top: 2rem;

	margin-bottom: 6rem;
	h3 {
		margin-bottom: 2rem;
	}
	p {
		line-height: 2;
		color: #5d5d5d;
	}
`;
const Section = styled(motion.section)`
	overflow: hidden;
	display: flex;
	justify-content: center;
	position: relative;
`;
const Component = ({ i, header, expanded, setExpanded, color, columns }) => {
	const isOpen = i === expanded;
	console.log(columns);
	// By using `AnimatePresence` to mount and unmount the contents, we can animate
	// them in and out while also only rendering the contents of open accordions
	return (
		<>
			<Header
				initial={false}
				animate={{
					backgroundColor: !isOpen ? 'white' : '#1a1a1a',
					color: !isOpen ? '#1a1a1a' : 'white',
					border: !isOpen ? '3px solid #1a1a1a' : '3px solid #1a1a1a',
				}}
				onClick={() => setExpanded(isOpen ? false : i)}
			>
				{header}
			</Header>
			<AnimatePresence initial={false}>
				{isOpen && (
					<Section
						key='content'
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						{columns.map((column) => (
							<AccordionColumn>
								<h3>{column.title}</h3>
								<p>{column.text}</p>
							</AccordionColumn>
						))}
					</Section>
				)}
			</AnimatePresence>
		</>
	);
};

const Accordion = () => {
	// This approach is if you only want max one section open at a time. If you want multiple
	// sections to potentially be open simultaneously, they can all be given their own `useState`.
	const [expanded, setExpanded] = useState(true);

	return (
		<AccordionContainer>
			{accordionItems.map((i) => (
				<Component
					i={i.id}
					header={i.header}
					expanded={expanded}
					setExpanded={setExpanded}
					color={i.color}
					columns={i.columns}
				/>
			))}
		</AccordionContainer>
	);
};

const accordionItems = [
	{
		id: 1,
		header: 'About The Bike',
		color: '#FF747A',
		columns: [
			{
				title: 'Rahmen',
				text:
					'Was für ein Grün! Der stabile Stahlrahmen ist in einem samtigen Grün matt pulverbeschichtet. Dazu haben wir uns für passende schwarze Anbauteile und in Schwarz anodisierte Laufräder entschieden. Schriftzug und Logo sind ebenfalls passend in schwarz glänzender Optik gehalten. ',
			},
			{
				title: 'Laufräder',
				text:
					'Die Laufräder mit Aluminium Hochprofilfelgen verfügen über CNC-gefräste Bremsflanken sind mit den neuesten Freedom Thickslick Reifen bestückt. Am Hinterrad verwenden wir die exklusiv für bonvelo hergestellte Flip-Flop Nabe mit gedichteten Industrielägern, somit kannst Du schnell und einfach durch Umdrehen des Hinterrades zwischen Freilauf und Fixed-Gear wechseln. ',
			},
		],
	},
	{
		id: 2,
		header: 'The Delivery',
		color: '#FF747A',
		columns: [
			{
				title: 'Online',
				text:
					'For online orders, we’ll send you your bike 85% pre-assembled via UPS within 1-2 business days. The tools to finish assembling and instructions are included. All that needs to be done is tightening the handlebars, the front wheel, the pedals and the seat. ',
			},
			{
				title: 'Pick-Up',
				text:
					'For customers from the Hamburg area, your pre-ordered bike could also be picked up in the bonvelo bike-box or fully assembled from our single-speed showroom in Hamburg Bahrenfeld, if desired. ',
			},
		],
	},
	{
		id: 3,
		header: 'Testride',
		color: '#FF747A',
		columns: [
			{
				title: 'Book A Ride',
				text:
					'Test rides are currently possible during the opening-hours in our showroom in Hamburg Bahrenfeld as well as in Berlin-Mitte and Munich at our partner List´n Ride.',
			},
		],
	},
];
export default Accordion;

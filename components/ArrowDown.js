import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: auto;
	margin-bottom: 6rem;
	p {
		writing-mode: tb-rl;
		line-height: 2rem;
		margin-bottom: 2rem;
		font-weight: 600;
	}
`;
const ArrowDown = () => {
	return (
		<Container>
			<p>Specifications</p>
			<img src='icon-arrow.svg' alt='' />
		</Container>
	);
};

export default ArrowDown;

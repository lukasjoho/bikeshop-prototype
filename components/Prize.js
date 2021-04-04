import React from 'react';
import styled from 'styled-components';
const StyledPrize = styled.div`
	font-weight: 700;
	font-size: 4rem;
	margin-bottom: 3rem;
	line-height: 1;
`;
const Prize = ({ prize, count = 1 }) => {
	return <StyledPrize>{count * prize}€</StyledPrize>;
};

export default Prize;

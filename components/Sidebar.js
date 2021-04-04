import React from 'react';
import ArrowDown from './ArrowDown';
import ColorBar from './ColorBar';
import styled from 'styled-components';
const StyledSidebar = styled.div`
	height: 100%;
	display: inline-flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: absolute;
	transform: translateX(-50%);
`;
const Sidebar = () => {
	return (
		<StyledSidebar>
			<ColorBar />
			<ArrowDown />
		</StyledSidebar>
	);
};

export default Sidebar;

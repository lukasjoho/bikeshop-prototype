import React, { useState } from 'react';
import styled from 'styled-components';
const StyledCounter = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 3rem;
	font-weight: 700;
	font-size: 2.2rem;
	.count {
		background: white;
		width: 5rem;
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.6rem;
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.075);
		margin: 0 1.5rem;
		pointer-events: none;
	}
	button {
		all: unset;
		align-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		img {
			width: 100%;
		}
	}
`;
const Counter = ({ handleCount, count }) => {
	return (
		<StyledCounter>
			<button onClick={() => handleCount('minus')}>
				<img src='icon-minus.svg' />
			</button>
			<div className='count'>{count}</div>
			<button onClick={() => handleCount('plus')}>
				<img src='icon-plus.svg' />
			</button>
		</StyledCounter>
	);
};

export default Counter;

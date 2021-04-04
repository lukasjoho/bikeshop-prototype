import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import '@fontsource/rubik/variable.css';
import AnimatedCursor from 'react-animated-cursor';
import '../components/mediaslider.scss';
import '../components/cursor.scss';
import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { motion, useMotionValue } from 'framer-motion';
const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
  background: #F5F5F5;
	background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #F5F5F5 100%);
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.8rem;
    font-family: "Rubik";
    h1, h2, h3, h4, h5, h6{
			margin: 0;
		}
		p{
			margin: 0;
		}
		ul{
			margin: 0;
		}
  }
}
  
`;
const theme = {
	lobster: '#FF747A',
	velvetgreen: '#82CE9A',
	intotheblue: '#6EC5E9',
	yellow: '#FCEA5F',
	gold: '#EFB401',
	red: '#C40F03',
	gray: '#565656',
	white: '#FFFFFF',
	blackUI: '#1A1A1A',
	whiteUI: '#FFFFFF',
	greyUI: '#5D5D5D',
};
function MyApp({ Component, pageProps }) {
	const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);
	useEffect(() => {
		const moveCursor = (e) => {
			const x = e.clientX - 16;
			const y = e.clientY - 16;
			setCursorXY({ x, y });
		};
		window.addEventListener('mousemove', moveCursor);
		return () => {
			window.removeEventListener('mousemove', moveCursor);
		};
	}, []);
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<AnimateSharedLayout type='crossfade'>
					<div
						className='cursor'
						style={{
							transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
						}}
					/>
					<Component {...pageProps} />
				</AnimateSharedLayout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;

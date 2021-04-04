import Layout from 'components/Layout';
import React, { useState, useLayoutEffect } from 'react';
import { bookList } from '../data/bookList';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export const getStaticProps = async ({ params }) => {
	const books = bookList.filter((book) => book.slug === params.slug);
	return {
		props: {
			book: books[0],
		},
	};
};
export const getStaticPaths = async () => {
	const paths = bookList.map((book) => ({
		params: {
			slug: book.slug.toString(),
		},
	}));
	console.log('Paths: ', paths);
	return {
		paths,
		fallback: false,
	};
};
const BikeContainer = styled(motion.div)`
	width: 90% !important;
	margin: auto;
`;

const colors = ['black'];
const Bike = ({ book }) => {
	const router = useRouter();
	console.log(router.asPath);

	return (
		<Layout color={book.color} book={book}>
			<AnimatePresence exitBeforeEnter>
				{/* {router.asPath == `/${book.slug}` && ( */}
				<BikeContainer
					key={book.slug}
					initial={{ y: -30, opacity: 0.1 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 30, opacity: 0.1 }}
				>
					<motion.img src={book.image} width='100%'></motion.img>
				</BikeContainer>
				{/* )} */}
			</AnimatePresence>
		</Layout>
	);
};

export default Bike;

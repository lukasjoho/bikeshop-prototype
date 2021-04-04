import Head from 'next/head';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout>
			<Link href='/bikes/blizz-rocking-lobster'>
				<a>To Bike</a>
			</Link>
		</Layout>
	);
}

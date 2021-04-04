import Layout from 'components/Layout';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout>
			<Link href='/bikes/blizz-rocking-lobster'>
				<a>To another Bike</a>
			</Link>
		</Layout>
	);
}

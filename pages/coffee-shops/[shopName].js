import Image from 'next/image';
import Link from 'next/link';
import storesData from '../../Data/coffee.json';

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			store: storesData.find((store) => {
				return params;
			}),
		},
	};
};

export const getStaticPaths = async () => {
	return {
		paths: store.map(({ store }) => {
			return {
				params: {
					name: store.name,
				},
			};
		}),
		fallback: false,
	};
};

const shopName = ({ name, address, city }, props) => {
	console.log(props);
	return (
		<>
			<article>
				<Link href="/">← Back to Home</Link>
				<div>
					<h1>{name}</h1>
					<h2></h2>
				</div>
				<picture>
					<Image
						className="transition-all duration-300 ease-in-out group-hover:scale-105 "
						src="/coffee.jpg"
						width={550}
						height={450}
						objectFit="cover"
					/>
				</picture>
				<div>
					<h3>Address :</h3>
					<p>{address}</p>
					<h3>City :</h3>
					<p>{city}</p>
				</div>
			</article>
		</>
	);
};

export default shopName;

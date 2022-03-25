import Link from 'next/link';
import Image from 'next/image';

const Card = ({ name, imgUrl, address, city, href }) => {
	return (
		<article className="flex items-center justify-center my-4">
			<Link href={href}>
				<a className="shadow-lg border border-lime-700 bg-white/30 hover:bg-white/40 backdrop-blur rounded p-4 group w-11/12 flex items-center justify-center flex-col">
					<div>
						<h1 className="text-3xl">{name}</h1>
						<h2>The best shop in town</h2>
					</div>
					<Image
						className="transition-all duration-300 ease-in-out group-hover:scale-105 object-cover rounded-2xl"
						src={imgUrl}
						width={250}
						height={150}
					/>
					<div>
						<div className="flex space-x-2">
							<h3>
								<span className="font-bold">Address</span> :
							</h3>
							<p>{address}</p>
						</div>
						<div className="flex space-x-2">
							<h3>
								<span className="font-bold">City</span> :
							</h3>
							<p>{city}</p>
						</div>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default Card;

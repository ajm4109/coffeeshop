import Image from 'next/image';

const Banner = ({ btnText, handleOnClick }) => {
	return (
		<div className="flex p-5 justify-between">
			<div className="flex flex-col justify-center space-y-5 pl-5">
				<h1 className="text-5xl text-sky-800 font-bold">
					<span className="text-sky-500">Coffee</span> Shops
				</h1>
				<h2 className=" sm:text-center">Nom Nom Nom</h2>

				<button
					onClick={handleOnClick}
					className="border shadow-xl bg-teal-400 rounded border-black px-5 py-2 font-bold text-slate-200"
				>
					{btnText}
				</button>
			</div>
			<div className="flex items-center justify-center">
				<Image
					className="opacity-50 object-cover rounded-full"
					src="/coffee.jpg"
					height={300}
					width={300}
					alt="splash bg"
				/>
			</div>
		</div>
	);
};

export default Banner;

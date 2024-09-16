import { FaBed, FaBath, FaRulerCombined, FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const ProprietesCard = ({ _id, images, type, name, location, beds, baths, square_feet, rates }) => {
	const getRateDisplay = () => {
		if (rates.monthly) {
			return `${rates.monthly.toLocaleString()}/Mois`;
		} else if (rates.weekly) {
			return `${rates.weekly.toLocaleString()}/Semaine`;
		} else if (rates.nightly) {
			return `${rates.nightly.toLocaleString()}/Nuit`;
		}
	};

	const propertyDetails = [
		{
			label: "Chambres",
			value: beds,
			icon: FaBed,
		},
		{
			label: "Salle de bain",
			value: baths,
			icon: FaBath,
		},
		{
			label: "pi²",
			value: square_feet.toLocaleString(),
			icon: FaRulerCombined,
		},
	];

	return (
		<Link href={`/proprietes/${_id}`} className="h-[575px] md:h-[425px] rounded-none bg-white shadow-md relative group">
			<div className="overflow-hidden">
				<Image
					src={`/assets/images/proprietes/${images[0]}`}
					alt={name}
					className="w-full h-auto rounded-none object-cover group-hover:scale-105 transition duration-300"
					sizes="100vw"
					width={0}
					height={0}
				/>
				<div className="p-4">
					<div className="text-center mb-6">
						<div className="text-gray-600">{type}</div>
						<h3 className="md:text-xl text-2xl font-bold text-limegreen-600">{name}</h3>
					</div>
					<h3 className="absolute top-[10px] right-[10px] bg-limegreen-500 px-4 py-2 rounded-none text-marine-600 font-bold text-right md:text-center lg:text-right">
						${getRateDisplay()}
					</h3>

					<div className="flex justify-evenly text-gray-500 mb-4">
						{propertyDetails.map((detail, index) => {
							const Icon = detail.icon;
							return (
								<p key={index} className="flex items-center gap-1">
									<Icon className="text-2xl md:text-lg text-marine-700" />
									<span className="text-xl md:text-sm md:hidden lg:inline">{detail.value}</span>
									<span className="text-xl md:text-sm md:hidden lg:inline">{detail.label}</span>
								</p>
							);
						})}
					</div>

					<div className="border border-gray-200 mb-5"></div>

					<div className="flex flex-col lg:flex-row justify-center">
						<div className="flex align-middle justify-center gap-2 mb-4 lg:mb-0 items-center">
							<FaLocationDot className="fa-solid fa-location-dot text-lg text-limeGreen-600" />
							<span className="text-xl font-semibold text-limeGreen-600">
								{location.city}, {location.state}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProprietesCard;

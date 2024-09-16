import Link from "next/link";

const InfoBox = ({ heading, backgroundColor = "bg-gray-100", textColor = "text-gray-800", buttonInfo, children }) => {
	return (
		<div className={`${backgroundColor} p-6 rounded-none shadow-md`}>
			<h2 className={`${heading.textColor} text-3xl font-bold text-center md:text-start`}>{heading.text}</h2>
			<p className={`${textColor} mt-2 mb-4 font-medium text-medium  text-center md:text-start`}>{children}</p>
			<Link
				href={buttonInfo.link}
				className={`${buttonInfo.backgroundColor} ${buttonInfo.textColor} text-center md:text-start w-full md:w-fit inline-block rounded-none font-semibold px-4 py-2 hover:opacity-80 transition duration-300`}
			>
				{buttonInfo.text}
			</Link>
		</div>
	);
};
export default InfoBox;

import Logo from "@/components/logo";

const Footer = () => {
	return (
		<footer className="bg-marine-100 py-4 mt-6">
			<div className="container mx-auto flex flex-col items-center justify-between px-4">
				<div className="my-2">
					<Logo variant="stacked" color="marine" className="w-48 h-48" />
				</div>

				<div>
					<p className="text-sm text-gray-700 mt-2 md:mt-0 text-center font-medium ">
						Une création de{" "}
						<a
							className="text-marine-600 font-semibold hover:opacity-80 transition duration-300 hover:underline"
							target="_blank"
							href="https://yvanblanchette.com"
						>
							Yvan jr Blanchette
						</a>
					</p>
					<p className="text-sm text-gray-500 font-medium md:mt-0">&copy; Copyright {new Date().getFullYear()} | Next Horizons | Tous Droits Réservés.</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;

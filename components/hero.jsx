import HeroSearchForm from "@/components/hero-search-form";

const Hero = () => {
	return (
		<section className="bg-marine-800 py-20 mb-4">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
				<div className="text-center">
					<h1 className="text-3xl font-extrabold text-limegreen-500 md:text-5xl">Trouvez votre Location idéale !</h1>
					<p className="my-4 text-md md:text-xl text-white">Découvrez la propriété qui correspond à tous vos besoins.</p>
				</div>
				<div className="w-full">
					<HeroSearchForm />
				</div>
			</div>
		</section>
	);
};
export default Hero;

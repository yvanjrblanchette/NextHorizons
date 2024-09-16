import HeroSearchForm from "@/components/hero-search-form";
import { cn } from "@/lib/utils";

interface HeroProps {
	size: "small" | "large";
}

const Hero = ({ size }: HeroProps) => {
	return (
		<section className={cn("bg-marine-800 mb-4", size === "large" && "py-20", size === "small" && "py-10")}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
				{size === "large" && (
					<div className="text-center">
						<h1 className="text-3xl font-extrabold text-limegreen-500 md:text-5xl">Trouvez votre Location idéale !</h1>
						<p className="my-4 text-md md:text-xl text-white">Découvrez la propriété qui correspond à tous vos besoins.</p>
					</div>
				)}
				<div className="w-full">
					<HeroSearchForm />
				</div>
			</div>
		</section>
	);
};
export default Hero;

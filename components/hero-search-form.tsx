import { proprietesTypes } from "@/data/constants/hero";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HeroSearchForm = () => {
	return (
		<form className="mt-3 w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-4">
			<div className="w-full lg:ms-1">
				<label htmlFor="location" className="sr-only">
					Location
				</label>
				<input
					type="text"
					id="location"
					placeholder="Inscrire la localité (ville, province, code...)"
					className="w-full px-4 py-3 rounded-none bg-white text-gray-800 focus:outline-none focus:ring focus:ring-marine-500"
				/>
			</div>

			<div className="w-full">
				<Select>
					<SelectTrigger
						id="property-type"
						className="w-full px-4 py-3 rounded-none bg-white placeholder:text-gray-100 text-gray-800 focus:outline-none focus:ring"
					>
						<SelectValue placeholder="Types de Propriétés" />
					</SelectTrigger>
					<SelectContent>
						{proprietesTypes.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<Button size="lg" type="submit" className="lg:me-1 text-marine-700 font-bold tracking-wide">
				Recherche
			</Button>
		</form>
	);
};
export default HeroSearchForm;

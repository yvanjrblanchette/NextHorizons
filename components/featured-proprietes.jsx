"use client";

import ProprietesCard from "@/components/proprietes-card";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";
import Loader from "./loader";

const FeaturedProprietes = () => {
	// Fetch data using useQuery
	const proprietes = useQuery(api.proprietes.get);

	// Handle loading and error states
	if (!proprietes) {
		return (
			<div className="m-auto max-w-7xl my-24 px-6 flex justify-center items-center">
				<Loader />
			</div>
		);
	} else {
		// Log the data for debugging
		console.log(proprietes);
	}

	// Sort properties randomly and get the first 3
	const recentProprietes = proprietes.sort(() => Math.random() - Math.random()).slice(0, 3);

	return (
		<>
			<section className="py-6 mt-4">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-3xl md:text-5xl font-bold text-marine-700 mb-6 text-center">Nouvelles Propriétés</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{recentProprietes.map((proprietes) => (
							<ProprietesCard key={proprietes._id} {...proprietes} />
						))}
					</div>
				</div>
			</section>
			<section className="m-auto max-w-lg my-10 px-6">
				<Link
					href="proprietes"
					className="block bg-limegreen-500 text-marine-600 text-center font-bold tracking-wide py-4 px-6 rounded-none hover:opacity-80 transition duration-300"
				>
					Voir toutes les Propriétés
				</Link>
			</section>
		</>
	);
};

// Export the component
export default FeaturedProprietes;

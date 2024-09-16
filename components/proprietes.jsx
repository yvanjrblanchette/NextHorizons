"use client";

import ProprietesCard from "@/components/proprietes-card";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";
import Loader from "./loader";

const FullProprietes = () => {
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

	return (
		<>
			<section className="py-6 mt-4">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-3xl md:text-5xl font-bold text-marine-700 mb-6 text-center">Nouvelles Propriétés</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{proprietes.map((proprietes) => (
							<ProprietesCard key={proprietes._id} {...proprietes} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

// Export the component
export default FullProprietes;

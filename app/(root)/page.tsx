import Image from "next/image";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/info-boxes";
import FeaturedProprietes from "@/components/featured-proprietes";

export default function Home() {
	return (
		<>
			<Hero />
			<InfoBoxes />
			<FeaturedProprietes />
		</>
	);
}

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	variant: "stacked" | "long";
	color?: "white" | "marine";
	className?: string;
}

const Logo = ({ variant, color = "marine", className }: LogoProps) => {
	const logoColor = color === "white" ? "white" : "marine";
	const logoVariant = variant === "stacked" ? `nexthorizons_logo--stacked--${logoColor}.svg` : `nexthorizons_logo--long--${logoColor}.svg`;

	return (
		<Link className="flex items-center" href="/">
			<Image className={cn("h-16 w-auto", className)} width={1650} height={300} src={`/assets/images/${logoVariant}`} alt="Logo de NextHorizons" />
		</Link>
	);
};

export default Logo;

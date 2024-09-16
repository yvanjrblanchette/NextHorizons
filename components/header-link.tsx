import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentType } from "react";

interface HeaderLinkProps {
	label: string;
	href: string;
	icon?: ComponentType<React.SVGProps<SVGSVGElement>>;
	isActive?: boolean;
}

const HeaderLink = ({ label, href, icon: Icon, isActive }: HeaderLinkProps) => {
	return (
		<Link
			href={href}
			className={cn(
				"flex items-center gap-2 text-white hover:bg-limegreen-600 rounded-sm px-3 py-2 transition duration-300",
				isActive && "bg-limegreen-600 pointer-events-none"
			)}
		>
			{Icon && <Icon className="w-6 h-6" />}
			<span>{label}</span>
		</Link>
	);
};

export default HeaderLink;

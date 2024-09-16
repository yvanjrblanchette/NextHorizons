import { cn } from "@/lib/utils";
import { BiLoaderCircle } from "react-icons/bi";

const Loader = ({ className }: { className?: string }) => {
	return (
		<>
			<BiLoaderCircle className={cn("w-24 h-24 text-limegreen-500 animate-spin", className)} />
		</>
	);
};
export default Loader;

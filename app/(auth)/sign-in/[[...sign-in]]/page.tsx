import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="flex items-center justify-center h-full">
			<SignIn
				appearance={{
					elements: {
						logoImage: "w-[300px] h-[120px] mt-16",
						headerTitle: "pt-8 invisible",
						formButton: "bg-limegreen-500 hover:bg-limegreen-600 w-full",
						card: "",
						footer: "relative",
						footerPoweredBy: "hidden",
					},
				}}
			/>
		</div>
	);
}

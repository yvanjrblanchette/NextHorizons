import { UserButton, useUser } from "@clerk/nextjs";
import Loader from "@/components/loader";

const ClerkUserButton = () => {
	const { isSignedIn } = useUser();

	return (
		<>
			<UserButton
				appearance={{
					elements: {
						userButtonAvatarBox: "w-12 h-12 mt-1",
						userButtonPopoverFooter: "hidden",
						userProfileFooter: "hidden",
						popoverBox: "rounded-none",
					},
				}}
			/>
			{!isSignedIn && <Loader className="w-12 h-12 mt-1" />}
		</>
	);
};

export default ClerkUserButton;

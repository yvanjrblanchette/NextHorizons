import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { frFR } from "@clerk/localizations";
import { ThemeProvider } from "@/providers/theme-provider";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "NextHorizons",
	description: "Découvrez vos nouveaux horizons immobiliers!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider localization={frFR}>
			<html lang="fr_CA">
				<body className="overflow-x-hidden custom-scrollbar">
					<div className="w-screen overflow-x-hidden flex flex-col">
						<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
							<ConvexClientProvider>
								<Header />
								<main className="flex-1">{children}</main>
								<Footer />
							</ConvexClientProvider>
						</ThemeProvider>
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}

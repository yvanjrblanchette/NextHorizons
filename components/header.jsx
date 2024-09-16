"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logo";
import { UserButton, useUser } from "@clerk/nextjs";
import ClerkUserButton from "./clerk-user-button";
import { headerLinks } from "@/data/constants/header";
import { cn } from "@/lib/utils";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="bg-marine-800 border-b border-limegreen-500 ">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 z-50">
				<div className="flex h-24 items-center justify-between">
					<div className="flex items-center md:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							type="button"
							id="mobile-dropdown-button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none transition duration-300"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						>
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Menu Principal</span>
							<svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						</button>
					</div>

					{/* <!-- Logo --> */}
					<Logo variant="long" color="white" />
					{/* Desktop navigation menu */}
					<nav className="hidden md:ml-12 md:block pt-2">
						<ul className="flex space-x-2">
							{headerLinks.map((link) => {
								const isActive = pathname === link.href;
								const Icon = link.icon;
								return (
									<li key={link.label}>
										<Link
											href={link.href}
											className={cn(
												"flex items-center gap-2 text-white hover:bg-limegreen-600 hover:text-marine-700 font-semibold tracking-wide roundednone px-3 py-2 transition duration-300",
												isActive ? "bg-limegreen-600 text-marine-700 pointer-events-none" : "hover:bg-limegreen-600"
											)}
										>
											{Icon && <Icon className="w-6 h-6" />}
											<span>{link.label}</span>
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					{/* User button */}
					<ClerkUserButton asChild />
				</div>
			</div>

			{/* Mobile navigation menu  */}
			<nav
				id="mobile-menu"
				className={cn(
					"md:hidden z-40 bg-marine-800 overflow-hidden",
					isMobileMenuOpen ? "h-full opacity-100 transition-all ease-in-out duration-500" : "h-0 opacity-0 "
				)}
			>
				<ul className=" pb-3 pt-2">
					{headerLinks.map((link) => {
						const isActive = pathname === link.href;
						const Icon = link.icon;
						return (
							<li key={link.label}>
								<Link
									onClick={() => setIsMobileMenuOpen(false)}
									href={link.href}
									className={cn(
										"flex items-center gap-3 text-white font-semibols text-lg hover:bg-marine-900 hover:text-white border-l-4 border-marine-800 hover:border-limegreen-600 rounded-none px-6 py-4 transition-all duration-300",
										isActive && "bg-marine-900 border-l-4 border-limegreen-600 pointer-events-none"
									)}
								>
									{link.icon && <Icon className="w-6 h-6" />}
									{link.label}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
export default Header;

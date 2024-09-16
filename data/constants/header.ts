import { BsFillHouseAddFill, BsFillHouseFill, BsFillHousesFill, BsFillHouseDashFill } from "react-icons/bs";

export const headerLinks = [
	{
		label: "Accueil",
		href: "/",
		icon: BsFillHouseFill,
	},
	{
		label: "Propriétés",
		href: "/proprietes",
		icon: BsFillHousesFill,
	},
	{
		label: "Ajouter une Propriété",
		href: "/proprietes/ajouter",
		icon: BsFillHouseAddFill,
	},
];

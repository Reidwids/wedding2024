import Link from "next/link";
import React from "react";

export default function Header() {
	const routes = [
		{
			name: "Home",
			href: "#",
		},
		{
			name: "RSVP",
			href: "#",
		},
		{
			name: "Photos",
			href: "#",
		},
		{
			name: "Events",
			href: "#",
		},
		{
			name: "Travel",
			href: "#",
		},
		{
			name: "FAQ",
			href: "#",
		},
	];

	return (
		<div className={"w-full flex flex-col items-center mt-5"}>
			<div className="font-parisienne text-[72px] mb-3">Natasha & Derek</div>
			<div className="max-w-4xl w-full flex justify-between font-libreBaskerville text-[15px]">
				{routes.map((route) => (
					<Link href={route.href} className="group relative">
						<div>{route.name}</div>
						<div className="absolute bottom-0 left-0 h-[1px] block w-0 group-hover:w-full transition-all duration-500 bg-[#666]"></div>
					</Link>
				))}
			</div>
		</div>
	);
}

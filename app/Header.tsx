"use client";
import { Hamburger, Xmark } from "@/public/svgs";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const routes = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "RSVP",
			href: "/rsvp",
		},
		{
			name: "Photos",
			href: "/photos",
		},
		{
			name: "Events",
			href: "/events",
		},
		{
			name: "Travel",
			href: "/travel",
		},
		{
			name: "FAQ",
			href: "/faq",
		},
	];

	return (
		<div className={"w-full flex flex-col items-center justify-center relative mt-5 md:mt-10"}>
			<div className="font-parisienne text-4xl md:text-[72px]">Natasha & Derek</div>
			<div className=" hidden px-6 mt-8 max-w-4xl w-full md:flex justify-between font-lora text-[16px]">
				{routes.map((route) => (
					<Link href={route.href} className="group relative" key={route.name}>
						<div>{route.name}</div>
						<div className="absolute bottom-0 left-0 h-[1px] block w-0 group-hover:w-full transition-all duration-500 bg-[#666]"></div>
					</Link>
				))}
			</div>
			<div className="absolute left-3 top-0 md:hidden cursor-pointer rounded-md p-2" onClick={() => setIsOpen(!isOpen)}>
				<Hamburger isOpen={isOpen} w="11px" fill="black" />
				<Xmark isOpen={isOpen} w="11px" fill="black" />
			</div>
			{isOpen && (
				<div className="md:hidden absolute w-full top-10 flex flex-col bg-[#ffffffee] z-50 shadow-md ">
					{routes.map((route, i) => (
						<div key={route.name + i}>
							<Link
								href={route.href!}
								className="space-x-4 flex py-2 items-center px-4 transition-all"
								onClick={() => setIsOpen(!isOpen)}
							>
								{route.name}
							</Link>
							{i !== routes.length - 1 && <div className="w-full h-[1px] bg-[#ddd]"></div>}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Hamburger from "./components/Hamburger";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const routes = [
		{
			name: "Photos",
			href: "/photos",
			active: true,
		},
		{
			name: "RSVP",
			href: "/rsvp",
			active: false,
		},
		{
			name: "Events",
			href: "/events",
			active: false,
		},
		{
			name: "Travel",
			href: "/travel",
			active: false,
		},
		{
			name: "FAQ",
			href: "/faq",
			active: false,
		},
	];

	return (
		<div className={"w-full flex flex-row items-center justify-center relative py-6 md:py-5 font-bodoni z-50"}>
			<Hamburger onClick={() => setIsOpen(!isOpen)} style={{ position: "absolute", left: 20, top: 25 }} />
			<Link className="font-motherland text-[22px] md:text-3xl md:ml-8 md:mr-12 cursor-pointer whitespace-nowrap" href={"/"}>
				Natasha & Derek
			</Link>
			<div className=" hidden w-full md:flex text-[16px] space-x-8">
				{routes.map((route) => (
					<Link
						href={route.active ? route.href : "#"}
						style={{
							color: route.active ? "#000" : "#aaa",
							cursor: route.active ? "pointer" : "default",
						}}
						className="group relative  transition-all"
						key={route.name}
					>
						<div>{route.name}</div>
						{route.active && (
							<div className="absolute bottom-0 left-0 h-[1px] block w-0 group-hover:w-full transition-all duration-500 bg-[#666]" />
						)}
					</Link>
				))}
			</div>
			<div
				className="md:hidden absolute w-full top-14 flex flex-col bg-[#ffffffee] z-50 shadow-md "
				style={{
					height: isOpen ? `${routes.length * 41}px` : "0", // Adjust the height based on your content
					transition: "height 0.5s ease-in-out",
					overflow: "hidden",
				}}
			>
				{routes.map((route, i) => (
					<div key={route.name + i}>
						<Link
							href={route.active ? route.href : "#"}
							style={{
								color: route.active ? "#000" : "#aaa",
								cursor: route.active ? "pointer" : "default",
							}}
							className="space-x-4 flex py-2 items-center px-4 transition-all text-md"
							onClick={() => {
								document.getElementById("toggle")?.click();
								setIsOpen(false);
							}}
						>
							{route.name}
						</Link>
						{i !== routes.length - 1 && <div className="w-full h-[1px] bg-[#ddd]"></div>}
					</div>
				))}
			</div>
		</div>
	);
}

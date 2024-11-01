import TextDivider from "@/app/components/TextDivider";
import Image from "next/image";
import React from "react";

export default function FAQ() {
	const faqItems = [
		{
			q: "Should we bring a gift?",
			a: "Your presence is enough of a gift for us! Please do not feel obligated to get us anything - just come and have a great time with us!",
		},
		{
			q: "Where will the ceremony / reception be held?",
			a: "The reception will be held at the Gazebo near the Wedding Chapel. The reception will be in the Garden near the Convention Center. These locations are marked on the map below!",
		},
		{
			q: "Does the party end after the reception ends?",
			a: "No! Plan on hitting the discoteca after the reception comes to an end.",
		},
		{
			q: "How should we get updates and communicate with other guests?",
			a: "Please join the wedding whatsapp group by",
			link: "https://chat.whatsapp.com/GFhbgkVbtVJ1jOhw9ZasWj",
		},
		{
			q: "What is your wedding hashtag?",
			a: "#TsangReidasOnTheBeach",
		},
	];
	const items = [
		"Sunscreen",
		"Hat",
		"Sunglasses",
		"Bug repellant",
		"Immodium / Pepto",
		"Water shoes",
		"Comfortable running shoes (excursion)",
		"Reusable tumblr",
		"USD cash",
	];

	return (
		<div
			className="w-full flex flex-col items-center font-lora px-3 mb-5 text-md"
			style={{ boxShadow: "0 3px 3px #00000033 inset" }}
		>
			<div className="text-5xl mt-5 text-center font-roseritta">FAQ</div>
			<p className="max-w-2xl mt-5 text-center">
				Here you will find answers to commonly asked questions, as well as some general nice-to-knows.
			</p>
			<ul className="list-disc list-outside mt-3 mx-3 max-w-3xl bg-white">
				{faqItems.map((item) => (
					<li className="my-4">
						<span className="text-xl font-semibold">{item.q}</span>
						<br />
						<span>
							{item.a}
							{item.link && (
								<a href={item.link} className="underline opacity-70" target="_blank">
									{" "}
									clicking here!
								</a>
							)}
						</span>
					</li>
				))}
			</ul>

			<div className="text-4xl mt-12 md:mt-10 text-center font-roseritta">Items to Remember</div>
			<p className="max-w-2xl mt-5 text-center">Just a friendly reminder - some of the items below are easy to forget!</p>
			<ol className="list-disc mt-5">
				{items.map((i) => (
					<li key={i}>{i}</li>
				))}
			</ol>
			<TextDivider className={"mt-20"} />
			<div className="text-4xl mt-5 text-center font-roseritta">Resort Map</div>
			<p className="max-w-2xl mt-5 text-center">
				Find the locations of the ceremony and reception below - amongst other resort amenities.
			</p>
			<Image
				src="/map-IberostarParaiso-RivieraMaya.png"
				alt="resort map"
				width={1200}
				height={1600}
				className="mt-10 max-w-3xl w-full mx-5"
			/>
		</div>
	);
}

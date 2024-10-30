import TextDivider from "@/app/components/TextDivider";
import Image from "next/image";
import React from "react";

export default function Events() {
	return (
		<div className="w-full flex flex-col items-center font-lora px-3 " style={{ boxShadow: "0 3px 3px #00000033 inset" }}>
			<div className=" text-5xl mt-5 text-center font-roseritta">Events</div>
			<div className="text-md mt-5 max-w-3xl bg-white text-center">
				Find all of our special events and wedding week activities listed below. Make sure you join the{" "}
				<a href={"https://chat.whatsapp.com/GFhbgkVbtVJ1jOhw9ZasWj"} className="underline opacity-70" target="_blank">
					Whatsapp group
				</a>{" "}
				to ensure you're not missing any updates!
			</div>
			<Image
				src="/itinerary.png"
				alt="Wedding Itinerary"
				width={1200}
				height={1600}
				className="my-10 max-w-2xl w-full rounded-lg shadow-xl"
			/>
			<TextDivider />
			<div className="text-4xl mt-8 text-center font-roseritta">Iberostar App</div>
			<p className="max-w-2xl mt-5 text-center">
				Download the <strong>Iberostar app</strong>! You can log in with your room number and book restaurants - amongst
				other things like event information, maps, and restaurant menus.
			</p>
			<div className="flex justify-center gap-5 mt-10 mb-20 md:mb-20">
				<a href="https://play.google.com/store/apps/details?id=com.mo2o.iberostar&pcampaignid=web_share" target="_blank">
					<Image alt="Google Play Download" src="/playStoreButton.svg" width={150} height={150} className="cursor-pointer" />
				</a>
				<a href="https://apps.apple.com/us/app/iberostar-hotels-resort/id922530529" target="_blank">
					<Image alt="App Store Download" src="/appStoreButton.svg" width={150} height={150} className="cursor-pointer" />
				</a>
			</div>
		</div>
	);
}

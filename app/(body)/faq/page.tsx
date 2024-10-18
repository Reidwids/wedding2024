import TextDivider from "@/app/components/TextDivider";
import Image from "next/image";
import React from "react";

export default function FAQ() {
	return (
		<div
			className="w-full flex flex-col items-center font-lora px-3 mb-5 text-md"
			style={{ boxShadow: "0 3px 3px #00000033 inset" }}
		>
			<div className="text-5xl mt-5 text-center font-roseritta">FAQ</div>
			<ul className="list-disc list-outside mt-5 mx-3 max-w-3xl bg-white">
				<li className="my-4">
					<span className="text-xl font-semibold">Should we bring a gift?</span>
					<br />
					<span className="">
						Your presence is enough of a gift for us! Please do not feel obligated to get us anything - just come and have a
						great time with us!
					</span>
				</li>
				<li className="my-4">
					<span className="text-xl font-semibold">Where will the ceremony / reception be held?</span>
					<br />
					<span className="">The reception is tentative but the ceremony will be held outdoors at the resort.</span>
				</li>
				<li className="my-4">
					<span className=" text-xl font-semibold">What is your wedding hashtag?</span>
					<br />
					<span className="">#TsangReidasOnTheBeach</span>
				</li>
			</ul>
			<div className="text-4xl mt-5 text-center font-roseritta">Iberostar App</div>
			<p className="max-w-2xl mt-5 text-center">
				Download the <strong>Iberostar app</strong>! You can log in with your room number and book restaurants - amongst
				other things like event information, maps, and restaurant menus.
			</p>
			<div className="flex justify-center gap-5 my-10">
				<a href="https://play.google.com/store/apps/details?id=com.mo2o.iberostar&pcampaignid=web_share" target="_blank">
					<Image alt="Google Play Download" src="/playStoreButton.svg" width={150} height={150} className="cursor-pointer" />
				</a>
				<a href="https://apps.apple.com/us/app/iberostar-hotels-resort/id922530529" target="_blank">
					<Image alt="App Store Download" src="/appStoreButton.svg" width={150} height={150} className="cursor-pointer" />
				</a>
			</div>
			<div className="text-4xl mt-5 text-center font-roseritta">Wedding Photos</div>
			<p className="max-w-2xl mt-5 text-center">
				If you'd like to share any photos with us that you've collected throughout the trip, or see photos that others have
				uploaded - please click below!
			</p>
			<a
				href="https://drive.google.com/drive/folders/1OgD28HUr6Dqq8Af7RI_TGco-SPUDo7En?usp=sharing"
				target="_blank"
				className="w-40 h-12 border-black border-[2px] will-change-transform rounded-md flex items-center p-2 my-10"
			>
				<Image alt="Google Drive Upload" src="/googleDrive.svg" width={40} height={40} className="cursor-pointer" />
				<div className="flex flex-col">
					<div className="ml-3 text-xs font-semibold">Upload to</div>
					<div className="ml-3 text-sm font-bold">Google Drive</div>
				</div>
			</a>
			<TextDivider />
			<div className="text-4xl mt-5 text-center font-roseritta">Resort Map</div>
			<Image
				src="/map-IberostarParaiso-RivieraMaya.jpg"
				alt="resort map"
				width={1200}
				height={1600}
				className="mt-10 max-w-3xl w-full mx-5"
			/>
		</div>
	);
}

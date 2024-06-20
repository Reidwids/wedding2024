import React from "react";
import Image from "next/image";

export default function DressCode() {
	return (
		<div
			className="w-full flex flex-col items-center font-lora px-3 mb-5 text-md"
			style={{ boxShadow: "0 3px 3px #00000033 inset" }}
		>
			<h1 className="text-5xl mt-5 text-center font-roseritta">Dress code</h1>
			<div className="mt-5 max-w-3xl bg-white text-center">
				<div>
					We decided early on that we were not going to have traditional wedding parties to accompany us on our big day.
				</div>
				<div>
					Every single one of our friends and family who chose to travel to Mexico to celebrate our love and union we
					consider to be accompanying us in our wedding party.
				</div>
				<div>
					You are all significant to this experience - and therefore, we request that all of our guests dress with the same
					formality level and color palette detailed below the day of the wedding.
				</div>
				<div>
					<h1 className="text-3xl mt-5 text-center font-roseritta">Palette</h1>
					<div className="w-full flex justify-center mt-3">
						{["#A78749", "#E6E1CB", "#C1A888", "#ECEFF1", "#f7e7ce", "#E1C9A4", "#D1CEC2"].map((color, i) => (
							<div
								key={i}
								className="w-7 h-7 sm:w-10 sm:h-10  rounded-full mx-2 border-[1px] border-[#999]"
								style={{ backgroundColor: color }}
							/>
						))}
					</div>
				</div>
				<div>
					<h1 className="text-3xl mt-5 text-center font-roseritta">Men</h1>
					<div>
						A black, light grey, or tan colored suit jacket/blazer is encouraged, but considering the temperature can be
						skipped if you so choose. Neutral colored dress shirt and pants (black, white, tan, grey, etc) are encouraged -
						we do ask that guests do not wear t shirts or shorts though. Textures and unique materials are encouraged, as
						well as pocket squares, suspenders, ties, bowties, and/or any other accessories. We kindly request that you avoid
						patterns to maintain a cohesive and elegant aesthetic.
					</div>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-3xl mt-5 text-center font-roseritta">Women</h1>
					<div>
						A formal evening dress, a dressy cocktail dress, or a chic pantsuit in a light neutral color such as any shade of
						nude, sandy beige, or grey tones, champagnes, silvers and golds are encouraged. If you don't feel comfortable in
						a color, black is also acceptable. We kindly request that you avoid patterns to maintain a cohesive and elegant
						atmosphere.
					</div>
					<Image
						key={"selected-image"}
						src={"/dresses.png"}
						alt="Womens Dresses"
						width={300}
						height={400}
						className="px-5 py-5 max-w-lg w-full"
					/>
				</div>
			</div>
		</div>
	);
}

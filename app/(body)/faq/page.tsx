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
			<ul className="list-disc list-outside mt-5 max-w-3xl bg-white">
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
		</div>
	);
}

import TextDivider from "@/app/components/TextDivider";
import Image from "next/image";
import React from "react";

export default function FAQ() {
	return (
		<div className="max-w-4xl font-lora w-full ">
			<TextDivider />
			<div className="font-parisienne text-3xl md:text-4xl text-center">Frequently Asked Questions</div>
			<ul className="list-disc list-outside mx-5 max-w-4xl px-5">
				<li className="text-xl md:text-2xl my-4">
					<span className="font-bold font-parisienne">What is the dress code?</span>
					<br />
					<span className="text-sm md:text-lg">The dress code is semi-formal. Please no jeans or t-shirts.</span>
				</li>
				<li className="text-xl md:text-2xl my-4">
					<span className="font-bold font-parisienne">How long should we book out stay for?</span>
					<br />
					<span className="text-sm md:text-lg">
						We will be staying from Wednesday to Tuesday, and we suggest to book for the same period - but if you'd like to
						stay shorter feel free!
					</span>
				</li>
			</ul>
		</div>
	);
}

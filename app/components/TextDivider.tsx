import Image from "next/image";
import React from "react";

export default function TextDivider() {
	return (
		<div className="w-full flex justify-center">
			<Image
				alt="Text Divider"
				src="/textDividerDainty.svg"
				className="w-60 md:w-80 mt-2 mb-10 md:my-12"
				width={200}
				height={100}
			/>
		</div>
	);
}

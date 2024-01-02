import Image from "next/image";
import React from "react";

export default function TextDivider({ className }: { className?: string }) {
	return (
		<div className={"w-full flex justify-center " + className}>
			<Image alt="Text Divider" src="/textDividerDainty.svg" className="w-60 md:w-80 " width={200} height={100} />
		</div>
	);
}

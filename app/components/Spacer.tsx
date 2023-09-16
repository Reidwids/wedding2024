import React from "react";

export default function Spacer({ h }: { h: number | string }) {
	return (
		<div
			style={{
				height: `${h}px`,
			}}
		/>
	);
}

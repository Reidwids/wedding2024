import React, { CSSProperties, useEffect, useState } from "react";
import "./hamburger.css";

interface Props {
	onClick?: () => void;
	style?: CSSProperties;
}

export default function Hamburger({ style, onClick }: Props) {
	return (
		<div className="relative w-6 h-6 md:hidden" style={style}>
			<input
				id="toggle"
				type="checkbox"
				onClick={(e) => {
					e.stopPropagation();
					onClick?.();
				}}
			></input>

			<label htmlFor="toggle" className="hamburger cursor-pointer">
				<div className="top-bun"></div>
				<div className="meat mt-1.5"></div>
				<div className="bottom-bun mt-1.5"></div>
			</label>
		</div>
	);
}
